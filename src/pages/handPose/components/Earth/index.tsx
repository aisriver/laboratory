/*
 * @文件描述: 地球
 * @公司: thundersdata
 * @作者: 廖军
 * @Date: 2021-03-10 11:03:09
 * @LastEditors: 廖军
 * @LastEditTime: 2021-03-10 14:57:23
 */
import React, { forwardRef, useEffect } from 'react';
import * as echarts from 'echarts';
import 'echarts-gl';

const ROOT_PATH =
  'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples';
const data = require('./data.json');

export interface ChartCurrent extends HTMLDivElement {
  myChart: echarts.ECharts;
}

export default forwardRef<HTMLDivElement>(({}, ref) => {
  const chartRef = ref as React.RefObject<ChartCurrent>;
  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.myChart = echarts.init(chartRef.current);
      const airports = data.airports.map((item: number[]) => ({
        coord: [item[3], item[4]],
      }));
      const getAirportCoord = (idx: number) => {
        return [data.airports[idx][3], data.airports[idx][4]];
      };

      const routesGroupByAirline: { [key: string]: number[][] } = {};
      data.routes.forEach((route: number[]) => {
        const airline = data.airlines[route[0]];
        const airlineName: number = airline[0];
        if (!routesGroupByAirline[airlineName]) {
          routesGroupByAirline[airlineName] = [];
        }
        routesGroupByAirline[airlineName].push(route);
      });

      const pointsData: number[][] = [];
      data.routes.forEach((airline: number[]) => {
        pointsData.push(getAirportCoord(airline[1]));
        pointsData.push(getAirportCoord(airline[2]));
      });

      const series = data.airlines
        .map((airline: number[]) => {
          const airlineName = airline[0];
          const routes = routesGroupByAirline[airlineName];

          if (!routes) {
            return null;
          }
          return {
            type: 'lines3D',
            name: airlineName,

            effect: {
              show: true,
              trailWidth: 2,
              trailLength: 0.15,
              trailOpacity: 1,
              trailColor: 'rgb(30, 30, 60)',
            },

            lineStyle: {
              width: 1,
              color: 'rgb(50, 50, 150)',
              // color: 'rgb(118, 233, 241)',
              opacity: 0.1,
            },
            blendMode: 'lighter',

            data: routes.map(function(item) {
              return [airports[item[1]].coord, airports[item[2]].coord];
            }),
          };
        })
        .filter((series: object) => !!series);
      series.push({
        type: 'scatter3D',
        coordinateSystem: 'globe',
        blendMode: 'lighter',
        symbolSize: 2,
        itemStyle: {
          color: 'rgb(50, 50, 150)',
          opacity: 0.2,
        },
        data: pointsData,
      });

      chartRef.current.myChart.setOption({
        legend: {
          selectedMode: 'single',
          left: 'left',
          data: Object.keys(routesGroupByAirline),
          orient: 'vertical',
          textStyle: {
            color: '#fff',
          },
        },
        globe: {
          environment: ROOT_PATH + '/data-gl/asset/starfield.jpg',

          heightTexture:
            ROOT_PATH + '/data-gl/asset/bathymetry_bw_composite_4k.jpg',

          displacementScale: 0.1,
          displacementQuality: 'high',

          baseColor: '#000',

          shading: 'realistic',
          realisticMaterial: {
            roughness: 0.2,
            metalness: 0,
          },

          postEffect: {
            enable: true,
            depthOfField: {
              enable: false,
              focalDistance: 150,
            },
          },
          temporalSuperSampling: {
            enable: true,
          },
          light: {
            ambient: {
              intensity: 0,
            },
            main: {
              intensity: 0.1,
              shadow: false,
            },
            ambientCubemap: {
              texture: ROOT_PATH + '/data-gl/asset/lake.hdr',
              exposure: 1,
              diffuseIntensity: 0.5,
              specularIntensity: 2,
            },
          },
          viewControl: {
            autoRotate: false,
            distance: 150,
            minDistance: 40,
            maxDistance: 400,
          },
          silent: true,
        },
        series: series,
      });
    }
  }, [chartRef.current]);

  return <div style={{ width: '100vw', height: '400px' }} ref={chartRef} />;
});
