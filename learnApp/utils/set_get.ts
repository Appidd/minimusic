var t = {
	// 存储token
  setToken: function (data:any) {
    uni.setStorageSync('token', data)
  },
  getToken: function () {
    return uni.getStorageSync('token')
  },
  // 存储用户信息
  setUserInfo: function (data:any) {
    uni.setStorageSync('userInfo', data)
  },
  getUserInfo: function () {
    return uni.getStorageSync('userInfo')
  },
  //存储科目信息
  setClassItem: function (data:any) {
    uni.setStorageSync('classItem', data)
  },
  getClassItem: function () {
    return uni.getStorageSync('classItem')
  },
  //存储章节信息
  setChapterObj: function (data:any) {
    return uni.setStorageSync('chapterObj', data)
  },
  getChapterObj: function () {
    return uni.getStorageSync('chapterObj')
  },
  //存储套卷信息
  setExamObj: function (data) {
    return uni.setStorageSync('examObj', data)
  },
  getExamObj: function () {
    return uni.getStorageSync('examObj')
  },
  //设置套卷答题列表
  setproblemList: function (data) {
    return uni.setStorageSync('problemList', data)
  },
  getproblemList: function () {
    return uni.getStorageSync('problemList')
  },
  // 设置套卷解析列表（答题后）
  setanalysisList: function (data) {
    return uni.setStorageSync('analysisList', data)
  },
  getanalysisList: function () {
    return uni.getStorageSync('analysisList')
  },
  //查看更多课程
  setcouresList: function (data:any) {
    return uni.setStorageSync('couresList', data)
  },
  getcouresList: function () {
    return uni.getStorageSync('couresList')
  },
}
export default t