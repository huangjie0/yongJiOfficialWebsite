<template>
    <div>
        <Header />
        <!-- 具体分公司介绍模块 -->
        <div class="subsidiary">
            <div class="subsidiaryContent">
                <div class="createTime">
                    <span>{{ item.createTime }}</span>
                </div>
                <div class="companyTitle">
                    {{ item.newTitle }}
                </div>
                <div>
                    <img :src="'http://47.122.20.110' + item.pictureUrl" alt="文字加载失败" align="right" hspace="5" vspace="5"
                        style="width: 300px;height:150px">
                    <p>
                        作为可持续发展的先锋，西门子持续加速践行这一承诺。西门子发布涵盖环境、社会和治理（ESG）三大领域的2022财年可持续发展报告，宣布新的投资计划和更高的减碳目标。基于温室气体核算体系（GHG
                        Protocol）报告标准中概述的原则，根据新的未来影响计算方法，西门子2022财年销售的产品和解决方案帮助客户实现约1.5亿吨的碳减排。
                    </p>
                    <p style="margin-top: 10px">
                        西门子股份公司首席人才与可持续发展官、管理委员会成员Judith
                        Wiese表示，“我们坚信科技是创造可持续未来的关键所在。DEGREE框架全方位呈现了西门子在ESG领域的战略重点。通过该框架，我们致力于以更少的资源消耗创造更美好的明天。为实现这一目标，西门子投资于自身业务组合，并将先进技术应用于公司运营。同时，
                        我们的产品和解决方案帮助客户实现可持续发展目标并解决其面临的切实挑战，在经济和社会的支柱产业中释放乘数效应。
                    </p>s
                    <p style="margin-top: 10px;">
                        西门子在气候保护方面取得显著进展。公司致力于至2030年实现自身运营碳中和，并已实现自2019年以来减少46%的碳排放。西门子旨在加速减碳进程，并为此设定中期目标，即至2025财年底，自身运营的实际碳排放量与2019年相比减少55%。与此同时，西门子还将其2030年实际二氧化碳减排目标从与2019年相比减少50%提高至90%。为实现这一目标，公司将至2030年投资6.5亿欧元用于去碳化，特别是借助自身科技力量。基于科学减碳倡议（SBTi），西门子支持《巴黎协定》的目标，并为实现将全球变暖限制在1.5摄氏度以内作出积极贡献。西门子
                        在提高资源效率方面也取得重大进展。例如，在2022财年，其垃圾填埋量减少12%，并将材料回收占废料的比例提升至84%。
                        西门子在气候保护方面取得显著进展。公司致力于至2030年实现自身运营碳中和，并已实现自2019年以来减少46%的碳排放。西门子旨在加速减碳进程，并为此设定中期目标，即至2025财年底，自身运营的实际碳排放量与2019年相比减少55%。与此同时，西门子还将其2030年实际二氧化碳减排目标从与2019年相比减少50%提高至90%。为实现这一目标，公司将至2030年投资6.5亿欧元用于去碳化，特别是借助自身科技力量。基于科学减碳倡议（SBTi），西门子支持《巴黎协定》的目标，并为实现将全球变暖限制在1.5摄氏度以内作出积极贡献。西门子
                        在提高资源效率方面也取得重大进展。例如，在2022财年，其垃圾填埋量减少12%，并将材料回收占废料的比例提升至84%。
                    </p>
                </div>
            </div>
        </div>
        <CommonFooter />
        <Footer />
    </div>
</template>
  
<script>
import CommonFooter from "@/components/CommonFooter/CommonFooter.vue";
import Header from "@/components/Home/Header.vue";
import Footer from "@/components/Home/Footer.vue";
import { scrollTop } from '@/until/scrollTop'
export default {
    name: "QualificationCertification",
    components: {
        Header,
        Footer,
        CommonFooter
    },
    data() {
        return {
            item: {},
        }
    },
    methods: {
        getHotNewsData() {
            this.item = JSON.parse(this.$route.query.item)
        }
    },
    created() {
        scrollTop()
        this.getHotNewsData()
    },
};
</script>
  
<style lang="less" scoped>
.subsidiary {
    width: 100%;
    height: 540px;
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
    border-top: 2px solid #dfe6ed;

    .subsidiaryContent {
        width: 80%;
        height: 100%;

        .createTime {
            width: 100%;
            height: 40px;
            line-height: 40px;
            font-size: 13px;
        }

        .companyTitle {
            width: 100%;
            height: 50px;
            line-height: 50px;
            font-size: 30px;
            font-weight: 550;
        }
    }
}</style>