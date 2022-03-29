<template>
  <div>{{ text2UpCase(text) }}</div>
</template>
<script>
  import { onMounted, reactive, toRefs, computed } from 'vue';
  export default {
    name: 'Filter',
    components: {},
    emits: [],
    setup(props, { emit }) {
      // const store = useStore();
      const state = reactive({
        text: 'filter',
        text2UpCase: computed(() => {
          return (t) => {
            return t.toUpperCase();
          };
        }),
      });
      // vue3 中去除了filter, 可以使用computer代替
      onMounted(() => {});
      return {
        ...toRefs(state),
      };
    },
  };
</script>
<style lang="scss" scoped></style>
