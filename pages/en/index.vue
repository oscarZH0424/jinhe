<template>
  <div class="container">
    <client-only>
      <full-page :options="option" ref="fullpage">
        <div class="section" id="bannerSection">
          <a-carousel dotPosition="bottom">
            <Banner v-for="(banner,index) in banners" :info="banner" :key="index"/>
          </a-carousel>
        </div>
        <div class="section" v-for="(config,index) in configList" :key="index" :class="{'section6':config.templateType==6}">
          <div class="desc-panel" v-show="config.templateType == 1">
            <img class="bg-img bl  hidden" :class="{'visible animate__animated animate__fadeIn':activeIndex==(index+1)}" style="height:100vh;" :src="config.coverUrl || require('~/assets/img/desc_bg_1.png')" alt=""/>
            <div class="panel-mask br  hidden"  :class="{'visible  animate__animated animate__fadeInRight animate__delay-1s':activeIndex==(index+1)}" :style="maskBottomStyle"></div>
            <div class="desc-info p1 hidden" :class="{'visible  animate__animated animate__fadeInUp animate__delay-2s':activeIndex==(index+1)}">
              <div class="desc-title" style="margin-bottom:2vw;">{{config.text1 || 'Golden Union Asset Management Co., Ltd.'}}</div>
              <div class="desc-text">{{config.text2 || 'Founded in 2020, Golden Union Asset Management Co., Ltd. is an urban renewal, income-based property investment and asset management platform jointly established by Golden Union and Warburg Pincus. It aims to activating the existing assets to create more value and infusing vitality into cities to stimulate the economic growth.'}}</div>
            </div> 
          </div>
          <div class="desc-panel" v-show="config.templateType == 2">
            <img class="bg-img br hidden" :class="{'visible animate__animated animate__fadeIn':activeIndex==(index+1)}" style="width:56.25vw;" :src="config.coverUrl || require('~/assets/img/desc_bg_2.png')" alt=""/>
            <div class="panel-mask bl hidden"  :class="{'visible  animate__animated animate__fadeInLeft animate__delay-1s':activeIndex==(index+1)}" :style="maskBottomStyle"></div>
            <div class="desc-info p2 hidden"  :class="{'visible  animate__animated animate__fadeInUp animate__delay-2s':activeIndex==(index+1)}">
              <div class="desc-title">{{config.text || 'Management Scale'}}</div>
              <div class="desc-label-group">
                <div class="label-item">
                  <div class="label-val">{{config.text1 || '¥ 15.1 billion'}}</div>
                  <div class="label-name">{{config.text2 || 'Total AUM'}}</div>
                </div>
                <div class="label-item">
                  <div class="label-val">{{config.text3 || '19'}}</div>
                  <div class="label-name">{{config.text4 || 'Projects'}}</div>
                </div>
              </div>
              <div class="desc-label-group">
                <div class="label-item">
                  <div class="label-val">{{config.text5 || '396,000 sqm'}}</div>
                  <div class="label-name">{{config.text6 || 'GFA'}}</div>
                </div>
                <div class="label-item" style="width:6vw;">
                  <div class="label-val">{{config.text7 || '2'}}</div>
                  <div class="label-name">{{config.text8 || 'Cities'}}</div>
                </div>
              </div>
              <div class="desc-tip">{{config.text9 || '*By the date of 30th Dec. 2020'}}</div>
            </div>
          </div>
          <div class="desc-panel" v-show="config.templateType == 3" >
            <img class="bg-img br full" :src="config.coverUrl || require('~/assets/img/desc_bg_5.png')" alt=""/>
            <div class="desc-dark">
              <div class="hidden" :class="{'visible  animate__animated animate__fadeInUp':activeIndex==(index+1)}">
                <div class="desc-title">{{config.text || 'Multi-format Operation'}}</div>
                <div class="desc-subtitle">{{config.text1 || 'Accurate positioning of brand products, good at multi-format management, revitalizing the community, and comprehensively enhancing the value of property assets.'}}</div>
                <div class="desc-intro-group a">
                  <div class="desc-intro-item">
                    <div class="intro-title" v-html="brStr(config.text2 || 'base Serviced Apartment')"></div>
                    <div class="intro-text ">{{config.text3 || 'An inspirational living space that serves different kinds of customer. Through the contemporary design, revitalizing the old communities and buildings.'}}</div>
                  </div>
                  <div class="desc-intro-item">
                    <div class="intro-title" v-html="brStr(config.text4 || 'Tulu Co-Living Apartment')"></div>
                    <div class="intro-text ">{{config.text5 || 'Design-led modern urban co-living space is built to inspire and promote communication among young sprits.'}}</div>
                  </div>
                  <div class="desc-intro-item">
                    <div class="intro-title" v-html="brStr(config.text6 || 'Surpass Space <br> Office Space')"></div>
                    <div class="intro-text ">{{config.text7 || 'It provides different sizes office space to meet the different modern office needs of enterprise, covering various types of business office buildings, boutique offices, creative space etc.'}}</div>
                  </div>
                  <div class="desc-intro-item">
                    <div class="intro-title" v-html="brStr(config.text8 || 'Surpass / Infinity Space Community Business')"></div>
                    <div class="intro-text ">{{config.text9 || 'It’s a modern life style block with the distinctive supporting community commerce, provides the convenience for the office tenants and surrounding communities, and upgrades the value of the property.'}}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="desc-panel" v-show="config.templateType == 4">
            <img class="bg-img tl desc-bg-3" src="~/assets/img/desc_bg_3.png" alt=""/>
            <div class="panel-mask tr hidden " :class="{'visible  animate__animated animate__fadeInRight':activeIndex==(index+1)}" :style="maskTopStyle"></div>
            <div class="desc-info p3 hidden" :class="{'visible  animate__animated animate__fadeInUp  animate__delay-1s':activeIndex==(index+1)}">
              <div class="desc-title">{{config.text || 'Partners'}}</div>
              <div class="multi-intro">
                <div class="multi-main">
                  <img class="main-logo" :src="config.logo" alt=""/>
                  <div class="main-title">{{config.text1 || 'A leading global private equity firm'}}</div>
                  <div class="main-subtitle">{{config.text2 || 'Since its establishment in 1966, it has built close partnerships with thousands of entrepreneurs and management teams throughout the world, and has accumulated rich industry experience.'}}</div>
                  <div class="text-group">
                    <div class="text-item bottom right">
                      <div class="text-title">{{config.text3 || '50 YEARS'}}</div>
                      <div class="text-info">{{config.text4 || 'INVESTING'}}</div>
                    </div>
                    <div class="text-item bottom right">
                      <div class="text-title">{{config.text5 || '$37 Billion'}}</div>
                      <div class="text-info">{{config.text6 || 'AUM'}}</div>
                    </div>
                    <div class="text-item bottom">
                      <div class="text-title">{{config.text7 || '700'}}</div>
                      <div class="text-info">{{config.text8 || 'COMPANIES SINCE INCEPTION'}}</div>
                    </div>
                    <div class="text-item right tb">
                      <div class="text-title">{{config.text9 || '120'}}</div>
                      <div class="text-info">{{config.text10 || 'PORTFOLIO COMPANIES'}}</div>
                    </div>
                    <div class="text-item right tb">
                      <div class="text-title">{{config.text11 || '$48 Billion'}}</div>
                      <div class="text-info">{{config.text12 || 'INVESTMENTS'}}</div>
                    </div>
                    <div class="text-item tb">
                      <div class="text-title">{{config.text13 || '1994'}}</div>
                      <div class="text-info">{{config.text14 || 'MARKS ITS INCEPTION IN CHINA'}}</div>
                    </div>
                  </div>
                </div>
                <div class="multi-sub">
                  <div class="sub-intro-item">
                    <div class="sub-img">
                      <img :src="config.logo1" alt=""/>
                    </div>
                    <div class="sub-text "><span>{{config.text15 || ''}}</span>{{config.text16 || ''}}</div>
                  </div>
                  <div class="sub-intro-item">
                    <div class="sub-img">
                        <img  :src="config.logo2" alt=""/>
                    </div>
                    <div class="sub-text "><span>{{config.text17 || ''}}</span>{{config.text18 || ''}}</div>
                  </div>
                  <div class="sub-intro-item">
                    <div class="sub-img">
                      <img :src="config.logo3" alt=""/>
                    </div>
                    <div class="sub-text "><span>{{config.text19 || ''}}</span>{{config.text20 || ''}}</div>
                  </div>
                  <div class="sub-intro-item">
                    <div class="sub-img">
                      <img  :src="config.logo4" alt=""/>
                    </div>
                    <div class="sub-text "><span>{{config.text21 || ''}}</span>{{config.text22 || ''}}</div>
                  </div>
                </div>
              </div>
            </div>
            <img class="desc-hand" style="" src="~/assets/img/desc_head.png" alt="">
          </div>
          <div class="desc-panel" v-show="config.templateType == 5">
            <img class="bg-img br hidden" :class="{'visible  animate__animated animate__fadeIn':activeIndex==(index+1)}" style="height:100vh" :src="config.coverUrl || require('~/assets/img/desc_bg_4.png')" alt=""/>
            <div class="panel-mask tl hidden"  :class="{'visible  animate__animated animate__fadeInLeft animate__delay-1s':activeIndex==(index+1)}" :style="maskTopStyle"></div>
            <div class="desc-info p4 hidden" :class="{'visible  animate__animated animate__fadeInUp animate__delay-2s':activeIndex==(index+1)}">
              <div class="desc-title" style="margin-bottom:22px;">{{config.text || 'Business Model'}}</div>
              <div class="desc-subtitle tag">{{config.text1 || 'Golden Union Asset Management’s Full Lifecycle Control System'}}</div>
              <div class="desc-subtitle tag" style="margin-bottom:63px;">{{config.text2 || '"One-stop" Asset Management Service'}}</div>
              <div class="tag-group">
                <div class="tag-item" v-if="config.text3">
                  <div class="tag-text" v-for="(tag,index) in config.text3.split('\n')" :key="index">{{tag}}</div>
                </div>
                <div class="tag-item" v-if="config.text4">
                  <div class="tag-text" v-for="(tag,index) in config.text4.split('\n')" :key="index">{{tag}}</div>
                </div>
                <div class="tag-item" v-if="config.text5">
                  <div class="tag-text" v-for="(tag,index) in config.text5.split('\n')" :key="index">{{tag}}</div>
                </div>
                <div class="tag-item" v-if="config.text6">
                  <div class="tag-text" v-for="(tag,index) in config.text6.split('\n')" :key="index">{{tag}}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="desc-panel" v-show="config.templateType == 6">
            <img class="bg-img br  full" :src="config.coverUrl || require('~/assets/img/desc_bg_5.png')" alt=""/>
            <div class="desc-dark">
              <div class="hidden" :class="{'visible  animate__animated animate__fadeInUp':activeIndex==(index+1)}">
                <div class="desc-title" style="margin-bottom:85px;margin-top:169px;">{{config.text || 'Operational Advantages'}}</div>
                <div class="desc-intro-group b">
                  <div class="desc-intro-item">
                    <div class="intro-title no-border">{{config.text1 || 'Resource'}}</div>
                    <div class="intro-text bold" v-html="brStr(config.text2 || 'High-quality resource integration capabilities<br>Advantages of resource industry layout<br>Scale advantage and brand advantage')"></div>
                    <div class="intro-sub-text" v-html="brStr(config.text21)"></div>
                  </div>
                  <div class="desc-intro-item">
                    <div class="intro-title no-border">{{config.text3 || 'Capital'}}</div>
                    <div class="intro-text hidden bold"  v-html="brStr(config.text4 || 'Strong shareholder background and capital strength<br>Golden Union, a comprehensive real estate group with four major business sectors<br>Warburg Pincus, one of the oldest private equity firms in the United States')"></div>
                    <div class="intro-sub-text" v-html="brStr(config.text41)"></div>
                  </div>
                  <div class="desc-intro-item">
                    <div class="intro-title no-border">{{config.text5 || 'Market'}}</div>
                    <div class="intro-text bold" v-html="brStr(config.text6 || 'Sharp market insight<br>Precise market positioning')"></div>
                    <div class="intro-sub-text" v-html="brStr(config.text61)"></div>
                  </div>
                  <div class="desc-intro-item">
                    <div class="intro-title no-border">{{config.text7 || 'Innovation'}}</div>
                    <div class="intro-text bold"  v-html="brStr(config.text8 || 'Product innovation ability<br>Optimized business portfolio<br>Self-contained design and reconstruction capabilities')"></div>
                    <div class="intro-sub-text" v-html="brStr(config.text81)"></div>
                  </div>
                </div>
              </div>
              <div style="position:absolute;bottom:0px;left:0px;width:100%;" v-if="index==configList.length-1">
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
    let configList;
    let anchors = [];
    let {data:{code,data}} = await axios.post('https://enapi.goldenunionassets.com/ipe/screen',{data:{status:true},start:0,limit:1000});
    if(code == 0){
      configList = data.map(config=>{
        return Object.assign(config,JSON.parse(config.config));
      });
      data.forEach(config => {
        configObj[config.orderNum] = Object.assign(config,JSON.parse(config.config));
        anchors.push(config.anchorPoints);
      });
    }
    let {data:{code:code2,data:data2}} = await axios.post('https://enapi.goldenunionassets.com/banner/screen',{data:{status:true,belong:'home',types:['pc']},start:0,limit:1000});
    if(code2 == 0){
     banners = data2;
    }
    return { anchors,configList,configObj ,banners}

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
          anchors: ["banner"],
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
      this.option.anchors = this.option.anchors.concat(this.anchors);
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
          let str = '';
          if(val){
            let arr = val.split('\n');
            arr.forEach(text => {
                str+= `<div class="tag-text">${text}</div>`
            });
          }
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
    width:63.3vw;
    left:-5vw !important;
  }
  .desc-hand{
    position:absolute;left:10.052vw;top:11.4583vw;width:16.5104167vw;
  }
  .desc-info{
    position:absolute;
    &.p1{
      top:198px;
      right:192px;
      width:700px;
      // top:10.3125vw;
      right:10vw;
      width:36.4583vw;
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
      width:566px;
      width:29.47917vw;
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
      margin-top:100px;
      opacity: 1;
      font-size: 18px;
      font-family: LucidaGrande;
      text-align: left;
      color: #ffffff;
      line-height: 21px;
      margin-top:0.5208vw;
      font-size: 0.9375vw;
    }
    .multi-intro{
      display: flex;
      flex-flow:row nowrap;
      justify-content: flex-start;
      align-items: stretch;
      .multi-main{
        width:815px;
        height:591px;
        background: white;
        border:1px solid #b3b3b3;
        text-align:center;
        margin-right:31px;
        padding:67px 60px 30px 60px;
        width:42.447917vw;
        height:30.78125vw;
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
              margin-top:15px;
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
              width:215px;
              width:11.1979vw;
            }
          }
        }
      }
      .multi-sub{
        width:631px;
        height:591px;
        display: flex;
        flex-flow:row wrap;
        justify-content: space-between;
        align-items: center;
        width:32.864583vw;
        height:30.78125vw;
        min-width:417px;
        .sub-intro-item{
          width:300px;
          height:280px;
          margin-right:30px;
          margin-bottom:31px;
          background: white;
          padding:30px;
          width: 15.625vw;
          height: 14.583vw;
          margin-right:1.614583vw;
          margin-bottom:1.614583vw;
          padding:1.5625vw;
          min-width:196.3px;
          min-height:183.5px;
          &:nth-child(2n){
            margin-right:0px;
          }
          .sub-img{
            width:100%;
            height:94px;
            border-bottom:1px dashed rgba(137,137,137,.1);
            height:4.89583vw;
            min-height:60px;
            text-align: center;
            display: flex;
            flex-flow:row nowrap;
            justify-content: center;
            align-items: center;
          }
          .sub-text{
            text-align: left;
            opacity: 1;
            font-size: 12px;
            font-family: PingFangSC, PingFangSC-Regular;
            font-weight: 400;
            height:102px;
            height:5.3125vw;
            min-height:65px;
            color: #000;
            line-height: 17px;
            margin-top:15px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 6;
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
        padding:19px;
        &:nth-child(2n){
          margin-right:0px;
        }
        .tag-text{
          width:100%;
          opacity: 1;
          font-size: 34px;
          font-family: PingFangSC, PingFangSC-Regular;
          font-weight: 400;
          color: #af1e23;
          line-height: 48px;
          font-size: 1.77083vw;
          line-height: 2.5vw;
          text-align: left;
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
        flex: 0 0 15.625vw;
        width: 300px;
        height: 280px;
        opacity: 1;
        border: 1px solid #898989;
        padding:32px 30px 20px  30px;
        margin-right:30px;
        background: rgba(255,255,255,.8);
        width: 15.625vw;
        height: 15vw;
        padding:1.67vw 1.5625vw 0.0417vw  1.5625vw;
        margin-right:1.5625vw;
        margin-bottom:1.5625vw;
        min-width:263px;
        min-height:252px;
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
        .intro-sub-text{
            margin-top:8px;
            opacity: 1;
            font-size: 12px;
            font-family: PingFangSC, PingFangSC-Regular;
            font-weight: 400;
            color: #727171;
            line-height: 17px;
            text-align: left;
          }
      }
      &.a{
        .intro-title{
          height:106px;
          height:5.5208vw;
        }
      }
    }
  }
}

