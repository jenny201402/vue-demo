<template>
  <div class="player">
    这是一个测试路由的页面
    <!-- 2.在template中使用 -->
    <pig></pig>
    <About></About>
    <p>
      <router-link to="/demo">demo</router-link>
    </p>
  </div>
</template>


<script>
  //1.先使用import导入你要在该组件中使用的子组件
  import pig from '@/components/pig'
  import About from '@/components/About'
  import demo from '@/components/demo'
  export default {
    //2.然后,在components中写入子组件
    components: {pig,About,demo},
    methods: {},
  }
</script>

<style scoped>
  .player{
    color:black;
    position:relative;
  }
</style>
