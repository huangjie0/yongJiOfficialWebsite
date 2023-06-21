<template>
  <div>
    <div class="News">
      <div class="NewsSmallTitle"></div>
      <div class="NewsTitle">精进的自动化生产技术</div>
      <div class="MoreNews" @click="gotoMoreNewsInformation()">
        <i class="el-icon-arrow-right"></i>
        更多新闻资讯
      </div>
    </div>
    <div class="NewsContent">
      <div class="NewsContentImg">
        <img src="@/assets/img/content/ppp.jpg" alt="" />
      </div>
      <div class="NewsDynamic">
        <div class="NewsDynamicTitle">
          <i class="el-icon-arrow-right"></i> 新闻资讯
        </div>
        <div class="NewsDynamicSmallTitle">
          <div class="NewsDynamicSmallTitleCenter">
            <div class="NewsDynamicSmallTitleList" v-for="(item, index) in NewsInformation" :key="item.id"
              @click="goToNewsInformation(item)">
              <span class="titleValue">{{ item.title }}</span>
              <span class="NewsDynamicTime">{{ item.createTime }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InformationTalents",
  data() {
    return {
      //新闻对象列表
      newsObj: {},
      createTime: []
    }
  },
  created() {
    setTimeout(() => {
      this.createTime = this.NewsInformation.map((item) => {
        return item.createTime
      })
    }, 50)
  },
  props: {
    NewsInformation: Array,
    NewsTotal: Number
  },
  methods: {
    goToNewsInformation(item) {
      this.newsObj.createTime = item.createTime
      this.newsObj.content = item.content
      this.newsObj.title = item.title
      this.newsObj.id = item.id
      this.$router.push({
        name: 'hotInformation',
        query: {
          item: JSON.stringify(this.newsObj)
        }
      })
    },
    gotoMoreNewsInformation() {
      this.$router.push({
        name: 'allMoreNewsInformation',
        query: {
          total: JSON.stringify(this.NewsTotal),
        }
      })
    }
  }
};
</script>

<style scoped lang="less">
.NewsDynamicSmallTitleList:hover {
  cursor: pointer;
  color: #2c7dc3
}

.NewsContent {
  width: 100%;
  height: 260px;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;

  .NewsDynamic {
    width: 58%;
    height: 100%;

    .NewsDynamicSmallTitle {
      width: 100%;
      height: 210px;
      margin-top: 10px;
      display: flex;
      justify-content: center;
      font-size: 13px;

      .NewsDynamicSmallTitleCenter {
        width: 97%;
        height: 100%;

        .NewsDynamicSmallTitleList {
          width: 100%;
          height: 30px;
          border-bottom: 1px dashed #a2a2a2;
          display: flex;
          justify-content: space-between;
          margin-top: 5px;

          .NewsDynamicTime {
            color: #bbbbbb;
            width: 20%;
          }

          .titleValue {
            width: 80%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            -o-text-overflow: ellipsis;
          }
        }
      }
    }

    .NewsDynamicTitle {
      width: 100%;
      height: 30px;
      line-height: 30px;
      font-size: 20px;
    }
  }

  .NewsContentImg {
    width: 40%;
    height: 100%;
    background-color: #2c7dc3;

    img {
      width: 100%;
      height: 100%;
    }
  }
}

.MoreNews:hover {
  cursor: pointer;
  color: #2c7dc3;
}

.News {
  width: 100%;
  height: 70px;
  display: flex;

  .MoreNews {
    width: 130px;
    height: 100%;
    margin-left: 25px;
    line-height: 70px;
  }

  .NewsTitle {
    font-size: 35px;
    font-weight: 550;
    margin-left: 10px;
    line-height: 70px;
  }

  .NewsSmallTitle {
    width: 5px;
    height: 100%;
    background-color: #2c7dc3;
  }
}
</style>