import service from "./service"
let _send=service._send

let apiUrl={
	loginWX(t?:any) {
	        return _send({
	            url: 'wx_mini_new_login',
	            method: 'POST',
	            login: 1,
	            data: t
	        })
	    },
		//获取用户信息
		getUserInfo(t?:any) {
		    return _send({
		        url: 'getUserInfo',
		        method: 'GET',
		        login: 0,
		        data: t
		    })
		},
		//修改用户信息
		editUserInfo(t?:any) {
		    return _send({
		        url: 'editUserInfo',
		        method: 'POST',
		        login: 0,
		        data: t
		    })
		},
		//获取banner
		getBanner(t?:any) {
		    return _send({
		        url: 'getBanner',
		        method: 'GET',
		        login: 1,
		        data: t
		    })
		},
		//获取科目以及分类
		getClassify(t?:any) {
		    return _send({
		        url: 'getClassify',
		        method: 'GET',
		        login: 0,
		        data: t
		    })
		},
		//获取科目章节
		getProblemChapter(t?:any) {
		    return _send({
		        url: 'getProblemChapter',
		        method: 'GET',
		        login: 0,
		        data: t
		    })
		},
		//获取章节下题目
		getChapterProblem(t?:any) {
		    return _send({
		        url: 'getChapterProblem',
		        method: 'POST',
		        login: 0,
		        data: t
		    })
		},
		//获取套卷列表
		getExam(t?:any) {
		    return _send({
		        url: 'getExam',
		        method: 'GET',
		        login: 0,
		        data: t
		    })
		},
		//获取套卷题目
		getExamProblem(t?:any) {
		    return _send({
		        url: 'getExamProblem',
		        method: 'GET',
		        login: 0,
		        data: t
		    })
		},
		//获取课程分类
		getCourseClass(t?:any) {
		    return _send({
		        url: 'getCourseClass',
		        method: 'GET',
		        login: 0,
		        data: t
		    })
		},
		//获取日历列表
		noteReport(t?:any) {
		    return _send({
		        url: 'noteReport',
		        method: 'POST',
		        login: 0,
		        data: t
		    })
		},
		//添加笔记
		addNote(t?:any) {
		    return _send({
		        url: 'addNote',
		        method: 'POST',
		        login: 0,
		        data: t
		    })
		},
		//获取笔记
		getNoteList(t?:any) {
		    return _send({
		        url: 'getNoteList',
		        method: 'POST',
		        login: 0,
		        data: t
		    })
		},
		//获取考研倒计时
		getDate(t?:any) {
		    return _send({
		        url: 'getDate',
		        method: 'GET',
		        login: 1,
		        data: t
		    })
		},
		
		//获取课程详情
		getCourseList(t?:any) {
		    return _send({
		        url: 'getCourseList',
		        method: 'GET',
		        login: 0,
		        data: t
		    })
		},
		
		//考研资料
		getData(t?:any) {
		    return _send({
		        url: 'getData',
		        method: 'GET',
		        login: 0,
		        data: t
		    })
		},
		//考研资料详情
		getDataDetails(t?:any) {
		    return _send({
		        url: 'getDataDetails',
		        method: 'GET',
		        login: 0,
		        data: t
		    })
		},
		//获取科目错题本
		getErrorTrainProblem(t?:any) {
		    return _send({
		        url: 'getErrorTrainProblem',
		        method: 'POST',
		        login: 0,
		        data: t
		    })
		},
		//获取套卷错题本
		getMyErrorExamLog(t?:any) {
		    return _send({
		        url: 'getMyErrorExamLog',
		        method: 'POST',
		        login: 0,
		        data: t
		    })
		},
		//删除笔记
		delNote(t?:any) {
		    return _send({
		        url: 'delNote',
		        method: 'POST',
		        login: 0,
		        data: t
		    })
		},
		upImage(t?:any) {
		    return _send({
		        url: 'upImage',
		        method: 'POST',
		        login: 1,
		        data: t
		    })
		},
		
		//提交考试结果
		subExamResult(t?:any) {
		    return _send({
		        url: 'subExamResult',
		        method: 'POST',
		        login: 0,
		        data: t
		    })
		},
		//提交练习结果
		subTrainResult(t?:any) {
		    return _send({
		        url: 'subTrainResult',
		        method: 'POST',
		        login: 0,
		        data: t
		    })
		},
		
		//获取课程视频
		getCourseVideo(t?:any) {
		    return _send({
		        url: 'getCourseVideo',
		        method: 'GET',
		        login: 0,
		        data: t
		    })
		},
}

export default apiUrl



    