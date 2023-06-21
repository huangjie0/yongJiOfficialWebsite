<template>
    <div>
        <div class="News">
            <div class="NewsSmallTitle"></div>
            <div class="NewsTitle">专业的人才招聘</div>
            <div class="MoreNews" @click="gotoMoreTalentRecruitment()">
                <i class="el-icon-arrow-right"></i>
                更多人才招聘信息
            </div>
        </div>
        <div class="NewsContent">
            <div class="NewsContentImg">
                <img src="@/assets/img/content/rczp.jpg" alt="" />
            </div>
            <div class="NewsDynamic">
                <div class="NewsDynamicTitle">
                    <i class="el-icon-arrow-right"></i>人才招聘
                </div>
                <div class="NewsDynamicSmallTitle">
                    <div class="NewsDynamicSmallTitleCenter">
                        <div class="NewsDynamicSmallTitleList" v-for="(item, index) in TalentRecruitment" :key="item.id">
                            <span style="width: 200px;overflow:hidden;white-space: nowrap;text-overflow: ellipsis;-o-text-overflow: ellipsis;">职位：{{ item.jobName }}</span>
                            <span style="width: 130px;">需求人数：{{ item.requestNum }}</span>
                            <span style="width: 300px;overflow:hidden;white-space: nowrap;text-overflow: ellipsis;-o-text-overflow: ellipsis;">工作地点：{{ item.recruitSite }}</span>
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
            this.createTime = this.TalentRecruitment.map((item) => {
                return item.createTime
            })
        }, 50)
    },
    props: {
        TalentRecruitment: Array,
        recruitmentTotal: Number
    },
    methods: {
        gotoMoreTalentRecruitment() {
            this.$router.push({
                name: 'moreTalentRecruitment',
                query: {
                    item: JSON.stringify(this.TalentRecruitment),
                    total:JSON.stringify(this.recruitmentTotal)
                }
            })
        }
    }
};
</script>
  
<style scoped lang="less">
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