<template>
	<view class="content">
		<img src="../../static/images/index/bg.png" alt="" class="bg">
		<view class="recontent">
			<image src="../../static/images/index/title.png" class="title" />
			<image src="../../static/images/index/logo.png" class="logo" />
			<image src="../../static/images/index/guitar.png" class="guitar" />
			<view class="btn" @click="toHome" v-if="store.state.Global.showIndexBtn">开始学习</view>
			<view class="btitle">每一次上岸都因为选择相信!</view>
		</view>
	</view>
</template>

<script lang="ts" setup>
	import {
		useStore
	} from 'vuex'
	import {
		onLoad,
		onShow
	} from "@dcloudio/uni-app"
	import set_get from "@/utils/set_get"

	let store = useStore()

	onLoad(() => {
		let token = set_get.getToken()
		console.log(token)
		if (token) {
			store.commit('Global/SETINDEXBTN')
		} else {
			store.dispatch('Global/Login')
		}
	})
	let toHome = () => {
		uni.switchTab({
			url: "/pages/home/home"
		})
	}
	onShow(() => {
		// 页面显示时执行
	})
</script>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		.bg {

			height: 600rpx;
			width: 100vw;
		}

		.recontent {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			// height: 600rpx;
			// background-color: rebeccapurple;
			margin-top: -300rpx;
			width: 100vw;

			.title {
				height: 60rpx;
				width: 580rpx;
			}

			.logo {
				height: 60rpx;
				width: 340rpx;
				margin-top: 40rpx;
			}

			.guitar {
				margin-top: 30rpx;
				width: 600rpx;
			}

			.btn {
				width: 600rpx;
				text-align: center;
				height: 90rpx;
				line-height: 90rpx;
				color: white;
				font-size: 26rpx;
				background-image: linear-gradient(to right, #588BF9, #004BED);
				border-radius: 45rpx;
				margin-top: 80rpx;
				box-shadow: 10rpx 10rpx 30rpx rgba(16, 50, 255, 0.2100);
			}

			.btitle {
				margin-top: 40rpx;
				font-size: 28rpx;
				color: #819AFF;
			}
		}
	}
</style>
