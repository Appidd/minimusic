<template>
	<view>

		<view :style="'margin-top:'+capsuleInfo.top+'px;'+'height:'+ capsuleInfo.height+'px;'" class="top">
			个人中心
		</view>
		
		<image src="@/static/images/mine/bg.png" class="bgtop"></image>
		<view class="outcontentbox">
			<view class="userInfo">
				<image :src="store.state.Global.userInfo.headimgurl||'@/static/images/mine/head.png'" class="avator"></image>
				<view class="userName">{{store.state.Global.userInfo.nickname||'游客'}}</view>
			</view>
			
			        <view class="reabox">
			            <view class="timeLine">
			                <view class="left_item">
			                   <picker mode = selector :range="store.state.Global.yearlist" @change="yearchange" :value="index">
			                    <view>{{store.state.Global.year}}考研</view>
			                   </picker>
			                    <image src="@/static/images/mine/ic_grzx_xx@3x.png" style="width: 25rpx;height: 16rpx;margin-left: 10rpx;" />
			                </view>
			                <view v-if="store.state.Global.day>=0">倒计时<text style="font-size: 40rpx;font-weight: 600;margin-left: 5rpx;margin-right: 5rpx;" >{{store.state.Global.day}}</text>天</view>
			                <view wx:else>已过去<text style="font-size: 40rpx;font-weight: 600;margin-left: 5rpx;margin-right: 5rpx;" >{{-store.state.Global.day}}</text>天</view>
			            </view>
			            <view class="timeLine" style="border-bottom:1rpx solid #EEF0F2;" bindtap="touser">
			                <view class="left_item">
			                    <image src="@/static/images/mine/ic_grzx_xxda@3x.png" style="width: 40rpx;height: 40rpx;margin-right: 10rpx;" />
			                    <view>个人档案</view>
			                </view>
			                <view class="right_item">
			                    <image src="@/static/images/mine/Frame@3x.png" style="width: 15rpx;height: 25rpx;margin-left: 20rpx;" />
			                </view>
			            </view>
			            <view class="timeLine" style="border-bottom:1rpx solid #EEF0F2;" bindtap="todown">
			                <view class="left_item">
			                    <image src="@/static/images/mine/ic_grzx_xzzy@3x.png" style="width: 40rpx;height: 40rpx;margin-right: 10rpx;" />
			                    <view>下载资源</view>
			                </view>
			                <view class="right_item">
			                    <!-- <view>更新至2020年考研</view> -->
			                    <image src="@/static/images/mine/Frame@3x.png" style="width: 15rpx;height: 25rpx;margin-left: 20rpx;" />
			                </view>
			            </view>
			            <view class="timeLine" style="border-bottom:none;" bindtap="tonote">
			                <view class="left_item">
			                    <image src="@/static/images/mine/ic_grzx_wdbj@3x.png" style="width: 40rpx;height: 40rpx;margin-right: 10rpx;" />
			                    <view>我的笔记</view>
			                </view>
			                <view class="right_item">
			                    <image src="@/static/images/mine/Frame@3x.png" style="width: 15rpx;height: 25rpx;margin-left: 20rpx;" />
			                </view>
			            </view>
			        </view>
			   
		</view>
	    
	</view>
</template>

<script setup lang="ts">
	import {
		onLoad,
		onShow
	} from "@dcloudio/uni-app"
	import {useStore} from "vuex"
	let store=useStore()
	let app = getApp()
	
	console.log(app)
	let capsuleInfo = app.globalData.capsuleInfo
	let yearchange=(e:any)=>{
		console.log(e.detail.value)
		store.commit('Global/CHANGETIME',e.detail.value)
		console.log('切换年份',e)
	}
	onLoad(() => {
		store.dispatch('Global/GetDate')
		console.log(capsuleInfo)
	})
	onShow(() => {
		store.dispatch('Global/GetUserInfo')
		console.log('onshow')

	})
</script>

<style lang="scss">
	.top {
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		width: 100%;
		color: white;
		z-index: 9;
		font-size: 28rpx;
	}
	.bgtop {
		width: 100vw !important;
		height: 500rpx;
		background-color: green;
	}
	.outcontentbox {
		width: 750rpx !important;
		display: flex;
		margin-top: -360rpx;
		align-items: center;
		flex-direction: column;
		position: relative;
		.userInfo {
			width: 100%;
			display: flex;
			bottom: 110rpx;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			font-size: 32rpx;
			color: white;
			.avator {
				height: 130rpx;
				width: 130rpx;
				border-radius: 65rpx;
				border: 5rpx solid white;
				box-sizing: border-box;
			}
			.userName {
				margin-top: 20rpx;
			}

		}
	.reabox {
	    margin-top: 30rpx;
	    width: 90%;
	    background-color: white;
	    border-radius: 20rpx;
	    padding: 0rpx 5rpx 60rpx 5rpx;
		.timeLine {
		    display: flex;
		    justify-content: space-between;
		    padding: 40rpx;
		    border-bottom: 1rpx solid gray;
			.left_item {
			    font-size: 28rpx;
			    display: flex;
			    align-items: center;
			}
			
			.right_item {
			    font-size: 28rpx;
			    display: flex;
			    align-items: center;
			    color: #8D8E99;
			}
		}
		.timeLine:first-child {
		
		    padding: 19rpx 20rpx;
		    border-bottom: 1rpx dotted gray;
		}
	}
	}
</style>
