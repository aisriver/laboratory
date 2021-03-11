/*
 * @文件描述:
 * @公司: thundersdata
 * @作者: 廖军
 * @Date: 2021-03-11 14:51:37
 * @LastEditors: 廖军
 * @LastEditTime: 2021-03-11 16:05:30
 */

import React, { useRef } from 'react';
import HandPose, { Predictions } from '@/components/HandPose';
import { getHandPoseStatus, screenHandPose, throttle } from '@/utils/handPose';
import Earth, { ChartCurrent } from '@/components/Earth';

export default () => {
  const chartRef = useRef<ChartCurrent>(null);
  const handlePoseChange = throttle((predictions: Predictions) => {
    const newPose = screenHandPose.recognize(getHandPoseStatus(predictions[0]));
    if (!chartRef.current?.myChart) {
      return;
    }
    const option: any = chartRef.current?.myChart.getOption();
    // 策略
    const strategy: { [key: string]: Function } = {
      // 缩小
      close: () => {
        option.globe[0].viewControl.distance += 50;
        chartRef.current?.myChart?.setOption({ globe: option.globe });
      },
      // 放大
      five: () => {
        option.globe[0].viewControl.distance -= 50;
        chartRef.current?.myChart?.setOption({ globe: option.globe });
      },
      // 旋转
      ok: () => {
        option.globe[0].viewControl.autoRotate = true;
        chartRef.current?.myChart?.setOption({ globe: option.globe });
      },
      // 取消旋转
      good: () => {
        option.globe[0].viewControl.autoRotate = false;
        chartRef.current?.myChart?.setOption({ globe: option.globe });
      },
      // 图例切换
      one: () => {
        chartRef.current?.myChart?.dispatchAction({
          type: 'legendToggleSelect',
          name: 'American Airlines',
        });
      },
      two: () => {
        chartRef.current?.myChart?.dispatchAction({
          type: 'legendToggleSelect',
          name: 'Air China',
        });
      },
      three: () => {
        chartRef.current?.myChart?.dispatchAction({
          type: 'legendToggleSelect',
          name: 'China Southern Airlines',
        });
      },
      four: () => {
        chartRef.current?.myChart?.dispatchAction({
          type: 'legendToggleSelect',
          name: 'Delta Air Lines',
        });
      },
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
