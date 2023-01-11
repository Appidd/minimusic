<template>
	<view>

		<!-- 题目样式 -->
		<view class="question">
			<!-- 图片题目 -->
			<view class="tmcontent" v-if="curProblem.title_type==1">
				<view>{{curProblem.title}}</view>
				<image :src="curProblem.right_key_img" class="queimg" bindtap="preimg"
					:data-url="curProblem.right_key_img" mode="widthFix" style="width: 100%;"></image>
			</view>
			<!-- 语音题目 -->
			<view class="tmcontent" v-if="curProblem.title_type==2">
				<view>{{curProblem.title}}</view>
				<view class="audiobox">
					<audio poster="../../images/index/guitar.png" :src="curProblem.voice_title" id="myAudio" controls
						loop></audio>
				</view>
			</view>
			<!-- 文本题目 -->
			<view class="tmcontent" v-if="curProblem.title_type==3">{{curProblem.title}}</view>
		</view>
		<view class="clist">
			<view class="clist_top">
				<view class="qtype">
					{{curProblem.type==1?'单选题':curProblem.type==2?'多选题':curProblem.type==3?'填空题':curProblem.type==4?'判断题':'主观题'}}
				</view>
				<view><text class="checkedNn">{{currentIndex+1}}</text>/{{problemList.length}}</view>
			</view>
			<!-- 单选题 -->
			<view class="chCard" v-if="curProblem.type==1">
				<block v-for=" (selectItem,index) in curProblem.ans" v-if="!curProblem.openanalysis" :key="index">
					<view :class="curProblem.choosedList.includes(selectItem.number)?'choosedItem':'chCardIitem'"
						@click="chooseone" :data-chooseAnswer="selectItem.number">
						<view :class="curProblem.choosedList.includes(selectItem.number)?'chbtnd':'chbtn'">
							{{selectItem.number}}
						</view>
						<view>{{selectItem.content}}</view>
					</view>
				</block>
				<block v-for="(selectItem,index) in curProblem.ans" v-if="curProblem.openanalysis" :key="index">
					<view
						:class="(curProblem.right_keyList.includes(selectItem.number)||curProblem.choosedList.includes(selectItem.number))?'choosedItem':'chCardIitem'">
						<view
							:class="curProblem.right_keyList.includes(selectItem.number)?'chbtnd':curProblem.choosedList.includes(selectItem.number)?'errchbtn':'chbtn'">
							{{selectItem.number}}
						</view>
						<view>{{selectItem.content}}</view>
					</view>
				</block>
			</view>
			<!-- 多选题 -->
			<view class="chCard" v-if="curProblem.type==2">
				<block v-for=" (selectItem,index) in curProblem.ans" v-if="!curProblem.openanalysis" :key="index">
					<view :class="curProblem.choosedList.includes(selectItem.number)?'choosedItem':'chCardIitem'"
						@click="choosesome" :data-chooseAnswer="selectItem.number">
						<view :class="curProblem.choosedList.includes(selectItem.number)?'chbtnd':'chbtn'">
							{{selectItem.number}}
						</view>
						<view>{{selectItem.content}}</view>
					</view>
				</block>
				<block v-for="(selectItem,index) in curProblem.ans" v-if="curProblem.openanalysis" :key="index">
					<view
						:class="(curProblem.right_keyList.includes(selectItem.number)||curProblem.choosedList.includes(selectItem.number))?'choosedItem':'chCardIitem'">
						<view
							:class="curProblem.right_keyList.includes(selectItem.number)?'chbtnd':curProblem.choosedList.includes(selectItem.number)?'errchbtn':'chbtn'">
							{{selectItem.number}}
						</view>
						<view>{{selectItem.content}}</view>
					</view>
				</block>

			</view>
			<!-- 填空题 -->
			<view class="chCard1" v-if="curProblem.type==3">
				<textarea name="" id="" cols="30" rows="10" placeholder="请输入您的答案" class="answereare"
					placeholder-class="panswereare" maxlength="500" auto-height @input="inpanswer"
					data-index="{{index}}" bindblur="openana" :value="curProblem.textanswer"></textarea>
			</view>
			<!-- 判断题 -->
			<template v-if="curProblem.type==4">
				<view v-if="!curProblem.openanalysis">
					<u-radio-group v-model="curProblem.radio" placement="column">
						<u-radio :customStyle="{marginBottom: '8px'}" label="正确" name="1" @change="radioChange">
						</u-radio>
						<u-radio :customStyle="{marginBottom: '8px'}" label="错误" name="2" @change="radioChange">
						</u-radio>
					</u-radio-group>
				</view>
				<view v-if="curProblem.openanalysis" >
					<u-radio-group v-model="curProblem.radio" placement="column">
						<u-radio :customStyle="{marginBottom: '8px'}" label="正确" :labelDisabled="true" name="1"  :activeColor="curProblem.result==1?'':'red'">
						</u-radio>
						<u-radio :customStyle="{marginBottom: '8px'}" label="错误" :labelDisabled="true" name="2"  :activeColor="curProblem.result==1?'':'red'">
						</u-radio>
					</u-radio-group>
				</view>
			</template>
			<!-- 主观题 -->
			<view class="chCard1" v-if="curProblem.type==5">
				<textarea name="" id="" cols="30" rows="10" placeholder="请输入您的答案" class="answereare"
					placeholder-class="panswereare" maxlength="500" auto-height @input="inpanswer"
					:value="curProblem.textanswer"></textarea>
			</view>
		</view>
		<LastNext></LastNext>
		<!-- 解析 -->
		<!-- 单选题 多选题-->
		<view class="analyse"
			v-if="curProblem.openanalysis && (curProblem.type==1||curProblem.type==2||curProblem.type==4)">

			<view style="font-weight: 500;">答案</view>
			<view v-if="curProblem.type==4">
			    正确答案 <text style="margin-left: 20rpx;color: #004BED;">{{curProblem.right_key=='1'?'正确':'错误'}}</text>,你的答案<text :class="curProblem.result==1?'rright':'rwrong'">{{curProblem.radio=='1'?'正确':'错误'}}</text>
			</view>
			<view v-else>
				正确答案 <text style="margin-left: 20rpx;color: #004BED;">{{curProblem.right_key}}</text>,你的答案<text
					style="margin-left: 20rpx;color: {{curProblem.result==1?' #004BED':'#FF512F'}};">{{curProblem.choosed_key}}</text>
			</view>
			<view style="font-weight: 500; margin-top: 30rpx;">解析</view>
			<image v-if="curProblem.right_key_img" :src="curProblem.right_key_img" mode="widthFix" class="queimg"
				style="width: 100%;"></image>
			<view>
				{{curProblem.explain}}
			</view>
		</view>
		
		<!-- 填空题  主观题-->
		<view v-if="(curProblem.type==3||curProblem.type==5)" class="look" @click="openana" :data-index="currentIndex">
			{{curProblem.openanalysis?'隐藏解析':'查看解析'}}</view>

		<view class="analyse" v-if="(curProblem.type==3||curProblem.type==5)&&curProblem.openanalysis">
			<view style="font-weight: 500;">无标准答案</view>

			<view style="font-weight: 500; margin-top: 30rpx;">解析</view>
			<image v-if="curProblem.right_key_img" :src="curProblem.right_key_img" mode="widthFix" class="queimg"
				style="width: 100%;"></image>
			<view>
				{{curProblem.explain}}
			</view>
		</view>

		<view class="guide">
			<label>
				<button open-type="contact" style="display: none;"></button>
				<view class="guidebtn">备考规划指导</view>
			</label>
		</view>


		<Footer></Footer>

	</view>
