//home.js 传入的axios参数调用
export default axios => (function (data) {
  // console.log(data)
  return axios.get(`/home/getSearchRecommendByName?${new URLSearchParams(data)}`);
})
