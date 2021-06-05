/*
 * @文件描述:
 * @作者: 廖军
 * @Date: 2021-04-18 16:39:33
 * @LastEditors: 廖军
 * @LastEditTime: 2021-04-19 14:55:03
 */
import chartDarkImages from '../pages/randomLayout/data/echarts-dark';
import chartLightImages from '../pages/randomLayout/data/echarts-light';
import { randomIndex } from './layout';

const themeImages = {
  dark: chartDarkImages,
  light: chartLightImages,
};

/**
 * 根据主题随机获取chart image
 * @param theme
 * @returns
 */
export const randomChartImage = (theme: 'dark' | 'light') => {
  const configs = themeImages[theme];
  const typeIndex = randomIndex(0, configs.length - 1);
  const childIndex = randomIndex(0, configs[typeIndex].children.length - 1);
  const { type } = configs[typeIndex].children[childIndex];
  const [chartType, themeType] = type.split('&');
  return `https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data${
    themeType === 'gl' ? '-gl' : ''
  }/thumb${
    theme === 'dark' ? '-dark' : ''
  }/${chartType}.webp?_v_=1612615474746`;
};
