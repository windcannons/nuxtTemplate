//获取菜谱
export default axios => (function (data) {
  // console.log("发送",data)
  return axios.get(
    `/cookbook/geCookbook?current=${data.current}&keyword=${data.keyword}&size=${data.size}`,
    data
  );
})
