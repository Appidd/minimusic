import { createStore } from "vuex";
import Global from "./modules/global"
import Home  from "./modules/home" 
import TestExam from "./modules/test_exam"
import Service from "./modules/service"
const store = createStore({
  modules:{
	  Global,
	  Home,
	  TestExam,
	  Service
  }
});
export default store;