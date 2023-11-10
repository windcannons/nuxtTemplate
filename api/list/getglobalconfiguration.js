//home.js 传入的axios参数调用
export default axios=>(function(data){
  // console.log(data,"对接塞到家哦")
    return axios.get(`/common/getGlobalConfiguration?code=${data}`);
})
