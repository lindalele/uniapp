<template>
  <!-- 公开课详情页面 用来承载页面内容的-->
  <view>
    <!-- 注意 web-view一个页面/组件里面只能放一个，所以不能去父组件那边直接循环，不可以循环，否则会报错 -->
    <!-- **这不能用数组，否则就变成了for循环，这里可以把src链接传递进来 -->
    <web-view :src="src" />
  </view>
</template>
<style>
</style>
<script>
export default {
  data: {
    src: ''
  },
  onLoad ({ src }) {
    // 页面之间传递的参数 可以通过onLoad函数的参数获取
    console.log(src);
    // 跳转
    this.src = src
  },
  computed: {

  },
  methods: {

  },
}
</script>