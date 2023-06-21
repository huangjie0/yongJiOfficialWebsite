<template>
    <div>
        <Header/>
        <div class="looking">
            <div class="companyPublicityItem">
                <div class="companyProfile">
                    更多资质认证
                </div>
                <div class="position">
                    当前位置：永基首页>资质认证>更多资质认证
                </div>
            </div>
        </div>
        <CommonMain placeholder="请输入资质认证" :list="list" :total="total" @searchTitle="searchTitle" @changePage="changePage"
            ref="commonMainRef" />
        <CommonFooter />
    </div>
</template>
  
<script>
import CommonMain from '@/components/CommonMain/CommonMain.vue';
import CommonFooter from '@/components/CommonFooter/CommonFooter.vue';
import Header from '@/components/Home/Header.vue'
import { scrollTop } from '@/until/scrollTop.js'
import { getCertificateInfo } from '@/api/home'
export default {
    name: "AllQualificationCertification",
    components: {
        CommonMain,
        CommonFooter,
        Header
    },
    data() {
        return {
            list: [],
            total: 0,
            val: '',
            number: ''
        }
    },
    created() {
        scrollTop()
        this.getNewsList()
    },
    methods: {
        changePage(number, val) {
            this.number = number
            this.getNewsList(number, 10, this.val)
        },
        searchTitle(val) {
            this.val = val
            this.number = 1
            this.$refs.commonMainRef.currentPage = 1
            this.getNewsList(1, 10, val)
        },
        getNewsList(pageNum = 1, pageSize = 10, title = '') {
            getCertificateInfo(pageNum, pageSize, title).then((res) => {
                if (res.data.code == '200') {
                    this.total = res.data.result.total
                    let list = []
                    res.data.result.list.map((item) => {
                        let newObj = {}
                        newObj.createTime = item.createTime
                        newObj.newTitle = item.qualificationName
                        newObj.newContent = item.qualificationIntroduce
                        newObj.pictureUrl = item.qualificationPicture
                        list.push(newObj)
                    })
                    this.list = list
                }
            })
        },
    }
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