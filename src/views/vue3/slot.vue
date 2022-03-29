<template>
  <div>vue3学习</div>
  <span :title="title">鼠标悬停几秒钟查看此处动态绑定的提示信息！</span>
  <span>{{ message }}</span>
  <div>
    <button @click="reverseTitle">反转title</button>
  </div>
  <div>
    <b>循环组件</b>
    <p v-for="(todo, idx) in todos" :key="idx">
      <Todo v-model:todo.capitalize="todo.text">
        <template #header="aaaa">
          <p> {{ aaaa.slot_header_attr }}: Here might be a page title </p>
        </template>
        <template #default="slotProps">
          <h4>
            {{ slotProps.slot_default_attr }}
          </h4>
        </template>
        <!--
        <template #footer="footer">
          <p> {{ footer.slot_footer_attr }}: Here's some contact info </p>
        </template>
        -->
        <template #footer="footer">
          <p> {{ footer.slot_footer_attr }}: Here's some contact info </p>
        </template>
      </Todo>
    </p>
  </div>
  <div>
    <b>作用域插槽</b>
    <TodoList>
      <template #default="slotProps">
        <i class="fas fa-check"></i>
        <span>{{ slotProps }}</span>
        <span class="green">{{ slotProps.item }}</span>
      </template>
    </TodoList>
  </div>
</template>
<script>
  import {
    onMounted,
    reactive,
    toRefs,
    inject,
    provide,
    readonly,
    defineAsyncComponent,
  } from 'vue';
  import Todo from '@/views/vue3/components/todo.vue';
  export default {
    name: 'Graph',
    components: {
      Todo: Todo,
      TodoList: defineAsyncComponent(() => {
        import('@/views/vue3/components/todo-list.vue');
      }),
    },
    emits: [],
    setup(props, { emit }) {
      // const store = useStore();
      const state = reactive({
        title: 'You loaded this page on ' + new Date().toLocaleString(),
        message: 'Hello Vue.js!',
        todos: [
          { text: 'Learn JavaScript' },
          { text: 'Learn Vue' },
          { text: 'Build something awesome' },
        ],
        count: 0,
      });
      provide('COUNT', readonly(state));
      onMounted(() => {
        setInterval(() => {
          state.count++;
          if (state.count > 59) state.count = 0;
          state.todos[0].text = state.todos[0].text.split('').reverse().join('');
        }, 2 * 1000);
      });

      //
      return {
        ...toRefs(state),
        reverseTitle: () => {
          state.message = state.message.split('').reverse().join('');
        },
      };
    },
  };
</script>
<style lang="scss" scoped></style>
