<template>
  <section id="home">
    <header class="header">{{ title }}</header>
    <article class="article">
      <ul>
        <li v-for="(item, index) in lists"
            class="li-item"
            @click="alertFun(index)"
            :key="index">{{ item.name }}
        </li>
      </ul>
      <input type="text" v-model="userName" name="" id="">
      <p>{{ userName }}</p>
    </article>
    <footer class="footer" v-if="isFooter">尾部</footer>
  </section>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      title: '天天搜好货',
      isFooter: false,
      userName: '',
      lists: [
        {
          name: 'a'
        },
        {
          name: 'b'
        },
        {
          name: 'c'
        }
      ]
    }
  },
  methods: {
    alertFun (index) {
      console.log(index)
    }
  }
}
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 88px;
  line-height: 88px;
  text-align: center;
  font-size: 30px;
  border-bottom: 1px solid #ccc;
}
.article {
  padding: 88px 0;
}
.li-item {
  width: 100%;
  height: 60px;
  line-height: 60px;
  text-indent: 20px;
  font-size: 24px;
  background-color: #eee;
  border-bottom: 1px solid #aaa;
}
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 88px;
  line-height: 88px;
  text-align: center;
  font-size: 30px;
  border-top: 1px solid #ccc;
}
</style>
