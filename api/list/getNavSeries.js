//获取侧边导航栏二级目录
export default axios=>(function(data){
  return axios.get(`/series/getNavSeries?classifyId=${data.classifyId}`, data);
})
