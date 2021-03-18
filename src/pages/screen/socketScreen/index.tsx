/*
 * @文件描述:
 * @公司: thundersdata
 * @作者: 廖军
 * @Date: 2021-03-17 16:10:14
 * @LastEditors: 廖军
 * @LastEditTime: 2021-03-17 17:03:04
 */

import React, { useEffect, useRef } from 'react';
import Earth, { ChartCurrent } from '@/components/Earth';
import { getEarthFuncs, eventCenter } from '@/utils/interact';

export default () => {
  const chartRef = useRef<ChartCurrent>(null);

  useEffect(() => {
    if (chartRef.current) {
      const funcs = getEarthFuncs(chartRef.current?.myChart);
      Object.keys(funcs).forEach(key => {
        eventCenter.register({ code: 'testCode', key, fn: funcs[key] });
      });
    }
  }, [chartRef.current]);

  return (
    <div>
      <Earth ref={chartRef} style={{ height: '100vh' }} />
    </div>
  );
};
