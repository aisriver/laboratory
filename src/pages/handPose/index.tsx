/*
 * @文件描述:
 * @公司: thundersdata
 * @作者: 廖军
 * @Date: 2021-03-09 13:45:36
 * @LastEditors: 廖军
 * @LastEditTime: 2021-03-10 17:03:18
 */

import React, { useEffect, useRef, useState } from 'react';
import * as echarts from 'echarts';
import * as handpose from '@tensorflow-models/handpose';
import { ScatterGL } from 'scatter-gL';
import { Points } from 'scatter-gL/dist/index';
import '@tensorflow/tfjs-backend-webgl';
import { getHandPoseStatus, screenHandPose, throttle } from '@/utils/handPose';
import Earth, { ChartCurrent } from './components/Earth';
import styles from './index.less';

require('@tensorflow/tfjs-backend-webgl');

const VIDEO_WIDTH = 640;
const VIDEO_HEIGHT = 500;
const renderPointcloud = true;
let videoWidth: number,
  videoHeight: number,
  rafID: number,
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  ANCHOR_POINTS: number[][],
  scatterGLHasInitialized = false,
  scatterGL: ScatterGL,
  fingerLookupIndices: { [key: string]: number[] } = {
    thumb: [0, 1, 2, 3, 4],
    indexFinger: [0, 5, 6, 7, 8],
    middleFinger: [0, 9, 10, 11, 12],
    ringFinger: [0, 13, 14, 15, 16],
    pinky: [0, 17, 18, 19, 20],
  };

export default () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const outputRef = useRef<HTMLCanvasElement>(null);
  const scatterRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<ChartCurrent>(null);
  const [pose, setPose] = useState<string>();

  const setupCamera = async () => {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      throw new Error(
        'Browser API navigator.mediaDevices.getUserMedia not available',
      );
    }

    const video = videoRef.current!;
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: false,
      video: {
        facingMode: 'user',
        width: VIDEO_WIDTH,
        height: VIDEO_HEIGHT,
      },
    });
    video.srcObject = stream;

    return new Promise(resolve => {
      video.onloadedmetadata = () => {
        resolve(video);
      };
    });
  };

  function drawPoint(y: number, x: number, r: number) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fill();
  }

  function drawKeypoints(keypoints: number[][]) {
    for (let i = 0; i < keypoints.length; i++) {
      const y = keypoints[i][0];
      const x = keypoints[i][1];
      drawPoint(x - 2, y - 2, 3);
    }

    Object.keys(fingerLookupIndices).forEach(key => {
      const points = fingerLookupIndices[key].map(idx => keypoints[idx]);
      drawPath(points, false);
    });
  }

  function drawPath(points: number[][], closePath: boolean) {
    const region = new Path2D();
    region.moveTo(points[0][0], points[0][1]);
    for (let i = 1; i < points.length; i++) {
      const point = points[i];
      region.lineTo(point[0], point[1]);
    }

    if (closePath) {
      region.closePath();
    }
    ctx.stroke(region);
  }

  const getNewPose = throttle((newPose?: string) => {
    setPose(newPose);
    if (!chartRef.current?.myChart) {
      return;
    }
    const option: any = chartRef.current?.myChart.getOption();
    // 策略
    const strategy: { [key: string]: Function } = {
      // 缩小
      close: () => {
        option.globe[0].viewControl.distance += 50;
        chartRef.current?.myChart?.setOption(option);
      },
      // 放大
      five: () => {
        option.globe[0].viewControl.distance -= 50;
        chartRef.current?.myChart?.setOption(option);
      },
      // 旋转
      ok: () => {
        option.globe[0].viewControl.autoRotate = true;
        chartRef.current?.myChart?.setOption(option);
      },
      // 取消旋转
      good: () => {
        option.globe[0].viewControl.autoRotate = false;
        chartRef.current?.myChart?.setOption(option);
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
  }, 10);

  useEffect(() => {
    if (videoRef.current && outputRef.current && scatterRef.current) {
      (async () => {
        const video = (await setupCamera()) as HTMLVideoElement;
        video.play();
        const model = await handpose.load();
        videoWidth = video.videoWidth;
        videoHeight = video.videoHeight;

        canvas = outputRef.current!;
        canvas.width = videoWidth;
        canvas.height = videoHeight;
        video.width = videoWidth;
        video.height = videoHeight;

        ctx = canvas.getContext('2d')!;
        ctx.clearRect(0, 0, videoWidth, videoHeight);
        ctx.strokeStyle = 'red';
        ctx.fillStyle = 'red';

        ctx.translate(canvas.width, 0);
        ctx.scale(-1, 1);
        ANCHOR_POINTS = [
          [0, 0, 0],
          [0, -VIDEO_HEIGHT, 0],
          [-VIDEO_WIDTH, 0, 0],
          [-VIDEO_WIDTH, -VIDEO_HEIGHT, 0],
        ];

        if (renderPointcloud) {
          scatterGL = new ScatterGL(scatterRef.current!, {
            rotateOnStart: false,
            selectEnabled: false,
          });
        }

        const landmarksRealTime = async (video: HTMLVideoElement) => {
          async function frameLandmarks() {
            // 绘制视频
            ctx.drawImage(
              video,
              0,
              0,
              videoWidth,
              videoHeight,
              0,
              0,
              canvas.width,
              canvas.height,
            );
            const predictions = await model.estimateHands(video);
            if (predictions.length > 0) {
              console.log('handPoseStatus', getHandPoseStatus(predictions[0]));
              const newPose = screenHandPose.recognize(
                getHandPoseStatus(predictions[0]),
              );
              // 节流
              getNewPose(newPose);

              const result = predictions[0].landmarks;
              drawKeypoints(result);
              if (renderPointcloud && scatterGL) {
                const pointsData = result.map(point => {
                  return [-point[0], -point[1], -point[2]];
                });

                const dataset = new ScatterGL.Dataset([
                  ...pointsData,
                  ...ANCHOR_POINTS,
                ] as Points);

                if (!scatterGLHasInitialized) {
                  scatterGL.render(dataset);

                  const fingers = Object.keys(fingerLookupIndices);

                  scatterGL.setSequences(
                    fingers.map(finger => ({
                      indices: fingerLookupIndices[finger],
                    })),
                  );
                  scatterGL.setPointColorer(index => {
                    if (index < pointsData.length) {
                      return 'steelblue';
                    }
                    return 'white'; // Hide.
                  });
                } else {
                  scatterGL.updateDataset(dataset);
                }
                scatterGLHasInitialized = true;
              }
            }
            rafID = requestAnimationFrame(frameLandmarks);
          }
          frameLandmarks();
        };
        landmarksRealTime(video);
      })();
    }
    return () => {
      window.cancelAnimationFrame(rafID);
    };
  }, [videoRef.current, outputRef.current, scatterRef.current]);

  return (
    <div>
      <div
        style={{
          fontSize: 36,
          color: 'red',
          position: 'fixed',
          top: 5,
          left: 5,
          zIndex: 999,
        }}
      >
        {pose}
      </div>
      <div className={styles.canvasWrapper}>
        <canvas ref={outputRef} />
        <video ref={videoRef} playsInline className={styles.video} />
      </div>
      <div
        style={{ width: `${VIDEO_WIDTH}px`, height: `${VIDEO_HEIGHT}px` }}
        ref={scatterRef}
        className={styles.scatterGlContainer}
      />
      <Earth ref={chartRef} />
    </div>
  );
};
