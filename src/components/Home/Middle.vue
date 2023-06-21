<template>
  <div class="middle">
    <div class="new_middle">
      <div class="new_middle_1">
        <div class="new_title">热点新闻</div>
        <div class="about" @click="gotoMoreHotNews()"><i class="el-icon-arrow-right"></i> 更多热点新闻</div>
      </div>
      <div class="newcontent">
        <div class="newcontent_left">
          <div class="newcontent_left_img">
            <img src="@/assets/img/content/xwzx.jpg" alt="" />
          </div>
          <div class="newcontent_left_content">
            <div class="newcontent_left_content_1">
              <div class="newcontent_left_content_1_title">
                矢志不移面向未来
              </div>
              <div class="newcontent_left_content_1_small_title">
                <span>从2008年到2023年，15年矢志不移，永基始终在自动化领域不断进步，助理中国自动化行业发展。</span>
              </div>
            </div>
          </div>
        </div>
        <div class="newcontent_right">
          <div class="newcontent_right_1">
            <span>{{ createTime }}</span>
            <div class="newcontent_right_1_title">
              {{ newTitle }}
            </div>
            <div class="newcontent_right_1_small_title">
              {{ newContent }}
            </div>
            <div class="readAbout" @click="read()">
              <i class="el-icon-arrow-right"></i> 阅读全文
            </div>
          </div>
        </div>
      </div>
      <!-- 分公司介绍模块 -->
      <div class="developMent">
        <div class="BranchOffice">
          <span class="BranchOfficeTitle">分公司介绍</span>
          <div class="BranchOfficeItem">
            <i class="el-icon-arrow-right"></i>
            <span @click="allSubsidiary()">查看全部分公司</span>
          </div>
        </div>
        <!-- 分公司轮播图区域 -->
        <div class="BranchOfficeList">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <!-- 每个轮播图里面结构 -->
                <div class="swiper-slide-item">
                  <div class="swiper-slide-item-one" v-for="(item, index) in subsidiaryList.slice(0, 3)" :key="index">
                    <!-- 头部渐变区域 -->
                    <div class="swiper-slide-item-header">
                    </div>
                    <!-- 标题区域 -->
                    <div class="swiper-slide-item-title" @click="gotoSubsidiary(item)">
                      <div class="swiper-slide-item-title-one">
                        {{ item.sonCompanyName }}
                      </div>
                    </div>
                    <div class="swiper-slide-item-img" @click="gotoSubsidiary(item)">
                      <img :src="'http://47.122.20.110' + item.sonCompanyPurl" alt="">
                    </div>
                    <!-- 分公司内容区域 -->
                    <div class="swiper-slide-item-title-content" @click="gotoSubsidiary(item)">
                      {{ item.sonCompanyIntroduce }}
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <!-- 每个轮播图里面结构 -->
                <div class="swiper-slide-item">
                  <div class="swiper-slide-item-one" v-for="(item, index) in subsidiaryList.slice(3, 6)" :key="index">
                    <!-- 头部渐变区域 -->
                    <div class="swiper-slide-item-header">
                    </div>
                    <!-- 标题区域 -->
                    <div class="swiper-slide-item-title" @click="gotoSubsidiary(item)">
                      <div class="swiper-slide-item-title-one">
                        {{ item.sonCompanyName }}
                      </div>
                    </div>
                    <div class="swiper-slide-item-img" @click="gotoSubsidiary(item)">
                      <img :src="'http://47.122.20.110' + item.sonCompanyPurl" alt="">
                    </div>
                    <!-- 分公司内容区域 -->
                    <div class="swiper-slide-item-title-content" @click="gotoSubsidiary(item)">
                      <div class="swiper-slide-item-title-content-one">
                        {{ item.sonCompanyIntroduce }}
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <!-- 如果需要导航按钮 -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import { getHotNewsData, getAllSubsidiaryData } from '@/api/home'
export default {
  name: "Middle",
  data() {
    return {
      //创建时间
      createTime: "",
      //新闻标题
      newTitle: "",
      //新闻内容
      newContent: "",
      //新闻对象
      newObj: {},
      //子公司对象
      subsidiaryObj: {},
      //子公司6条数据
      subsidiaryList: [],
    }
  },
  created() {
    //获取最新热点新闻数据
    getHotNewsData().then((res) => {
      if (res.data.code == 200) {
        this.newObj = res.data.result
        //获取新闻最新时间
        this.createTime = res.data.result.createTime
        //最新新闻标题
        this.newTitle = res.data.result.newTitle
        //最新新闻内容
        this.newContent = res.data.result.newContent
      }
    }).catch((err) => {
      console.log(err);
    })
    //获取所有子公司的数据
    getAllSubsidiaryData(1, 10, '').then((res) => {
      if (res.data.code == 200) {
        this.subsidiaryList = res.data.result.list.slice(0, 6)
        this.subsidiaryObj = res.data.result
      }
    }).catch((err) => {
      console.log(err);
    })
  },
  methods: {
    //点击跳转到分公司介绍模块页面
    gotoSubsidiary(item) {
      this.$router.push({
        name: 'subsidiary',
        query: {
          item: JSON.stringify(item).replace('sonCompanyName', 'newTitle').replace('sonCompanyPurl', 'pictureUrl').replace('sonCompanyIntroduce', 'newContent')
        }
      })
    },
    //点击查看更多分公司介绍
    allSubsidiary() {
      this.$router.push({
        name: 'allsubsidiary',
        query: {
          item: JSON.stringify(this.subsidiaryObj)
        }
      })
    },
    //点击查看更多热点新闻
    read() {
      this.$router.push({
        name: 'hotNews',
        query: {
          item: JSON.stringify(this.newObj)
        }
      })
    },
    gotoMoreHotNews() {
      this.$router.push('/allHotNews')
    }
  },
  mounted() {
    new Swiper(".swiper-container", {
      loop: false, // 循环模式选项
      // 如果需要前进后退按钮
      nextButton: ".swiper-button-next",
      prevButton: ".swiper-button-prev"
    });
  }
};
</script>

