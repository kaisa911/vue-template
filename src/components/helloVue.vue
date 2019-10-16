<template>
  <div>
    <h1>{{ text }}</h1>
    <button @click="handleAdd" class="add">添加内容</button>
    <button @click="handleDelete" class="add">删除内容</button>
    <div class="words">{{ words }}</div>
    <div class="list">
      <div :key="item.name" class="list-item" v-for="item in itemList">
        {{ item.name }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HelloVue',
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    words: '',
    itemList: [],
  }),
  methods: {
    handleAdd() {},
    handleDelete() {},
  },
};
</script>
