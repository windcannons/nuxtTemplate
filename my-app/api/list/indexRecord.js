export default axios=>(function(data){
  return axios.post(
    `/home/indexRecord`,
    data
  );
})
