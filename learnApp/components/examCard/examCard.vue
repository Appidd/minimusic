<template>
	<view class="queList">
	        <view class="quean"  v-for="(item,index) in store.state.Home.examList" :key="index">
	            <view class="quean_top">
	                <view class="itemName">
	                    <view class="name">{{item.title}}</view>
	                </view>
	                <view class="itemnum">
	                    {{item.problem_num}}题
	                </view>
	            </view>
	            <view class="btns">
	                <!-- 公共课权限 -->
	                <template v-if="item.type==1">
	                    <template v-if="store.state.Home.major_vip_level>=item.vip_level">
	                        <view class="btn" @click="toExam" :data-item="item">
	                            <image src="../../static/images/home/answer.png"></image>
	                            <view>答题</view>
	                        </view>
	                        <view class="btn"  catchtap="toAnalysis" :data-item="item" data-type='1'>
	                            <image src="../../static/images/home/annysis.png"></image>
	                            <view>解析</view>
	                        </view>
	                    </template>
	
	                    <template v-else>
	                        <view class="btn" @click="toExam" :data-item="item" style="color: gray;">
	                            <image src="../../static/images/home/lock.png"></image>
	                            <view>答题</view>
	                        </view>
	                        <view class="btn"  @click="toAnalysis" :data-item="item" style="color: gray;" data-type='1'>
	                            <image src="../../static/images/home/lock.png"></image>
	                            <view>解析</view>
	                        </view>
	                    </template>
	                </template>
	                <!-- 公共课 -->
	                <template v-if="item.type==2">
	                    <template v-if="store.state.Home.userInfo.major_vip_level>=item.vip_level">
	                        <view class="btn" @click="toExam" :data-item="item">
	                            <image src="../../static/images/home/answer.png"></image>
	                            <view>答题</view>
	                        </view>
	                        <view class="btn"  @click="toAnalysis" :data-item="item" data-type='1'>
	                            <image src="../../static/images/home/annysis.png"></image>
	                            <view>解析</view>
	                        </view>
	                    </template>
	
	                    <template v-else>
	                        <view class="btn" @click="toExam" :data-item="item" style="color: gray;">
	                            <image src="../../static/images/home/lock.png"></image>
	                            <view>答题</view>
	                        </view>
	                        <view class="btn"  @click="toAnalysis" :data-item="item" style="color: gray;" data-type='1'>
	                            <image src="../../static/images/home/lock.png"></image>
	                            <view>解析</view>
	                        </view>
	                    </template>
	                </template>
	            </view>
	        </view>
			
			
			<view class="" v-if="store.state.Home.examList.length==0" >
				<u-empty
				        mode="data"
				        icon="http://cdn.uviewui.com/uview/empty/data.png"
				>
				</u-empty>
			</view>
	</view>
		
</template>

<script lang="ts" setup>
	import {useStore} from "vuex"
	let store = useStore()
	let toAnalysis=(e:any)=>{
		 
		        const examItem = e.currentTarget.dataset.item
		        const userInfo=store.state.Home.userInfo
		        const common_vip_level = userInfo.common_vip_level
		        const major_vip_level = userInfo.major_vip_level
		      
		
		            if (examItem.type == 1) {
		                if (common_vip_level < examItem.vip_level) {
		                    uni.showToast({
		                        title: '暂未解锁',
		                        icon: 'none'
		                    })
		                } else if (examItem.problem_num == 0 || examItem.num == 0) {
		                    uni.showToast({
		                        title: '暂无题目',
		                        icon: 'none'
		                    })
		                } else {
							
		                    uni.navigateTo({
		                        url: '/pages/aboutQuestion/HomeAnalysis/HomeAnalysis?id='+ examItem.id+ '&atype=' + 2,
		                    })
		                }
		            } else {
		                if (major_vip_level < examItem.vip_level) {
		                    wx.showToast({
		                        title: '暂未解锁',
		                        icon: 'none'
		                    })
		                } else if (examItem.problem_num == 0 || examItem.num == 0) {
		                    uni.showToast({
		                        title: '暂无题目',
		                        icon: 'none'
		                    })
		                } else {
		                    uni.navigateTo({
		                       url: '/pages/aboutQuestion/HomeAnalysis/HomeAnalysis?id='+ examItem.id+ '&atype=' + 2,
		                    })
		                }
		            }
	}
	
	let toExam=()=>{
		console.log('toExam')
	}
</script>

<style lang="scss">
.queList{
	 font-size: 28rpx;
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