<style scoped lang="less">
.swiper-slide-item {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .swiper-slide-item-one {
    width: 390px;
    height: 600px;

    .swiper-slide-item-title-content {
      width: 100%;
      height: 125px;
      margin-top: 20px;
      display: flex;
      justify-content: center;
      line-height: 25px;
      overflow: auto;
    }

    .swiper-slide-item-title {
      width: 100%;
      height: 50px;
      display: flex;
      justify-content: center;
      margin-top: 10px;

      .swiper-slide-item-title-one {
        width: 80%;
        font-size: 18px;
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        -o-text-overflow: ellipsis;
      }
    }

    .swiper-slide-item-img {
      width: 100%;
      height: 240px;
      display: flex;
      justify-content: center;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .swiper-slide-item-header {
      width: 100%;
      height: 15px;
      background: repeating-linear-gradient(to right, #aac7e0, #24659e);
    }
  }

}

.swiper-button-next,
.swiper-button-prev {
  display: none;
  width: 30px;
  height: 60px;
  background-color: #a6adb5;
  opacity: 0.5;
}

.swiper-button-next {
  z-index: 1000 !important;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23ffff'%2F%3E%3C%2Fsvg%3E");
}

.swiper-button-prev {
  z-index: 1000 !important;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23ffff'%2F%3E%3C%2Fsvg%3E");
}

.swiper-container {
  width: 100%;
  height: 100%;
}

.swiper-container:hover .swiper-button-next {
  display: block;
}

.swiper-container:hover .swiper-button-prev {
  display: block;
}

.swiper-container:hover {
  cursor: pointer;
}

.developMent {
  width: 100%;
  height: 700px;
  position: relative;

  .BranchOfficeList {
    width: 100%;
    height: 600px;
    position: absolute;
    top: 100px;
  }

  .BranchOffice {
    width: 100%;
    height: 50px;
    top: 30px;
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .BranchOfficeTitle {
      font-size: 30px;
      font-weight: 550;
      line-height: 50px;
    }
  }
}

.BranchOfficeItem:hover {
  cursor: pointer;
  color: #24659e !important;
}

.newcontent {
  width: 100%;
  height: 400px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;

  .newcontent_left {
    width: 60%;
    height: 400px;

    .newcontent_left_content {
      width: 100%;
      height: 100px;
      background-color: rgb(177, 177, 177);
      display: flex;
      justify-content: center;

      .newcontent_left_content_1 {
        width: 94%;
        height: 100%;

        .newcontent_left_content_1_title {
          margin-top: 12px;
          font-size: 25px;
          font-weight: 550;
        }

        .newcontent_left_content_1_small_title {
          margin-top: 10px;
          display: flex;
          justify-content: space-between;
        }
      }
    }

    .newcontent_left_img {
      width: 100%;
      height: 300px;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .newcontent_left_content_1_small_title>i:hover {
    cursor: pointer;
    color: #24659e;
  }

  .newcontent_left_img:hover>img {
    scale: 1.03;
    transition: all 3s;
  }

  .newcontent_right {
    width: 36%;
    height: 400px;
    display: flex;
    justify-content: center;

    .newcontent_right_1 {
      width: 90%;
      height: 100%;
      color: gray;

      .readAbout {
        width: 100px;
        height: 40px;
        background-color: #2c7dc3;
        margin-top: 15px;
        text-align: center;
        line-height: 40px;
        color: white;
      }

      .newcontent_right_1_title {
        font-size: 20px;
        margin-top: 20px;
        color: black;
        font-weight: 550;
      }

      .newcontent_right_1_small_title {
        margin-top: 15px;
        color: black;
        height: 180px;
        line-height: 30px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: wrap;
        -o-text-overflow: ellipsis;
      }
    }
  }
}

.readAbout:hover {
  cursor: pointer;
  background-color: #24659e !important;
}

.about {
  text-align: center;
  line-height: 50px;
}

.about:hover {
  color: #24659e;
  cursor: pointer;
  text-decoration: underline;
}

.new_title {
  font-size: 30px;
  font-weight: 550;
}

.middle {
  display: flex;
  justify-content: center;
  height: 100%;

  .new_middle {
    width: 80%;
    height: 100%;

    .new_middle_1 {
      width: 100%;
      height: 50px;
      // background-color: aqua;
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>