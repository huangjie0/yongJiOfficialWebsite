<template>
    <div>
        <!-- 头部公共模块 -->
        <Header />
        <!-- 具体分公司介绍模块 -->
        <div class="subsidiary">
            <div class="subsidiaryContent">
                <div class="createTime">
                    <span>{{ subsidiaryObj.createTime }}</span>
                </div>
                <div class="companyTitle">
                    {{ subsidiaryObj.newTitle}}
                </div>
                <div>
                    <img :src="basicURL + subsidiaryObj.pictureUrl" alt="文字加载失败" align="right" hspace="5" vspace="5"
                        style="width: 300px;height:150px">
                    <p v-html="replaceWithBr(subsidiaryObj.newContent)" class="content">
                    </p>
                </div>
            </div>
        </div>
        <CommonFooter/>
    </div>
</template>

<script>
import Header from '@/components/Home/Header.vue'
import CommonFooter from '@/components/CommonFooter/CommonFooter.vue'
import { scrollTop } from '@/until/scrollTop'
import  {basicURL} from '@/api/basicUrl.js'
export default {
    name: 'Subsidiary',
    components: {
        Header,
        CommonFooter
    },
    data() {
        return {
            subsidiaryObj: {},
            basicURL:''
        }
    },
    created() {
        scrollTop()
        this.basicURL = basicURL()
        this.subsidiaryObj = JSON.parse(this.$route.query.item)
        for (const key in JSON.parse(this.$route.query.item)) {
            if(key == 'sonCompanyPurl'){
                this.subsidiaryObj=JSON.parse(JSON.stringify(JSON.parse(this.$route.query.item)).replace('sonCompanyPurl','pictureUrl'))
            }
        }
    },
    methods:{
        replaceWithBr(str){
            return str ? str.replace(/\n|\r/g,'<br/>') : ''
        }
    }
}
</script>

<style lang="less" scoped>
.content{
    line-height: 30px;
}
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