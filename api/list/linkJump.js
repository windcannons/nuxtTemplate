export default axios=>(function(data){
  return axios.post(
    `/product/linkJump`,
    data
  );
})
