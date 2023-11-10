//搜索关键字
export default axios=>(function(data){
  return axios.get(`/a/slrhotkeyword/slr-hot-keyword`, data);
})
