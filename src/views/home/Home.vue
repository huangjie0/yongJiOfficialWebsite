<template>
  <div>
    <!-- 头部区域 -->
    <Header :TalentRecruitment="TalentRecruitment" :recruitmentTotal="recruitmentTotal"></Header>
    <!-- 中间轮播图区域 -->
    <el-carousel height="600px" class="carousel">
      <el-carousel-item v-for="(item) in swiperImg" :key="item.id">
        <div class="imgTitle">
          <div class="imgTitle_1">开放&nbsp;创新&nbsp;共成长</div>
          <div class="imgSubtitle">永基自控与您携手前行，共同成长，让我们世界变得更美好</div>
          <div class="learnMore">
            <div class="learnMore_1" @click="learnMore">
              了解更多<i class="el-icon-arrow-right"></i>
            </div>
          </div>
        </div>
        <img :src="item.imgUrl" alt="" id="swiperImg">
      </el-carousel-item>
    </el-carousel>
    <!-- 分类模块的开发 -->
    <div class="classification">
      <div class="classificationChild">
        <el-tabs v-model="activeName" stretch>
          <el-tab-pane label="新闻资讯" name="one">
            <InformationTalents :NewsInformation="NewsInformation" :NewsTotal="NewsTotal" />
          </el-tab-pane>
          <el-tab-pane label="资质认证" name="two">
            <div class="CertificationQualification">
              <div class="CertificationQualificationBackground">
              </div>
              <div class="CertificationQualificationTitle">
                专业的资质认证
              </div>
              <div class="MoreCertificationQualification" @click="moreQualificationCertification">
                <i class="el-icon-arrow-right"></i> 更多资质认证
              </div>
            </div>
            <div class="CertificationQualificationContent">
              公司在从事自动化行业活动中，经过合理合法的程序和手续，由专业的认证机构对我司、产品、服务、人员等，进行权威的检测、测试、审核、评估后，出具的相应资质证书。我司在专业自动化行业中取得了众多资质，具体如图：
            </div>
            <div class="certificate">
              <div class="certificateImgOne">
                <div class="certificateImgOneItem">
                  <img :src="basicURL + certificationPictureUrl[0].qualificationPicture" alt=""
                    v-if="certificationPictureUrl[0]">
                </div>
                <div class="certificateImgOneTitle" v-if="certificationPictureUrl[0]">{{
                  certificationPictureUrl[0].qualificationName }}</div>
              </div>
              <div class="certificateImgTwo">
                <div class="certificateImgTwoItem">
                  <img :src="basicURL + certificationPictureUrl[1].qualificationPicture" alt=""
                    v-if="certificationPictureUrl[1]">
                </div>
                <div class="certificateImgOneTitle" v-if="certificationPictureUrl[0]">{{
                  certificationPictureUrl[0].qualificationName }}</div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="产品介绍" name="three">
            <ProductEngineering :getProductList="getProductList" />
          </el-tab-pane>
          <el-tab-pane label="工程介绍" name="four">
            <ProjectIntroduction :getProjectList="getProjectList" />
          </el-tab-pane>
          <el-tab-pane label="人才招聘" name="five">
            <TalentRecruitment :TalentRecruitment="TalentRecruitment" :recruitmentTotal="recruitmentTotal" />
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <!-- 中间区域的组件 -->
    <div class="footer">
      <Middle />
    </div>
    <!-- 底部的组件 -->
    <CommonFooter :TalentRecruitment="TalentRecruitment" :recruitmentTotal="recruitmentTotal" />
  </div>
</template>

