<template>
  <view class="container">
    <editor
      id="editor"
      class="ql-container"
      :placeholder="placeholder"
      @ready="onEditorReady"
    ></editor>
    <button class="btn" type="warn" @tap="undo">撤销</button>
  </view>
</template>

<script>
export default {
  data() {
    return {
      placeholder: "开始输入...",
    };
  },
  methods: {
    onEditorReady() {
      // #ifdef MP-BAIDU
      this.editorCtx =
        requireDynamicLib("editorLib").createEditorContext("editorId");
      // #endif

      // #ifdef APP-PLUS || H5 ||MP-WEIXIN
      uni
        .createSelectorQuery()
        .select("#editor")
        .context((res) => {
          this.editorCtx = res.context;
        })
        .exec();
      // #endif
    },
    undo() {
      this.editorCtx.undo();
    },
  },
};
</script>

<style>
.container {
  padding: 10px;
}

#editor {
  width: 100%;
  height: 300px;
  background-color: #cccccc;
}

button {
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