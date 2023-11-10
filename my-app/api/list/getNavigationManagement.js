//获取服务一览
export default axios=>(function(data){
  return axios.get(`/NavigationManagement/getNavigationManagement`, data);
})
