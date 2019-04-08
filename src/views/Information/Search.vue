<template>
  <mu-container>
    <!-- 今日通知 -->
    <notice-today/>

    <!-- <mu-text-field label="请输入企业名称查询" label-float></mu-text-field> -->
    <mu-flex justify-content="center" align-items="center" class="searchBox">
      <mu-text-field :placeholder="`请输入${pageTypeName}名称查询`" full-width></mu-text-field>
      <mu-button color="primary" small class="searchBtn">查询</mu-button>
    </mu-flex>

    <!-- <div class="flex noselect" v-if="pageType!=3">
        <card-box-link :routerLink="{name: 'InformationSearch'}" title="校车企业" src="./img/information-icon-01.png"></card-box-link>
        <card-box-link :routerLink="{name: 'InformationSearch'}" title="危化品运输企业" src="./img/information-icon-02.png"></card-box-link>
        <card-box-link :routerLink="{name: 'InformationSearch'}" title="客运企业" src="./img/information-icon-03.png"></card-box-link>
        <card-box-link :routerLink="{name: 'InformationSearch'}" title="环卫运输企业" src="./img/information-icon-04.png"></card-box-link>
        <card-box-link :routerLink="{name: 'InformationSearch'}" title="渣土运输企业" src="./img/information-icon-05.png"></card-box-link>
        <card-box-link :routerLink="{name: 'InformationSearch'}" title="搅拌车企业" src="./img/information-icon-06.png"></card-box-link>
        <card-box-link :routerLink="{name: 'InformationSearch'}" title="货运企业" src="./img/information-icon-07.png"></card-box-link>
        <div class="emptyItem"></div>
    </div>-->
    <div class="flex noselect whiteBox" v-if="pageType!=3">
      <card-box-link
        :title="item.name+pageTypeName"
        :src="`./img/information-icon-0${item.id}.png`"
        v-for="item in categoryList"
        :key="'c'+item.id"
        v-show="!(pageType==1&&item.id==8)"
        :routerLink="{name: 'InformationSearch',query:{category:item.id}}"
      ></card-box-link>
      <div class="emptyItem"></div>
      <div class="emptyItem"></div>
      <div class="emptyItem"></div>
    </div>

    <card-box :title="`${categoryTypeName+pageTypeName}（36）`">
      <mu-list dense>
        <mu-list-item button v-for="item in items" :key="item.id" :to="{name: 'InformationDetail'}">
          <mu-list-item-title>
            {{ item.name }}
            <span style="float:right;color:#757575;">法人代表：{{ item.person }}</span>
          </mu-list-item-title>
          <mu-list-item-action>
            <mu-icon value="chevron_right"></mu-icon>
          </mu-list-item-action>
        </mu-list-item>
      </mu-list>
    </card-box>
  </mu-container>
</template>

<script>
import NoticeToday from "@/components/NoticeToday.vue";
import CardBox from "@/components/CardBox.vue";
import CardBoxLink from "@/components/CardBoxLink.vue";

export default {
  components: {
    CardBoxLink,
    CardBox,
    NoticeToday
  },
  data() {
    return {
      pageTypeList: [
        { id: 1, name: "重点企业" },
        { id: 2, name: "重点车辆" },
        { id: 3, name: "重点驾驶员" }
      ],
      pageType: this.$route.query.pageType || 1,
      categoryList: [
        { id: 1, name: "校车" },
        { id: 2, name: "危化品运输" },
        { id: 3, name: "客运" },
        { id: 4, name: "环卫运输" },
        { id: 5, name: "渣土运输" },
        { id: 6, name: "搅拌车" },
        { id: 7, name: "货运" },
        { id: 8, name: "面包" }
      ],
      category: 1,
      items: [
        { id: 1, name: "白莲幼儿园", person: "石春春" },
        { id: 2, name: "永修县小蓓蕾幼儿园", person: "徐龙都" },
        { id: 3, name: "军山华鑫幼儿园", person: "张小花" },
        { id: 4, name: "新世纪幼儿园", person: "石小敏" },
        { id: 5, name: "白莲幼儿园", person: "石春春" },
        { id: 6, name: "白莲幼儿园", person: "石春春" },
        { id: 7, name: "白莲幼儿园", person: "石春春" },
        { id: 8, name: "白莲幼儿园", person: "石春春" },
        { id: 9, name: "白莲幼儿园", person: "石春春" },
        { id: 10, name: "白莲幼儿园", person: "石春春" }
      ]
    };
  },
  computed: {
    pageTypeName() {
      return this.pageTypeList
        .filter(e => e.id == this.pageType)[0]
        .name.slice(2);
    },
    categoryTypeName() {
      return this.categoryList.filter(e => e.id == this.category)[0].name;
    }
  },
  beforeRouteUpdate(to, from, next) {
    this.category = to.query.category;
    next(false);
  }
};
</script>

<style lang="less" scoped>
.searchBox {
  background-color: white;
  border-radius: 2px;
  padding: 4px 16px 0;
  .searchBtn {
    margin-bottom: 4px;
    margin-left: 16px;
  }
}
.flex {
  margin: 8px 0;
  // margin: 8px 16px;
  // margin-top: 8px;
  // margin-left: 16px;
  display: flex;
  flex-wrap: wrap;
  // justify-content: space-around;
  justify-content: space-between;
}
// .flex:after {
//   // content: "";
//   // flex: auto;
// }
.emptyItem {
  width: 100px;
  height: 0;
  margin-right: 16px;
  margin-bottom: 8px;
}
</style>
