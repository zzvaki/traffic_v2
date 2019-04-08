<template>
  <div>
    <mu-paper class="CardBox" :z-depth="0">
      <div class="head" :class="{ dense }">
        <h3>{{ title }}</h3>
      </div>
      <div class="body">
        <slot></slot>
      </div>
    </mu-paper>
  </div>
</template>

<script>
export default {
  name: "CardBox",
  props: {
    title: String,
    titleBorderColor: String,
    dense: Boolean
  }
};
</script>

<style lang="less" scoped>
.CardBox {
  // margin-bottom: -4px;
  // margin-top: 8px;
  .head {
    /* background-color: #f1f1f1; */
    /* padding: 12px 16px; */
    padding: 16px;
    border-bottom: 1px solid #f5f5f5;
    h3 {
      margin: 0;
      padding-left: 12px;
      font-size: 16px;
      font-weight: bold;
      line-height: 22px;
      color: #262626;
      border-left: 4px solid #1890ff;
    }
  }
  // 紧凑模式
  .dense {
    padding: 8px 16px;
    h3 {
      padding-left: 8px;
      font-weight: normal;
      line-height: 18px;
    }
  }
}
</style>
