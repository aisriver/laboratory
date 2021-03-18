/*
 * @文件描述: 通过手机控制大屏
 * @公司: thundersdata
 * @作者: 廖军
 * @Date: 2021-03-17 16:32:25
 * @LastEditors: 廖军
 * @LastEditTime: 2021-03-17 18:36:45
 */

import React from 'react';
import { InteractType, screenInteract } from '@/utils/interact';

export default () => {
  const { interacts, code } = screenInteract;

  const renderItem = (item: InteractType) => {
    const { type, options, label, name } = item;
    if (type === 'select') {
      return (
        <div key={name}>
          <span>{label}: </span>
          <select
            onChange={e => {
              window.socket.emit('exchange', {
                type: 'transmit',
                from: 'control',
                params: {
                  userId: 'screen',
                  payload: {
                    code,
                    name,
                    args: [e.target.value],
                  },
                },
              });
            }}
          >
            {options?.map(({ label, value }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>
      );
    }
    return (
      <button
        key={name}
        onClick={() => {
          window.socket.emit('exchange', {
            type: 'transmit',
            from: 'control',
            params: {
              userId: 'screen',
              payload: {
                code,
                name,
                args: [],
              },
            },
          });
        }}
      >
        {label}
      </button>
    );
  };

  return <div>{interacts.map(renderItem)}</div>;
};
