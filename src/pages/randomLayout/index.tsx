/*
 * @文件描述:
 * @作者: 廖军
 * @Date: 2021-04-16 15:57:34
 * @LastEditors: 廖军
 * @LastEditTime: 2021-04-19 14:54:04
 */
import React, { useState } from 'react';
import {
  getSize,
  randomIndex,
  randomLayout,
  RandomLayoutResult,
} from '@/utils/layout';
import {
  red,
  volcano,
  gold,
  yellow,
  lime,
  green,
  cyan,
  blue,
  geekblue,
  purple,
  magenta,
  grey,
} from '@ant-design/colors';
import { randomChartImage } from '@/utils/chart';

const primaryColors = [
  red[8],
  volcano[8],
  gold[8],
  yellow[8],
  lime[8],
  green[8],
  cyan[8],
  blue[8],
  geekblue[8],
  purple[8],
  magenta[8],
  grey[8],
];

export default () => {
  const [config, setConfig] = useState<RandomLayoutResult>({
    grids: [],
    layouts: [],
    width: 1,
    height: 1,
  });
  const [showGrid, setShowGrid] = useState(false);

  /**
   * 更新布局
   * @param index
   */
  const updateLayout = (index: number = 0) => {
    const res = randomLayout({
      componentNumber: 10,
      mainComponentNumber: 2,
    });
    index += 1;
    if (
      res.grids.some(item =>
        item.some(num => num === null || num === undefined),
      ) &&
      // 如果尝试20次以上没有最佳布局，则显示当前布局
      index <= 20
    ) {
      updateLayout(index);
    } else {
      console.log('layouts', res.layouts);
      setConfig(res);
    }
  };

  /**
   * 显示格子分布
   * @returns
   */
  const renderWithGrid = () => (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {config.grids.map((item, index) => (
        <div key={index} style={{ display: 'flex', height: '100%' }}>
          {item.map((num, ind) => (
            <div
              style={{
                width: '100%',
                height: '100%',
                border: '1px solid #333',
                display: 'inline-block',
                textAlign: 'center',
                fontSize: 18,
                color: 'white',
                backgroundColor: primaryColors[num] || 'gray',
              }}
              key={`${num}-${ind}`}
            >
              {num}
            </div>
          ))}
        </div>
      ))}
    </div>
  );

  /**
   * 查看布局
   * @returns
   */
  const renderWithLayout = () => {
    const inTop = Math.random() > 0.5;
    const algins = ['center', 'left', 'right'];
    const titleDom = (
      <div
        style={
          {
            color: '#00BBFF',
            fontSize: 32,
            fontWeight: 'bold',
            textAlign: algins[randomIndex(0, algins.length - 1)],
            height: 72,
            padding: 4,
          } as React.CSSProperties
        }
      >
        xxxxxxx大屏
      </div>
    );
    return (
      <div
        style={{
          width: '100vw',
          height: '100vh',
          backgroundColor: 'rgb(5, 0, 37)',
          padding: 12,
        }}
      >
        {inTop && titleDom}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: 'calc(100% - 80px)',
          }}
        >
          {config.layouts
            .filter(item => !!item)
            .map((item, index) => {
              const { start, end } = item!;
              const { width, height } = getSize(start, end);
              return (
                <div
                  style={{
                    position: 'absolute',
                    padding: 4,
                    width: `calc(${(width / config.width) * 100}% - 8px)`,
                    height: `calc(${(height / config.height) * 100}% - 8px)`,
                    top: `${(Math.min(start.y, end.y) / config.height) * 100}%`,
                    left: `${(Math.min(start.x, end.x) / config.width) * 100}%`,
                  }}
                  key={index}
                >
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      border: '1px solid #302c4a',
                      //   backgroundColor: primaryColors[index] || 'gray',
                      backgroundColor: '#100c2b',
                      color: '#fff',
                    }}
                  >
                    <div
                      style={{
                        height: 32,
                        padding: 4,
                        backgroundColor: '#07022b',
                      }}
                    >
                      标题：{index}
                    </div>
                    <img
                      style={{ height: 'calc(100% - 40px)', width: '100%' }}
                      src={randomChartImage('dark')}
                    />
                  </div>
                </div>
              );
            })}
        </div>
        {!inTop && titleDom}
      </div>
    );
  };

  return (
    <div>
      <button onClick={() => updateLayout()}>随机生成大屏布局</button>
      <button
        style={{ marginLeft: 16 }}
        onClick={() => setShowGrid(visible => !visible)}
      >
        {showGrid ? '显示布局' : '显示格子分布'}
      </button>
      {showGrid ? renderWithGrid() : renderWithLayout()}
    </div>
  );
};