</template>

<script setup lang="ts">
	import Footer from "@/components/TestFooter/TestFooter.vue"
	import LastNext from "@/components/LastNext/LastNext.vue"
	import {
		onLoad,
		onShow
	} from "@dcloudio/uni-app"
	import {
		useStore
	} from "vuex"
	import {
		computed
	} from "vue";

	let store = useStore()
	let curProblem = computed(() => {
		return store.getters['TestExam/curProblem']
	})
	let currentIndex = computed(() => {
		return store.state.TestExam.currentIndex
	})
	let problemList = computed(() => {
		return store.state.TestExam.problemList
	})
	//处理单选题
	let chooseone = (e: any) => {
		console.log(curProblem)

		store.commit('TestExam/RESETPONE', e.currentTarget.dataset.chooseanswer)
	}
	//处理多选题
	let choosesome = (e: any) => {
		console.log('choosesome')
		store.commit('TestExam/RESETPSOME', e.currentTarget.dataset.chooseanswer)
	}
	//处理填空题和主观题
	let inpanswer = (e: any) => {
		store.commit('TestExam/RESETTK', e.detail.value)
		console.log(e.detail)
	}
	// 处理判断题
	let radioChange = (e: any) => {
		console.log(e)
		store.commit('TestExam/RESETRADIO', e)
		// console.log(e.detail)

	}
	let openana = (e: any) => {

		store.commit('TestExam/CHANGEAN', e.currentTarget.dataset.index)

	}
	onLoad((e) => {
		console.log(e)
		store.dispatch('TestExam/getChapterProblem', e.id)
	})
	onShow(() => {
		console.log('onshow')
	})
