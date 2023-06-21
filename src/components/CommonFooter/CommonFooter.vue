<template>
    <div>
        <div class="commonFooter" ref="commonFooter">
            <div class="commonFooterContent">
                <div class="Feature">
                    <div @click="goToHome()">网站首页</div>
                    <div @click="allSubsidiary()">分公司</div>
                    <div @click="goToCompanyProfile()">公司简介</div>
                    <div @click="goToMoreNews()">更多新闻热点</div>
                    <div style="border-right: 0;" @click="joinUs()">加入我们</div>
                </div>
                <div class="intro">
                    <div class="introItem">
                        <div>
                            <p>南京永基自动化工程有限公司</p>
                            <p>电话：025-87787886</p>
                            <p>地址：南京市高淳区漆桥街道双牌石大街</p>
                            <p>邮编：210000</p>
                        </div>
                    </div>
                    <div class="introItem">
                        <div>
                            <p>Email:njyj@yjzdh.net</p>
                            <p>网址：www.yjzdh.net</p>
                            <p>版权：南京永基自动化工程有限公司</p>
                            <p>备案：苏ICP备19045767号</p>
                        </div>
                    </div>
                </div>
                <div class="remark">
                    Copyright@2019 南京永基自动化工程有限公司 All rights reserved. 备案：苏ICP备19045767号
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getAllSubsidiaryData } from '@/api/home'
export default {
    data() {
        return {
            //子公司对象
            subsidiaryObj: {},
        }
    },
    props: {
        TalentRecruitment: Array,
        recruitmentTotal: Number
    },
    name: "CommonFooter",
    methods: {
        goToHome() {
            this.$router.push('/home')
        },
        goToCompanyProfile() {
            this.$router.push('/learnMore')
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
        joinUs() {
            this.$router.push({
                name: 'moreTalentRecruitment',
                query: {
                    item: JSON.stringify(this.TalentRecruitment),
                    total: JSON.stringify(this.recruitmentTotal)
                }
            })
        },
        goToMoreNews() {
            this.$router.push('/allHotNews')
        }
    },
    created() {
        //获取所有子公司的数据
        getAllSubsidiaryData(1, 10, '').then((res) => {
            if (res.data.code == 200) {
                this.subsidiaryList = res.data.result.list.slice(0, 6)
                this.subsidiaryObj = res.data.result
            }
        }).catch((err) => {
            console.log(err);
        })
    }
}
</script>

<style scoped lang="less">
.commonFooter {
    width: 100%;
    height: 400px;
    background-color: #555f69;
    display: flex;
    justify-content: center;
    align-items: center;

    .intro {
        height: 200px;
        margin-top: 20px;
        border-bottom: 1px solid white;
        display: flex;
        color: white;
        justify-content: space-around;

        .introItem {
            width: 30%;

            p {
                margin-top: 20px;
            }
        }

    }

    .commonFooterContent {
        width: 80%;
        height: 100%;

        .Feature {
            height: 20%;
            margin-top: 3%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            cursor: pointer;

            div {
                width: 20%;
                height: 40%;
                text-align: center;
                color: white;
                line-height: 30px;
                border-right: 1px solid white;
            }
        }
    }

    .remark {
        width: 100%;
        height: 40px;
        text-align: center;
        line-height: 40px;
        color: white;
    }
}
</style>