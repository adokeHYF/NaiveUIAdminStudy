<template>
  <h1>样式与class</h1>
</template>
<script>
  import { onMounted, reactive, toRefs, provide, readonly } from 'vue';
  export default {
    name: 'SytleAndClass',
    components: {},
    emits: [],
    setup(props, { emit }) {
      // const store = useStore();
      const state = reactive({});
      provide('COUNT', readonly(state));
      onMounted(() => {});
      return {
        ...toRefs(state),
      };
    },
  };
</script>
<style lang="scss" scoped></style>
