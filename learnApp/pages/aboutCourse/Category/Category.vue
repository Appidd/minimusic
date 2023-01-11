<template>
	<view class="catename" v-for="(item,index) in store.state.Service.classList" :key="index">
	    <view :class="store.state.Service.classItem.id==item.id?'classnamed':'classname'" @click="changeCate(item)" >{{item.title}}</view>
	</view>
</template>

<script lang="ts" setup>
	import {useStore} from "vuex"
	import {onLoad,onShow} from "@dcloudio/uni-app"
	let store=useStore()
	let changeCate=(item:any)=>{
		store.dispatch('Service/GetCourceList',item)
		console.log(item)
		wx.navigateBack()
	}
	
	onLoad((options) => {
		console.log(options)
	})
	onShow(() => {
		
	})
</script>

<style lang="scss">
.catename{
    margin-top: 30rpx;
    height: 80rpx;
    width: 100%;
    display: flex;
    justify-content: center; 
	.classname{
	    color: #8D8E99;
	    background-color: white;
	    height: 80rpx;
	    line-height: 80rpx;
	   width: 600rpx;
	   text-align: center;
	   border-radius: 40rpx;
	}
	.classnamed{
	    color: #004BED;
	    background-color: white;
	    height: 80rpx;
	    line-height: 80rpx;
	   width: 600rpx;
	   text-align: center;
	   border-radius: 40rpx;
	}
}
</style>
