<template>
    <div>
        <div class="ProductIntroduction">
            <div class="ProductIntroductionBackground"></div>
            <div class="ProductIntroductionTitle">工程介绍</div>
            <div class="MoreProductIntroduction" @click="goMoreProjectIntroduction">
                <i class="el-icon-arrow-right"></i>更多工程介绍
            </div>
        </div>
        <!-- 产品的各个模块 -->
        <div class="ProductIntroductionList">
            <div class="ProductIntroductionItem" v-for="item in getProjectList.slice(0, 3)" :key="item.id">
                <div class="ProductIntroductionImg">
                    <img :src="'http://47.122.20.110' + item.pictureUrl" />
                </div>
                <p class="productTitle">{{ item.newTitle }}</p>
                <div class="productContent">
                    {{ item.newContent }}
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: "ProjectIntroduction",
    props: {
        getProjectList: Array,
    },
    methods: {
        goMoreProjectIntroduction() {
            this.$router.push({
                name: 'allMoreProjectIntroduction',
                query: {
                    item: JSON.stringify(this.getProductList)
                }
            })
        }
    }
};
</script>
  
<style scoped lang="less">
.ProductIntroduction {
    width: 100%;
    height: 70px;
    display: flex;

    .ProductIntroductionTitle {
        font-size: 35px;
        font-weight: 550;
        margin-left: 10px;
        line-height: 70px;
    }

    .MoreProductIntroduction {
        width: 200px;
        height: 100%;
        margin-left: 30px;
        line-height: 70px;
    }

    .MoreProductIntroduction:hover {
        cursor: pointer;
        color: #24659e;
    }

    .ProductIntroductionBackground {
        width: 5px;
        height: 100%;
        background-color: #2c7dc3
    }
}

.ProductIntroductionList {
    width: 100%;
    height: 260px;
    margin-top: 10px;
    display: flex;
    justify-content: space-between;

    .ProductIntroductionItem {
        width: 350px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .productTitle {
            text-align: center;
            font-weight: 550;
        }

        .productContent {
            width: 350px;
            height: 83px;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-line-clamp: 4;
            display: -webkit-box;
            -webkit-box-orient: vertical;
        }

        .ProductIntroductionImg {
            height: 150px;

            img {
                width: 100%;
                height: 100%;
            }
        }
    }
}</style>