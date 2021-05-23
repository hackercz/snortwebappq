// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'
// import store from './store'
// //import network from './network'
// //import ant from './plugins/Ant'
// import Antd from 'ant-design-vue';
// import 'ant-design-vue/dist/antd.css';
// //Vue.config.productionTip = false;

// createApp(App).use(router).use(store).use(Antd).mount('#app')

import { createApp } from 'vue'
import Antd from 'ant-design-vue';
import App from './App.vue'
import router from './router'
import store from './store'
import 'ant-design-vue/dist/antd.css';



// 采用的是全局引入组件库

createApp(App).use(router).use(store).use(Antd).mount('#app')