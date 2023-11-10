// 页面宽度
export default ({ app }) => {
  if (process.client) {
    const handleResize = () => {
      // 获取窗口大小
      const width = window.innerWidth
      const height = window.innerHeight

      // 将窗口大小存储到本地存储中

      // console.log( width, height)
      // $store.state.windowSize.width
      // $store.state.windowSize.height
        app.store.commit('SET_windowSize', { width, height })
    }

    // 初始化窗口大小
    handleResize()
    setTimeout(()=>{
      handleResize()
    },100)

    // 监听窗口大小变化
    window.addEventListener('resize', handleResize)
  }
}
