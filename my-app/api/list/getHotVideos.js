//home.js 传入的axios参数调用
export default axios=>(function(data){
  // console.log("发送",data)
  return axios.get(
    `/home/getHotVideos?current=${data.current}&size=${data.size}`);
})
