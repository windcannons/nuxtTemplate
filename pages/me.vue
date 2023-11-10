<template>
  <div
    class="me">
    我的内容
    <p>
      {{ newsListInfo[0].title }}</p>
    <input
      type="text"
      name=""
      @input="setFn"
      id="">
    <div
      class="swiper">
      <!-- Swiper -->
      <div
        class="swiper-container topSwiper mySwiper">
        <div
          class="swiper-wrapper">
          <div
            class="swiper-slide">
            轮播图1
          </div>
          <div
            class="swiper-slide">
            轮播图2
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper
  from "swiper";
import "swiper/css/swiper.min.css"
import {
  debounceFn
} from "../plugins/utils";

export default {
  head(context) {
    // 页面单独设置关键字 优化seo：动态设置title，keywords 和 description
    return {
      title: this.title,
      meta: [
        {
          name: "keywords",
          content: '',
        }
      ],
    };
  },
  // 服务器渲染，使数据可以被抓取到
  async asyncData() {
    try {
      // 使用异步操作获取数据
      const Listresponse = await fetch('https://admin.nimbusyun.com/api/owNews/getNewsList?limit=9&offset=0');
      const Listdata = await Listresponse.json();
      // 返回获取的数据
      return {
        newsListInfo: Listdata.data,
      };
    } catch (error) {
      console.error(error);
    }
    try {
      // 使用异步操作获取数据
      // 返回获取的数据
      return {};
    } catch (error) {
      console.error(error);
    }
  },
  name: "me",
  mounted() {
    // 多个siper时修改当前类名
    new Swiper(".topSwiper", {
      loop: true,
    });
  },
  methods:{
    setFn: debounceFn((vm) => {
      console.log(12312312)
    }, 500),
  }
}
</script>

<style
  scoped
  lang="less">
.me {
  background-color: skyblue;
  text-align: center;
  font-size: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .swiper {
    width: 630px;
    height: 390px;

    .swiper-container {
      width: 100%;
      height: 100%;
    }

    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;

      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
    }
  }
}
</style>
