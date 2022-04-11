import { createApp } from 'vue'
import App from './App.vue'
import store from "./store/index"
import router from "./router";
import { Button, message } from 'ant-design-vue';
import 'ant-design-vue/es/message/style/css';
let app = createApp(App)

// 全局注册组件
app.config.globalProperties.$message = message;
app.use(router);
app.use(Button)
app.use(store)
app.mount('#app')
