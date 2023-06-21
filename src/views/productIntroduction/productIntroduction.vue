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
                    <p v-html="replaceWithBr(item.newContent)" class="content">
                    </p>
                </div>
            </div>
        </div>
        <CommonFooter />
    </div>
</template>
  
<script>
import CommonFooter from "@/components/CommonFooter/CommonFooter.vue";
import Header from "@/components/Home/Header.vue";
import { scrollTop } from '@/until/scrollTop'
export default {
    name: "HotNews",
    components: {
        Header,
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
        },
        replaceWithBr(str){
            return str ? str.replace(/\n|\r/g,'<br/>') : ''
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
}
</style>