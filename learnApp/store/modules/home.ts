  import  apiUrl from "@/request/link"
import set_get from "@/utils/set_get"
let Home: Object = {
	namespaced: true,
	state: {
		banner: [],
		//科目列表
		classList:[],
		// 当前科目
		classItem: {},
		//当前科目下的章节列表题型
		chapterList:[],
		//当前科目下的考试题
		examList:[],
		// 用户信息
		userInfo:{}
	},
	actions: {
		GetBanner({ commit }) {
			apiUrl.getBanner({}).then((res: any) => {
				console.log(res.data.data)
				commit('SETBANNER', res.data.data)
			})
		},
		async CheckClassItem({ commit }) {
			//获取用户信息
			const ruserInfo:any=await apiUrl.getUserInfo()
			let userInfo=ruserInfo.data.data
			commit('SETUSERINFO',userInfo)
			//获取科目列表
			let rclassList: any = await apiUrl.getClassify()
			let classList: any = rclassList.data.data
			commit('SETCLASSLIST', classList)
			let classItem = set_get.getClassItem()
			if (classItem) {
				// 获取科目章节
				commit('SETCLASSITEM', classItem)
				let rchapterList:any = await apiUrl.getProblemChapter({ class_id: classItem.id })
				const chapterList = rchapterList.data.data
				chapterList.forEach((item: any) => {
					item.open = false
				})
				commit('SETCHAPTARLISR',chapterList)
				//获取考试题目
				let rexamList:any = await apiUrl.getExam({ class_id: classItem.id })
				const examList = rexamList.data.data
				commit('SETEXAMLIST',examList)
			} else {
				let classItem = classList[0].children[0]
				commit('SETCLASSITEM', classItem)
				set_get.setClassItem(classItem)
				let rchapterList:any = await apiUrl.getProblemChapter({ class_id: classList[0].children[0].id })
				const chapterList = rchapterList.data.data
				chapterList.forEach((item: any) => {
					item.open = false
				})
				commit('SETCHAPTARLISR',chapterList)
				//获取考试题目
				let rexamList:any = await apiUrl.getExam({ class_id: classList[0].children[0].id })
				const examList = rexamList.data.data
				commit('SETEXAMLIST',examList)
				console.log(rclassList, classList, rchapterList)
			}
		}
	
	},
	mutations: {
		//设置banner
		SETBANNER(state: any, banner: any) {
			state.banner = banner
		},
		// 设置科目列表
		SETCLASSLIST(state: any, classList: any) {
			state.classList = classList
		},
		//设置当前科目
		SETCLASSITEM(state: any, classItem: any) {
			state.classItem = classItem
		},
		//设置章节列表题型
		SETCHAPTARLISR(state: any, chapterList: any){
			state.chapterList = chapterList
		},
		// 设置当前科目考试题
		SETEXAMLIST(state: any, examList: any){
			state.examList = examList
		},
		// 设置用户信息
		SETUSERINFO(state: any, userInfo: any){
			state.userInfo = userInfo
		}
	},
	getters: {

	}
}
export default Home