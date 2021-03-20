<template>
  <div class="nav-head">
    <img class="logo" src="../assets/img/logo.png" alt="">
    <div class="menu-group">
      <div class="menu-item">公司介绍 > </div>
      <div class="menu-item">项目与品牌22</div>
      <div class="menu-item">管理团队</div>
      <div class="menu-item">新闻中心</div>
      <div class="menu-item">企业招聘</div>
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
        .menu-item{
            width:223px;
            height:100%;
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
