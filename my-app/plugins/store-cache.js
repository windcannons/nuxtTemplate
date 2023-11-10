// 手动配置数据持久化，若使用nuxt自身定义的路由
export default function(ctx) {
  // 离开页面 刷新前 将store中的数据存到localStorage
  window.addEventListener('beforeunload', () => {
    localStorage.setItem("storeCache", JSON.stringify(ctx.store.state));
  });

  // 获取localStorage中的store数据
  window.addEventListener('DOMContentLoaded', function (){
    let storeCache = localStorage.getItem("storeCache");
    // 解析存储的数据
    ctx.store.replaceState(Object.assign({}, ctx.store.state, storeCache));
  })
}
