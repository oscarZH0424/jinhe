<template>
  <div class="banner-item">
      <img src="" alt="">
      <div class="title-area">
          <div class="title">sssss</div>
        <div class="sub-title">ssss</div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.banner-item{
    position: relative;
    background: grey;
    width:100%;
    min-height:1080px;
    img{
        width:100%;
    }
    .title-area{
        position:absolute;
        top:187px;
        left:218px;
        .title{
            opacity: 1;
            font-size: 86px;
            font-family: PingFangSC, PingFangSC-Medium;
            font-weight: 500;
            text-align: left;
            color: #ffffff;
            line-height: 120px;
        }
        .sub-title{
            opacity: 1;
            font-size: 38px;
            font-family: PingFangSC, PingFangSC-Medium;
            font-weight: 500;
            text-align: left;
            color: #ffffff;
            line-height: 53px;
        }
    }
}
</style>