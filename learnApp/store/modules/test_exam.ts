     import  apiUrl from "@/request/link"
// import set_get from "@/utils/set_get"
let TestExam: Object = {
	namespaced: true,
	state: {
		//当前题目索引
		currentIndex: 0,
		//所有题目列表
		problemList: []
	},
	actions: {
		//获取当前题目列表
		getChapterProblem({ commit }, id: any) {
			apiUrl.getChapterProblem({ chapter_id: id }).then((res: any) => {
				console.log(res)
				const problemList = res.data.data
				problemList.forEach((item: any) => {
					item.choosedList = [],
						item.answerd = false,
						item.openanalysis = false,
						item.right_keyList = item.right_key.split(''),
						item.result = 3,
						item.textanswer=''
				})
				commit('SETPROBLEMLIST', problemList)
				commit('RESETINDEX')
			})
		},
	    getExamProblem({ commit }, id: any){
			apiUrl.getExamProblem({ id }).then((res: any) => {
				console.log(res)
				const problemList = res.data.data
				problemList.forEach((item: any) => {
					item.choosedList = [],
						item.answerd = false,
						item.openanalysis = false,
						item.right_keyList = item.right_key.split(''),
						item.result = 3,
						item.textanswer=''
				})
				commit('SETPROBLEMLIST', problemList)
				commit('RESETINDEX')
			})
		},
	
	},
	mutations: {
		//设置题目列表
		SETPROBLEMLIST(state: any, problemlist: any) {
			state.problemList = problemlist
		},
		//下一题
		ADDINDEX(state: any) {
			state.currentIndex += 1
		},
		//上一题
		SUBINDEX(state: any) {
			state.currentIndex -= 1
		},
		//重置索引
		RESETINDEX(state: any){
			state.currentIndex =0
		},
		//点击选择题目答题
		SETINDEX(state: any,index:any){
			state.currentIndex =index
		},
		//单选题处理
		RESETPONE(state: any, chooseanswer: string) {
			console.log(chooseanswer)
			const problemList = state.problemList
			const currentIndex = state.currentIndex
			problemList[currentIndex].choosedList.splice(0, 1, chooseanswer)
			problemList[currentIndex].answerd = true
			problemList[currentIndex].openanalysis = true
			problemList[currentIndex].choosed_key = chooseanswer
			problemList[currentIndex].result = problemList[currentIndex].choosed_key == problemList[currentIndex].right_key ? 1 : 2
			if (problemList[currentIndex].result == 2) {
				uni.vibrateShort({});
			} else {
				state.currentIndex = currentIndex == problemList.length - 1 ? currentIndex : currentIndex + 1
			}
		},
		//多选题处理
		RESETPSOME(state:any,chooseanswer:string){
			 
			        const problemList = state.problemList
			        const currentIndex = state.currentIndex
			        if (problemList[currentIndex].choosedList.includes(chooseanswer)) {
			            //从已选择的数组当中剔除
			            let index = problemList[currentIndex].choosedList.findIndex(item => item == chooseanswer)
			            problemList[currentIndex].choosedList.splice(index, 1)
			            if (problemList[currentIndex].choosedList.length == 0) {
			                problemList[currentIndex].answerd = false
			            }
			        } else {
			            //把选择的答案加入到已选择的数组当中
			            problemList[currentIndex].choosedList.push(chooseanswer)
			            problemList[currentIndex].answerd = true
			        }
			        //判断选择的选项是否包含在正确答案内部
			        if (problemList[currentIndex].right_keyList.includes(chooseanswer)) {
			            //如果正确答案列表里面包含所选项
			            if (problemList[currentIndex].choosedList.length == problemList[currentIndex].right_keyList.length) {
			                problemList[currentIndex].answerd = true
			                problemList[currentIndex].openanalysis = true
			                problemList[currentIndex].result = 1
			                problemList[currentIndex].choosed_key = problemList[currentIndex].choosedList.join('')
			            }
			        } else {
			            //如果正确答案列表里面不包含所选项
			            problemList[currentIndex].answerd = true
			            problemList[currentIndex].openanalysis = true
			            problemList[currentIndex].result = 2
			            problemList[currentIndex].choosed_key = problemList[currentIndex].choosedList.join('')
			        }
			        if (problemList[currentIndex].result == 2) {
			            uni.vibrateShort({});
			        } else if (problemList[currentIndex].result == 1) {
			            state.currentIndex=currentIndex == problemList.length - 1 ? currentIndex : currentIndex + 1
			            
			        }
		},
		//填空题处理,简答题处理
        RESETTK(state:any,answer:string){
			console.log(answer)
			const problemList = state.problemList
			const currentIndex = state.currentIndex
			problemList[currentIndex].textanswer = answer
			if (problemList[currentIndex].textanswer != '') {
			    problemList[currentIndex].answerd = true
			}
			
		},
		// 判断题处理
		RESETRADIO(state:any,radio:any){
			const problemList = state.problemList
			
			const currentIndex = state.currentIndex
			console.log(problemList[currentIndex])
			problemList[currentIndex].radio = radio
			problemList[currentIndex].answerd = true
			problemList[currentIndex].result = problemList[currentIndex].right_key == radio ? 1 : 2
			problemList[currentIndex].openanalysis = true
			if (problemList[currentIndex].result == 2) {
			    uni.vibrateShort({});
			} else {
				
			     // state.currentIndex=currentIndex == problemList.length - 1 ? currentIndex : currentIndex + 1
			    
			}
			
		},
		//展示解析，隐藏解析
		CHANGEAN(state:any,index:any){
			const problemList = state.problemList
			state.problemList[index].openanalysis =!problemList[index].openanalysis
			
		}
	},
	getters: {
		//当前题目
		curProblem(state: any) {
			const problemList = state.problemList
			const currentIndex = state.currentIndex
			return problemList[currentIndex]
		},
		//正确率
		persent(state:any){
			 let answerNumber=0,rightNumber=0
			 
			  state.problemList.forEach(item => {
			            var right_keyList = item.right_key.split('')
			            if (item.answerd) {
			                answerNumber+=1
			                if (item.type == 4) {
			                    if (item.right_key == item.radio) {
			                        item.result = 1
			                        rightNumber+=1
			                    } else {
			                        item.result = 2
			                    }
			                } else if (item.type == 3) {
			                    item.result = 1
			                    rightNumber+=1
			                } else {
			                    //单选和多选   
			                    item.result = right_keyList.length === item.choosedList.length && right_keyList.sort().toString() === item.choosedList.sort().toString() ? 1 : 2
			                    if(item.result==1){
			                        rightNumber+=1
			                    }
			                }
			            } else {
			                item.result = 3
			            }
			        })
			        return ((rightNumber/answerNumber)*100).toFixed(2)
		}
	}
}
export default TestExam