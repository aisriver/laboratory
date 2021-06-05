/*
 * @文件描述: 大屏布局生成算法
 * @作者: 廖军
 * @Date: 2021-04-13 23:26:24
 * @LastEditors: 廖军
 * @LastEditTime: 2021-04-19 14:52:56
 */

/**
 * 指定区间随机数
 * @param min
 * @param max
 */
export const randomIndex = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

/**
 * 主组件面积如果为单数，且不为3或1，则减1（需要构成方形面积）
 * @param area
 * @returns
 */
export const areaCorrection = (area: number) => {
  if (area % 2 !== 0 && ![1, 3].includes(area)) {
    area = area - 1;
  }
  return area;
};

export interface PointGroup {
  x: number;
  y: number;
}

/**
 * 获取两个坐标构成的面积
 * @param p1
 * @param p2
 * @returns
 */
export const getArea = (p1: PointGroup, p2: PointGroup) =>
  (Math.abs(p2.x - p1.x) + 1) * (Math.abs(p2.y - p1.y) + 1);

/**
 * 获取尺寸
 * @param p1
 * @param p2
 * @returns
 */
export const getSize = (p1: PointGroup, p2: PointGroup) => ({
  width: Math.abs(p2.x - p1.x) + 1,
  height: Math.abs(p2.y - p1.y) + 1,
});

/**
 * 随机组件
 * @param arr
 * @param area
 * @param componentIndex
 */
export const randomComponent = (
  arr: number[][],
  area: number,
  componentIndex: number,
) => {
  /**
   * 确定y
   */
  const usableYIndex: number[] = [];
  arr.forEach((item, index) => {
    if (item.some(num => num === null)) {
      usableYIndex.push(index);
    }
  });
  if (usableYIndex.length === 0) {
    return null;
  }
  const y = usableYIndex[randomIndex(0, usableYIndex.length - 1)];
  /**
   * 确定x
   */
  const usableXIndex: number[] = [];
  arr[y].forEach((num, index) => {
    if (num === null) {
      usableXIndex.push(index);
    }
  });
  const x = usableXIndex[randomIndex(0, usableXIndex.length - 1)];
  const startGroup: PointGroup = { x, y };
  arr[y][x] = componentIndex;
  if (area === 1) {
    return { start: startGroup, end: startGroup, area, actualArea: area };
  }

  let lastGroup = startGroup;
  // 循环找到lastGroup
  let loopIndex = 0;
  while (getArea(startGroup, lastGroup) < area && loopIndex < 20) {
    const { x, y } = lastGroup;
    const yOffset = lastGroup.y - startGroup.y;
    const xOffset = lastGroup.x - startGroup.x;
    const height = Math.abs(yOffset) + 1;
    const width = Math.abs(xOffset) + 1;
    const currentArea = width * height;
    /**
     * 确定方向（下一个位置）
     */
    const usableNextIndexGroup: {
      x: number;
      y: number;
      correct: () => void;
    }[] = [];
    /**
     * 左移
     * 0 / x
     * 1 1 x
     * 0 0 x
     */
    if (
      Array.from({ length: height }).every(
        (_, ind) => arr[yOffset < 0 ? y + ind : y - ind]?.[x - 1] === null,
      ) &&
      currentArea + height <= area &&
      x - 1 >= 0
    ) {
      usableNextIndexGroup.push({
        x: x - 1,
        y,
        correct: () => {
          Array.from({ length: height }).forEach((_, ind) => {
            arr[yOffset < 0 ? y + ind : y - ind][x - 1] = componentIndex;
          });
        },
      });
    }
    /**
     * 右移
     * x / 0
     * x 1 1
     * x 0 0
     */
    if (
      Array.from({ length: height }).every(
        (_, ind) => arr[yOffset < 0 ? y + ind : y - ind]?.[x + 1] === null,
      ) &&
      currentArea + height <= area
    ) {
      usableNextIndexGroup.push({
        x: x + 1,
        y,
        correct: () => {
          Array.from({ length: height }).forEach((_, ind) => {
            arr[yOffset < 0 ? y + ind : y - ind][x + 1] = componentIndex;
          });
        },
      });
    }
    /**
     * 上移
     * 0 1 0
     * / 1 0
     * x x x
     */
    if (
      Array.from({ length: width }).every(
        (_, ind) => arr[y - 1]?.[xOffset < 0 ? x + ind : x - ind] === null,
      ) &&
      currentArea + width <= area &&
      y - 1 >= 0
    ) {
      usableNextIndexGroup.push({
        x,
        y: y - 1,
        correct: () => {
          Array.from({ length: width }).forEach((_, ind) => {
            arr[y - 1][xOffset < 0 ? x + ind : x - ind] = componentIndex;
          });
        },
      });
    }
    /**
     * 下移
     * x x x
     * / 1 0
     * 0 1 0
     */
    if (
      Array.from({ length: width }).every(
        (_, ind) => arr[y + 1]?.[xOffset < 0 ? x + ind : x - ind] === null,
      ) &&
      currentArea + width <= area
    ) {
      usableNextIndexGroup.push({
        x,
        y: y + 1,
        correct: () => {
          Array.from({ length: width }).forEach((_, ind) => {
            arr[y + 1][xOffset < 0 ? x + ind : x - ind] = componentIndex;
          });
        },
      });
    }
    if (usableNextIndexGroup.length === 0) {
      return {
        start: startGroup,
        end: lastGroup,
        area,
        actualArea: getArea(startGroup, lastGroup),
      };
    }
    const { correct, ...rest } = usableNextIndexGroup[
      randomIndex(0, usableNextIndexGroup.length - 1)
    ];
    lastGroup = rest;
    // 执行arr更新
    correct();
    loopIndex += 1;
  }
  return {
    start: startGroup,
    end: lastGroup,
    area,
    actualArea: getArea(startGroup, lastGroup),
  };
};

