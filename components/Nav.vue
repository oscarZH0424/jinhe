<template>
  <div class="nav-head">
    <nuxt-link to="/"><img class="logo" src="../assets/img/logo.png" alt=""></nuxt-link>  
    <div class="menu-group">
      <div class="menu-item">公司介绍 > </div>
      <div class="menu-item">项目与品牌 ></div>
      <nuxt-link to="/team"><div class="menu-item">管理团队</div></nuxt-link>
      <nuxt-link to="/news"><div class="menu-item">新闻中心</div></nuxt-link>
      <nuxt-link to="/staff"><div class="menu-item">企业招聘</div></nuxt-link>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
.nav-head{
    position:relative;
    width:100%;
    height:108px;
    width:100%;
    background: #B21E27;
    display: flex;
    flex-flow:row nowrap;
    justify-content: center;
    align-items: center;
    .logo{
        height:50px;
        margin-right:187px;
    }
    .menu-group{
        width:auto;
        height:100%;
        display: flex;
        flex-flow:row nowrap;
        justify-content: flex-start;
        align-items: center;
        user-select: none;
        a{
          line-height: 135px;
        }
        .menu-item{
            width:223px;
            height:108px;
            opacity: 1;
            font-size: 18px;
            font-family: PingFangSC, PingFangSC-Medium;
            font-weight: 500;
            text-align: center;
            color: white;
            line-height: 135px;
            &:hover{
                background:white;
                color:#B21E27;
            }
            
        }
    }
}
</style>
