<template>
  <h1>vue动画</h1>
  <!-- class 控制动画 -->
  <p>class 控制动画</p>
  <div :class="{ shake: noActivated }">
    <button @click="noActivated = !noActivated">Click me</button>
    <span v-if="noActivated">Oh no!</span>
  </div>
  <!-- vue transition标签控制动画 -->
  <p>vue transition标签控制动画</p>
  <button @click="show = !show">Toggle</button>
  <transition name="fade" :duration="{ enter: 500, leave: 800 }">
    <p v-if="show">vue3 标签测试</p>
  </transition>
  <!-- vue中的动画钩子函数 -->
  <p>vue中的动画钩子函数</p>
  <transition
    name="fade"
    :duration="{ enter: 500, leave: 800 }"
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    @enter-cancelled="enterCancelled"
    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave="afterLeave"
    @leave-cacelled="leaveCancelled"
  >
    <p v-if="show">vue3 动画钩子函数</p>
  </transition>

  <!-- 动画的过度模式 -->
  <p>动画的过度模式</p>
  <transition name="no-mode-fade" mode="out-in">
    <button v-if="on" key="on" @click="on = false"> on </button>
    <button v-else key="off" @click="on = true"> off </button>
  </transition>

  <appChild>
    <img
      src="https://images.unsplash.com/photo-1520182205149-1e5e4e7329b4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
      alt="image of a woman on a train"
    />
  </appChild>
</template>
<script>
  import { onMounted, reactive, toRefs, provide, readonly, defineComponent } from 'vue';
  import appChild from './appChild.vue';
  export default {
    name: 'Transtion',
    components: { appChild },
    emits: [],
    setup(props, { emit }) {
      // const store = useStore();
      const state = reactive({
        noActivated: false,
        show: true,
        on: true,
      });
      onMounted(() => {});
      return {
        ...toRefs(state),
        beforeEnter,
        enter,
        afterEnter,
        enterCancelled,
        beforeLeave,
        leave,
        afterLeave,
        leaveCancelled,
      };
    },
  };

  // 动画钩子函数
  const beforeEnter = () => console.log('before-enter');
  const enter = () => console.log('enter');
  const afterEnter = () => console.log('after-enter');
  const enterCancelled = () => console.log('enter-cancelled');
  const beforeLeave = () => console.log('before-enter');
  const leave = () => console.log('leave');
  const afterLeave = () => console.log('after-leave');
  const leaveCancelled = () => console.log('leave-cancelled');
</script>
<style lang="less" scoped>
  .shake {
    animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;
  }

  @keyframes shake {
    10%,
    90% {
      transform: translate3d(-1px, 0, 0);
    }

    20%,
    80% {
      transform: translate3d(2px, 0, 0);
    }

    30%,
    50%,
    70% {
      transform: translate3d(-4px, 0, 0);
    }

    40%,
    60% {
      transform: translate3d(4px, 0, 0);
    }
  }

  /*
    v-enter-from
    v-enter-active
    v-enter-to

    v-leave-from
    v-enter-active
    v-enter-to
  */
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>
