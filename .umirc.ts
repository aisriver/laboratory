import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/screen/index' },
    { path: '/handPose', component: '@/pages/handPose/index' },
    { path: '/ocr', component: '@/pages/ocr/index' },
  ],
});
