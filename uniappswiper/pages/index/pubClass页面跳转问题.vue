<template>
  <view class="pubClass">
    <!-- 开发技巧：h5编译速度快，小程序编译速度慢，把H5先开着  -->
    <view class="til">
      本周进行公开课
    </view>
    <view class="list_box">
      <!-- 跳转的方式1：用uniapp-组件***navigator包装起来，直接跳转；
      方式2用**编程式导航的方式跳转，注意H5和小程序跳转的差异 -->
      <view class="list_item"
            v-for="item in list"
            :key="item._id"
            @click="fn(item.url)">
        <!-- 点击图片跳转到详情页面 -->
        <image class="img"
               :src="item.img"
               mode="scaleToFill" />
        <text class="text">{{ item.title}}</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default () {  //复杂数据类型返回函数
        return []
      }
    }
  },
  data () {

  },
  methods: {
    //点击图片跳转功能
    fn (url) { //07:56
      /* #ifdef H5 */
      location.href = url  //在H5端用webview会出不来页面，所以需要用跳转的方式写
      /* #endif */
      // 小程序中跳转H5页面,小程序中出不来，所以用一个webview来承载内容
      /* #ifndef H5 */
      //  uni.navigateTo使用以后如果有后退按钮，可以后退。功能是保留当前页面，跳转到应用内的某个页面
      uni.navigateTo({ //这里bug ***web-view跳转到H5页面会出不来，所以需要做判断
        url: '/pages/pubinfo/pubinfo?src' + url
      })
      /* #endif */

      // 因为微信中没有location，所以还有以下js判断写法 if (location) {
      //   location.href = url
      // } else {
      //   uni.navigateTo({ //这里bug ***web-view跳转到H5页面会出不来，所以需要做判断
      //     url: '/pages/pubinfo/pubinfo?src' + url
      //   })
      // }
    }
  },
}
</script>
<style lang="less">
.pubClass {
  width: 90%;
  margin: 20px auto;
  .til {
    padding: 10px;
    font-size: 20px;
    background-color: #fff;
  }
  .list_box {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .list_item {
    background-color: #fff;
    width: 49px;
    text-align: center;
    margin-bottom: 8px;
    box-shadow: 0 2px 2px 0 #ccc;
    .img {
      width: 100%;
      height: 200px;
    }
    .text {
      display: block;
      margin: 10px 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      padding: 5px;
      font-size: 16px;
    }
  }
}
</style>