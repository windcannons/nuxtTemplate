//home.js 传入的axios参数调用
export default axios => (function (data) {
  return axios.get(`/home/getPopularityProduct`, data);
})
