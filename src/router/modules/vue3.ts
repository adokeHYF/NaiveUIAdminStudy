import { RouteRecordRaw } from 'vue-router';
import { Layout } from '@/router/constant';
import { ProjectOutlined } from '@vicons/antd';
import { renderIcon } from '@/utils/index';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/vue3',
    name: 'vue3',
    component: Layout,
    meta: {
      sort: 11,
      title: 'vue3学习',
      icon: renderIcon(ProjectOutlined),
    },
    children: [
      {
        path: 'vSlot',
        name: `vue3-slot`,
        meta: {
          title: '组件插槽',
        },
        component: () => import('@/views/vue3/slot.vue'),
      },
      {
        path: 'vFilter',
        name: `vue3-filter`,
        meta: {
          title: 'filter',
        },
        component: () => import('@/views/vue3/filter.vue'),
      },
      {
        path: 'vStyleAndClass',
        name: `vue3-filter-and-class`,
        meta: {
          title: '样式与class',
        },
        component: () => import('@/views/vue3/class&Style.vue'),
      },
      {
        path: 'vTransition',
        name: 'vue3-transition',
        meta: {
          title: 'vue3动画',
        },
        component: () => import('@/views/vue3/transition.vue'),
      },
    ],
  },
];

export default routes;
