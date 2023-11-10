//商品详情
export default axios => (function (data) {
  return axios.get(`/product/getProductDetail?id=${data.id}`, data);
})
