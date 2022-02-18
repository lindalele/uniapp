<template>
  <!-- onLoad在单个组件中不能用 -->
  <!-- 新闻列表页面 -->
  <view class="conent">
    <view class="uni-list">
      <!--实现跳转的方法1 <navigator url="../contact/contact">包裹view class="uni-media-list"</navigator> ，也可以js跳转-->
      <!-- 参数传递 设置动态属性:data-newsid-->
      <view class="uni-list-cell"
            hover-class="uni-ist-cel-hover"
            v-for="(item,index) in news"
            :key="index"
            @tap="openinfo"
            :data-newsid="item.post_id">
        <view class="uni-media-list">
          <image :src="item.author_avatar"
                 mode=""
                 class="uni-media-list-logo"></image>
          <view class="uni-media-list-body">
            <view class="uni-media-list-text-top">
              {{item.title}}
            </view>
            <view class="uni-media-list-text-bottom uni-ellipsis">
              {{item.created_at}}
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data () {
    return {
      news: [],
      list: []
    }
  },
  onLoad: function () {
    // ureq可以迅速生成
    uni.request({
      url: 'https://unidemo.dcloud.net.cn/api/news',
      method: 'GET',
      data: {},
      success: res => {
        console.log(res);
        this.news = res.data;
      },
      fail: () => { },
      complete: () => { }
    });
  },
  methods: {
    openinfo (e) { //跳转
      console.log(e)
      var newsid = e.currentTarget.dataset.newsid
      uni.navigateTo({
        url: '../info/info?newsid=' + newsid

      });
    }
  }
}
</script>

<style>
.uni-media-list-body {
  height: auto;
}
.uni-media-list-text-top {
  line-height: 1.6em;
}
