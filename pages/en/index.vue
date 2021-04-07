<template>
  <div class="container">
    <client-only>
      <full-page :options="option" ref="fullpage">
        <div class="section" id="bannerSection">
          <a-carousel dotPosition="bottom">
            <Banner />
            <Banner />
            <Banner />
            <Banner />
            <Banner />
          </a-carousel>
        </div>
        <div class="section">
          <div class="desc-panel">
            <img class="bg-img bl" src="~/assets/img/desc_bg_1.png" alt=""/>
            <div class="panel-mask br" :style="maskBottomStyle"></div>
            <div class="desc-info p1">
              <div class="desc-title" style="margin-bottom:2vw;">Golden Union Asset Management Co., Ltd.</div>
              <div class="desc-text">Founded in 2020, Golden Union Asset Management Co., Ltd. is an urban renewal, income-based property investment and asset management platform jointly established by Golden Union and Warburg Pincus. It aims to activating the existing assets to create more value and infusing vitality into cities to stimulate the economic growth.</div>
            </div> 
          </div>
        </div>      
        <div class="section">
          <div class="desc-panel">
            <img class="bg-img br" src="~/assets/img/desc_bg_2.png" alt=""/>
            <div class="panel-mask bl" :style="maskBottomStyle"></div>
            <div class="desc-info p2">
              <div class="desc-title">Management Scale</div>
              <div class="desc-label-group">
                <div class="label-item">
                  <div class="label-val">¥ 15.1 billion</div>
                  <div class="label-name">Total AUM</div>
                </div>
                <div class="label-item">
                  <div class="label-val">19</div>
                  <div class="label-name">Projects</div>
                </div>
                <div class="label-item">
                  <div class="label-val">396,000 sqm</div>
                  <div class="label-name">GFA</div>
                </div>
                <div class="label-item" style="width:6vw;">
                  <div class="label-val">2</div>
                  <div class="label-name"> Cities</div>
                </div>
              </div>
              <div class="desc-tip">*By the date of 30th Dec. 2020</div>
            </div>
          </div>
        </div>
        <div class="section">
          <div class="desc-panel" >
            <img class="bg-img br full" src="~/assets/img/desc_bg_5.png" alt=""/>
            <div class="desc-dark">
              <div class="desc-title">Multi-format Operation</div>
              <div class="desc-subtitle">Accurate positioning of brand products, good at multi-format management, revitalizing the community, and comprehensively enhancing the value of property assets.</div>
              <div class="desc-intro-group">
                <div class="desc-intro-item">
                  <div class="intro-title">base Serviced Apartment</div>
                  <div class="intro-text">An inspirational living space that serves different kinds of customer. Through the contemporary design, revitalizing the old communities and buildings.</div>
                </div>
                <div class="desc-intro-item">
                  <div class="intro-title">Tulu Co-Living Apartment</div>
                  <div class="intro-text">Design-led modern urban co-living space is built to inspire and promote communication among young sprits.</div>
                </div>
                <div class="desc-intro-item">
                  <div class="intro-title">Surpass Space <br> Office Space</div>
                  <div class="intro-text">It provides different sizes office space to meet the different modern office needs of enterprise, covering various types of business office buildings, boutique offices, creative space etc.</div>
                </div>
                <div class="desc-intro-item">
                  <div class="intro-title">Surpass / Infinity Space Community Business</div>
                  <div class="intro-text over">It’s a modern life style block with the distinctive supporting community commerce, provides the convenience for the office tenants and surrounding communities, and upgrades the value of the property.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="section">
          <div class="desc-panel">
            <img class="bg-img tl" src="~/assets/img/desc_bg_3.png" alt=""/>
            <div class="panel-mask tr" :style="maskTopStyle"></div>
            <div class="desc-info p3">
              <div class="desc-title">Partners</div>
              <div class="multi-intro">
                <div class="multi-main">
                  <img class="main-logo" src="~/assets/img/logo_1.png" alt=""/>
                  <div class="main-title">A leading global private equity firm</div>
                  <div class="main-subtitle">Since its establishment in 1966, it has built close partnerships with thousands of entrepreneurs and management teams throughout the world, and has accumulated rich industry experience.</div>
                  <div class="text-group">
                    <div class="text-item">
                      <div class="text-title">50 YEARS</div>
                      <div class="text-info">INVESTING</div>
                    </div>
                    <div class="text-item">
                      <div class="text-title">$37 Billion</div>
                      <div class="text-info">AUM</div>
                    </div>
                    <div class="text-item">
                      <div class="text-title">700</div>
                      <div class="text-info"> COMPANIES SINCE INCEPTION</div>
                    </div>
                    <div class="text-item">
                      <div class="text-title">120</div>
                      <div class="text-info">PORTFOLIO COMPANIES</div>
                    </div>
                    <div class="text-item">
                      <div class="text-title">$48 Billion</div>
                      <div class="text-info">INVESTMENTS</div>
                    </div>
                    <div class="text-item">
                      <div class="text-title">1994</div>
                      <div class="text-info">MARKS ITS INCEPTION IN CHINA</div>
                    </div>
                  </div>
                </div>
                <div class="multi-sub">
                  <div class="sub-intro-item">
                    <img style="margin-top:27px;width:265px;width:10.52083vw;margin-top:1.40625vw;" src="~/assets/img/logo_2.png" alt=""/>
                    <div class="sub-text over" style="margin-top:27px;margin-top:1.40625vw;"><span>Beijing Capital Grand Limited (“Capital Grand”)</span>is mainly engaged in commercial property development and operation management, and aims at a leading commercial real estate operator in China.</div>
                  </div>
                  <div class="sub-intro-item">
                    <img style="margin-top:36px;width:134px;margin-top:1.875vw;width:6.979167vw;" src="~/assets/img/logo_3.png" alt=""/>
                    <div class="sub-text over" style="margin-top:43px;margin-top:2.239583vw;">China Vanke Co., Ltd. was established in 1984. After more than 30 years of development in real estate industry since 1988, it has been a leading city supporting service provider in China.</div>
                  </div>
                  <div class="sub-intro-item">
                    <img style="margin-top:18px;width:206px;margin-top:0.9375vw;width:10.72916vw;" src="~/assets/img/logo_4.png" alt=""/>
                    <div class="sub-text over" style="margin-top:39px;margin-top:2.03125vw;"><span>“InfraRed NF Greater China Real Estate Fund"</span>is a private property fund developed by Nan Fung Group in cooperation with HSBC in 2007, striving for investing the value-added properties in China.</div>
                  </div>
                  <div class="sub-intro-item">
                    <img style="width:178px;width:9.27083vw;" src="~/assets/img/logo_5.png" alt=""/>
                    <div class="sub-text over" style="margin-top:25px;margin-top:1.302083vw;"><span>GIC</span>Private Limited is a sovereign wealth fund established by the Government of Singapore in 1981 to manage Singapore's foreign reserves. Its mission is to manage Singapore’s foreign reserves and to invest overseas. It currently invests more than $100 billion across 6 core asset classes in more than 40 countries around the world.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="section">
          <div class="desc-panel">
            <img class="bg-img br" src="~/assets/img/desc_bg_4.png" alt=""/>
            <div class="panel-mask tl"  :style="maskTopStyle"></div>
            <div class="desc-info p4">
              <div class="desc-title" style="margin-bottom:22px;">Business Model</div>
              <div class="desc-subtitle" style="margin-bottom:63px;">Golden Union Asset Management’s Full Lifecycle Control System<br>"One-stop" Asset Management Service</div>
              <div class="tag-group">
                <div class="tag-item">
                  <div class="tag-text">Property Acquisition</div>
                </div>
                <div class="tag-item">
                  <div class="tag-text">Product Positioning</div>
                  <div class="tag-text">Construction Management</div>
                </div>
                <div class="tag-item">
                  <div class="tag-text">Diversified</div>
                  <div class="tag-text">Profit Base</div>
                </div>
                <div class="tag-item">
                  <div class="tag-text">Operation Management</div>
                </div>
              </div>
            </div>
          </div>
        </div>      
        <div class="section">
          <div class="desc-panel">
            <img class="bg-img br  full" src="~/assets/img/desc_bg_5.png" alt=""/>
            <div class="desc-dark">
              <div class="desc-title" style="margin-bottom:85px;margin-top:277px;">Operational Advantages</div>
              <div class="desc-intro-group">
                <div class="desc-intro-item">
                  <div class="intro-title no-border">Resource</div>
                  <div class="intro-text">High-quality resource integration capabilities<br>Advantages of resource industry layout<br>Scale advantage and brand advantage</div>
                </div>
                <div class="desc-intro-item">
                  <div class="intro-title no-border">Capital</div>
                  <div class="intro-text">Strong shareholder background and capital strength<br>Golden Union, a comprehensive real estate group with four major business sectors<br>Warburg Pincus, one of the oldest private equity firms in the United States</div>
                </div>
                <div class="desc-intro-item">
                  <div class="intro-title no-border">Market</div>
                  <div class="intro-text">Sharp market insight<br>Precise market positioning</div>
                </div>
                <div class="desc-intro-item">
                  <div class="intro-title no-border">Innovation</div>
                  <div class="intro-text">Product innovation ability<br>Optimized business portfolio<br>Self-contained design and reconstruction capabilities</div>
                </div>
              </div>
            </div>
          </div>
        </div>      
      </full-page>
    </client-only>
  </div>
