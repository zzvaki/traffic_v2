<template>
  <div id="app">
    <!-- <mu-appbar style="width: 100%;">
      <mu-button icon slot="left">
        <mu-icon value="arrow_back"></mu-icon>
      </mu-button>
      Title 大交管v2
    </mu-appbar> -->

    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/test">测试</router-link>
    </div> -->
    <transition  name="slide" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>

/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-enter-active {
  transition: all 0.2s ease;
}
.slide-leave-active {
  transition: all 0.2s ease;
}
.slide-enter {
  // transform: translateX(32px);
  opacity: 0;
}
.slide-leave-to {
  // transform: translateX(-32px);
  opacity: 0;
}
</style>

<style>
/* 全局样式 */
body{
  background-color: #f2f2f2;
}
.mu-badge-circle{
    width: 8px;
    height: 8px;
}
.whiteBox{
  background-color: white;
  border-radius: 2px;
}
#app{
  width: 100%;
  height: 100%;
}
.bottom-btn-fixed {
  position: fixed;
  width: 70%;
  bottom: 16px;
}
.bottom-btn {
  width: 90%;
  margin: 16px auto;
}
.mu-input {
  margin-bottom: 0;
}
/* 清除移动端mu-list开头有黑点的bug */
li{
  list-style: none;
}
/* 防止两层mu-list出现滚动条 */
.mu-list .mu-list{
  padding: 8px 0;
}

/* 文本不可被选中 */
.noselect {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
</style>
