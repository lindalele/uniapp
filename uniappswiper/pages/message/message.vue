<template>
  <view>
    上传和预览图片
    <button type="primary"
            @click="chooseImg">上传图片</button>
    <!-- 点击图片预览方法 -->
    <image v-for="item in imgArr"
           :src="item"
           @click="previewImg(item)"
           mode="scaleToFill" />
  </view>
</template>
<style>
</style>
<script>
export default {
  data () {
    return {
      imgArr: []
    }
  },
  methods: {

    chooseImg () {
      uni.chooseImage({
        //小程序中可以限制，h5端限制不住
        count: 5,//count 值在 H5 平台的表现，基于浏览器本身的规范。目前测试的结果来看，只能限制单选/多选，并不能限制数量。并且，在实际的手机浏览器很少有能够支持多选的。
        sourceType: ['album', 'camera'],
        //会返回res
        success: ({ tempFilePaths, tempFiles }) => {
          this.imgArr = tempFilePaths
        },
        fail: (error) => { }
      })
    },
    previewImg (current) {
      uni.previewImage({
        current,//current 为当前显示图片的链接/索引值，

        urls: this.imgArr, //链接列表,
        loop: true,//是否循环只在app中有效果
        success: (result) => { },
        fail: (error) => { }
      })


    }
  }
}
</script>