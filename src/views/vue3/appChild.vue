<template>
  <div class="img-contain">
    <div class="overlay">
      <p class="overlay-text">I don't like this one</p>
      <button @click="toggleShow">Replace!</button>
    </div>
    <transition name="flip" mode="out-in">
      <div v-if="!isShowing">
        <slot></slot>
      </div>
      <img
        v-else
        src="https://images.unsplash.com/flagged/photo-1563248101-a975e9a18cc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
        alt=""
      />
    </transition>
  </div>
</template>
<script>
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: 'AppChild',
    data() {
      return {
        isShowing: false,
      };
    },
    methods: {
      toggleShow() {
        this.isShowing = !this.isShowing;
      },
    },
    template: ``,
  });
</script>
<style lang="less">
  // 测试组件样式
  button {
    font-family: 'Bitter';
    background: #c62735;
    color: white;
    border: 0;
    padding: 5px 15px;
    margin: 0 10px;
    border-radius: 4px;
    outline: 0;
    cursor: pointer;
  }

  .img-contain {
    width: 250px;
    height: 160px;
    overflow: hidden;
    transform-origin: 50% 50%;
  }

  img {
    width: 100%;
    transform-origin: 50% 50%;
    cursor: pointer;
    transform: scaleY(1) translateZ(0);
    margin: 5px;
  }

  main {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .img-contain:hover .overlay {
    opacity: 1;
    background: hsla(50, 0%, 0%, 0.6);
    transition: 0.3s all ease-out;
  }

  .img-contain .overlay {
    position: absolute;
    z-index: 1000;
    display: block;
    width: 245px;
    height: 155px;
    margin: 5px;
    opacity: 0;
    overflow: hidden;
    transition: 0.3s all ease-in;
  }

  .overlay-text {
    margin-top: 40px;
  }

  h4 {
    margin: 0 0 15px;
  }

  .flip-enter-active {
    transition: all 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53); //ease-in-quad
    transform-origin: 50% 50%;
  }

  .flip-leave-active {
    transform-origin: 50% 50%;
    transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94); //ease-out-quad
  }

  button {
    font-family: 'Bitter';
    background: #c62735;
    color: white;
    border: 0;
    padding: 5px 15px;
    margin: 0 10px;
    border-radius: 4px;
    outline: 0;
    cursor: pointer;
  }

  .img-contain {
    width: 250px;
    height: 160px;
    overflow: hidden;
    transform-origin: 50% 50%;
  }

  img {
    width: 100%;
    transform-origin: 50% 50%;
    cursor: pointer;
    transform: scaleY(1) translateZ(0);
    margin: 5px;
  }

  main {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .img-contain:hover .overlay {
    opacity: 1;
    background: hsla(50, 0%, 0%, 0.6);
    transition: 0.3s all ease-out;
  }

  .img-contain .overlay {
    position: absolute;
    z-index: 1000;
    display: block;
    width: 245px;
    height: 155px;
    margin: 5px;
    opacity: 0;
    overflow: hidden;
    transition: 0.3s all ease-in;
  }

  .overlay-text {
    margin-top: 40px;
  }

  h4 {
    margin: 0 0 15px;
  }

  .flip-enter-active {
    transition: all 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53); //ease-in-quad
    transform-origin: 50% 50%;
  }

  .flip-leave-active {
    transform-origin: 50% 50%;
    transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94); //ease-out-quad
  }

  .flip-enter-from,
  .flip-leave-to {
    transform-origin: 50% 50%;
    transform: scaleY(0) translateZ(0);
    opacity: 0;
  }
</style>
