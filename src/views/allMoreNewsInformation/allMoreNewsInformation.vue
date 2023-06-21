<template>
  <div>
    <Header />
    <div class="looking">
      <div class="companyPublicityItem">
        <div class="companyProfile">
          更多新闻资讯
        </div>
        <div class="position">
          当前位置：永基首页>新闻资讯>更多新闻资讯
        </div>
      </div>
    </div>
    <CommonMain placeholder="请输入新闻资讯" :list="list" :total="total" @searchTitle="searchTitle" @changePage="changePage"
      ref="CommonMainRef" />
    <CommonFooter />
  </div>
</template>

<script>
import CommonMain from '@/components/CommonMain/CommonMain.vue';
import CommonFooter from '@/components/CommonFooter/CommonFooter.vue';
import Header from '@/components/Home/Header.vue'
import { scrollTop } from '@/until/scrollTop.js'
import { getNewsInformationInfo, getOneNewsInformationInfo } from '@/api/home'
export default {
  name: "AllMoreNewsInformation",
  components: {
    CommonMain,
    CommonFooter,
    Header
  },
  data() {
    return {
      list: [],
      newsPicture: [],
      ids: [],
      total: 0,
      val: ''
    }
  },
  created() {
    scrollTop()
    this.getNewsList()
    setTimeout(() => {
      this.getNewPicture()
    }, 50)
    this.total = this.$route.query.total && JSON.parse(this.$route.query.total)
  },
  methods: {
    changePage(number) {
      this.getNewsList(this.val, 10, number)
      setTimeout(() => {
        this.getNewPicture()
      }, 50)
    },
    searchTitle(val) {
      this.val = val
      if (val !== '') {
        this.$refs.CommonMainRef.currentPage = 1
        this.getNewsList(val, 10, 1)
        this.getNewPicture()
      } else {
        this.$refs.CommonMainRef.currentPage = 1
        this.getNewsList(val)
        this.ids = []
        setTimeout(() => {
          this.getNewPicture()
        }, 50)
      }
    },
    getNewsList(val = '', pageSize = null, pageNum = null) {
      let params = {
        pageNum: pageNum,
        pageSize: pageSize,
        title: val
      }
      getNewsInformationInfo(params).then((res) => {
        if (res.data.code == '200') {
          this.total = res.data.result.total
          let list = []
          res.data.result.list.map((item) => {
            let newObj = {}
            newObj.createTime = item.createTime
            newObj.newTitle = item.title
            newObj.newContent = item.content
            list.push(newObj)
          })
          this.list = list
          let ids = res.data.result.list.map((item) => {
            return item.id
          })
          this.ids = ids
        }
      })
    },
    getNewPicture() {
      getOneNewsInformationInfo({
        ids: this.ids
      }).then((res) => {
        if (res.data.code == '200') {
          let pictureList = res.data.result.list.map((item) => {
            if (item.newsInfoPictureList[0]) {
              return item.newsInfoPictureList[0].url.replace('http://47.122.20.110', '')
            }
          })
          this.list = this.list.map((item, index) => {
            item.pictureUrl = pictureList[index]
            return item
          })
        }
      })
    }
  }
}
</script>

<style scoped lang="less">
.looking {
  width: 100%;
  height: 80px;
  background-color: #f3f3f1;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  .companyPublicityItem {
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .companyProfile {
      width: 10%;
      height: 100%;
      font-size: 15px;
      text-align: start;
      line-height: 80px;
      color: #555555;
    }

    .position {
      width: 25%;
      height: 100%;
      font-size: 15px;
      text-align: end;
      line-height: 80px;
      color: #555555;
    }
  }
}

.address {
  width: 100%;
  height: 80px;
  background-color: #f3f3f1;
  display: flex;
  justify-content: center;

  .addressItem {
    height: 80px;
    width: 80%;
    background-color: pink;
  }

}</style>