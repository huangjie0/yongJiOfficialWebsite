<template>
  <div>
    <div class="commonFooter">
        <div class="footerLeft">
            <div class="logo">
                <img src="@/assets/img/header/logo.jpg">
            </div>
            <img src="@/assets/img/swiper/gaolou.png">
        </div>
        <div class="footerRight">
            <div class="footerTitle">
                {{title}}
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name:"CommonHeader",
    props:['title']

}
</script>

<style scoped lang="less">
.commonFooter{
    width: 100%;
    height: 180px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .footerLeft{
        width: 38%;
        height: 100%;
        overflow: hidden;
        position: relative;
        .logo{
            width: 15%;
            height: 50%;
            position: absolute;
            left: 15%;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
    .footerRight{
        width: 62%;
        height: 100%;
        background-color:#afb4be;
        border-left: 1px solid #efefef;
        display: flex;
        align-items: center;
        .footerTitle{
            color: white;
            font-weight: 550;
            margin-left: 20px;
        }
    }
}
</style>