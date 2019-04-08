<template>
  <mu-container>
    <mu-list>
      <!-- <mu-sub-header inset>签收情况：10/12</mu-sub-header> -->
      <div v-for="item in list" :key="item.id">
        <mu-list-item>
          <mu-list-item-title>{{ item.name }}</mu-list-item-title>
          <mu-list-item-action>
            <mu-icon value="check" color="green500" v-if="item.received"></mu-icon>
            <mu-icon value="close" color="red500" v-else></mu-icon>
          </mu-list-item-action>
        </mu-list-item>
        <mu-divider></mu-divider>
      </div>
    </mu-list>
  </mu-container>
</template>

<script>
export default {
  props: {
    list: Array
  }
};
</script>

<style lang="less" scoped>
</style>