</script>

<style lang="scss">
	.rright{
		margin-left:20rpx;
		 color:#004BED;
	}
	.rwrong{
		margin-left:20rpx;
		 color:red;
	}
	.question {
		/* margin: 28rpx; */
		background-color: #FBFBFD;
		padding: 28rpx;
		overflow: scroll;

		.tmcontent {
			margin-top: 10rpx;
		}
	}

	.clist {
		width: 100%;
		background-color: #fff;
		padding: 20rpx;
		box-sizing: border-box;

		.clist_top {
			display: flex;
			justify-content: space-between;

			.qtype {
				font-weight: 600;
			}

			.checkedNn {
				color: rgba(10, 82, 237, 1);
				font-size: 32rpx;
			}
		}

		.chCard {
			width: 100%;
			box-sizing: border-box;

			.choosedItem {
				display: flex;
				align-items: center;
				margin-top: 20rpx;
				padding: 5rpx 20rpx;
				background-color: rgba(251, 251, 253, 1);
				color: rgba(141, 142, 153, 1);
				font-size: 26rpx;

			}

			.chCardIitem {
				display: flex;
				align-items: center;
				margin-top: 20rpx;
				padding: 5rpx 20rpx;
				font-size: 26rpx;
				background-color: rgba(251, 251, 253, 1);

			}

			.chbtnd {
				height: 80rpx;
				width: 80rpx;
				border-radius: 40rpx;
				background-image: linear-gradient(to right, #588BF9, #004BED);
				text-align: center;
				box-sizing: border-box;
				line-height: 80rpx;
				margin-right: 15rpx;
				color: #fff;
				flex-shrink: 0;
			}

			.chbtn {
				height: 80rpx;
				width: 80rpx;
				border-radius: 40rpx;
				border: 1rpx solid rgba(0, 75, 237, 1);
				text-align: center;
				box-sizing: border-box;
				line-height: 80rpx;
				margin-right: 15rpx;
				color: rgba(0, 75, 237, 1);
				flex-shrink: 0;
			}

			.errchbtn {
				height: 80rpx;
				width: 80rpx;
				border-radius: 40rpx;
				background-image: linear-gradient(to right, #F09819, #FF512F);
				text-align: center;
				box-sizing: border-box;
				line-height: 80rpx;
				margin-right: 15rpx;
				color: #fff;
				flex-shrink: 0;
			}

		}

		.chCard1 {
			width: 100%;
			display: flex;
			justify-content: center;

			.answereare {
				margin-top: 20rpx;
				width: 700rpx;
				background-color: #F3F5F7;
				padding: 20rpx;
				font-size: 26rpx;
				min-height: 200rpx;
				border-radius: 20rpx;
			}

			.panswereare {
				font-size: 26rpx;
			}
		}

	}

	.analyse {
		font-size: 28rpx;
		padding: 20rpx;
	}

	.look {
		font-size: 28rpx;
		padding: 20rpx;
		color: #004BED;
	}

	.guide {
		width: 100%;
		display: flex;
		justify-content: center;
		padding: 60rpx 0rpx;
		color: #004BED;
		padding: 60rpx 0rpx 120rpx 0rpx;

		.guidebtn {
			height: 80rpx;
			line-height: 80rpx;
			text-align: center;
			border: 2rpx solid #004BED;
			width: 300rpx;
			border-radius: 40rpx;
			font-size: 26rpx;
		}

	}
</style>
