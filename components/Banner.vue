<template>
  <div :class="{'banner-item':!isMobile,'m-banner-item':isMobile}" :style="styleCss">
      <img v-show="!isMobile" src="~/assets/img/home-banner.png" alt="">
      <img v-show="isMobile" src="~/assets/img/m/home-banner.png" alt="">
      <div class="content-area">
          <div class="title-area">
            <div v-show="lan=='ch'" class="title">提升城市活力<br>激发城市经济增长</div>
            <div v-show="lan=='ch'" class="sub-title">Enhance Urban Vitality And <br> Stimulate Urban Economic Growth</div>
            <div v-show="lan=='en'" class="title">Enhance Urban Vitality And <br> Stimulate Urban Economic Growth</div>
        </div>
      </div>
      
  </div>
</template>

<script>
export default {
    data(){
        return {
            isMobile:false,
            styleCss:{
                height:'',
                width:''
            },
            lan:'ch'
        }
    },
    created(){
        this.lan = this.$store.state.lan;
    },
    mounted(){
        this.lan = this.$store.state.lan;
        this.isMobile = this.$store.state.isMobile;
        setTimeout(()=>{
            this.setHeight();
        },1000)
        window.addEventListener('resize', this.setHeight);
    },
    methods:{
        setHeight(){
            if(!this.isMobile){
                this.styleCss.height = `${document.documentElement.clientHeight}px`;
                this.styleCss.width = `${document.documentElement.clientWidth}px`;

            }
        }
    }
}
</script>

<style lang="scss" scoped>
.banner-item{
    position: relative;
    width:100%;
    // background: url('~/assets/img/home-banner.png');
    // background-size:100% 100%;
    img{
        width:100%;
        height: 100%;
        object-fit: cover;
    }
    .content-area{
        position:absolute;
        top:108px;
        bottom:0px;
        left:0px;
        right:0px;
    }
    .title-area{
        position:absolute;
        top:187px;
        width:60%;
        top:17.31vh;
        // left:218px;
        left:11.354vw;
        .title{
            opacity: 1;
            font-size: 86px;
            font-size:4.4vw;
            font-family: PingFangSC, PingFangSC-Medium;
            font-weight: 500;
            text-align: left;
            color: #ffffff;
            line-height: 120px;
            line-height:6.26vw;
        }
        .sub-title{
            opacity: 1;
            font-size: 38px;
            font-size:1.979vw;
            font-family: PingFangSC, PingFangSC-Medium;
            font-weight: 500;
            text-align: left;
            color: #ffffff;
            line-height: 53px;
            line-height: 2.76vw;
        }
    }
}

.m-banner-item{
    position: relative;
    background: grey;
    width:100%;
    height:1108px;
    img{
        width:100%;
    }
    .title-area{
        position:absolute;
        top:280px;
        left:45px;
        width:80%;
        .title{
            opacity: 1;
            font-size: 46px;
            font-family: PingFangSC, PingFangSC-Medium;
            font-weight: 500;
            text-align: left;
            color: #ffffff;
            line-height: 69px;
        }
        .sub-title{
            margin-top:11px;
            opacity: 1;
            font-size: 22px;
            font-family: PingFangSC, PingFangSC-Medium;
            font-weight: 500;
            text-align: left;
            color: #ffffff;
            line-height: 38px;
        }
    }
}
</style>