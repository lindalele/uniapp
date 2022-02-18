<template>
  <view class="tab">
    <scroll-view class=""
                 scroll-x="true"
                 @scroll="scroll"
                 scroll-left="120">
      <view id="demo1"
            class="scroll-view-item_H uni-bg-red">A</view>
      <view id="demo2"
            class="scroll-view-item_H uni-bg-green">B</view>
      <view id="demo3"
            class="scroll-view-item_H uni-bg-blue">C</view>
    </scroll-view>
  </view>
</template>

<script>
export default {
  props: {

  },
  data () {
    return {
      list: [{
        name: 'tab1'
      },
      {
        name: 'tab2'
      },
      {
        name: 'tab1'
      },
      {
        name: 'tab4'
      }]
    }
  },
  methods: {

  },
}
</script>
<style lang="less">
.tab {
  width: 100%;
  border-bottom: 1px solid #ff5fff;
  background-color: #fff;
  box-sizing: border-box;
  .tab-scroll_box {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    height: 45px;
    box-sizing: border-box;
    .tab-scroll_item {
      color: #333;
      font-size: 14px;
    }
  }
}
</style>