<template>
  <div>
    <Header />
    <!-- 具体新闻介绍模块 -->
    <div class="subsidiary">
      <div class="subsidiaryContent">
        <div class="createTime">
          <span>{{ newObj.createTime }}</span>
        </div>
        <div class="companyTitle">
          {{ newObj.title }}
        </div>
        <div>
          <img :src="pictureUrl" alt="文字加载失败" align="right" hspace="5" vspace="5" style="width: 300px;height:150px">
          <p v-html="replaceWithBr(newObj.content)" class="content"></p>
        </div>
      </div>
    </div>
    <CommonFooter />
  </div>
</template>

<script>
import Header from "@/components/Home/Header.vue";
import CommonFooter from '@/components/CommonFooter/CommonFooter.vue'
import { scrollTop } from '@/until/scrollTop'
import { getOneNewsInformationInfo } from '@/api/home'
export default {
  name: "HotInformation",
  components: {
    Header,
    CommonFooter
  },
  data() {
    return {
      newObj: {},
      pictureUrl: ""
    }
  },
  created() {
    scrollTop()
    this.newObj = JSON.parse(this.$route.query.item)
    this.getPicture()
  },
  methods: {
    replaceWithBr(str) {
      return str ? str.replace(/\n|\r/g, '<br/>') : ''
    },
    getPicture() {
      let params = {
        ids: [this.newObj.id]
      }
      getOneNewsInformationInfo(params).then((res) => {
        if (res.data.code == '200') {
          this.pictureUrl = res.data.result.list[0].newsInfoPictureList[0].url
        }
      })
    }
  }
};
</script>

<style lang="less" scoped>
.content{
    line-height: 30px;
}
.subsidiary {
  width: 100%;
  height: 540px;
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
  border-top: 2px solid #dfe6ed;

  .subsidiaryContent {
    width: 80%;
    height: 100%;

    .createTime {
      width: 100%;
      height: 40px;
      line-height: 40px;
      font-size: 13px;
    }

    .companyTitle {
      width: 100%;
      height: 50px;
      line-height: 50px;
      font-size: 30px;
      font-weight: 550;
    }
  }
}
</style>