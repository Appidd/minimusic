import App from './App'
import { createSSRApp } from 'vue'
import store  from "./store/index"
// 不能修改导出的 createApp 方法名，不能修改从 Vue 中导入的 createSSRApp。
import uviewPlus from 'uview-plus'
export function createApp() {
  const app = createSSRApp(App)
  
  app.use(store)
  app.use(uviewPlus)
 
  return {
      app
  }
  
}