<template>
    <div>
        <div class="commonMainList" v-for="(item, index) in list" :key="index">
            <div class="createTime">{{ item.createTime }}</div>
            <div class="companyContent">
                <div class="companyContent_1">
                    <div style="font-weight: 550;">{{ item.newTitle }}</div>
                    <div class="newContent"> {{ item.newContent }} <span class="more" @click="gotoMore(item)"><i
                                class="el-icon-arrow-right"></i>查看更多</span>
                    </div>
                </div>
                <div class="companyPreview">
                    <img
                        :src="item.pictureUrl == undefined ? 'http://47.122.20.110' : 'http://47.122.20.110' + item.pictureUrl">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CommonMainList',
    methods: {
        //跳转到对应的页面
        gotoMore(item) {
            switch (this.$route.meta.title) {
                case '更多热点新闻':
                    this.$router.push({
                        name: 'hotNews',
                        query: {
                            item: JSON.stringify(item)
                        }
                    })
                    break;
                case '全部分公司':
                    this.$router.push({
                        name: 'subsidiary',
                        query: {
                            item: JSON.stringify(item)
                        }
                    })
                    break;
                case '更多新闻资讯':
                    this.$router.push({
                        name: 'moreNewsInformation',
                        query: {
                            item: JSON.stringify(item)
                        }
                    })
                    break;
                case '更多资质认证':
                    this.$router.push({
                        name: 'qualificationCertification',
                        query: {
                            item: JSON.stringify(item)
                        }
                    })
                    break;
                case '更多产品介绍':
                    this.$router.push({
                        name: 'productIntroduction',
                        query: {
                            item: JSON.stringify(item)
                        }
                    })
                    break;
                case "更多工程介绍":
                    this.$router.push({
                        name: 'ProjectIntroduction',
                        query: {
                            item: JSON.stringify(item)
                        }
                    })
                    break;
            }
        }
    },
    props: {
        list: {
            type: Array,
            default: []
        }
    },
}
</script>

<style scoped lang="less">
.more:hover {
    cursor: pointer;
    color: #24659e;
}
.more{
    font-size: 15px;
}

.commonMainList {
    width: 100%;
    height: 200px;
    border-bottom: 1px dashed #efefef;
    display: flex;

    .createTime {
        width: 20%;
        height: 100%;
        color: #ababab;
        font-size: 13px;
    }

    .companyContent {
        width: 80%;
        height: 100%;
        display: flex;

        .companyContent_1 {
            width: 60%;
            height: 100%;
            font-size: 14px;
        }

        .companyPreview {
            width: 40%;
            height: 100%;

            img {
                width: 100%;
                height: 100%;
            }
        }
    }
}

.newContent {
    width: 730px;
    height: 160px;
    margin-top: 20px;
    text-overflow: ellipsis;
    overflow: auto;
    display: -webkit-box;
    -webkit-box-orient: vertical;
}
</style>