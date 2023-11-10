import Vue
  from 'vue';
// 自定义指令 与id值绑定 v-Medium 本指令是通过正则匹配中文中的英文和数字并设置字体
Vue.directive('Medium', {
  bind(el) {
    const regex = /[A-Za-z0-9]+/g;
    const text = el.textContent;
    const replacedText = text.replace(regex, match => `<span style="font-family: 'Futura-Medium'; letter-spacing: 0.8px">${match}</span>`);
    el.innerHTML = replacedText;
  }
});
