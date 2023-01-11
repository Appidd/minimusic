<template>
	<view class="footer">
	    <view class="btns">
	        <view class="leftbtn" @click="lastquestion" v-if="current!=1">
	            <image src="@/static/images/common/triangle.png" style="transform:rotate(180deg);"></image>
	            <view style="margin-left: 10rpx;" >上一题</view>
	        </view>
			<view class="" v-else>
				
			</view>
	        <view class="leftbtn" @click="nextquestion" v-if="current!=total">
	            <view style="margin-right: 10rpx;">下一题</view>
	            <image src="@/static/images/common/triangle.png"></image>
	        </view>
	    </view>
	</view>
</template>
<script lang="ts" setup>
	import {useStore} from 'vuex'
	import {computed} from 'vue'
	let store=useStore()
	let current= computed(() => {
		return store.state.TestExam.currentIndex+1
	})
	let total=computed(() => {
		return store.state.TestExam.problemList.length
	})
	let lastquestion=()=>{
		store.commit('TestExam/SUBINDEX')
	}
	let nextquestion=()=>{
		store.commit('TestExam/ADDINDEX')
	}
</script>

<style lang="scss">
.footer{
    /* position: fixed; */
    width: 100%;
    /* height: 120rpx; */
    background-color: #fff;
    bottom: 0rpx;
    display: flex;
    justify-content: space-between;
    align-items: center;
   flex-direction: column;
    box-sizing: border-box;
	.btns{
	    display: flex;
	    width: 100%;
	    padding: 30rpx 30rpx;
	    justify-content: space-between;
	    box-sizing: border-box;
		
		.leftbtn{
		    display: flex;
		    align-items: center;
		    font-size: 26rpx;
		    color:#1B1C33;
		    box-shadow: 10rpx 10rpx 30rpx rgba(0, 0, 0, 0.06);
		    width: 120rpx;
		    height: 50rpx;
		    line-height: 50rpx;
		    justify-content: center;
		    border-radius: 25rpx;
			image{
			    width: 10rpx;
			    height: 20rpx;
			}
		}
	}
}
</style>