<template>
	<view class="footer">
		<view class="share_card">
			<view @click="toAnswerSheet" class="sbtnitem">
				<image src="@/static/images/common/quecard.png" class="left"></image>
			</view>
			<label class="sbtnitem">
				<button style="display: none;" open-type="share"></button>
				<image src="@/static/images/common/share.png" class="left"></image>
			</label>
		</view>
	</view>
</template>

<script setup lang="ts">
let toAnswerSheet=()=>{
	uni.navigateTo({
		url:'/pages/aboutQuestion/TestAnswerSheet/TestAnswerSheet'
	})
}
</script>

<style lang="scss">
	.footer {
		position: fixed;
		width: 100%;
		/* height: 120rpx; */
		background-color: #fff;
		bottom: 0rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: column;
		box-sizing: border-box;

		.share_card {

			width: 100%;
			height: 100rpx;
			background-color: #fff;
			bottom: 0rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;

			box-sizing: border-box;

			.sbtnitem {
				width: 200rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				box-sizing: border-box;

				.left {
					width: 40rpx;
					height: 40rpx;
				}
			}
		}
	}
</style>
