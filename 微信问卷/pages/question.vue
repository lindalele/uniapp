<template>
  <view>
    <view class="logo"> <text>问卷调查页面</text> </view>
    <view class="welcome"><text>欢迎：</text> {{ userInfo.nickName }}</view>
    <view class="main">
      <view class="title"
        ><text>{{ questions[nowQs].title }}</text>
      </view>
      <!-- 当前要显示的题目的索引 ，页面就变成第几题了 -->
      <view wx:if="{{questions[nowQs].type ==='radio' }}" class="topic">
        <radio-group class="group" bindchange="formchange">
          <view wx:for="{{questions[0].options }}" class="group-item">
            <label class="group-item-label">
              <radio value="{{item.value}}" checked="{{item.checked}}" />
              {{ item.label }}
            </label>
          </view>
        </radio-group>
      </view>
      <view wx:if="{{ questions[nowQs].type==='checkbox'}}" class="topic">
        <checkbox-group class="group" bindchange="formChange">
          <!-- 遍历题目中的一条 -->
          <view wx:for="{{questions[nowQs].options}}" class="group-item">
            <label class="group-item-label">
              <checkbox value="{{item.value}}" checked="{{item.checked}}" />
              {{ item.label }}
            </label>
          </view>
        </checkbox-group>
      </view>
    </view>
    <view class="next" wx:if="{{nowQs !== questions.length -1}}">
      <!-- 最后一题隐藏下一题，显示提交按钮 -->
      <button bindtap="nextQuestion">下一题</button>
    </view>
    <!-- 条件相反时提交按钮出现 -->
    <view class="sub" wx:if="{{nowQs === questions.length -1}}">
      <!-- 最后一题显示提交 -->
      <button bindtap="subAnswers">提交</button>
    </view>
  </view>
</template>
<style>
.group-item-label {
}
</style>
<script>
export default {
  data: {
    userInfo: {}, //用来保存用户信息
    nowQ: 0, //当前要显示的题目的索引
    answer: {
      // 1:''
    }, // 保存每一道题的答案
    questions: [
      {
        id: 1,
        type: "radio",
        title: "你现在交朋友了吗",
        options: [
          { value: 0, label: "单身" },
          { value: 1, label: "有" },
          { value: 2, label: "拒绝" },
        ],
      },
      {
        id: 4,
        type: "checkbox",
        title: "爱好有哪些",
        options: [
          { value: 0, label: "吃饭" },
          { value: 1, label: "睡觉" },
          { value: 2, label: "学习" },
        ],
      },
    ],
  },
  methods: {
    nextQuestion() {
      //下一题 换题
      if (!this.hasSelected()) {
        wx.showToast({
          title: "请选择答案",
          icon: "none",
        });
        return;
      }
      this.setData({ nowQs: this.data.nowQs + 1 });
    },

    hasSelected() {
      //判断answers里面有没有数据
      const { answers, nowQs, questions } = this.data;
      const result = answers[questions[nowQs].id];
      return !!result;
    },
  },
  subAnswersfunction() {
    if (!this.hasSelected()) {
      wx.showToast({
        title: "请选择答案",
        icon: "none",
      });
      return;
    }
    // 发送数据给服务器
    wx.request({
      url: "",
      data: {
        nickname: this.data.userInfo.nickname,
      },
    });
  },
  onLoad(options) {
    wx.request({});
    wx.getUserInfo({
      success: (res) => {
        this.setData({ userinfo: res.userinfo });
      },
    });
  },
  formchange(e) {
    console.log("detail.value", detail.value);
    //   小程序开发工具AppData和console一起可以看数据
    this.data.answer[this.data.questions[this.data.nowQs].id] = e.detail.value;
  },
};
</script>