</template>

<script>
import bus from '@/assets/js/eventBus';
export default {
    data(){
      return {
        option:{
          licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
          resize: true,
          scrollOverflow: false,
          navigation: false,//是否显示导航，默认为false
          navigationPosition: 'right',//导航小圆点的位置
          scrollBar: false,
          anchors: ["banner", "desc", "glgm","dytyy","hzf","syms","yyys"],
          lockAnchors: true,
          afterLoad: this.afterLoad,
        },
        maskBottomStyle:{
          borderBottomWidth:``
        },
        maskTopStyle:{
           borderTopWidth:``
        }
      }
    },
    mounted() {
      bus.$on('hashchange',()=>{
        console.log('hashChange',window.location.hash);
        setTimeout(()=>{
          if (window.location.hash) {
              this.goAnchor(window.location.hash)
          }
        },10)
      })
      if (window.location.hash) {
          this.goAnchor(window.location.hash)
      }
      this.setHeight();
      window.addEventListener('resize', this.setHeight);
    },
    methods: {
      setHeight(){
        this.maskBottomStyle.borderBottomWidth = `${document.documentElement.clientHeight}px`;
        this.maskTopStyle.borderTopWidth = `${document.documentElement.clientHeight}px`;
      },
        afterLoad(){
          console.log(arguments);
        },
        goAnchor(selector) {
            // 最好加个定时器给页面缓冲时间
            selector = selector.substring(1,100);
            setTimeout(()=>{
              if(this.$refs.fullpage){
                this.$refs.fullpage.api.moveTo(selector,1);
              }
            },100)
            
        }
    },
}
</script>

