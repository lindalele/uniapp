<template>
  <!-- 因里面内容是position:fixed,所以为了防止其他地方向上滚了所以在外面再给个盒子 。如果写在其他页面会很麻烦，所以在组件里面写了-->
  <!--nav_box  title 给了 height: 45px; ,小程序自带的时间等信息也有高度-->
  <view :style="{height:statusBarHeight+45+'px'}">

    <!-- 头部在微信小程序中会重合，所以需要向下放一些就可以；而H5中就没有这些 -->
    <view class="top_nav_box">
      <!-- 说明小程序页面也是从头部开始画的，会有重合的情况 -->
      <!-- 所以在头部这里可以js动态获取头部高度 用一个盒子占位，让占位的盒子也跟着变 -->
      <view :style="{height:statusBarHeight+'px'}"
            class="empty_box"
            :class="{'opa':opa}"></view>
      <!-- 告诉组件opa要不要加这个透明色 0不加 -->
      <view class="nav_box"
            :class="{'opa':opa}">
        <!-- 返回箭头 有插件，这里是示例一个组件的制作.用字体图标 -->
        <!-- 把iconfont.css放到App.vue -->
        <text class="iconfont"
              :class="{'icon-left':left}"></text>
        <view class="text_box">
          <!-- slot插槽默认值 -->
          <slot>默认头部</slot>
        </view>
        <text></text>
      </view>

    </view>
  </view>

</template>
<script>
export default {
  props: {
    left: {
      type: Boolean,
      default: false
    },
    opa: {
      type: Number

    }
  },
  data () {
    return {
      statusBarHeight: 0
    }
  },
  created () {
    console.log("uni.getSystemInfoSync()", uni.getSystemInfoSync())
    // 有一个属性statusBarHeight ,可以拿到头部导航的高度
    this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight
  }
}
</script>
<style lang="less">
.top_nav_box {
  //处于悬浮的状态
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  .empty_box {
    background-color: rgba(0, 0, 0, 0);
    &.opa {
      //有两个类名的意思
      background-color: #eee;
    }
  }
  .nav_box {
    height: 45px;
    padding: 5px;
    background-color: rgba(0, 0, 0, 0);
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    box-sizing: border-box;
    &.opa {
      //有两个类名的意思
      background-color: #eee;
    }
  }
}
</style>