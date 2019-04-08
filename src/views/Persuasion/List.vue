<template>
  <div>
    <mu-tabs :value.sync="actived" inverse color="primary" indicator-color="primary" full-width>
      <mu-tab>安全劝导（16）</mu-tab>
      <mu-tab>安全宣传（6）</mu-tab>
    </mu-tabs>
    <div class="content" v-if="actived === 0">
      <mu-list textline="three-line">
        <mu-paper :z-depth="1" class="item">
          <mu-list-item avatar :ripple="false" button>
            <mu-list-item-content>
              <p>
                <span class="label">汇总时间</span>
                2019-03-02
              </p>
              <mu-divider></mu-divider>
              <p>
                <span class="label">汇总主题</span>
                永修县虬津镇虬津社区交通安全劝导站 【2019-03】月工作日志汇总
              </p>
            </mu-list-item-content>
          </mu-list-item>
        </mu-paper>
        <mu-paper :z-depth="1" class="item">
          <mu-list-item avatar :ripple="false" button>
            <mu-list-item-content>
              <p>
                <span class="label">汇总时间</span>
                2019-03-02
              </p>
              <mu-divider></mu-divider>
              <p>
                <span class="label">汇总主题</span>
                永修县虬津镇虬津社区交通安全劝导站 【2019-03】月工作日志汇总
              </p>
            </mu-list-item-content>
          </mu-list-item>
        </mu-paper>
        <mu-paper :z-depth="1" class="item">
          <mu-list-item avatar :ripple="false" button>
            <mu-list-item-content>
              <p>
                <span class="label">汇总时间</span>
                2019-03-02
              </p>
              <mu-divider></mu-divider>
              <p>
                <span class="label">汇总主题</span>
                永修县虬津镇虬津社区交通安全劝导站 【2019-03】月工作日志汇总
              </p>
            </mu-list-item-content>
          </mu-list-item>
        </mu-paper>
      </mu-list>
      <mu-container>
        <mu-card class="card">
          <mu-card-media>
            <img src="upload/persuasion2/1.jpg" class="img">
          </mu-card-media>
          <mu-card-title title="九江市永修县虬津镇虬津社区交通安全劝导站 【2019-03】月工作日志汇总" sub-title="2019年 03月 02日"></mu-card-title>
        </mu-card>
        <mu-card class="card">
          <mu-card-title title="九江市永修县虬津镇虬津社区交通安全劝导站 【2019-03】月工作日志汇总" sub-title="2019年 03月 02日"></mu-card-title>
        </mu-card>
        <mu-card class="card">
          <mu-card-title title="九江市永修县虬津镇虬津社区交通安全劝导站 【2019-03】月工作日志汇总" sub-title="2019年 03月 02日"></mu-card-title>
        </mu-card>
      </mu-container>
    </div>

    <div class="content" v-if="actived === 1">

      <mu-list textline="three-line">
        <mu-paper :z-depth="1" class="item">
          <mu-list-item avatar :ripple="false" button>
            <mu-list-item-content>
              <p>
                <span class="label">宣传类别</span>
                进学校
                <span class="label2">2019-03-02 15:30-16:30</span>
              </p>
              <mu-divider></mu-divider>
              <p>
                <span class="label">宣传主题</span>
                永修县虬津镇虬津社区交通安全劝导站 【2019-03】月工作日志汇总
              </p>
            </mu-list-item-content>
          </mu-list-item>
        </mu-paper>

        <mu-paper :z-depth="1" class="item">
          <mu-list-item avatar :ripple="false" button>
            <mu-list-item-content>
              <p>
                <span class="label">宣传类别</span>
                进学校
                <span class="label2">2019-03-02 15:30-16:30</span>
              </p>
              <mu-divider></mu-divider>
              <p>
                <span class="label">宣传主题</span>
                永修县虬津镇虬津社区交通安全劝导站 【2019-03】月工作日志汇总
              </p>
            </mu-list-item-content>
          </mu-list-item>
        </mu-paper>
      </mu-list>

      
      <mu-container>
        <mu-card class="card">
          <mu-card-media sub-title="进学校">
            <img src="upload/persuasion2/2.jpg" class="img">
          </mu-card-media>
          <mu-card-title title="九江市永修县虬津镇虬津社区交通安全劝导站 【2019-03】月工作日志汇总" sub-title="2019年 03月 02日 15:30-16:30"></mu-card-title>
        </mu-card>
        <mu-card class="card">
          <mu-card-title title="九江市永修县虬津镇虬津社区交通安全劝导站 【2019-03】月工作日志汇总" sub-title="2019年 03月 02日 15:30-16:30 进学校"></mu-card-title>
        </mu-card>
        <mu-card class="card">
          <mu-card-title title="九江市永修县虬津镇虬津社区交通安全劝导站 【2019-03】月工作日志汇总" sub-title="2019年 03月 02日 15:30-16:30"></mu-card-title>
        </mu-card>
      </mu-container>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      actived: 0
    };
  }
};
</script>

<style lang="less" scoped>
.item {
  // background-color: aquamarine;
  font-size: 16px;
  margin-bottom: 12px;
  p {
    margin: 4px 0;
    text-indent: -40px;
    margin-left: 80px;
    color: #616161;
  }
  .label {
    color: black;
    display: inline-block;
    width: 40px;
  }
  .label2{
    float: right;
  }
}

.card {
  width: 100%;
  max-width: 375px;
  margin: 8px auto;
  .img {
    height: 200px;
    object-fit: cover;
  }
}
</style>