<template>
  <div>
    <hello-vue text="hello vue"></hello-vue>
  </div>
</template>

<script>
export default {
  name: 'Index',
  components: {
    HelloVue: () => import('../components/HelloVue/helloVue.vue'),
  },
};
</script>
