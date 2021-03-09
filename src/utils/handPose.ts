/*
 * @文件描述:
 * @公司: thundersdata
 * @作者: 廖军
 * @Date: 2021-03-08 16:08:42
 * @LastEditors: 廖军
 * @LastEditTime: 2021-03-09 17:07:37
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
    },
    indexFinger: {
      angles: iAngles,
    },
    middleFinger: {
      angles: mAngles,
    },
    ringFinger: {
      angles: rAngles,
    },
    pinky: {
      angles: pAngles,
    },
  };
};
