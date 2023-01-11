     import  apiUrl from "@/request/link"
import set_get from "@/utils/set_get"
let Global: Object = {
	namespaced: true,
	state: {
		showIndexBtn: false,
		userInfo: {},
		yearlist:[],
		daylist:[],
		day:'0',
		year:'0'
	},
	actions: {
		async Login({ commit }) {
			let code: string = ''
			let token: string = ''
			await new Promise((resolve: any, reject: any) => {
				uni.login({
					provider: 'weixin', //使用微信登录
					onlyAuthorize: true,
					success: function(loginRes) {
						console.log(loginRes)
						code = loginRes.code
						resolve(code)
					}, fail() {
						reject()
					}
				})
			})
			const apiGetToken: any = await apiUrl.loginWX({ code: code, mobile: '' })
			token = apiGetToken.data.data.token
			set_get.setToken(token)
			console.log(code, apiGetToken)
			commit('SETINDEXBTN')
		},
		async GetUserInfo({ commit }) {
			const ruserInfo: any = await apiUrl.getUserInfo()
			let userInfo = ruserInfo.data.data
			commit('SETUSERINFO', userInfo)
		},
		async GetDate({ commit }) {
			let originlist: any = await apiUrl.getDate()
			 const list = originlist.data.data
			var yearlist = []
			var daylist = []
			list.forEach((item: any) => {
				yearlist.push(item.exam_date)
				daylist.push(item.day)
			})
			commit('SETYEARLIST', yearlist)
			commit('SETDAYLIST', daylist)
			commit('SETDAY', daylist[0])
			commit('SETYEAR', yearlist[0])
		}
	},
	mutations: {
		SETINDEXBTN(state: any) {
			state.showIndexBtn = true
		},
		SETUSERINFO(state: any, userInfo: any) {
			state.userInfo = userInfo
		},
		SETYEARLIST(state: any, yearlist: any) {
			state.yearlist = yearlist
		},
		SETDAYLIST(state: any, daylist: any) {
			state.daylist = daylist
		},
		SETDAY(state: any, day: any) {
			state.day = day
		},
		SETYEAR(state: any, year: any) {
			state.year = year
		},
		CHANGETIME(state: any, index: any) {
			console.log(index)
			state.year = state.yearlist[index]
			state.day = state.daylist[index]
		},

	},
	getters: {

	}
}
export default Global