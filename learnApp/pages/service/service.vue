<template>
	<view>
		<view class="top">
		    <view class="category" @click="chooseCategory">
		        <view class="catname">{{store.state.Service.classItem.title}}</view>
		        <image src="@/static/images/home/anger.png"></image>
		    </view>
		</view>
		
		<view class="card" v-for="(item ,index) in store.state.Service.courseClassList" :key="index">
		    <view class="titleLine">
		        <view class="title">{{item.title}}</view>
		        <view class="arrbox" @click="lookmore" :data-item="item" >
		            <view> 查看更多</view>
		            <image src="@/static/images/mine/Frame@3x.png" class="lookonly" />
		        </view>
		    </view>
		    <view class="tagList">
		        <view v-for="(tag,index1) in item.tag" :key="index1">{{tag}}</view>
		    </view>
		    <view class="courseList">
		       
		            <view v-for="(course,index2) in item.course"  @click="tocourse" :data-id="course.id" class="courseItem" :key="index2">
		                <block v-if="index2<2">
		                    <image class="coursepic" :src="course.cover" mode="aspectFill"></image>
		                <view class="coursetag">{{course.name}}</view>
		                </block>
		            </view>
		        
		    </view>
		    
		</view>
	</view>
</template>

<script setup lang="ts">
	import {useStore} from "vuex"
	import {onLoad,onShow} from "@dcloudio/uni-app"
	let store=useStore()
	let chooseCategory=()=>{
		uni.navigateTo({
			url:'/pages/aboutCourse/Category/Category'
		})
	}
	let lookmore=()=>{
		console.log('查看更多')
	}
	let tocourse=()=>{
		console.log('课程详情')
	}
	onLoad((options) => {
		store.dispatch('Service/ReadyService')
		console.log(options)
	})
	onShow(() => {
		//重新获取用户信息以及考试科目信息
		store.dispatch('Home/CheckClassItem')
	})
</script>

<style lang="scss">
.top {
    margin: 20rpx;
    display: flex;
    justify-content: space-between;
	.category {
	    font-size: 36rpx;
	    font-weight: 600;
	    display: flex;
	    align-items: center;
		image {
		    width: 20rpx;
		    height: 20rpx;
		    margin-left: 20rpx;
		}
	}
}
.card {
    padding: 20rpx;
    box-sizing: border-box;
	.titleLine {
	    display: flex;
	    justify-content: space-between;
		.title {
		    font-size: 32rpx;
		    font-weight: 600;
		}
		
		.arrbox {
		    display: flex;
		    align-items: center;
		    color: #8D8E99;
		    font-size: 28rpx;
			.lookonly{
			    width: 15rpx;
			    height: 25rpx;
			    margin-left: 20rpx;
			}
		}
	}
	.tagList {
	    display: flex;
	    margin-top: 20rpx;
		view {
		    font-size: 28rpx;
		    color: #588BF9;
		    background-color: #E1EBFF;
		    margin-right: 20rpx;
		    padding: 5rpx 10rpx;
		    border-radius: 10rpx;
		}
	}
	.courseList {
	
	    margin-top: 20rpx;
	    display: flex;
	    justify-content: space-between;
	    flex-wrap: wrap;
	    box-sizing: border-box;
		.courseItem{
		    width: 345rpx;
		    box-sizing: border-box;
			.coursepic {
			    margin-top: 10rpx;
			    width: 345rpx;
			    height: 260rpx;
			    border-radius: 10rpx;
			}
			.coursetag {
			    width: 345rpx;
			    font-weight: 600;
			    margin-top: 10rpx;
			}
		}
	}
}
</style>
