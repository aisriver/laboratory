/*
 * @文件描述:
 * @公司: thundersdata
 * @作者: 廖军
 * @Date: 2021-03-11 17:47:17
 * @LastEditors: 廖军
 * @LastEditTime: 2021-03-17 17:01:31
 */

import * as echarts from 'echarts';

// 事件名 传参
// 注册自定义事件？事件执行后平板要不要收到反馈？平板布局需要与大屏一致吗？注册的事件，比如按钮是否要在大屏显示？
// 大屏需要有个统一事件处理中心(发布订阅)，需要做交互的组件把事件注册进去
// 事件注册过程，需要与接口同步

export interface InteractType {
  label: string;
  name: string;
  type: string;
  options?: { label: string; value: string }[];
}

/**
 * 场景
 * 1、在输入框查询；
 * 2、点击切换图表数据；
 */
export const screenInteract = {
  name: 'xxx大屏',
  code: 'testCode',
  interacts: [
    {
      label: '切换图例',
      name: 'switchLegend',
      type: 'select',
      options: [
        {
          label: 'American Airlines',
          value: 'American Airlines',
        },
        {
          label: 'Air China',
          value: 'Air China',
        },
        {
          label: 'China Southern Airlines',
          value: 'China Southern Airlines',
        },
        {
          label: 'Delta Air Lines',
          value: 'Delta Air Lines',
        },
      ],
    },
    {
      label: '放大',
      name: 'zoomAdd',
      type: 'button',
    },
    {
      label: '缩小',
      name: 'zoomSub',
      type: 'button',
    },
    {
      label: '开始旋转',
      name: 'startRotate',
      type: 'button',
    },
    {
      label: '停止旋转',
      name: 'stopRotate',
      type: 'button',
    },
  ],
};

/**
 * 控制传参示例
 */
const payload = {
  code: 'a',
  name: 'switchLegend',
  args: ['American Airlines'],
};

/**
 * 获取地球控制的方法
 * @param chart
 * @returns
 */
export const getEarthFuncs = (chart: echarts.ECharts) => {
  const option: any = chart.getOption();
  return {
    switchLegend: (name: string) =>
      chart?.dispatchAction({
        type: 'legendToggleSelect',
        name: name,
      }),
    zoomAdd: () => {
      option.globe[0].viewControl.distance -= 50;
      chart?.setOption({ globe: option.globe });
    },
    zoomSub: () => {
      option.globe[0].viewControl.distance += 50;
      chart?.setOption({ globe: option.globe });
    },
    startRotate: () => {
      option.globe[0].viewControl.autoRotate = true;
      chart?.setOption({ globe: option.globe });
    },
    stopRotate: () => {
      option.globe[0].viewControl.autoRotate = false;
      chart?.setOption({ globe: option.globe });
    },
  } as { [key: string]: Function };
};

/**
 * 大屏事件中心
 */
class EventCenter {
  private events: { [key: string]: { [code: string]: Function } } = {};
  public register = ({
    code,
    key,
    fn,
  }: {
    code: string;
    key: string;
    fn: Function;
  }) => {
    this.events[code] = this.events[code] || {};
    this.events[code][key] = fn;
  };
  public unregister = (code: string, key: string) => {
    if (this.events[code]) {
      delete this.events[code][key];
    }
  };
  public getEvent = (code: string, key: string) => this.events[code]?.[key];
}

export const eventCenter = new EventCenter();
