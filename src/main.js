import Vue from 'vue'
// import 'normalize.css';
// 加载 muse-ui 的引用
import 'typeface-roboto';
import './assets/font-icons/material/material-icons.css';
import './assets/font-icons/style.css';
// import './assets/velocity.js';
import 'muse-ui/dist/muse-ui.css';
import 'muse-ui-message/dist/muse-ui-message.css';
import 'muse-ui-loading/dist/muse-ui-loading.css';
import MuseUI from 'muse-ui';
import Message from 'muse-ui-message';
import Toast from 'muse-ui-toast';
import Loading from 'muse-ui-loading';
// 加载 element-ui 的引用 暂时不使用
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';

import App from './App.vue'
import router from './router'
import Axios from "axios"

// 加载 muse-ui元素
Vue.use(MuseUI);
Vue.use(Message);
Vue.use(Toast);
Vue.use(Loading);
// 加载 element-ui元素 暂时不使用
// Vue.use(ElementUI);

// Vue.use(axios);
Vue.prototype.$axios = Axios

Vue.config.productionTip = false

//进入页面之前的钩子,修改title
router.beforeEach((to, from, next) => {
  document.title = to.meta.title    //这 to.meta.title 是在router里设置的

  // next()
  setTimeout(()=>{
    next()
  },100)
  
})

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