export interface RandomLayoutParams {
  // 组件数量
  componentNumber: number;
  // 主要组件数量
  mainComponentNumber: number;
  // 布局比例
  layoutRate?: number;
}

export interface RandomLayoutResult {
  grids: number[][];
  layouts: ({
    start: PointGroup;
    end: PointGroup;
    area: number;
    actualArea: number;
  } | null)[];
  width: number;
  height: number;
}

/**
 * 随机生成大屏布局
 * @param params
 * @returns
 */
export const randomLayout = (params: RandomLayoutParams) => {
  const { componentNumber, mainComponentNumber, layoutRate = 1.77 } = params;
  if (mainComponentNumber > componentNumber) {
    throw new Error('componentNumber must be greater than mainComponentNumber');
  }
  /**
   * 根据布局比例生成栅格
   */
  let area = componentNumber * 4;
  const widthGrid = +(area / Math.sqrt(area / layoutRate)).toFixed();
  const heightGrid = +Math.sqrt(area / layoutRate).toFixed();
  area = widthGrid * heightGrid;
  // 构建布局网格
  const layoutArr = Array.from({ length: heightGrid }).map(() =>
    new Array(widthGrid).fill(null),
  );
  /**
   * 随机布局
   */
  const mainArea = areaCorrection(
    randomIndex(Math.floor(area / 4), Math.floor(area / 2)),
  );
  let currentArea = area;
  const res = [];
  for (let i = 0; i < componentNumber; i += 1) {
    if (i <= mainComponentNumber) {
      const info = randomComponent(layoutArr, areaCorrection(mainArea - i), i);
      currentArea = currentArea - (info?.actualArea || 0);
      res.push(info);
    } else {
      const average = currentArea / (componentNumber - i);
      const info = randomComponent(
        layoutArr,
        areaCorrection(randomIndex(Math.floor(average), Math.ceil(average))),
        i,
      );
      currentArea = currentArea - (info?.actualArea || 0);
      res.push(info);
    }
  }
  return {
    layouts: res,
    grids: layoutArr,
    width: widthGrid,
    height: heightGrid,
  } as RandomLayoutResult;
};
