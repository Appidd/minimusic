     import  apiUrl from "@/request/link"

let Service: Object = {
	namespaced: true,
	state: {
		banner: [],
		//科目列表
		classList: [],
		// 当前科目
		classItem: {},
		//课程相关封面列表
		courseClassList: [],
		// 用户信息
		userInfo: {}
	},
	actions: {
		async ReadyService({ commit }) {
			//获取用户信息
			const ruserInfo: any = await apiUrl.getUserInfo()
			let userInfo = ruserInfo.data.data
			commit('SETUSERINFO', userInfo)
			//获取科目列表
			let rclassList: any = await apiUrl.getClassify()
			let classList: any = rclassList.data.data

			let rcourseClassList: any = await apiUrl.getCourseClass({ class_id: classList[0].id })
			console.log(rcourseClassList)
			let courseClassList = rcourseClassList.data.data
			commit('SETCOURSECLASSLIST', courseClassList)
			commit('SETCLASSLIST', classList)
			commit('SETCLASSITEM', classList[0])
		},
		async GetCourceList({ commit }, classItem: any) {
			console.log(classItem)
			let rcourseClassList: any = await apiUrl.getCourseClass({ class_id: classItem.id })
			console.log(rcourseClassList)
			let courseClassList = rcourseClassList.data.data
			console.log(courseClassList)
			commit('SETCOURSECLASSLIST', courseClassList)
			commit('SETCLASSITEM', classItem)
		}

	},
	mutations: {

		// 设置科目列表
		SETCLASSLIST(state: any, classList: any) {
			state.classList = classList
		},
		//设置当前科目
		SETCLASSITEM(state: any, classItem: any) {
			state.classItem = classItem
		},
		// 设置用户信息
		SETUSERINFO(state: any, userInfo: any) {
			state.userInfo = userInfo
		},
		//设置课程相关封面列表
		SETCOURSECLASSLIST(state: any, courseClassList: any) {
			state.courseClassList = courseClassList
		},
	},
	getters: {

	}
}
export default Service