<style lang="scss" scoped>

.container {
  position:relative;
  width:100%;
  margin: 0 auto;
  
}
.section{
  width:100%;
  height:100%;
}

.desc-panel{
  position: relative;
  width:100%;
  height:100%;
  overflow: hidden;
  .panel-mask{
    position:absolute;
    height:100%;
    width:68.75vw;
    top:0;
    mix-blend-mode: multiply;
    &.br{     
      border-bottom:1080px solid rgba(128,0,0,.8);
      border-left:14.583vw solid transparent;
      border-right:0px solid transparent;
      right:0;
    }
    &.bl{
      border-bottom:1080px solid rgba(128,0,0,.8);
      border-right:14.583vw solid transparent;
      border-left:0px solid transparent;
      left:0;
    }
    &.tr{
      border-top:1080px solid rgba(128,0,0,.8);
      border-left:14.583vw solid transparent;
      border-right:0px solid transparent;
      right:0;
    }
    &.tl{
      border-top:1080px solid rgba(128,0,0,.8);
      border-right:14.583vw solid transparent;
      border-left:0px solid transparent;
      left:0;
    }
  }
  .bg-img{
    position:absolute;
    &.bl{
      bottom:0px;
      left:0;
    }
    &.br{
       bottom:0px;
       right:0;
    }
    &.tl{
       top:0px;
       left:0;
    }
    &.tr{
       top:0px;
       right:0;
    }
    &.full{
      width:100%;
      height:100%;
    }
  }
  .desc-info{
    position:absolute;
    &.p1{
      top:198px;
      right:192px;
      width:639px;
      top:7.3125vw;
      right:10vw;
      width:33.28125vw;
      .desc-title{
        text-align: right;
      }
      .desc-text{
        text-align: right;
      }
    }
    &.p2{
      left:250px;
      top:193px;
      left:13.0208vw;
      top:10.052vw;
    }
    &.p3{
      right:192px;
      top:170px;
      .desc-title{
        text-align: right;
      }
    }
    &.p4{
      top:147px;
      left:282px;
    }

    .desc-title{
      opacity: 1;
      font-size: 62px;
      font-family: PingFangSC, PingFangSC-Semibold;
      font-weight: 600;
      color: #ffffff;
      text-align: left;
      line-height: 87px;
      margin-bottom:88px;
      font-size:3.2292vw;
      line-height: 4.53125vw;
      margin-bottom:3.583vw;
    }
    .desc-subtitle{
      opacity: 1;
      font-size: 28px;
      font-family: PingFangSC, PingFangSC-Regular;
      font-weight: 400;
      text-align: left;
      color: #ffffff;
      line-height: 40px;
      font-size: 1.4583vw;
      line-height: 2.083vw;

    }
    .desc-text{
      opacity: 1;
      font-size: 30px;
      font-family: PingFangSC, PingFangSC-Regular;
      font-weight: 400;
      text-align: left;
      color: #ffffff;
      line-height: 56px;
      font-size: 1.5625vw;
      line-height: 2.9167vw;
    }
    .desc-label-group{
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      align-items: flex-start;
      width:700px;
      width:36.4583vw;
      .label-item{
        position: relative;
        margin-bottom:118px;
        margin-bottom:6.14583vw;
        &::after{
          position:absolute;
          content:' ';
          width:111px;
          height:4px;
          background:#8f6d39;
          top:-10px;
          left:0px;
          width:5.78125vw;
          height:0.2083vw;
          top:-0.52083vw;
        }
        .label-val{
          opacity: 1;
          font-size: 55px;
          font-family: Arial, Arial-BoldMT;
          font-weight: bold;
          text-align: left;
          color: #ffffff;
          line-height: 64px;
          font-size: 2.864583vw;
          line-height: 3.33vw;

        }
        .label-name{
          opacity: 1;
          font-size: 29px;
          font-family: PingFangSC, PingFangSC-Regular;
          font-weight: 400;
          text-align: left;
          color: #ffffff;
          line-height: 41px;
          font-size: 1.510417vw;
          line-height: 2.135417vw;

        }
      }
    }
    .desc-tip{
      margin-top:181px;
      opacity: 1;
      font-size: 18px;
      font-family: LucidaGrande;
      text-align: left;
      color: #ffffff;
      line-height: 21px;
      margin-top:9.427083vw;
      font-size: 0.9375vw;
      line-height: 1.09375vw;
    }
    .multi-intro{
      display: flex;
      flex-flow:row nowrap;
      justify-content: flex-start;
      align-items: stretch;
      .multi-main{
        width:815px;
        height:531px;
        background: white;
        border:1px solid #898989;
        text-align:center;
        margin-right:31px;
        padding:67px 60px 30px 60px;
        width:42.447917vw;
        height:27.65625vw;
        margin-right:1.614583vw;
        padding:3.489583vw 3.125vw 1.5625vw 3.125vw;
        min-width:516px;
        min-height:336px;
        .main-title{
          opacity: 1;
          font-size: 16px;
          font-family: PingFangSC, PingFangSC-Regular;
          font-weight: 400;
          color: #231815;
          line-height: 22px;
          margin-top:20px;
          font-size: 0.83vw;
          line-height: 1.14583vw;
          margin-top:1.04167vw;
        }
        .main-subtitle{
          margin:0 auto;
          width:488px;
          opacity: 1;
          font-size: 16px;
          font-family: LucidaGrande;
          text-align: center;
          color: #898989;
          line-height: 18px;
          margin-top:7px;
          margin-bottom:37px;
          width:25.4167vw;
          font-size: 0.83vw;
          line-height: 0.9375vw;
          margin-top:0.364583vw;
          margin-bottom:0.927083vw;
        }
        .text-group{
          border-top:1px dashed #898989;
          padding-top:26px;
          display: flex;
          flex-flow: row wrap;
          justify-content: space-between;
          align-items: flex-start;
          padding-top:1.354167vw;

          .text-item{
            min-width:144px;
            margin-bottom:49px;
             min-width:7.5vw;
            margin-bottom:0.552083vw;
            width:30%;
            // &:nth-child(3n-1){
            //   padding:0px 90px;
            //   padding:0px 4.6875vw;
            // }
            .text-title{
              opacity: 1;
              font-size: 35px;
              font-family: Arial, Arial-BoldMT;
              font-weight: BoldMT;
              color: #af1f22;
              line-height: 41px;
              font-size: 1.822916vw;
              line-height: 2.1354167vw;

            }
            .text-info{
              opacity: 1;
              font-size: 18px;
              font-family: PingFangSC, PingFangSC-Regular;
              font-weight: 400;
              color: #898989;
              line-height: 25px;
              font-size: 0.9375vw;
              line-height: 1.302083vw;

            }
          }
        }
      }
      .multi-sub{
        width:555px;
        height:531px;
        display: flex;
        flex-flow:row wrap;
        justify-content: space-between;
        align-items: center;
        width:28.90625vw;
        height:27.65625vw;
        min-width:351px;
        .sub-intro-item{
          width:261px;
          height:244px;
          margin-right:31px;
          margin-bottom:41px;
          background: white;
          padding:30px;
          width:13.59375vw;
          height:12.7083vw;
          margin-right:1.614583vw;
          margin-bottom:2.1354167vw;
          padding:1.5625vw;
          min-width:165px;
          min-height:154px;
          &:nth-child(2n){
            margin-right:0px;
          }
          .sub-text{
            text-align: left;
            opacity: 1;
            font-size: 12px;
            font-family: PingFangSC, PingFangSC-Regular;
            font-weight: 400;
            color: #000;
            line-height: 17px;
            font-size: 0.625vw;
            line-height: 0.8854167vw;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 4;
            overflow: hidden;
            >span{
              color: #af1e23;
            }
          }
        }
      }

    }
    .tag-group{
      width:555px;
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      align-items: center;
      width:28.90625vw;
      .tag-item{
        width:261px;
        height:244px;
        margin-right:31px;
        margin-bottom:38px;
        background: rgba(255,255,255,.85);
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        width:13.59375vw;
        height:12.7083vw;
        margin-right:1.614583vw;
        margin-bottom:1.979167vw;
        &:nth-child(2n){
          margin-right:0px;
        }
        .tag-text{
          opacity: 1;
          font-size: 34px;
          font-family: PingFangSC, PingFangSC-Regular;
          font-weight: 400;
          color: #af1e23;
          line-height: 48px;
          font-size: 1.77083vw;
          line-height: 2.5vw;
          text-align: center;

        }
      }
    }
  }
  .desc-dark{
    position: absolute;
    width:100%;
    height:100%;
    background:rgba(0,0,0,.6);
    text-align: center;
    padding:0px 399px;
    padding:0px 20.78125vw;
    .desc-title{
      margin-top:255px;
      opacity: 1;
      font-size: 62px;
      font-family: PingFangSC, PingFangSC-Semibold;
      font-weight: 600;
      color: #ffffff;
      line-height: 87px;
      margin-bottom:27px;
      margin-top:13.28125vw;
      font-size: 3.22917vw;
      line-height: 4.53125vw;
      margin-bottom:1.40625vw;

    }
    .desc-subtitle{
      opacity: 1;
      font-size: 24px;
      font-family: PingFangSC, PingFangSC-Regular;
      font-weight: 400;
      color: #ffffff;
      line-height: 33px;
      margin-bottom:103px;
      font-size: 1.25vw;
      line-height: 1.71875vw;
      margin-bottom:5.364583vw;
    }
    .desc-intro-group{
      display: flex;
      flex-flow:row nowrap;
      justify-content: space-between;
      align-items: center;
      .desc-intro-item{
        width: 261px;
        height: 244px;
        opacity: 1;
        border: 1px solid #898989;
        padding:20px;
        background: rgba(255,255,255,.8);
        width: 13.59375vw;
        height: 12.7083vw;
        padding:1.0417vw;

        .intro-title{
          opacity: 1;
          font-size: 27px;
          font-family: LucidaGrande;
          color: #af1e23;
          line-height: 32px;
          padding-bottom:10px;
          border-bottom:1px dashed #af1e23;
          text-align: left;
          font-size: 1.40625vw;
          line-height: 1.67vw;
          padding-bottom:0.52083vw;
          &.no-border{
            padding-bottom:0px;
            border-bottom:0;
          }
        }
        .intro-text{
          margin-top:10px;
          opacity: 1;
          font-size: 12px;
          font-family: PingFangSC, PingFangSC-Regular;
          font-weight: 400;
          color: #231815;
          line-height: 17px;
          text-align: left;
          margin-top:0.52083vw;
          font-size: 0.625vw;
          line-height: 0.88541vw;
          &.over{
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 4;
            overflow: hidden;
          }
          

        }
      }
    }
  }
}
</style>
<style>

fp-scroller{
  height:100%;
}
.ant-carousel {
  width:100%;
}
.ant-carousel  .slick-slider {
  text-align: center;
  height: 1080px;
  line-height: 160px;
  background: white;
  overflow: hidden;
}

.ant-carousel  .slick-slider h3 {
  color: #fff;
}
.ant-carousel .slick-dots li button{
  width:15px;
  height:15px;
  margin-right:88px;
}
.ant-carousel .slick-dots-bottom{
  bottom:41px;
  height:15px;
}
.ant-carousel .slick-dots li:last-child button{
  margin-right:0px;
}
.ant-carousel .slick-dots li.slick-active button{
  width:15px;
  background: #B21E27;
}
</style>
