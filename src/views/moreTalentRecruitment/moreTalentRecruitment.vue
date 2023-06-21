<template>
    <div>
        <Header />
        <!-- 人才招聘的图片 -->
        <div class="talentRecruitmentPicture">
            <img src="@/assets/img/content/111.jpg" alt="">
        </div>
        <div class="looking">
            <div class="companyPublicityItem">
                <div class="companyProfile">
                    人才招聘
                </div>
                <div class="position">
                    当前位置：永基首页>人才招聘>更多人才招聘
                </div>
            </div>
        </div>
        <div class="jobDetails">
            <div class="jobDetailsItem">
                <el-table :data="talentList" style="width: 100%" height="450px">
                    <el-table-column type="expand">
                        <template slot-scope="props">
                            <el-form label-position="left" inline class="demo-table-expand">
                                <el-form-item label="招聘岗位">
                                    <span>{{ props.row.jobName }}</span>
                                </el-form-item>
                                <el-form-item label="招聘人数">
                                    <span>{{ props.row.requestNum }}</span>
                                </el-form-item>
                                <el-form-item label="工作地">
                                    <span>{{ props.row.recruitSite }}</span>
                                </el-form-item>
                                <el-form-item label="发布时间">
                                    <span>{{ props.row.createTime }}</span>
                                </el-form-item>
                                <el-form-item label="招聘者">
                                    <span>{{ props.row.recruitUserName }}</span>
                                </el-form-item>
                                <el-form-item label="职位备注">
                                    <span>{{ props.row.remark }}</span>
                                </el-form-item>
                                <el-form-item label="联系方式">
                                    <span>{{ props.row.recruitUserPhone }}</span>
                                </el-form-item>
                                <el-form-item label="薪资待遇">
                                    <span>{{ props.row.xinZi }}</span>
                                </el-form-item>
                                <el-form-item label="福利待遇">
                                    <span>{{ props.row.fuLi }}</span>
                                </el-form-item>
                                <el-form-item label="岗位要求">
                                    <span>{{ props.row.jobRequest}}</span>
                                </el-form-item>
                            </el-form>
                        </template>
                    </el-table-column>
                    <el-table-column label="招聘岗位" prop="jobName">
                    </el-table-column>
                    <el-table-column label="招聘人数" prop="requestNum">
                    </el-table-column>
                    <el-table-column label="工作地" prop="recruitSite">
                    </el-table-column>
                </el-table>
            </div>
        </div>
        <!-- 底部的组件 -->
        <CommonFooter />
    </div>
</template>
<script>
import Header from '@/components/Home/Header'
import CommonFooter from "@/components/CommonFooter/CommonFooter.vue";
import { getRecruitmentInfo } from '@/api/home'
export default {
    data() {
        return {
            talentList: [],
        }
    },
    created() {
        this.getTalentRecruitment()
    },
    methods: {
        //获取人才招聘信息
        getTalentRecruitment() {
            getRecruitmentInfo('', '', '').then((res) => {
                if (res.data.code == '200') {
                    this.talentList = res.data.result.list
                }
            })
        },
        handleCurrentChange(val) {
            this.$bus.$emit('changPageNumber', val)
        },
    },
    components: {
        Header,
        CommonFooter
    },
}
</script>
<style scoped lang="less">
/deep/ .el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #2c7dc3;
}

.talentRecruitmentPicture {
    width: 100%;
    height: 320px;

    img {
        width: 100%;
        height: 100%;
    }
}

.jobDetails {
    width: 100%;
    height: 500px;
    margin-top: 20px;
    display: flex;
    justify-content: center;

    .jobDetailsItem {
        width: 80%;
        height: 500px;
    }
}

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
<style>
.demo-table-expand {
    font-size: 0;
}

.demo-table-expand label {
    width: 90px;
    color: #99a9bf;
}

.demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
}
</style>