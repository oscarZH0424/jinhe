<template>
  <div :class="{'banner-item':!isMobile,'m-banner-item':isMobile}">
      <img src="" alt="">
      <div class="title-area">
          <div class="title">sssss</div>
        <div class="sub-title">ssss</div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            isMobile:false
        }
    },
    mounted(){
        this.isMobile = this.$store.state.isMobile;
    }
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

.m-banner-item{
    position: relative;
    background: grey;
    width:100%;
    min-height:554px;
    img{
        width:100%;
    }
    .title-area{
        position:absolute;
        top:140px;
        left:23px;
        .title{
            opacity: 1;
            font-size: 23px;
            font-family: PingFangSC, PingFangSC-Medium;
            font-weight: 500;
            text-align: left;
            color: #ffffff;
            line-height: 35px;
        }
        .sub-title{
            opacity: 1;
            font-size: 11px;
            font-family: PingFangSC, PingFangSC-Medium;
            font-weight: 500;
            text-align: left;
            color: #ffffff;
            line-height: 19px;
        }
    }
}
</style>