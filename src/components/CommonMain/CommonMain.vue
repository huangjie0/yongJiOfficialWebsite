<template>
  <div>
    <div class="commonMain">
      <div class="main">
        <div class="quantitativeStatistics">
          <div>
            <span style="font-weight: 550;">{{ total }}</span>条新闻稿
          </div>
          <div style="margin-left: 15%;">
            <el-input v-model="searchInfo" :placeholder="placeholder">
              <el-button slot="append" icon="el-icon-search" @click="searchNewTitle"></el-button>
            </el-input>
          </div>
        </div>
        <div class="commonMainList">
            <CommonMainList :list="list"/>
        </div>
        <div class="pagination">
            <el-pagination
            :current-page="currentPage"
            layout="prev, pager, next"
            @current-change="handleCurrentChange"
            :total="total">
            </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CommonMainList from '@/components/CommonMain/CommonMainList'
export default {
  name: "CommonMain",
  components:{
    CommonMainList
  },
  methods:{
    handleCurrentChange(val){
      this.currentPage=val
      this.$emit('changePage',val)
    },
    //点击搜索标题按钮
    searchNewTitle(){
      this.$emit('searchTitle',this.searchInfo)
    }
  },
  data () {
    return {
      searchInfo:"" ,
      currentPage:1,
    }
  },
  props:['placeholder','total','list']
};
</script>

<style scoped lang="less">
/deep/ .el-pager li.active{
  background-color:#2c7dc3;
  color: white;
}
/deep/ .el-pagination button:hover{
  color: #2c7dc3;
}
.commonMain {
  width: 100%;
  height: 540px;
  display: flex;
  justify-content: center;
  background-color: #f3f3f1;
}
.commonMainList{
    width: 100%;
    height: 80%;
    position: absolute;
    top: 40px;
    overflow-y: auto;
}
.main {
  width: 80%;
  height: 100%;
  background-color: white;
  position: relative;
  .pagination{
    width: 100%;
    height: 50px;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .quantitativeStatistics{
    width: 100%;
    height: 40px;
    border-bottom: 1px dashed #efefef;
    line-height: 40px;
    font-size: 13px;
    display: flex;
  }
}
/deep/ .el-input .el-input__inner {
   border-color: #DCDFE6  !important;
}
/deep/ .el-input-group__append{
  background-color: white;
}
/deep/ .el-input__inner{
  height: 30px;
}
</style>