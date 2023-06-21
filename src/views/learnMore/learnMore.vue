<template>
    <div>
        <Header />
        <!-- 公司长图静态宣传 -->
        <div class="companyChart">
            <div class="imgTitle">
                <div class="imgTitle_1">开放&nbsp;创新&nbsp;共成长</div>
                <div class="imgSubtitle">永基自控与您携手前行，共同成长，让我们世界变得更美好</div>
                <div class="learnMore">
                    <div class="learnMore_1" @click="goToHome">
                        永基首页<i class="el-icon-arrow-right"></i>
                    </div>
                </div>
            </div>
            <img src="@/assets/img/gssy.jpg" alt="图片加载失败">
        </div>
        <!-- 公司具体的宣传区域 -->
        <div class="companyPublicity">
            <div class="companyPublicityItem">
                <div class="companyProfile">
                    公司简介
                </div>
                <div class="position">
                    当前位置：永基首页>关于永基>公司简介
                </div>
            </div>
        </div>
        <!-- 具体的文案 -->
        <div class="introduceItem">
            <div class="introduce">
                <p>
                    永基自动化成立于2009年，是南京市一家集贸易、技术、服务于一体的电气自动化工程公司。
                </p>
                <p>
                    公司总部位于南京市江北新区（国家级自贸区南京片区），占地面积约600平米，下设市场部、工程部、商务部、财务部、人力资源部等部门，现有苏州分公司、厦门分公司、武汉分公司、重庆分公司、成都分公司，另外正在筹建西安等西北分公司。
                </p>
                <p>
                    公司率先在行业内通过了ISO9001、ISO45001认证和国家“3C”认证。公司重视自主知识产权的研究开发，具有雄厚的新产品开发能力，拥有专利28项。
                </p>
                <p>
                    自成立以来经历十多年沉淀，公司组建了一支技术精良的科技队伍，在钢铁、烟草、冶金、水泥、化工、楼宇等多个行业的电气自动化系统集成中取得了优异的成绩，在实战中掌握了国内先进的工程自控技术，具有雄厚的技术实力和丰富的工程施工经验。
                </p>
                <p>
                    公司以灵活的经营方式、一流的服务、雄厚的专业人才赢得了广大客户的充分信赖和支持，多年来与众多客户间保持友好合作关系。多年来，公司一直与联华集团保持密切合作关系，为联华气体行业提供了多项配套服务，赢得客户一致好评，且在本行业中已有丰富的营销经验，是西门子（中国）有限公司自动化与驱动集团、ABB(中国)有限公司授权合作伙伴；
                </p>
                <p>
                    科技领先、管理科学、持续改进、顾客满意是公司一直秉承的质量方针，协助客户完成自动化方案及机器电控设计改造，为客户提供最可靠、最称心的技术服务是我们的目标。
                </p>
            </div>
        </div>
        <!-- 公司宣传照片 -->
        <div class="companyPhoto">
            <div class="companyPhotoItem">
                <div>
                    <img src="@/assets/img/content/222.jpg" alt="图片加载失败">
                </div>
                <div>
                    <img src="@/assets/img/content/333.jpg" alt="图片加载失败">
                </div>
                <div>
                    <img src="@/assets/img/content/444.jpg" alt="图片加载失败">
                </div>
            </div>
        </div>
        <!-- 底部的组件 -->
        <CommonFooter />
    </div>
</template>
<script>
import Header from '@/components/Home/Header.vue'
import CommonFooter from "@/components/CommonFooter/CommonFooter.vue";
export default {
    components: {
        Header,
        CommonFooter
    },
    methods: {
        goToHome() {
            this.$router.push('/home')
        }
    }
}

</script>
<style scoped lang="less">
.companyPhoto {
    width: 100%;
    min-height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;

    .companyPhotoItem {
        width: 80%;
        min-height: 300px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        div {
            width: 500px;
            height: 250px;
            background-color: #2c7dc3;

            img {
                width: 100%;
                height: 100%;
            }
        }
    }
}

.introduceItem {
    width: 100%;
    min-height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;

    .introduce {
        width: 80%;
        min-height: 300px;
        
        p {
            line-height: 30px;
            text-indent: 2em;
            font-size: 18px;
        }
    }
}

.companyChart {
    width: 100%;
    height: 600px;
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
            cursor: pointer;

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

    img {
        width: 100%;
        height: 100%;
    }
}

.companyPublicity {
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