<template>
  <div
    class="index">
    <Header></Header>
    <div
      class="main">
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>

<style
  scoped
  lang="less">

</style>
