import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// 1.全局註冊指令
// Vue.directive('focus',{
//   // inserted會在 指令所在元素 被插入到頁面中時觸發
//   inserted(el){
//     // el就是指令所綁定的元素
//     el.focus()
//   }
// })

new Vue({
  render: h => h(App),
}).$mount('#app')
