//获取
export default axios=>(function(data){
  return axios.get(
    `/product/countProductSalePriceNumber?${new URLSearchParams(data)}`,
    data
  );
})
