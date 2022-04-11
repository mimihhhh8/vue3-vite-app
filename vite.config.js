import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { resolve } from 'path'
// 按需加载插件
import {
  AntDesignVueResolver
} from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    Components({
      resolvers: [
        AntDesignVueResolver(),
      ]
    })],

    resolve: {
      // 配置别名
      alias: [{ find: '@', replacement: resolve(__dirname, 'src') }]
    }
  
})
