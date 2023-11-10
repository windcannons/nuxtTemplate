export default axios=>(function(data){
  return axios.post(
    `/pageClickRecord/addPageRecord`,
    data
  );
})
