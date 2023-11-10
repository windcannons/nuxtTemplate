export default axios=>(function(data){
  return axios.post(
    `/hotKeyword/searchKeyRecord`,
    data
  );
})
