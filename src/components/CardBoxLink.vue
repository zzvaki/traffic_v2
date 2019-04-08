<template>
  <mu-ripple class="mu-ripple-demo" @click="goto">
    <mu-badge circle color="red" class="badge" v-if="isNew"></mu-badge>
    <img :src="src" alt>
    <span>{{ title }}</span>
  </mu-ripple>
</template>

<script>
export default {
  name: "CardBoxLink",
  props: {
    title: String,
    src: String,
    routerLink: [String, Object],
    callback: Function,
    isNew: Boolean,
  },
  data() {
    return {
      // title: "click me"
    };
  },
  methods:{
    goto(){
      if(this.routerLink) {
        this.$router.push(this.routerLink)
      }
    }
  }
};
</script>

<style lang="less" scoped>
.mu-ripple-demo {
  position: relative;
  width: 100px;
  height: 110px;
  display: flex;
  flex-direction: column ;
  justify-content: center;
  align-items: center;
  // margin: 0 16px 8px;
  // margin-right: 16px;
  margin-bottom: 8px;
  // background-color: #b5f5ec;
  // border: 1px solid blueviolet;
  border-radius: 4px;
  img{
    width: 40px;
    height: 40px;
    // background-color: #1890ff;
    margin-bottom: 8px;
    object-fit: contain;
  }
  span{
    font-size: 14px;
    color: #595959;
    white-space:nowrap;
  }
  .badge{
    position:absolute;
    top:16px;
    right: 16px;
  }
}
</style>