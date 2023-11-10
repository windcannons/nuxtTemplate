//home.js 传入的axios参数调用
import {ssrCompileToFunctions} from "vue-template-compiler";

export default axios=>(function(data){
  // console.log("发送",data)
  return axios.get(
    `/store/getStoreInfo?${new URLSearchParams(data)}`
  );
})
