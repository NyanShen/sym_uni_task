<template>
  <view>
    <view class="container" :style="{ height: editorHeight + 'px' }">
      <editor
        id="editor"
        class="ql-container"
        placeholder="请输入内容"
        @ready="onEditorReady"
      >
      </editor>
    </view>

    <view
      class="toolbar"
      :style="{ bottom: isIOS ? keyboardHeight + 'px' : '0' }"
    >
      测试Bottom
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      keyboardHeight: 0,
      editorHeight: 0,
      isIOS: 0,
    };
  },
  onLoad() {
    let self = this;
    const toolbarHeight = 50;
    const { windowHeight, platform } = wx.getSystemInfoSync();
    self.isIOS = platform === "ios";
    self.editorHeight = windowHeight - toolbarHeight;
    wx.onKeyboardHeightChange((res) => {
      if (res.height === keyboardHeight) return;
      self.keyboardHeight = res.height;
      self.editorHeight = windowHeight - toolbarHeight - res.height
    });
  },
  methods: {
    onEditorReady() {
      const that = this;
      wx.createSelectorQuery()
        .select("#editor")
        .context(function (res) {
          that.editorCtx = res.context;
        })
        .exec();
    },
  },
};
</script>


<style scoped>
.container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

.ql-container {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  font-size: 16px;
  line-height: 1.5;
  overflow: auto;
  padding: 10px 10px 20px 10px;
  border: 1px solid #ececec;
}

.ql-active {
  color: #22c704;
}

.iconfont {
  display: inline-block;
  width: 30px;
  height: 30px;
  cursor: pointer;
  font-size: 20px;
}

.toolbar {
  box-sizing: border-box;
  padding: 0 10px;
  height: 50px;
  width: 100%;
  position: fixed;
  left: 0;
  right: 100%;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #ececec;
  border-left: none;
  border-right: none;
}
</style>