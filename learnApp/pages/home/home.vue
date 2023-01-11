<template>
	<view class="content">
		<view class="top">
			<view class="category" @click="chooseClass">
				<view class="catname">{{store.state.Home.classItem.title}}</view>
				<image src="@/static/images/home/anger.png"></image>
			</view>
			<view class="errorbook" @click="toerrbook">
				<image src="@/static/images/home/errobook.png"></image>
				<view>错题本</view>
			</view>
		</view>
		<view class="bannerBox">
			<swiper autoplay="true" circular="true" class="bannerSwiper">
				<swiper-item v-for="(item,index) in store.state.Home.banner" :key="index">
					<view class="banner">
						<image alt="" class="bannerImg" lazyLoad="true" :src="item.img_url" @click="topath"
							:data-item="item"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<!-- 切换按钮 -->
		<view class="caquestion">
			<view :class="['course',currentIndex==1?'active':'']" @click="changeCaquestion" data-index="1">科目章节</view>
			<view :class="['course',currentIndex==2?'active':'']" @click="changeCaquestion" data-index="2">套卷练习</view>
		</view>
		
		<!-- 题目以及套卷列表 -->
		<QuesCard  v-show="currentIndex==1"/>
		<ExamCard v-show="currentIndex==2"/>
	
	</view>
</template>

<script lang="ts" setup>
	import {ref} from "vue"
	import {useStore} from "vuex"
	import {onLoad,onShow,} from "@dcloudio/uni-app"
	import ExamCard from "@/components/examCard/examCard.vue"
	import QuesCard from "@/components/quesCard/quesCard.vue"
	let store = useStore()
	let currentIndex = ref(1)
	onLoad((options) => {
		store.dispatch('Home/GetBanner')
		console.log(options)
	})
	onShow(() => {
		//重新获取用户信息以及考试科目信息
		console.log(getApp())
		store.dispatch('Home/CheckClassItem')
	})
	let topath = (e: any) => {
		const item = e.currentTarget.dataset.item
		console.log(item)
		switch (item.type) {
			case 1:
				uni.navigateTo({
					url: '../web/web?targetUrl=' + item.path,
				})
				break;
			case 2:
				uni.navigateTo({
					url: item.path,
				})
				break;
			default:
				break;
		}
	}
	let chooseClass = () => {
		uni.navigateTo({
			url:'../aboutHome/Category/Category'
		})
	}
	let toerrbook = () => {
		uni.navigateTo({
			url:'../aboutHome/ErroBook/ErroBook'
		})
	}
	let changeCaquestion = (e:any) => {
		console.log(e)
		currentIndex.value = e.currentTarget.dataset.index
	}
	
</script>

<style lang="scss">
	.top {
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
		
		.errorbook {
			font-size: 30rpx;
			display: flex;
			align-items: center;
		
			image {
				width: 30rpx;
				height: 40rpx;
				margin-right: 10rpx;
			}
		}
		
	}
	.bannerBox {
		margin-top: 20rpx;
		height: 280rpx;
		border-radius: 20rpx;

		.bannerImg {
			width: 100%;
			height: 280rpx;
			border-radius: 20rpx;

		}
	}
	.caquestion {
		display: flex;
		
		.active,.course {
		    margin: 28rpx;
		    width: fit-content;
		    position: relative;
		}
		.active {
		    font-size: 32rpx;
		    font-weight: 600;
		}
		.active::after {
		    content: '';
		    position: absolute;
		    height: 8rpx;
		    width: 50rpx;
		    background-image: linear-gradient(to right, #588BF9, #004BED);
		    right: 50%;
		    transform: translate(50%, 50%);
		    bottom: -10rpx;
		    border-radius: 4rpx;
		}
	}
	.queList{
		.outbox {
		    display: flex;
		    justify-content: center;
		    align-items: flex-end;
		    flex-direction: column;
		    background-color: white;
		    margin-top: 20rpx;
		    padding: 20rpx 0rpx;
			.queItem {
			    box-sizing: border-box;
			    width: 100%;
			    background-color: red;
			    border-radius: 20rpx;
			    display: flex;
			    align-items: center;
			    padding: 0rpx 20rpx;
			    justify-content: space-between;
				
				.itemName image {
				    width: 30rpx;
				    height: 30rpx;
				    margin-right: 20rpx;
				}
			}
			.quean2 {
			    box-sizing: border-box;
			    width: 100%;
			    align-items: center;
			    padding: 0rpx 20rpx;
			   .quean_top {
			       display: flex;
			       justify-content: space-between;
				   .itemName {
				       display: flex;
				       align-items: center;
				   }
				   .itemName image {
				       width: 30rpx;
				       height: 30rpx;
				       margin-right: 20rpx;
				   }
				   .itemnum {
				       font-size: 28rpx;
				       color: #8D8E99;
				       display: flex;
				       justify-content: center;
				       align-items: center;
				       width: auto;
				   }
			   }
			  .btns {
			      display: flex;
			      flex-direction: row-reverse;
			      margin-top: 30rpx;
				  .btn {
				      display: flex;
				      align-items: center;
				      font-size: 26rpx;
				      color: #1B1C33;
				      background-color: #F3F5F7;
				      width: 140rpx;
				      height: 60rpx;
				      justify-content: center;
				      border-radius: 30rpx;
				  }
				  
				  .btn:last-child {
				      margin-right: 20rpx;
				  }
				  
				  .btn image {
				      width: 30rpx;
				      height: 30rpx;
				      margin-right: 10rpx;
				  }
			  }
			}
		}
	}

</style>
