<template>
  <section id="user">
    <header class="header">{{ title }}</header>
  </section>
</template>

<script>
export default {
  name: 'user',
  data () {
    return {
      title: '个人中心'
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.header {
  width: 100%;
  height: 100px;
  line-height: 100px;
  text-align: center;
  font-size: 30px;
  color: #f00;
  background-color: #ccc;
}
</style>
