<template>
  <div class="container">
    <client-only>
      <full-page :options="option" ref="fullpage">
        <div class="section" id="bannerSection">
          <a-carousel dotPosition="bottom">
            <Banner v-for="(banner,index) in banners" :info="banner" :key="index"/>
          </a-carousel>
        </div>
        <div class="section">
          <div class="desc-panel">
            <img class="bg-img bl  hidden" :class="{'visible animate__animated animate__fadeIn':activeIndex==1}" style="height:100vh;" :src="configObj[1].coverUrl || require('~/assets/img/desc_bg_1.png')" alt=""/>
            <div class="panel-mask br  hidden"  :class="{'visible  animate__animated animate__fadeInRight animate__delay-1s':activeIndex==1}" :style="maskBottomStyle"></div>
            <div class="desc-info p1 hidden" :class="{'visible  animate__animated animate__fadeInUp animate__delay-2s':activeIndex==1}">
              <div class="desc-title" style="margin-bottom:2vw;">{{configObj[1].text1 || 'Golden Union Asset Management Co., Ltd.'}}</div>
              <div class="desc-text">{{configObj[1].text2 || 'Founded in 2020, Golden Union Asset Management Co., Ltd. is an urban renewal, income-based property investment and asset management platform jointly established by Golden Union and Warburg Pincus. It aims to activating the existing assets to create more value and infusing vitality into cities to stimulate the economic growth.'}}</div>
            </div> 
          </div>
        </div>      
        <div class="section">
          <div class="desc-panel">
            <img class="bg-img br hidden" :class="{'visible animate__animated animate__fadeIn':activeIndex==2}" style="width:56.25vw;" :src="configObj[2].coverUrl || require('~/assets/img/desc_bg_2.png')" alt=""/>
            <div class="panel-mask bl hidden"  :class="{'visible  animate__animated animate__fadeInLeft animate__delay-1s':activeIndex==2}" :style="maskBottomStyle"></div>
            <div class="desc-info p2 hidden"  :class="{'visible  animate__animated animate__fadeInUp animate__delay-2s':activeIndex==2}">
              <div class="desc-title">{{configObj[2].text || 'Management Scale'}}</div>
              <div class="desc-label-group">
                <div class="label-item">
                  <div class="label-val">{{configObj[2].text1 || '¥ 15.1 billion'}}</div>
                  <div class="label-name">{{configObj[2].text2 || 'Total AUM'}}</div>
                </div>
                <div class="label-item">
                  <div class="label-val">{{configObj[2].text3 || '19'}}</div>
                  <div class="label-name">{{configObj[2].text4 || 'Projects'}}</div>
                </div>
                <div class="label-item">
                  <div class="label-val">{{configObj[2].text5 || '396,000 sqm'}}</div>
                  <div class="label-name">{{configObj[2].text6 || 'GFA'}}</div>
                </div>
                <div class="label-item" style="width:6vw;">
                  <div class="label-val">{{configObj[2].text7 || '2'}}</div>
                  <div class="label-name">{{configObj[2].text8 || 'Cities'}}</div>
                </div>
              </div>
              <div class="desc-tip">{{configObj[2].text9 || '*By the date of 30th Dec. 2020'}}</div>
            </div>
          </div>
        </div>
        <div class="section">
          <div class="desc-panel" >
            <img class="bg-img br full" :src="configObj[3].coverUrl || require('~/assets/img/desc_bg_5.png')" alt=""/>
            <div class="desc-dark">
              <div class="hidden" :class="{'visible  animate__animated animate__fadeInUp':activeIndex==3}">
                <div class="desc-title">{{configObj[3].text || 'Multi-format Operation'}}</div>
                <div class="desc-subtitle">{{configObj[3].text1 || 'Accurate positioning of brand products, good at multi-format management, revitalizing the community, and comprehensively enhancing the value of property assets.'}}</div>
                <div class="desc-intro-group">
                  <div class="desc-intro-item">
                    <div class="intro-title" v-html="brStr(configObj[3].text2 || 'base Serviced Apartment')"></div>
                    <div class="intro-text hidden">{{configObj[3].text3 || 'An inspirational living space that serves different kinds of customer. Through the contemporary design, revitalizing the old communities and buildings.'}}</div>
                  </div>
                  <div class="desc-intro-item">
                    <div class="intro-title" v-html="brStr(configObj[3].text4 || 'Tulu Co-Living Apartment')"></div>
                    <div class="intro-text hidden">{{configObj[3].tex5 || 'Design-led modern urban co-living space is built to inspire and promote communication among young sprits.'}}</div>
                  </div>
                  <div class="desc-intro-item">
                    <div class="intro-title" v-html="brStr(configObj[3].text6 || 'Surpass Space <br> Office Space')"></div>
                    <div class="intro-text hidden">{{configObj[3].tex7 || 'It provides different sizes office space to meet the different modern office needs of enterprise, covering various types of business office buildings, boutique offices, creative space etc.'}}</div>
                  </div>
                  <div class="desc-intro-item">
                    <div class="intro-title" v-html="brStr(configObj[3].text8 || 'Surpass / Infinity Space Community Business')"></div>
                    <div class="intro-text hidden">{{configObj[3].tex9 || 'It’s a modern life style block with the distinctive supporting community commerce, provides the convenience for the office tenants and surrounding communities, and upgrades the value of the property.'}}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="section">
          <div class="desc-panel">
            <img class="bg-img tl desc-bg-3" src="~/assets/img/desc_bg_3.png" alt=""/>
            <div class="panel-mask tr hidden " :class="{'visible  animate__animated animate__fadeInRight':activeIndex==4}" :style="maskTopStyle"></div>
            <div class="desc-info p3 hidden" :class="{'visible  animate__animated animate__fadeInUp  animate__delay-1s':activeIndex==4}">
              <div class="desc-title">{{configObj[4].text || 'Partners'}}</div>
              <div class="multi-intro">
                <div class="multi-main">
                  <img class="main-logo" src="~/assets/img/logo_1.png" alt=""/>
                  <div class="main-title">{{configObj[4].text1 || 'A leading global private equity firm'}}</div>
                  <div class="main-subtitle">{{configObj[4].text2 || 'Since its establishment in 1966, it has built close partnerships with thousands of entrepreneurs and management teams throughout the world, and has accumulated rich industry experience.'}}</div>
                  <div class="text-group">
                    <div class="text-item bottom right">
                      <div class="text-title">{{configObj[4].text3 || '50 YEARS'}}</div>
                      <div class="text-info">{{configObj[4].text4 || 'INVESTING'}}</div>
                    </div>
                    <div class="text-item bottom right">
                      <div class="text-title">{{configObj[4].text5 || '$37 Billion'}}</div>
                      <div class="text-info">{{configObj[4].text6 || 'AUM'}}</div>
                    </div>
                    <div class="text-item bottom">
                      <div class="text-title">{{configObj[4].text7 || '700'}}</div>
                      <div class="text-info">{{configObj[4].text8 || 'COMPANIES SINCE INCEPTION'}}</div>
                    </div>
                    <div class="text-item right tb">
                      <div class="text-title">{{configObj[4].text9 || '120'}}</div>
                      <div class="text-info">{{configObj[4].text10 || 'PORTFOLIO COMPANIES'}}</div>
                    </div>
                    <div class="text-item right tb">
                      <div class="text-title">{{configObj[4].text11 || '$48 Billion'}}</div>
                      <div class="text-info">{{configObj[4].text12 || 'INVESTMENTS'}}</div>
                    </div>
                    <div class="text-item tb">
                      <div class="text-title">{{configObj[4].text13 || '1994'}}</div>
                      <div class="text-info">{{configObj[4].text14 || 'MARKS ITS INCEPTION IN CHINA'}}</div>
                    </div>
                  </div>
                </div>
                <div class="multi-sub">
                  <div class="sub-intro-item">
                    <img style="margin-top:27px;width:265px;width:10.52083vw;margin-top:1.40625vw;" src="~/assets/img/logo_2.png" alt=""/>
                    <div class="sub-text over" style="margin-top:27px;margin-top:1.40625vw;"><span>{{configObj[4].text15 || ''}}</span>{{configObj[4].text16 || ''}}</div>
                  </div>
                  <div class="sub-intro-item">
                    <img style="margin-top:36px;width:134px;margin-top:1.875vw;width:6.979167vw;" src="~/assets/img/logo_3.png" alt=""/>
                    <div class="sub-text over" style="margin-top:43px;margin-top:2.239583vw;"><span>{{configObj[4].text17 || ''}}</span>{{configObj[4].text18 || ''}}</div>
                  </div>
                  <div class="sub-intro-item">
                    <img style="margin-top:18px;width:206px;margin-top:0.9375vw;width:10.72916vw;" src="~/assets/img/logo_4.png" alt=""/>
                    <div class="sub-text over" style="margin-top:39px;margin-top:2.03125vw;"><span>{{configObj[4].text19 || ''}}</span>{{configObj[4].text20 || ''}}</div>
                  </div>
                  <div class="sub-intro-item">
                    <img style="width:178px;width:9.27083vw;" src="~/assets/img/logo_5.png" alt=""/>
                    <div class="sub-text over" style="margin-top:25px;margin-top:1.302083vw;"><span>{{configObj[4].text21 || ''}}</span>{{configObj[4].text22 || ''}}</div>
                  </div>
                </div>
              </div>
            </div>
            <img class="desc-hand" style="" src="~/assets/img/desc_head.png" alt="">
          </div>
        </div>
        <div class="section">
          <div class="desc-panel">
            <img class="bg-img br hidden" :class="{'visible  animate__animated animate__fadeIn':activeIndex==5}" style="height:100vh" :src="configObj[5].coverUrl || require('~/assets/img/desc_bg_4.png')" alt=""/>
            <div class="panel-mask tl hidden"  :class="{'visible  animate__animated animate__fadeInLeft animate__delay-1s':activeIndex==5}" :style="maskTopStyle"></div>
            <div class="desc-info p4 hidden" :class="{'visible  animate__animated animate__fadeInUp animate__delay-2s':activeIndex==5}">
              <div class="desc-title" style="margin-bottom:22px;">{{configObj[5].text || 'Business Model'}}</div>
              <div class="desc-subtitle tag">{{configObj[5].text1 || 'Golden Union Asset Management’s Full Lifecycle Control System'}}</div>
              <div class="desc-subtitle tag" style="margin-bottom:63px;">{{configObj[5].text2 || '"One-stop" Asset Management Service'}}</div>
              <div class="tag-group">
                <div class="tag-item">
                  <div class="tag-text" v-for="(tag,index) in configObj[5].text3.split('\n')" :key="index">{{tag}}</div>
                </div>
                <div class="tag-item">
                  <div class="tag-text" v-for="(tag,index) in configObj[5].text4.split('\n')" :key="index">{{tag}}</div>
                </div>
                <div class="tag-item">
                  <div class="tag-text" v-for="(tag,index) in configObj[5].text5.split('\n')" :key="index">{{tag}}</div>
                </div>
                <div class="tag-item">
                  <div class="tag-text" v-for="(tag,index) in configObj[5].text6.split('\n')" :key="index">{{tag}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>      
        <div class="section">
          <div class="desc-panel">
            <img class="bg-img br  full" :src="configObj[6].coverUrl || require('~/assets/img/desc_bg_5.png')" alt=""/>
            <div class="desc-dark">
              <div class="hidden" :class="{'visible  animate__animated animate__fadeInUp':activeIndex==6}">
                <div class="desc-title" style="margin-bottom:85px;margin-top:169px;">{{configObj[6].text || 'Operational Advantages'}}</div>
                <div class="desc-intro-group">
                  <div class="desc-intro-item">
                    <div class="intro-title no-border">{{configObj[6].text1 || 'Resource'}}</div>
                    <div class="intro-text bold" v-html="brStr(configObj[6].text2 || 'High-quality resource integration capabilities<br>Advantages of resource industry layout<br>Scale advantage and brand advantage')"></div>
                  </div>
                  <div class="desc-intro-item">
                    <div class="intro-title no-border">{{configObj[6].text3 || 'Capital'}}</div>
                    <div class="intro-text hidden bold"  v-html="brStr(configObj[6].text4 || 'Strong shareholder background and capital strength<br>Golden Union, a comprehensive real estate group with four major business sectors<br>Warburg Pincus, one of the oldest private equity firms in the United States')"></div>
                  </div>
                  <div class="desc-intro-item">
                    <div class="intro-title no-border">{{configObj[6].text5 || 'Market'}}</div>
                    <div class="intro-text bold" v-html="brStr(configObj[6].text6 || 'Sharp market insight<br>Precise market positioning')"></div>
                  </div>
                  <div class="desc-intro-item">
                    <div class="intro-title no-border">{{configObj[6].text7 || 'Innovation'}}</div>
                    <div class="intro-text bold"  v-html="brStr(configObj[6].text8 || 'Product innovation ability<br>Optimized business portfolio<br>Self-contained design and reconstruction capabilities')"></div>
                  </div>
                </div>
              </div>
              <div style="position:absolute;bottom:0px;left:0px;width:100%;">
                <Foot/>
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
import axios from 'axios'
export default {
  async  asyncData ({ params }) {//请求
    let configObj = {};
    let banners = [];
    let {data:{code,data}} = await axios.post('http://www.dream-fly.com.cn:8383/ipe/screen',{data:{status:true},start:0,limit:1000});
    if(code == 0){
      data.forEach(config => {
        configObj[config.orderNum] = Object.assign(config,JSON.parse(config.config));
      });
    }
    let {data:{code:code2,data:data2}} = await axios.post('http://www.dream-fly.com.cn:8383/banner/screen',{data:{status:true,belong:'home',types:['pc']},start:0,limit:1000});
    if(code2 == 0){
     banners = data2;
    }
    return { configObj ,banners}

	},
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
        },
        activeIndex:0
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
        afterLoad(pre,cur,direction){
          console.log(arguments);
          this.activeIndex = cur.index;
        },
        goAnchor(selector) {
            // 最好加个定时器给页面缓冲时间
            selector = selector.substring(1,100);
            setTimeout(()=>{
              if(this.$refs.fullpage){
                this.$refs.fullpage.api.moveTo(selector,1);
              }
            },100)
            
        },
        brStr(val){
          return val ? val.split('\n').join('<br>') : '';
        },
        tagText(val){
          let arr = val.split('\n');
          let str = '';
          arr.forEach(text => {
              str+= `<div class="tag-text">${text}</div>`
          });
          return str;
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
.hidden{
  opacity:0;
}
.visible{
  opacity:1;
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
      border-bottom:1080px solid #af1e23;
      border-left:14.583vw solid transparent;
      border-right:0px solid transparent;
      right:0;
    }
    &.bl{
      border-bottom:1080px solid #af1e23;
      border-right:14.583vw solid transparent;
      border-left:0px solid transparent;
      left:0;
    }
    &.tr{
      border-top:1080px solid #af1e23;
      border-left:14.583vw solid transparent;
      border-right:0px solid transparent;
      right:0;
    }
    &.tl{
      border-top:1080px solid #af1e23;
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
  .desc-bg-3{
    width:57.604167vw;
  }
  .desc-hand{
    position:absolute;left:10.3125vw;top:11.614583vw;width:16.5104167vw;
  }
  .desc-info{
    position:absolute;
    &.p1{
      top:198px;
      right:192px;
      width:639px;
      // top:10.3125vw;
      right:10vw;
      width:33.28125vw;
    }
    &.p2{
      left:250px;
      top:193px;
      left:13.0208vw;
      // top:17.8703vh;
    }
    &.p3{
      right:192px;
      top:170px;
      right:10vw;
      .desc-title{
        text-align: right;
      }
    }
    &.p4{
      top:147px;
      left:282px;
      left:14.6875vw;
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
      margin-bottom:4.583vw;
    }
    .desc-subtitle{
      opacity: 1;
      font-size: 28px;
      font-family: PingFangSC, PingFangSC-Regular;
      font-weight: 400;
      text-align: left;
      color: #ffffff;
      margin-bottom:15px;
      line-height: 40px;
      font-size: 1.4583vw;
      line-height: 2.083vw;
      margin-bottom:0.78125vw;
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
        margin-bottom:10.9259vh;
        margin-bottom:6.1458vw;
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
      margin-top:16.7592vh;
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
        border:1px solid #b3b3b3;
        text-align:center;
        margin-right:31px;
        padding:67px 60px 30px 60px;
        width:42.447917vw;
        height:27.65625vw;
        margin-right:1.614583vw;
        padding:3.489583vw 3.125vw 1.5625vw 3.125vw;
        min-width:612px;
        min-height:399px;
        .main-logo{
          width:273px;
          width:14.21875vw;
        }
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
          width:70.4%;
          opacity: 1;
          font-size: 16px;
          font-family: LucidaGrande;
          text-align: center;
          color: #898989;
          line-height: 18px;
          margin-top:7px;
          margin-bottom:37px;
          // width:25.4167vw;
          font-size: 0.83vw;
          // line-height: 0.9375vw;
          margin-top:0.364583vw;
          margin-bottom:1.927083vw;
        }
        .text-group{
          border-top:1px dashed rgba(137,137,137,.1);
          padding-top:26px;
          display: flex;
          flex-flow: row wrap;
          justify-content: space-between;
          align-items: center;
          padding-top:1.354167vw;

          .text-item{
            width:33%;
            height:94px;
            height:4.89583vw;
            min-height:70px;
            display: flex;
            flex-flow:column;
            align-items: center;
            &.bottom{
              border-bottom:1px dashed rgba(137,137,137,.1);
            }
            &.right{
              border-right:1px dashed rgba(137,137,137,.1);
            }
            &.tb{
              justify-content: flex-end;
            }
            // margin-bottom:49px;
            // margin-bottom:2.552083vw;
            &:nth-child(3n-1){
              // padding:0px 90px;
              // padding:0px 4.6875vw;
            }
            .text-title{
              opacity: 1;
              font-size: 35px;
              font-family: PingFangSC, PingFangSC-Medium;
              font-weight: 500;
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
        min-width:417px;
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
          min-width:196.3px;
          min-height:183.5px;
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
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 4;
            overflow: hidden;
            // font-size: 0.625vw;
            // line-height: 0.8854167vw;

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
      min-width:361px;
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
        min-width:170px;
        min-height:160px;
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
    padding:0px 50px;
    padding-top:108px;
    .desc-title{
      margin-top:147px;
      opacity: 1;
      font-size: 62px;
      font-family: PingFangSC, PingFangSC-Semibold;
      font-weight: 600;
      color: #ffffff;
      line-height: 87px;
      margin-bottom:27px;
      margin-top:7.65625vw;
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
      margin:0 auto;
      margin-bottom:5.364583vw;
      width:60%;
      text-align: center;
    }
    .desc-intro-group{
      display: flex;
      flex-flow:row wrap;
      justify-content: center;
      align-items: center;
      .desc-intro-item{
        flex: 0 0 13.59375vw;
        width: 261px;
        height: 244px;
        opacity: 1;
        border: 1px solid #898989;
        padding:38px 30px 20px  30px;
        margin-right:30px;
        background: rgba(255,255,255,.8);
        width: 13.59375vw;
        height: 12.7083vw;
        padding:1.489583vw 0.5625vw 0.0417vw  0.5625vw;
        margin-right:1.5625vw;
        margin-bottom:1.5625vw;
        min-width:170px;
        min-height:147px;
        .intro-title{
          opacity: 1;
          font-size: 27px;
          font-family: LucidaGrande;
          color: #af1e23;
          line-height: 32px;
          padding-bottom:19px;
          border-bottom:1px dashed #af1e23;
          text-align: left;
          font-size: 1.40625vw;
          line-height: 1.67vw;
          padding-bottom:0.489583vw;
          // white-space: nowrap;
          // text-overflow: ellipsis;
          // overflow: hidden;
          &.no-border{
             padding-bottom:0px;
            border-bottom:0;
          }
        }
        .intro-text{
          margin-top:15px;
          opacity: 1;
          font-size: 12px;
          font-family: PingFangSC, PingFangSC-Regular;
          font-weight: 400;
          color: #231815;
          line-height: 17px;
          text-align: left;
          margin-top:0.78125vw;
          &.hidden{
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 4;
            overflow: hidden;
          }
          &.bold{
            font-size:17px;
            line-height:24px;
            font-size:0.88541vw;
            line-height:1.25vw;
          }
          // font-size: 0.625vw;
          // line-height: 0.88541vw;

        }
      }
    }
  }
}

@media screen and  (max-width:765px) {
  .desc-text{
    line-height:20px !important;
  }
}

@media screen and  (max-width:960px) {
  .desc-title{
    font-size:31px !important;
    line-height:43.5px !important;
  }
  .desc-subtitle{
    font-size:12px !important;
    line-height:16.5px !important;
  }
}
@media screen and  (max-width:1255px) {
  .tag-text{
    font-size:22px !important;
    line-height:32px !important;
  }
  .desc-subtitle.tag{
    font-size:18px !important;
    line-height:26px !important;
  }
  .intro-title{
    font-size:17px !important;
    line-height:21px !important;
  }
}
@media screen and  (max-width:1360px) {
    .intro-text.bold{
      font-size:12px !important;
      line-height:17px !important;
    }
}
@media screen and  (max-width:1445px) {
  .sub-intro-item{
    margin-bottom:30.8px !important;
  }
  .main-subtitle{
    margin-top:5px !important;
    margin-bottom:27px !important;
  }
  .text-item{
    height:70px !important;
  }
  .text-group{
    padding-top:20px !important;
  }
  .main-title{
    margin-top:15px !important;
  }
  // .desc-hand{
  //   left:138.6px !important;
  //   top:156.1px !important;
  // }
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
  opacity:1;
  width:0.78125vw;
  height:0.78125vw;
  margin-right:4.583vw;
}
.ant-carousel .slick-dots-bottom{
  bottom:41px;
  height:15px;

  bottom:2.1354vw;
  height:0.78125vw;
}
.ant-carousel .slick-dots li:last-child button{
  margin-right:0px;
}
.ant-carousel .slick-dots li.slick-active button{
  width:15px;
  background: #B21E27;
  width:0.78125vw;
}
.ant-carousel .slick-dots li button:hover, .ant-carousel .slick-dots li button:focus{
  opacity:1;
}
</style>
