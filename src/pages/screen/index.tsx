/*
 * @文件描述:
 * @公司: thundersdata
 * @作者: 廖军
 * @Date: 2021-03-11 14:51:37
 * @LastEditors: 廖军
 * @LastEditTime: 2021-03-17 16:28:22
 */

import React, { useRef } from 'react';
import HandPose, { Predictions } from '@/components/HandPose';
import { getHandPoseStatus, screenHandPose, throttle } from '@/utils/handPose';
import Earth, { ChartCurrent } from '@/components/Earth';
import { getEarthFuncs } from '@/utils/interact';

export default () => {
  const chartRef = useRef<ChartCurrent>(null);

  const handlePoseChange = throttle((predictions: Predictions) => {
    const newPose = screenHandPose.recognize(getHandPoseStatus(predictions[0]));
    if (!chartRef.current?.myChart) {
      return;
    }
    const funcs = getEarthFuncs(chartRef.current?.myChart);
    // 策略
    const strategy: { [key: string]: Function } = {
      // 缩小
      close: () => funcs.zoomSub(),
      // 放大
      five: () => funcs.zoomAdd(),
      // 旋转
      ok: () => funcs.startRotate(),
      // 取消旋转
      good: () => funcs.stopRotate(),
      // 图例切换
      one: () => funcs.switchLegend('American Airlines'),
      two: () => funcs.switchLegend('Air China'),
      three: () => funcs.switchLegend('China Southern Airlines'),
      four: () => funcs.switchLegend('Delta Air Lines'),
      // 其他
      spiderMan: () => {},
    };
    strategy[newPose!]?.();
  }, 100);

  return (
    <div>
      <HandPose onChange={handlePoseChange} />
      <Earth ref={chartRef} style={{ height: '100vh' }} />
    </div>
  );
};
