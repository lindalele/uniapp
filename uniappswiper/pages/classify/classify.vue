<template>
  <view class="classfy_box">
    <!-- 去uni-app官网的插件市场找插件 -->
    <uni-list>
      <uni-list-item v-for="i in list"
                     :title="i.name"
                     :note="列表描述"
                     +i.name
                     :thumb="i.imgs[0]"
                     link>

      </uni-list-item>
    </uni-list>
  </view>
</template>
<script>
export default {
  data () {
    return { list: [] }
  },
  methods: {
    getClass () {
      uniCloun.callFunction({ name: 'getClass', success: (res) => { this.list = res.result.data } })
    }
  },
}
</script>