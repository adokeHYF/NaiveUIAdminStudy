<template>
  <ul>
    <li v-for="(item, index) in items">
      <slot :item="item" :index="index" :another-attribute="anotherAttribute"></slot>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'TodoList',
    data() {
      return {
        items: ['Feed a cat', 'Buy milk'],
        anotherAttribute: { a: 1 },
      };
    },
  };
</script>

<style scoped></style>
