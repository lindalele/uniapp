<template>
  <view class="content">
    <!-- uni-ui的使用 -->
    <!-- 点击card组件以后通过H-BUilder导入按钮后自动导入到项目的components中 -->
    <!-- 在文档的下面会有使用方式 导入注册组件步骤等 -->
    <!-- 在uniapp中定义components以后，我们就不需要注册组件了，仅限uniapp -->
    <!-- 注意不要在组件上写类名 -->
    <!-- 头部是自己写的渐隐的效果，如果用默认设置就不用这些适配 -->
    <navBar :opa="opa"
            :left="true">新首页<navBar>
        <view class="swiper-box">
          <!-- 去uniapp-组件拷贝示例 -->
          <swiper class="swiper"
                  v-for="item in bannerAry"
                  :key="item._id"
                  :circular="true"
                  :indicator-dots="true"
                  :autoplay="autoplay">
            <swiper-item>
              <image :src="item.img"
                     mode="aspectFill" />
            </swiper-item>

          </swiper>
        </view>

        <!-- video部分 -->
        <view class="video">
          <view class="til">认识珠峰</view>
          <view class="video_box">
            <image src="http://www.zhufengpeixun.cn/skin/20142/img/zBg2.jpg"
                   mode="aspectFill" />
            <view class="play_icon"
                  @click="showKKnow">
              <image src="http://www.zhufengpeixun.cn/skin/20142/img/video.jpg"
                     mode="" />
            </view>
          </view>
          <!-- 是否显示隐藏，在父组件这里。点击蒙层的时候，通知父组件来关闭 -->
          <mydialog v-show="isShowKnow"
                    @close="closeKnow">
            <!-- uniapp视频播放组件。 -->
            <video src=""
                   controls />
          </mydialog>
        </view>

        <!-- 使用uni-ui uni-popup蒙层版本 -->
        <view class="video">
          <view class="til">故事珠峰</view>
          <view class="video_box">
            <image src="http://www.zhufengpeixun.cn/skin/20142/img/zBg2.jpg"
                   mode="aspectFill" />
            <view class="play_icon"
                  @click="showStory">
              <image src="http://www.zhufengpeixun.cn/skin/20142/img/video.jpg"
                     mode="" />
            </view>
          </view>
          <!--  -->
          <uni-popup ref="popup">
            <!-- uniapp视频播放组件。 -->
            <video src="https://vdept.bdstatic.com/4a564e4a434c6d69505843514c94b47/7a.mp4"
                   controls />
          </uni-popup>
        </view>
        <!-- 图片列表跳转 -->
        <pub-class :list="pubClassList"></pub-class>
        {{count}}
        <!-- {{$store.state.count}} 官方不推荐的这样写法，但是可以用，不过uni-ap中不能这样写。uni-app不用npm安装vuex,因为它内置vuex -->
        <!-- #ifdef  -->
        <view class="hah">条件编译示例,写成注释的格式</view>
        <!-- #endif -->
  </view>
</template>
<script>
import pubClass from './pubClass'
import { mapState } from 'vuex'
export default {
  components: {
    'pub-class': pubClass
  },
  //效果页面滚动头部变色
  //   uni-ui的使用：直接去uniapp-组件去找,使用H-Builder插入就可以，项目中components文件夹，会自动放入其中。组件有不合适的，自己改动就可以
  //   onPageScroll自动传入e，解构{scrollTop:e.scrollTop}
  onPageScroll ({ scrollTop }) {  //uiapp提供的页面生命周期函数：**只能在page中声明的函数中使用，不能用于组件中，组件只能用vue提供的生命周期函数***
    if (this.flag) {
      this.flag = true;
      console.log('e', scrollTop);
      if (scrollTop > 5) {
        this.opa = 1
      } else {
        this.opa = 0
      }

    }
  },
  computed: {
    // count () {
    //   return this.$store.count
    // }
    ...mapState(['count'])
  },
  data () {
    return {
      pubClassList: [],
      isShowKnow: false, //控制蒙板
      flag: true,
      title: 'Hello',
      opa: 0,
      bannerAry: []

    }
  },
  created () {
    this.getBanner();
    this.getPubCass()
  },
  methods: {

    showKnow () {
      this.$refs.popup.open() //组件方法
    },
    closeKnow () {
      console.log('触发');
      this.isShowKnow = false
    },
    getBanner () {
      uniCloud.callFunction(
        {
          name: 'getBanner',
          success: res => {  //回调函数的方式，注意这里要用箭头函数
            console.log(res);
            this.bannerAry = res.result.data
          }
        }
      )
    },
    getPubCass () {
      uniCloud.callFunction(
        {
          name: 'getPubCass'
        }
      ).then(data => { //也可以用promise的方式
        console.log(data);
        this.pubClassList = data.result.data
      })
    }
  }

}
</script>
<style lang="less">
.content {
  .swiper-box {
    height: 180px;
    width: 80%;
    margin: auto;
    overflow: hidden;
    border-radius: 10px;
    background-color: #eee;
    .swiper {
      height: 100%;
      image {
        //以后注意不要用标签名，用类名
        width: 100%;
      }
    }
  }
  .video {
    width: 90%;
    margin: 10px auto 20px;
    box-shadow: 0 2px 13px 5px #ccc;
    background-color: #fff;
    text-align: center;
    .video_box {
      position: relative;
      image {
        width: 100%;
      }
      .play_icon {
        width: 80px;
        height: 80px;
        position: absolute;
        z-index: 10;
        left: 50%;
        top: 50%;
        margin: -40px auto auto -40px;
        image {
          width: 10px;
          height: 10px;
        }
      }
    }
  }

  .til {
    font-size: 30px;
    margin-bottom: 20px;
    padding-top: 20px;
    text-align: center;
  }
}
</style>