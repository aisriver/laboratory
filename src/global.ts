/*
 * @文件描述:
 * @公司: thundersdata
 * @作者: 廖军
 * @Date: 2021-03-15 17:57:39
 * @LastEditors: 廖军
 * @LastEditTime: 2021-03-17 18:33:21
 */

// https://github.com/eggjs/egg/issues/4588
import io from 'socket.io-client';
import { eventCenter } from '@/utils/interact';
const log = console.log;

const isMobile = /Android|webOS|iPhone|iPad|BlackBerry/i.test(
  navigator.userAgent,
);
const from = isMobile ? 'control' : 'screen';

// 全局模块拓展：https://www.typescriptlang.org/docs/handbook/declaration-merging.html#global-augmentation
declare global {
  interface Window {
    socket: SocketIOClient.Socket;
  }
}

interface ControlPayload {
  code: string;
  name: string;
  args: unknown[];
}

interface ScreenControlParams {
  // 连接/转发
  type?: 'connect' | 'transmit';
  // 来源：大屏/控制器
  from?: 'screen' | 'control';
  params?: {
    id: string;
    userId: string;
    payload?: ControlPayload;
  };
}

window.onload = () => {
  // init
  const socket = io('ws://192.168.1.155:7001/', {
    // 实际使用中可以在这里传递参数
    query: {
      room: 'demo',
      userId: `client_${Math.random()}`,
    },
    transports: ['websocket'],
  });

  socket.on('connect', () => {
    const id = socket.id;
    log('#connect,', id, socket);

    socket.emit('exchange', {
      type: 'connect',
      from,
      params: { id, userId: from },
    });

    // 监听自身 id 以实现 p2p 通讯
    socket.on(id, (msg: ScreenControlParams) => {
      log('#receive,', JSON.stringify(msg));
      const { name, code, args = [] } = msg.params?.payload || {};
      if (msg.from === 'control' && name && code) {
        eventCenter.getEvent(code, name)(...args);
      }
    });
  });

  //接收消息通知
  socket.on('res', (msg: string) => {
    console.log('res from server: %s!', msg);
  });

  // 接收在线用户信息
  socket.on('online', (msg: string) => {
    log('#online,', msg);
  });

  // 系统事件
  socket.on('disconnect', (msg: string) => {
    log('#disconnect', msg);
  });

  socket.on('disconnecting', () => {
    log('#disconnecting');
  });

  socket.on('error', () => {
    log('#error');
  });

  window.socket = socket;
};
