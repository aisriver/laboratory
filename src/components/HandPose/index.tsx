/*
 * @文件描述: HandPose
 * @公司: thundersdata
 * @作者: 廖军
 * @Date: 2021-03-11 14:22:07
 * @LastEditors: 廖军
 * @LastEditTime: 2021-03-11 15:46:01
 */

import React, { useEffect, useRef } from 'react';
import * as handpose from '@tensorflow-models/handpose';
import '@tensorflow/tfjs-backend-webgl';

let rafID: number;
export type Predictions = handpose.AnnotatedPrediction[];
export interface HandPoseProps {
  // 返回识别的原数据 手掌的21个关键坐标等信息
  onChange?: (predictions: Predictions) => void;
}

export default ({ onChange }: HandPoseProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  /**
   * 相机设置
   * @returns video
   */
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
        width: 0,
        height: 0,
      },
    });
    video.srcObject = stream;
    return new Promise(resolve => {
      video.onloadedmetadata = () => {
        resolve(video);
      };
    });
  };

  useEffect(() => {
    if (videoRef.current) {
      (async () => {
        const video = (await setupCamera()) as HTMLVideoElement;
        video.play();
        const model = await handpose.load();
        const landmarksRealTime = async (video: HTMLVideoElement) => {
          const frameLandmarks = async () => {
            const predictions = await model.estimateHands(video);
            if (predictions.length > 0) {
              onChange?.(predictions);
            }
            rafID = requestAnimationFrame(frameLandmarks);
          };
          frameLandmarks();
        };
        landmarksRealTime(video);
      })();
    }
    return () => {
      window.cancelAnimationFrame(rafID);
    };
  }, [videoRef.current]);

  return <video style={{ display: 'none' }} ref={videoRef} playsInline />;
};
