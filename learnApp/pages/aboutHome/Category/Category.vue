<template>
	<view class="content">
		<view class="cate">
		    <view class="left">
		        <view :class="currentindex==index?'active':'cateitem'" v-for="(item,index) in store.state.Home.classList" :key="index" :data-id="index" @click="currentindex=index">{{item.title}}</view>
		    </view>
		    <view class="right">
		       <view class="catename" v-for="(item,index) in store.state.Home.classList">
				   <template v-if="currentindex==index">
					   <view class="classname">————{{item.title}}————</view>
					   <view class="classitem">
						   <template v-for="child in item.children">
					      <view  :data-child="child" @click="choosed"  :class="child.id==store.state.Home.classItem.id?'blueborder':''">{{child.title}}</view>
						  </template>
					   </view>
				   </template>
		           
		       </view>
		       
		    </view>
		</view>
	</view>
</template>

<script lang='ts' setup>
	import {ref} from 'vue'
	import {useStore} from "vuex"
	import {onLoad,onShow,} from "@dcloudio/uni-app"
	import set_get from "@/utils/set_get"
	let store=useStore()
	
	onLoad(()=>{
		
	})
	onShow(()=>{
		
	})
	let  currentindex =ref(0)
	let choosed=(e:any)=>{
		  const classItem = e.currentTarget.dataset.child
		   set_get.setClassItem(classItem)
		   store.commit('Home/SETCLASSITEM',classItem)
		  setTimeout(()=>{
			   uni.navigateBack()
		  },100)
	}
</script>

<style lang="scss">
.cate{
    display: flex;
    height: 100vh;
	.left{
	    height: 100%;
	    background-color: white;
	    width: 30%;
	    display: flex;
	    align-items: center;
	    flex-direction: column;
	   font-weight: 600;
	   .cateitem{
	       padding: 20rpx 0rpx;
	       width: 100%;
	       box-sizing: border-box;
	       text-align: center;
	   }
	   .active{
	       box-sizing: border-box;
	       width: 100%;
	       text-align: center;
	       color: #004BED;
	       padding: 20rpx 0rpx;
	       background-color: #FBFBFD;
	   }
	}
	.right{
	    height: 100%;
	    /* background-color: gray; */
	    width: 70%;
	    display: flex;
	    align-items: center;
	
	    flex-direction: column;
		.catename{
		    /* height: 100%; */
		    /* background-color: gray; */
		    width: 100%;
		    display: flex;
		    align-items: center;
		    margin-top: 20rpx;
		    flex-direction: column;
			.classname{
			    color: #8D8E99;
			    
			}
			
			.classitem{
			    width: 100%;
			   display: flex;
			   justify-content: space-around;
			 
			   flex-wrap: wrap;
			    view{
			       margin-top: 20rpx;
			       width: 200rpx;
			       background-color: white;
			       text-align: center;
			       border-radius: 40rpx;
			       height: 80rpx;
			       line-height: 80rpx;
			       box-sizing: border-box;
			     
			   }
			   .blueborder{
				   border:1rpx solid  #004BED;;
			   }
			}
		}
	}
}

</style>
