import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/handPose/index' },
    { path: '/ocr', component: '@/pages/ocr/index' },
  ],
});