<script>
import { getNewsInformationInfo, getCertificateInfo, getProductIntroduction, getProjectIntroductionInfo, getRecruitmentInfo } from '@/api/home'
import Header from "@/components/Home/Header.vue";
import Middle from "@/components/Home/Middle.vue";
import CommonFooter from "@/components/CommonFooter/CommonFooter.vue";
import ProductEngineering from '@/components/Home/ProductEngineering.vue'
import InformationTalents from '@/components/Home/InformationTalents.vue'
import ProjectIntroduction from '@/components/Home/ProjectIntroduction.vue'
import TalentRecruitment from '@/components/Home/TalentRecruitment.vue'
import { basicURL } from '@/api/basicUrl'
export default {
  name: "Home",
  components: {
    Header,
    Middle,
    ProductEngineering,
    InformationTalents,
    CommonFooter,
    ProjectIntroduction,
    TalentRecruitment
  },
  data() {
    return {
      //新闻资讯列表
      NewsInformation: [],
      //人才招聘列表
      TalentRecruitment: [],
      //资质认证
      certificationPictureUrl: [],
      //产品介绍
      getProductList: [],
      //工程介绍
      getProjectList: [],
      NewsTotal: 0,
      recruitmentTotal: 0,
      basicURL: '',
      activeName: 'one',
      swiperImg: [
        { id: '03', imgUrl: require('@/assets/img/swiper/333.jpg') },
        { id: '04', imgUrl: require('@/assets/img/swiper/444.jpg') },
        { id: '01', imgUrl: require('@/assets/img/swiper/111.jpg') },
        // { id: '02', imgUrl: require('@/assets/img/swiper/222.jpg') },
      ],
    };
  },
  created() {
    this.basicURL = basicURL()
  },
  mounted() {
    this.getCertification(1, 10, '')
    this.getNewsInformation()
    this.getProduct(1, 10, '')
    this.getProject(1, 10, '')
    this.getTalentRecruitment()
  },
  methods: {
    //点击了解更多页面
    learnMore() {
      this.$router.push('/learnMore')
    },
    //获取工程介绍
    getProject(pageNum, pageSize, name) {
      getProjectIntroductionInfo(pageNum, pageSize, name).then((res) => {
        if (res.data.code == '200') {
          let list = []
          res.data.result.list.map((item) => {
            let newObj = {}
            newObj.createTime = item.createTime
            newObj.newTitle = item.projectName
            newObj.newContent = item.projectIntroduce
            newObj.pictureUrl = item.purl
            list.push(newObj)
          })
          this.getProjectList = list
        }
      })
    },
    //获取产品介绍
    getProduct(pageNum, pageSize, name) {
      getProductIntroduction(pageNum, pageSize, name).then((res) => {
        if (res.data.code == '200') {
          let list = []
          res.data.result.list.map((item) => {
            let newObj = {}
            newObj.createTime = item.createTime
            newObj.newTitle = item.productName
            newObj.newContent = item.productIntroduce
            newObj.pictureUrl = item.purl
            list.push(newObj)
          })
          this.getProductList = list
        }
      })
    },
    moreQualificationCertification() {
      this.$router.push('/allQualificationCertification')
    },
    getCertification(pageNum, pageSize, name) {
      getCertificateInfo(pageNum, pageSize, name).then((res) => {
        if (res.data.result.list.length !== 0) {
          this.certificationPictureUrl = res.data.result.list
        }
      })
    },
    //获取新闻资讯
    getNewsInformation() {
      let params = {
        pageNum: 1,
        pageSize: 10,
        title: ''
      }
      getNewsInformationInfo(params).then((res) => {
        if (res.data.code == '200') {
          this.NewsTotal = res.data.result.total
          this.NewsInformation = res.data.result.list
        }
      })
    },
    //获取人才招聘信息
    getTalentRecruitment() {
      getRecruitmentInfo('', '', '').then((res) => {
        if (res.data.code == '200') {
          this.recruitmentTotal = res.data.result.total
          this.TalentRecruitment =res.data.result.list.sort((a,b)=>{
            return a.orderId - b.orderId
          })
        }
      })
    }
  },
};
</script>

<style lang="less" scoped>
.carousel {
  position: relative;

  .imgTitle {
    top: 50%;
    left: 50%;
    width: 600px;
    height: 300px;
    transform: translate(-50%, -50%);
    position: absolute;

    .imgTitle_1 {
      width: 100%;
      height: 100px;
      color: white;
      font-size: 40px;
      text-align: center;
      line-height: 100px;
      font-weight: bold;
    }

    .learnMore {
      height: 50px;
      display: flex;
      justify-content: center;
      margin-top: 20px;

      .learnMore_1 {
        height: 100%;
        width: 140px;
        background-color: #2c7dc3;
        color: white;
        line-height: 50px;
        text-align: center;
      }
    }

    .imgSubtitle {
      height: 30px;
      text-align: center;
      line-height: 30px;
      color: white;
    }
  }
}

.learnMore_1:hover {
  background-color: #24659e !important;
  cursor: pointer;
}

.CertificationQualificationContent {
  width: 40%;
  height: 250px;
  margin-top: 10px;
}

.certificate {
  position: absolute;
  width: 60%;
  height: 100%;
  top: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .certificateImgOne,
  .certificateImgTwo {
    width: 250px;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
}

.certificateImgOneItem,
.certificateImgTwoItem {
  width: 100%;
  height: 300px;

  img {
    width: 100%;
    height: 100%;
  }
}

.certificateImgOneTitle {
  text-align: center;
  line-height: 20px;
}

.MoreCertificationQualification {
  line-height: 70px;
  margin-left: 100px;
}

.MoreCertificationQualification:hover {
  color: #2c7dc3;
  cursor: pointer;
}

.CertificationQualification {
  width: 40%;
  height: 70px;
  display: flex;

  .CertificationQualificationTitle {
    font-size: 35px;
    font-weight: 550;
    margin-left: 10px;
    line-height: 70px;
  }

  .CertificationQualificationBackground {
    width: 5px;
    height: 100%;
    background-color: #2c7dc3;

  }
}

/deep/ .el-tabs__item.is-active {
  color: #2c7dc3;
}

/deep/ .el-tabs__active-bar {
  background-color: #2c7dc3;
}

/deep/ .el-tabs__item:hover {
  color: #2c7dc3;
}

.classification {
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;

  .classificationChild {
    width: 80%;
    height: 100%;
  }
}

.footer {
  width: 100%;
  height: 100%;
  background-color: #f3f3f1;
}

.el-carousel__item img {
  width: 100%;
  height: 100%;
}
</style>