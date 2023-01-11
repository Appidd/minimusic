<template>
	<view>
		<view class="toplist">
			<view class="topitem">
				<view>{{store.getters['TestExam/persent']||0}}%</view>
				<view class="title">正确率</view>
			</view>
		</view>
		<view class="grayline"></view>
		<view class="quescard">
			<view class="dtk">————答题卡————</view>

			<view class="tags">
				<view class="cright circle"></view>
				<view>答对</view>
				<view class="ccenter circle"></view>
				<view>答错</view>
				<view class="notr circle"></view>
				<view>未答</view>
			</view>
			<view class="quebox">
				<view class="chooseitem" v-for="(item ,index) in store.state.TestExam.problemList">
					<view :class="['qcircle' ,item.result==1?'cright':item.result==2?'ccenter':'']" @click="choosePro"
						:data-index="index">{{index+1}}</view>
				</view>
			</view>
		</view>
		<view class="btnlist">
			<view class="allanalysis" @click="getback">继续练习</view>
			<view class="erranalysis" @click="collect">提交结果</view>
		</view>

	</view>
</template>

<script lang="ts" setup>
	import {
		useStore
	} from 'vuex'
	import {
		ref
	} from 'vue'
	
	let store = useStore()
	let choosePro = (e:any) => {
		store.commit('TestExam/SETINDEX',e.currentTarget.dataset.index)
		uni.navigateBack()
		console.log(e)
		console.log('选择题目')
	}
	let getback = () => {
		uni.navigateBack()
		console.log('返回练习')
	}
	let collect = () => {
		console.log('收藏结果')
	}
</script>

<style lang="scss">
	.toplist {

		padding: 40rpx 20rpx;
		width: 100%;
		background-color: white;
		display: flex;
		justify-content: center;
		box-sizing: border-box;

		.topitem {
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;

			.title {
				margin-top: 15rpx;
				color: #8D8E99;
			}
		}
	}

	.grayline {
		height: 20rpx;
		background-color: #EEF0F2;
	}
	.quescard {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 40rpx 20rpx;
	
		.dtk {
			color: #8D8E99;
		}
	
		.circle {
			height: 30rpx;
			width: 30rpx;
			border-radius: 50%;
			margin-right: 20rpx;
			margin-left: 20rpx;
		}
	
		.cright {
			background-image: linear-gradient(to right, #588BF9, #004BED);
		}
	
		.ccenter {
			background-image: linear-gradient(to right, #F09819, #FF512F);
		}
	
		.notr {
			background-color: #BFBFBF;
		}
	
		.tags {
			display: flex;
			align-items: center;
			margin-top: 20rpx;
	
		}
	
		.quebox {
			width: 700rpx;
			display: flex;
			flex-wrap: wrap;
			justify-content: flex-start;
			margin-bottom: 200rpx;
	
			.chooseitem {
				margin-top: 20rpx;
				width: 140rpx;
				display: flex;
				justify-content: center;
				align-items: center;
	
				.qcircle {
					width: 80rpx;
					height: 80rpx;
					background-color: #BFBFBF;
					border-radius: 50%;
					text-align: center;
					line-height: 80rpx;
					color: white;
				}
			}
		}
	}
	
	.btnlist {
		position: fixed;
		padding: 20rpx;
		width: 100%;
		display: flex;
		justify-content: space-between;
		box-sizing: border-box;
		bottom: 20rpx;
	
		.allanalysis {
			width: 320rpx;
			text-align: center;
			height: 80rpx;
			color: white;
			line-height: 80rpx;
			background-image: linear-gradient(to right, #588BF9, #004BED);
			border-radius: 40rpx;
		}
	
		.erranalysis {
			width: 320rpx;
			text-align: center;
			height: 80rpx;
			color: white;
			line-height: 80rpx;
			background-image: linear-gradient(to right, #F09819, #FF512F);
			border-radius: 40rpx;
		}
	}
		
</style>
