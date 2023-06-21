<template>
  <div>
    <Header/>
    <div class="looking">
            <div class="companyPublicityItem">
                <div class="companyProfile">
                    全部分公司
                </div>
                <div class="position">
                    当前位置：永基首页>分公司>全部分公司
                </div>
            </div>
        </div>
    <CommonMain placeholder="请输入公司的名称" :total="total" :list="list" @changePage="changePage" @searchTitle="searchTitle" ref="commonMainRef"/>
    <CommonFooter/>
  </div>
</template>

<script>
import { getAllSubsidiaryData } from '@/api/home'
import CommonMain from '@/components/CommonMain/CommonMain.vue'
import CommonFooter from '@/components/CommonFooter/CommonFooter.vue'
import Header from '@/components/Home/Header.vue'
export default {
    name:"AllSubsidiary",
    components:{
        CommonMain,
        CommonFooter,
        Header
    },
    data() {
      return {
        total:0,
        list:[],
        currentPage:1,
        newTitle:'',
      }
    },
    watch:{
      currentPage:{
        handler(){
          this.getAllSubsidiaryData()
        }
        },
        newTitle:{
          handler(){
            this.getAllSubsidiaryData()
          }
        }
    },
    methods:{
       //页码改变进行赋值
       changePage(val){
        this.currentPage=val
      },
      //搜索内容
      searchTitle(val){
        this.newTitle = val
        this.currentPage = 1
        this.$refs.commonMainRef.currentPage = 1
        this.getAllSubsidiaryData()
      },
      getAllSubsidiaryData(){
        getAllSubsidiaryData(this.currentPage,10,this.newTitle).then((res)=>{
          this.total = res.data.result.total
          this.list = res.data.result.list.map((item)=>{
            return {
              newContent:item.sonCompanyIntroduce,
              newTitle:item.sonCompanyName,
              createTime:item.createTime,
              pictureUrl:item.sonCompanyPurl
              }
          })
        })
      }
    },
    created() {
      document.body.scrollTop = document.documentElement.scrollTop = window.pageYOffset = 0;
      this.total = JSON.parse(this.$route.query.item).total
      this.list =  JSON.parse(this.$route.query.item).list.map((item)=>{
           return {
            newContent:item.sonCompanyIntroduce,
            newTitle:item.sonCompanyName,
            createTime:item.createTime,
            pictureUrl:item.sonCompanyPurl
           }
      })
      this.getAllSubsidiaryData()
    },
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
</style>