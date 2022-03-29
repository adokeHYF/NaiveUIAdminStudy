<template>
  <div class="item">
    <!--    <template v-if="true">
      <span>11111</span>
    </template>-->
    <header>
      <slot name="header" :slot_header_attr="'header'"></slot>
    </header>
    <main>
      <span>{{ todo }}</span>
      <input type="text" class="emitInput" @input="emitValue" />
      <button @click="reverseContext">内容反转</button>

      <div>
        <p>默认插槽</p>
        <p>计时器: {{ parentState.count }}</p>
        <slot :slot_default_attr="'context'"></slot>
      </div>
    </main>
    <footer>
      <slot name="footer" :slot_footer_attr="'footer'"></slot>
    </footer>
  </div>
</template>

<script>
  import { watch, inject, reactive, toRefs } from 'vue';
  export default {
    name: 'Todo',
    props: {
      todo: {
        type: String,
        default: 'todo',
      },
      todoModifiers: {
        default: () => {},
      },
    },
    emits: ['update:todo'],
    setup(props, context) {
      const state = reactive({
        parentState: inject('COUNT'),
      });
      state.parentState.count += 10000;
      watch(
        () => props.todo,
        (todo, preTodo) => console.log('c_todo:', todo, ', p_todo:', preTodo)
      );

      return {
        ...toRefs(state),
        reverseContext() {
          context.emit('update:todo', props.todo.split('').reverse().join(''));
        },
        emitValue(e) {
          console.log('props.todoModifiers', props.todoModifiers.capitalize);
          if (props.todoModifiers.capitalize) {
            context.emit('update:todo', e.target.value);
          }
        },
      };
    },
  };
</script>
<style lang="less" scoped>
  .item {
    margin: 10px 0;
    border: 1px solid #cccccc;
    .emitInput {
      border: 1px solid #cccccc;
      margin: 0 5px;
    }
  }
</style>
