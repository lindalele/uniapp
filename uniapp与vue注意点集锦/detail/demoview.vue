<template>
	<view>
		<!-- uniapp官网 组件一栏 -->
		<!-- view标签，它类似于传统html中的div，用于包裹各种元素内容。 -->
		<view>
			<text>唱歌跳舞</text>
			<!-- 如果需要换行，用view包裹，独占一行 -->
		</view>
		
		<view>
			<!-- text标签相当于span标签 -->
			<!-- selectable文字是否可选中 -->
			<text selectable>唱歌   跳舞</text>
		</view>
		<view>
			<!-- space="ensp"中文字符空格一半大小  设置每一个空格的大小 -->
			<text space="ensp" selectable>唱歌    跳舞</text>
		</view>
		<view>
			<!-- space="ensp"中文字符空格大小  设置每一个空格的大小 占了4个中文字符-->
			<text space="emsp" selectable>唱歌    跳舞</text>
		</view>
		<view>
			<!-- space="nbsp"中文字符空格大小  4个空格被解析成了50px -->
			<text space="nbsp" style="font-size:50px;">唱歌    跳舞</text>
		</view>
		<view>
			<!-- decode -->
			<text >&amp;</text>
		</view>
		<view class="">
			<button type="primary">按钮</button>
		</view>
		<view class="">
			<!-- 图片与普通的标签img不同，需要写全 -->
			<!-- scaleToFill：不保持纵横比缩放图片，使图片完全适应，占满 -->
			<!-- aspectFit：保持纵横比缩放图片，使图片的长边能完全显示出来 -->
			<image src="https://smart-recruit-applet.oss-cn-hangzhou.aliyuncs.com/static/60x60.png" mode="scaleToFill"></image>
			<image src="https://smart-recruit-applet.oss-cn-hangzhou.aliyuncs.com/static/60x60.png" mode="aspectFit"></image>
		</view>
		上线时候需要发送请求需要设置白名单
	</view>

</template>

<script>
	methods:{
		
	}
</script>

<style>
</style>
