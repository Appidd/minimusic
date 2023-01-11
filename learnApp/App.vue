<script >
	export default {
			onLaunch: function() {
				 const updateManager = uni.getUpdateManager()
				 updateManager.onCheckForUpdate(function(res) {
				 	// 请求完新版本信息的回调
				 	console.log(res.hasUpdate)
				 })
				 updateManager.onUpdateReady(function() {
				 	wx.showModal({
				 		title: '更新提示',
				 		content: '新版本已经准备好，是否重启应用？',
				 		success: function(res) {
				 			if (res.confirm) {
				 				// 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
				 				updateManager.applyUpdate()
				 			}
				 		}
				 	})
				 })
				 updateManager.onUpdateFailed(function() {
				 	// 新版本下载失败
				 })
			},
			onShow: function() {
				
				 console.log('App Show')
			},
			onHide: function() {
			 console.log('App Hide')
			},
	       globalData:{
	       baseUrl: 'https://www.baidu.com/',
	       logined: false,
	       capsuleInfo:uni.getMenuButtonBoundingClientRect()
		}
	}
		
	
</script>

<style lang='scss'>
	@import "static/style/icon.css";
	@import "uview-plus/index.scss";

	page {
		background-color: #FBFBFD;
	}

	.content {
		padding: 28rpx;
	}

	/*每个页面公共css */
</style>
