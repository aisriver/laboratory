import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/randomLayout/index' },
    {
      path: '/socketScreen/control',
      component: '@/pages/screen/socketScreen/control/index',
    },
    { path: '/screen', component: '@/pages/screen/index' },
    { path: '/handPose', component: '@/pages/handPose/index' },
    { path: '/ocr', component: '@/pages/ocr/index' },
  ],
});
