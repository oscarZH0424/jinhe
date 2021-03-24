<template>
  <div class="page-foot">
    <div class="menu-group">
        <div class="menu-item"><nuxt-link to="/">公司介绍</nuxt-link></div>
        <div class="menu-divide">|</div>
        <div class="menu-item"><nuxt-link to="/product">项目品牌</nuxt-link></div>
        <div class="menu-divide">|</div>
        <div class="menu-item"><nuxt-link to="/team">管理团队</nuxt-link></div>
        <div class="menu-divide">|</div>
        <div class="menu-item"><nuxt-link to="/news">新闻中心</nuxt-link></div>
        <div class="menu-divide">|</div>
        <div class="menu-item"><nuxt-link to="/staff">企业招聘</nuxt-link></div>
    </div>
    <div class="foot-info">ADD .： 上海市徐汇区虹漕路68号锦和中心 邮编200233 <span class="text-divide"></span>   TEL ： 021-52341623 <span class="text-divide"></span>FAX：86-21-52385827 <br> Copyright @2020 上海锦和投资集团有限公司 <span class="line">|</span> 工信部备案号： 沪ICP备11022539号</div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.page-foot{
    height:254px;
    width:100%;
    display: flex;
    flex-flow:column nowrap;
    justify-content: center;
    align-items: center;
    background: #806842;
    .menu-group{
        display: flex;
        flex-flow:row nowrap;
        justify-content: center;
        align-items: center;
        .menu-item,.menu-divide{
            white-space: nowrap;
            opacity: 1;
            font-size: 16px;
            font-family: PingFangSC, PingFangSC-Medium;
            font-weight: 500;
            color: #ffffff;
            line-height: 22px;
        }
        .menu-divide{
            padding:0px 50px;
        }
        .menu-item a{
            color: #ffffff;
        }
    }
    .foot-info{
        white-space: nowrap;
        margin-top:34px;
        opacity: 1;
        font-size: 16px;
        font-family: LucidaGrande;
        text-align: center;
        color: #ffffff;
        line-height: 34px;
        .text-divide{
            display: inline-block;
            width:20px;
        }
        .line{
            padding:0px 10px;
        }
    }
}
</style>