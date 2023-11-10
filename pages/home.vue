<template>
<div class="home">
  首页内容
  {{$store.state.count}}
  <button @click="$store.dispatch('increment')">num++</button>
</div>
</template>

<script>
export default {
  name: "home"
}
</script>

<style
  scoped lang="less">
.home{
  background-color: skyblue;
  text-align: center;
  font-size: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 300px;
}
</style>
