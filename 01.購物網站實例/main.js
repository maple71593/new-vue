import Vue from 'vue'
import App from './App.vue'
import './styles/base.css' // css 样式重置
import './styles/common.css' // 公共全局样式
import './assets/iconfont/iconfont.css' // 字体图标的样式
import './styles/index.css' // 页面样式
import BaseHotBrand from './components/HotBrand/BaseHotBrand.vue'
import BaseGoodsItem from './components/NewGoods/BaseGoodsItem.vue'
import BaseTopic from './components/Topic/BaseTopic.vue'

Vue.config.productionTip = false

Vue.component('BaseHotBrand',BaseHotBrand)
Vue.component('BaseGoodsItem',BaseGoodsItem)
Vue.component('BaseTopic',BaseTopic)

new Vue({
  render: h => h(App),
}).$mount('#app')
