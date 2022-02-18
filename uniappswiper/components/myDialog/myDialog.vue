<template>
  <view class="dialog_box ">
    <!-- 蒙层内容 -->
    <view class="slot_box">
      <slot></slot>
    </view>
    <!-- 直接给一个专门的蒙层元素一个点击事件 或者dialog_box @click.self  -->
    <view class="mask"
          @click="fn"></view>
  </view>
  <!-- 小程序里面没有dom元素 -->
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    fn () {
      console.log(1111);
      this.$emit('close')
    }
  },
}
</script>
<style lang="less">
@keyframes opa {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.dialog_box {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 30;
  animation: opa 0.2s;
  .slot_box {
    background-color: #fff;
    width: 300px;
    margin: auto;
    top: 25%;
    position: relative;
    z-index: 20;
  }
  .mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
  }
}
</style>