.section6 .desc-title{
  margin-bottom:85px;margin-top:169px;margin-top:5.8020vw !important;margin-bottom:4.427vw !important;
}
@media screen and  (max-width:1840px) {
  .sub-text{
    height:85px !important;
    -webkit-line-clamp: 5 !important;
  }
}
@media screen and  (max-width:1690px) {
  .desc-intro-group.a{
    .desc-intro-item{
      padding:28px 26px 0.7px 26px !important; 
      .intro-title{
        font-size:23.7px !important;
        height:93px !important;
        line-height:28.2px !important;
      }
    }
    
  }
  
}
@media screen and  (max-width:1680px) {
  .desc-intro-group.b{
    .desc-intro-item{
      padding:15px !important; 
      min-width:238px !important;
        min-height:228px !important;
      .intro-title{
        font-size:23.7px !important;
        line-height:28.2px !important;
      }
      .intro-text.bold{
        font-size:14px !important;
        line-height:21px !important;
      }
    }
    
  }
  
}

@media screen and  (max-width:1445px) {
  .desc-intro-group.a{
    .desc-intro-item{
      padding:15px !important;
    }
  }
  
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

@media screen and  (max-width:1360px) {
    .intro-text.bold{
      font-size:12px !important;
      line-height:17px !important;
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

@media screen and  (max-width:765px) {
  .desc-text{
    line-height:20px !important;
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
