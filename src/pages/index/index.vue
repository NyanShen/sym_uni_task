<template>
  <view class="content">
    <image class="logo" src="/static/logo.png"></image>
    <view @click="add">
      <text class="title">{{ title }}-{{ count }}</text>
    </view>
    <view class="btn" @click="navigateTo('testEditor')">
      <button>editor test</button>
    </view>
  </view>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      title: "Hello uni",
    };
  },
  onLoad() {},
  computed: {
    ...mapState(["count"]),
  },
  methods: {
    ...mapMutations(["setCount"]),
    add() {
      this.setCount(4);
      this.$miniApp.toTargetRoute("test");
    },
	navigateTo(pageName) {
		this.$miniApp.toTargetRoute(pageName);
	}
  },
};
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin: 200rpx auto 50rpx auto;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
