/*
 * @文件描述:
 * @公司: thundersdata
 * @作者: 廖军
 * @Date: 2021-03-08 16:08:42
 * @LastEditors: 廖军
 * @LastEditTime: 2021-03-10 10:42:18
 */

import { AnnotatedPrediction } from '@tensorflow-models/handpose';

export interface Position {
  x: number;
  y: number;
  z: number;
}

/**
 * 求空间2个坐标之间的距离 d=sqrt((x1−x2)2+(y1−y2)2+(z1−z2)2)
 * @param p1
 * @param p2
 */
export const getEuclideanDistance = (p1: Position, p2: Position) =>
  Math.sqrt(
    Math.pow(p1.x - p2.x, 2) +
      Math.pow(p1.y - p2.y, 2) +
      Math.pow(p1.z - p2.z, 2),
  );

export interface SpaceTriangleAngleProps {
  p1: Position;
  p2: Position;
  p3: Position;
  getAll?: boolean;
}

/**
 * 获取空间三角形每个角的角度 cosA＝(b^2+c^2-a^2)/2bc a代表对边
 * @param param0
 */
export const getSpaceTriangleAngle = ({
  p1,
  p2,
  p3,
  getAll,
}: SpaceTriangleAngleProps) => {
  const a = getEuclideanDistance(p2, p3);
  const b = getEuclideanDistance(p1, p2);
  const c = getEuclideanDistance(p1, p3);
  const p2Angle =
    Math.acos(
      (Math.pow(b, 2) + Math.pow(a, 2) - Math.pow(c, 2)) / (2 * b * a),
    ) *
    (180 / Math.PI);
  // 减少计算量
  if (!getAll) {
    return {
      default: p2Angle,
    };
  }
  return {
    p1:
      Math.acos(
        (Math.pow(b, 2) + Math.pow(c, 2) - Math.pow(a, 2)) / (2 * b * c),
      ) *
      (180 / Math.PI),
    p2: p2Angle,
    p3:
      Math.acos(
        (Math.pow(a, 2) + Math.pow(c, 2) - Math.pow(b, 2)) / (2 * a * c),
      ) *
      (180 / Math.PI),
    default: p2Angle,
  };
};

/**
 * 坐标格式化
 * @param arr
 */
export const formatPosition = (arr: number[]) => {
  const [x, y, z] = arr;
  return {
    x,
    y,
    z,
  };
};

/**
 * 格式化位置信息
 * @param data
 */
export const formatPositions = (data: number[][]) => {
  const res: Position[] = [];
  data.forEach(arr => {
    res.push(formatPosition(arr));
  });
  return res;
};

/**
 * 手指状态
 */
export interface FingerStatus {
  angles: number[];
  isClose: boolean;
}

/**
 * 手势状态
 */
export interface HandPoseStatus {
  thumb: FingerStatus;
  indexFinger: FingerStatus;
  middleFinger: FingerStatus;
  ringFinger: FingerStatus;
  pinky: FingerStatus;
}

/**
 *
 * @param data 获取手势状态
 */
export const getHandPoseStatus = (data: AnnotatedPrediction) => {
  const {
    thumb,
    indexFinger,
    middleFinger,
    ringFinger,
    pinky,
    palmBase,
  } = data.annotations;
  const base = formatPosition(palmBase[0]);
  const [t1, t2, t3, t4] = formatPositions(thumb);
  const [i1, i2, i3, i4] = formatPositions(indexFinger);
  const [m1, m2, m3, m4] = formatPositions(middleFinger);
  const [r1, r2, r3, r4] = formatPositions(ringFinger);
  const [p1, p2, p3, p4] = formatPositions(pinky);
  // 计算手指关键点的角度，获取手指弯曲程度
  const tAngles = [
    getSpaceTriangleAngle({ p1: base, p2: t1, p3: t2 }).default,
    getSpaceTriangleAngle({ p1: t1, p2: t2, p3: t3 }).default,
    getSpaceTriangleAngle({ p1: t2, p2: t3, p3: t4 }).default,
  ];
  const iAngles = [
    getSpaceTriangleAngle({ p1: base, p2: i1, p3: i2 }).default,
    getSpaceTriangleAngle({ p1: i1, p2: i2, p3: i3 }).default,
    getSpaceTriangleAngle({ p1: i2, p2: i3, p3: i4 }).default,
  ];
  const mAngles = [
    getSpaceTriangleAngle({ p1: base, p2: m1, p3: m2 }).default,
    getSpaceTriangleAngle({ p1: m1, p2: m2, p3: m3 }).default,
    getSpaceTriangleAngle({ p1: m2, p2: m3, p3: m4 }).default,
  ];
  const rAngles = [
    getSpaceTriangleAngle({ p1: base, p2: r1, p3: r2 }).default,
    getSpaceTriangleAngle({ p1: r1, p2: r2, p3: r3 }).default,
    getSpaceTriangleAngle({ p1: r2, p2: r3, p3: r4 }).default,
  ];
  const pAngles = [
    getSpaceTriangleAngle({ p1: base, p2: p1, p3: p2 }).default,
    getSpaceTriangleAngle({ p1: p1, p2: p2, p3: p3 }).default,
    getSpaceTriangleAngle({ p1: p2, p2: p3, p3: p4 }).default,
  ];

  return {
    thumb: {
      angles: tAngles,
      // 通过弯曲角度判断手指是否是闭合状态
      isClose: tAngles[2] <= 160,
    },
    indexFinger: {
      angles: iAngles,
      isClose: iAngles[1] <= 150,
    },
    middleFinger: {
      angles: mAngles,
      isClose: mAngles[1] <= 140,
    },
    ringFinger: {
      angles: rAngles,
      isClose: rAngles[1] <= 140,
    },
    pinky: {
      angles: pAngles,
      isClose: pAngles[1] <= 140,
    },
  } as HandPoseStatus;
};

export interface RegisterHandPose {
  name: string;
  closeStatus: boolean[]; // thumb indexFinger middleFinger ringFinger pinky
}

export class HandPoseCustom {
  private pose: RegisterHandPose[] = [];
  /**
   * 注册手势
   * @param data
   */
  public registerHandPose = (data: RegisterHandPose[]) => {
    this.pose = data;
  };
  public recognize = (data: HandPoseStatus) => {
    const { thumb, indexFinger, middleFinger, ringFinger, pinky } = data;
    const currentPose = [
      thumb.isClose,
      indexFinger.isClose,
      middleFinger.isClose,
      ringFinger.isClose,
      pinky.isClose,
    ];
    return this.pose.find(
      item => JSON.stringify(item.closeStatus) === JSON.stringify(currentPose),
    )?.name;
  };
}

/**
 * 注册一组大屏手势
 */
export const screenHandPose = new HandPoseCustom();
screenHandPose.registerHandPose([
  { name: 'ok', closeStatus: [true, true, false, false, false] },
  { name: 'one', closeStatus: [true, false, true, true, true] },
  { name: 'two', closeStatus: [true, false, false, true, true] },
  { name: 'three', closeStatus: [true, false, false, false, true] },
  { name: 'four', closeStatus: [true, false, false, false, false] },
  { name: 'five', closeStatus: [false, false, false, false, false] },
  { name: 'six', closeStatus: [false, true, true, true, false] },
  { name: 'spiderMan', closeStatus: [false, false, true, true, false] },
  { name: 'eight', closeStatus: [false, false, true, true, true] },
  { name: 'fuc*', closeStatus: [false, false, true, false, false] },
  { name: 'close', closeStatus: [true, true, true, true, true] },
  { name: 'good', closeStatus: [false, true, true, true, true] },
]);
