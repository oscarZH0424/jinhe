<template>
  <div  :class="{'page-foot':!isMobile,'m-page-foot':isMobile}">
    <div v-show="lan=='ch'" class="menu-group">
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
    <div class="foot-info" v-show="!isMobile && lan=='ch'">ADD .： 上海市徐汇区虹漕路68号锦和中心 邮编200233 <span class="text-divide"></span>   TEL ： 021-52341623 <span class="text-divide"></span>FAX：86-21-52385827 <br> Copyright @2020 上海锦和投资集团有限公司 <span class="line">|</span> 工信部备案号： 沪ICP备11022539号</div>
    <div class="foot-info" v-show="isMobile && lan=='ch'">
        <div>ADD .： 上海市徐汇区虹漕路68号锦和中心 邮编200233</div>
        <div><span>TEL ： 021-52341623</span><span>FAX：86-21-52385827</span></div>
        <div>Copyright @2020 上海锦和投资集团有限公司 | 工信部备案号：沪ICP备11022539号</div>
    </div>
    <div v-show="lan=='en'" class="menu-group en">
        <div class="menu-item"><nuxt-link to="/en/">About</nuxt-link></div>
        <div class="menu-divide">|</div>
        <div class="menu-item"><nuxt-link to="/en/product">Projects and Brands</nuxt-link></div>
        <div class="menu-divide">|</div>
        <div class="menu-item"><nuxt-link to="/en/team">Leadership</nuxt-link></div>
        <div class="menu-divide">|</div>
        <div class="menu-item"><nuxt-link to="/en/news">Media</nuxt-link></div>
        <div class="menu-divide">|</div>
        <div class="menu-item"><nuxt-link to="/en/staff">Careers</nuxt-link></div>
    </div>
    <div class="foot-info" v-show="!isMobile&&lan=='en'">ADD .： Golden Union Center, No 68 Hongcao Road, Xuhui District, Shanghai, China  Zip Code:200233 <span class="text-divide"></span>   TEL ： 021-52341623 <span class="text-divide"></span>FAX：86-21-52385827 <br> Copyright ©2020 Shanghai Golden Union Investment Co., Ltd. | MIIT Record / License Number: Shanghai ICP preparation No. 11022539</div>
    <div class="foot-info" v-show="isMobile&&lan=='en'">
        <div>ADD .：Golden Union Center, No 68 Hongcao Road, Xuhui District, Shanghai, China </div>
        <div>Zip Code:200233</div>
        <div><span>TEL ： 021-52341623</span><span>FAX：86-21-52385827</span></div>
        <div>Copyright ©2020 Shanghai Golden Union Investment Co., Ltd.</div>
        <div>MIIT Record / License Number: Shanghai ICP preparation No. 11022539</div>
    </div>
  </div>
</template>
<script>
import bus from '@/assets/js/eventBus';
export default {
    data(){
        return {
            isMobile:false,
            lan:'ch',
        }
    },
    created(){
        this.lan = this.$store.state.lan;
    },
    mounted(){
        this.isMobile = this.$store.state.isMobile;
        bus.$on('lanchange',(lan)=>{
            this.lan = lan;
        })
    }
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
    overflow: hidden;
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
.m-page-foot{
    width:100%;
    height: auto;
    display: flex;
    flex-flow:column nowrap;
    justify-content: center;
    align-items: center;
    background: #806842;
    padding:50px 0px;
    .menu-group{
        display: flex;
        flex-flow:row nowrap;
        justify-content: center;
        align-items: center;
        &.en{
            flex-flow: row wrap;
            width:80%;
        }
        .menu-item,.menu-divide{
            white-space: nowrap;
            opacity: 1;
            font-size: 20px;
            font-family: PingFangSC, PingFangSC-Medium;
            font-weight: 500;
            color: #ffffff;
            line-height: 28px;
        }
        .menu-divide{
            padding:0px 10px;
        }
        .menu-item a{
            color: #ffffff;
        }
    }
    .foot-info{
        white-space: nowrap;
        margin-top:31px;
        opacity: 1;
        font-size: 18px;
        font-family: LucidaGrande;
        text-align: center;
        color: #ffffff;
        line-height: 34px;
        >div{
            margin-top:10px;
        }
        .text-divide{
            display: inline-block;
            width:40px;
        }
        .line{
            padding:0px 10px;
        }
    }
}
</style>