<template>
  <div class="footer_1">
    <div class="footer_1_service">
        <div class="footer_1_service_1">
            <div class="contact">
                <span>网站首页</span>
                <span>联系我们</span>
                <span>人才招聘</span>
                <span>公司简介</span>
            </div>
            <div class="hotLine">
                <div>联系电话</div>
                <div style="font-size: 20px;">025-487489484</div>
            </div>
            <div class="twoDimensionalCode">
                <img src="../../assets/img/content/8888.gif" alt="">
                <img src="../../assets/img/content/8888.gif" alt="">
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'Footer',
}
</script>

<style scoped lang="less">
.footer_1{
    width: 100%;
    height: 200px;
    background-color: #555f69;
    position: relative;
    .footer_1_service{
        position: absolute;
        width: 100%;
        height: 60px;
        display: flex;
        justify-content: center;
        top: 50px;
        .footer_1_service_1{
            width: 60%;
            height: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .contact,.hotLine,.twoDimensionalCode{
                height: 100%;
                width: 205px;
                border-left: 2px solid white;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                align-items: center;
                div{
                    margin-left: 30px;
                    color: white;
                }
                span{
                    margin-left: 30px;
                    text-align: center;
                    color: white;
                }
                img{
                    width: 60px;
                    height: 100%;
                    margin-left: 30px;
                }
            }
        }
    }
}
</style>