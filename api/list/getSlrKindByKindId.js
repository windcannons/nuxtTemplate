//home.js 传入的axios参数调用
export default axios => (function (data) {
  // console.log("发送",data)
  return axios.get(
    `/kind/getSlrKindByKindId?${new URLSearchParams(data)}`,
    data
  );
})
