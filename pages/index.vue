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
              <div class="desc-title">{{config.text1 || '锦和资产管理公司'}}</div>
              <div class="desc-text">{{config.text2 || '锦和资产管理公司成立于2020年， 是锦和集团与华平投资集团共同创立的一个城市更新/收益型物业投资和资产管理平台， 致力于为存量资产创造更多价值，提升城市活力，激发城市经济增长。'}}</div>
            </div>
          </div>      
          <div style="height:100%;" v-show="config.templateType == 2" class="desc-panel">
            <img class="bg-img br hidden" :class="{'visible animate__animated animate__fadeIn':activeIndex==(index+1)}" style="width:56.25vw;" :src="config.coverUrl || require('~/assets/img/desc_bg_2.png')" alt=""/>
            <div class="panel-mask bl hidden"  :class="{'visible  animate__animated animate__fadeInLeft animate__delay-1s':activeIndex==(index+1)}" :style="maskBottomStyle"></div>
            <div class="desc-info p2 hidden"  :class="{'visible  animate__animated animate__fadeInUp animate__delay-2s':activeIndex==(index+1)}">
              <div class="desc-title">{{config.text || '锦和资管的管理规模'}}</div>
              <div class="desc-label-group">
                <div class="label-item">
                  <div class="label-val">{{config.text1 || '151亿RMB'}}</div>
                  <div class="label-name">{{config.text2 || '资产规模'}}</div>
                </div>
                <div class="label-item">
                  <div class="label-val">{{config.text3 || '19个'}}</div>
                  <div class="label-name">{{config.text4 || '全国项目'}}</div>
                </div>
              </div>
              <div class="desc-label-group">
                <div class="label-item">
                  <div class="label-val">{{config.text5 || '39.6万平方米'}}</div>
                  <div class="label-name">{{config.text6 || '总建筑面积'}}</div>
                </div>
                <div class="label-item">
                  <div class="label-val">{{config.text7 || '2个'}}</div>
                  <div class="label-name">{{config.text8 || '全国城市'}}</div>
                </div>
              </div>
              <div class="desc-tip">{{config.text9 || '*截至2020年12月30号'}}</div>
            </div>
          </div>
          <div class="desc-panel" v-show="config.templateType == 3">
            <img class="bg-img br full" :src="config.coverUrl || require('~/assets/img/desc_bg_5.png')"  alt=""/>
            <div class="desc-dark" >
              <div class="hidden" :class="{'visible  animate__animated animate__fadeInUp':activeIndex==(index+1)}">
                <div class="desc-title">{{config.text || '锦和资管的多业态运营'}}</div>
              <div class="desc-subtitle">{{config.text1 || '品牌产品定位精准，擅长多业态运营，盘活社区，综合提升物业资产价值'}}</div>
              <div class="desc-intro-group">
                <div class="desc-intro-item">
                  <div class="intro-title" v-html="brStr(config.text2 || 'base佰舍 服务式公寓')"></div>
                  <div class="intro-text">{{config.text3 || '灵感生活空间，服务不同喜好的客户群，通过当代简约的设计，改造城市内的旧建筑，为老社区注入新生活力。'}}</div>
                </div>
                <div class="desc-intro-item">
                  <div class="intro-title" v-html="brStr(config.text4 || 'Tulu途楼 青年公寓')"></div>
                  <div class="intro-text">{{config.text5 || '设计型的现代化城市共舍，筑造可供趣味相近与拥有探索精神的年轻人相互启发、交流。'}}</div>
                </div>
                <div class="desc-intro-item">
                  <div class="intro-title" v-html="brStr(config.text6 || '越界 办公')"></div>
                  <div class="intro-text">{{config.text7 || '为不同规模的企业提供办公空间解决方案，符合现代办公需求，涵盖商务写字楼、精品办公室、创意园区等多样类型。'}}</div>
                </div>
                <div class="desc-intro-item">
                  <div class="intro-title" v-html="brStr(config.text8 || '越界/越都荟社区商业')"></div>
                  <div class="intro-text">{{config.text9 || '生活时尚街区，纳入富有特色的配套商业、社区商业，不仅能为办公租户及周边社区提供便利，更是物业升级的综合体现。'}}</div>
                </div>
              </div>
              </div>
              
            </div>
          </div>
          <div class="desc-panel" v-show="config.templateType == 4">
            <img class="bg-img tl desc-bg-3" style="" src="~/assets/img/desc_bg_3.png" alt=""/>
            <div class="panel-mask tr hidden " :class="{'visible  animate__animated animate__fadeInRight':activeIndex==(index+1)}" :style="maskTopStyle"></div>
            <div class="desc-info p3 hidden" :class="{'visible  animate__animated animate__fadeInUp  animate__delay-1s':activeIndex==(index+1)}">
              <div class="desc-title">{{config.text || '锦和资管合作方'}}</div>
              <div class="multi-intro">
                <div class="multi-main">
                  <img class="main-logo" :src="config.logo" alt=""/>
                  <div class="main-title">{{config.text1 || '国际领先的私募股权投资公司'}}</div>
                  <div class="main-subtitle">{{config.text2 || '自1966年成立以来，华平和世界各地数千名企业家和管理团队建立了密切的合作伙伴关系，积累了丰富的行业经验。'}}</div>
                  <div class="text-group">
                    <div class="text-item bottom right">
                      <div class="text-title">{{config.text3 || '50年'}}</div>
                      <div class="text-info">{{config.text4 || '产业投资管理经验'}}</div>
                    </div>
                    <div class="text-item bottom right">
                      <div class="text-title">{{config.text5 || '370亿美元'}}</div>
                      <div class="text-info">{{config.text6 || '目前管理资产额'}}</div>
                    </div>
                    <div class="text-item bottom ">
                      <div class="text-title">{{config.text7 || '700家'}}</div>
                      <div class="text-info">{{config.text8 || '迄今投资企业总数'}}</div>
                    </div>
                    <div class="text-item right tb">
                      <div class="text-title">{{config.text9 || '120家'}}</div>
                      <div class="text-info">{{config.text10 || '目前持有投资企业'}}</div>
                    </div>
                    <div class="text-item right tb">
                      <div class="text-title">{{config.text11 || '480亿美元'}}</div>
                      <div class="text-info">{{config.text12 || '迄今投资额'}}</div>
                    </div>
                    <div class="text-item tb">
                      <div class="text-title">{{config.text13 || '1994年'}}</div>
                      <div class="text-info">{{config.text14 || '走进中国'}}</div>
                    </div>
                  </div>
                </div>
                <div class="multi-sub" :class="{'count3':!config.text21&&!config.text22,'count2':!config.text21&&!config.text22&&!config.text19&&!config.text20,'count1':!config.text21&&!config.text22&&!config.text19&&!config.text20&&!config.text17&&!config.text18}">
                  <div class="sub-intro-item">
                    <div class="sub-img">
                      <img :src="config.logo1" alt=""/>
                    </div>
                    <!-- <img style="width:265px;width:10.52083vw;" :src="config.logo1" alt=""/> -->
                    <div class="sub-text" style="margin-top:25px;margin-top:1.302083vw;"><span>{{config.text15 || ''}}</span>{{config.text16 || ''}}</div>
                  </div>
                  <div class="sub-intro-item" v-if="config.text17 || config.text18">
                    <div class="sub-img">
                      <img :src="config.logo2" alt=""/>
                    </div>
                    <!-- <img style="width:265px;width:10.52083vw;" :src="config.logo2" alt=""/> -->
                    <div class="sub-text" style="margin-top:25px;margin-top:1.302083vw;"><span>{{config.text17 || ''}}</span>{{config.text18 || ''}}</div>
                  </div>
                  <div class="sub-intro-item" v-if="config.text19 || config.text20">
                    <div class="sub-img">
                      <img :src="config.logo3" alt=""/>
                    </div>
                    <!-- <img style="width:265px;width:10.52083vw;" :src="config.logo3" alt=""/> -->
                    <div class="sub-text" style="margin-top:25px;margin-top:1.302083vw;"><span>{{config.text19 || ''}}</span>{{config.text20 || ''}}</div>
                  </div>
                  <div class="sub-intro-item" v-if="config.text21 || config.text22">
                    <div class="sub-img">
                      <img :src="config.logo4" alt=""/>
                    </div>
                    <!-- <img style="width:178px;width:9.27083vw;" :src="config.logo4" alt=""/> -->
                    <div class="sub-text" style="margin-top:25px;margin-top:1.302083vw;"><span>{{config.text21 || ''}}</span>{{config.text22 || ''}}</div>
                  </div>
                </div>
              </div>
            </div>
            <img class="desc-hand" style="" src="~/assets/img/desc_head.png" alt="">
          </div>
          <div class="desc-panel" v-if="config.templateType == 5">
            <img class="bg-img br hidden" :class="{'visible  animate__animated animate__fadeIn':activeIndex==(index+1)}" style="height:100vh" :src="config.coverUrl || require('~/assets/img/desc_bg_4.png')"  alt=""/>
            <div class="panel-mask tl hidden"  :class="{'visible  animate__animated animate__fadeInLeft animate__delay-1s':activeIndex==(index+1)}" :style="maskTopStyle"></div>
            <div class="desc-info p4 hidden" :class="{'visible  animate__animated animate__fadeInUp animate__delay-2s':activeIndex==(index+1)}">
              <div class="desc-title" style="margin-bottom:22px;">{{config.text || '锦和资管的商业模式'}}</div>
              <div class="desc-subtitle tag">{{config.text1 || '锦和资管全生命周期管控系'}}</div>
              <div class="desc-subtitle tag" style="margin-bottom:63px;">{{config.text2 || '“一站式”资产管理服务'}}</div>
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
            <img class="bg-img br  full"  :src="config.coverUrl || require('~/assets/img/desc_bg_5.png')"  alt=""/>
            <div class="desc-dark">
              <div class="hidden" :class="{'visible  animate__animated animate__fadeInUp':activeIndex==(index+1)}">
                <div class="desc-title " style="">{{config.text || '锦和资管的运营优势'}}</div>
                <div class="desc-intro-group">
                  <div class="desc-intro-item">
                    <div class="intro-title no-border">{{config.text1 || '资源'}}</div>
                    <div class="intro-text bold" v-html="brStr(config.text2 || '优质的资源整合能力<br>资源产业布局的优势<br>规模优势和品牌优势')"></div>
                    <div class="intro-sub-text" v-html="brStr(config.text21)"></div>
                  </div>
                  <div class="desc-intro-item">
                    <div class="intro-title no-border">{{config.text3 || '资本'}}</div>
                    <div class="intro-text bold" v-html="brStr(config.text4 || '强大的股东背景和资本实力<br>锦和集团-四大板块的综合房地产集团<br>华平投资-美国历史最悠久的私募股权投')" ></div>
                    <div class="intro-sub-text" v-html="brStr(config.text41)"></div>
                  </div>
                  <div class="desc-intro-item">
                    <div class="intro-title no-border">{{config.text5 || '市场'}}</div>
                    <div class="intro-text bold" v-html="brStr(config.text6 || '敏锐的市场洞察力<br>精准的市场定位')"></div>
                    <div class="intro-sub-text" v-html="brStr(config.text61)"></div>
                  </div>
                  <div class="desc-intro-item">
                    <div class="intro-title no-border">{{config.text7 || '创新'}}</div>
                    <div class="intro-text bold" v-html="brStr(config.text8 || '产品的创新能力<br>形态优化的业务组合<br>完备的设计及改建能力')"></div>
                    <div class="intro-sub-text" v-html="brStr(config.text81)"></div>
                  </div>
                </div>
              </div>
              <div style="position:absolute;bottom:0px;left:0px;width:100%;"  v-if="index==configList.length-1">
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
    let {data:{code,data}} = await axios.post('https://api.goldenunionassets.com/ipe/screen',{data:{status:true},start:0,limit:1000});
    if(code == 0){
      configList = data.map(config=>{
        return Object.assign(config,JSON.parse(config.config));
      });
      data.forEach(config => {
        configObj[config.orderNum] = Object.assign(config,JSON.parse(config.config));
        anchors.push(config.anchorPoints);
      });
    }
    let {data:{code:code2,data:data2}} = await axios.post('https://api.goldenunionassets.com/banner/screen',{data:{status:true,belong:'home',types:['pc']},start:0,limit:1000});
    if(code2 == 0){
     banners = data2;
    }
    return {anchors, configObj ,banners,configList}

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
          anchors: ['banner'],
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
      console.log(this.configList);
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
  }
  .desc-hand{
    position:absolute;left:15.052vw;top:11.4583vw;width:16.5104167vw;
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
      width:31.4583vw;
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
          margin-top:10px;

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
              font-family:  PingFangSC, PingFangSC-Medium;
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
            img{
              height:100%;
            }
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
        &.count3{
          .sub-intro-item{
            margin-right:0;
            text-align: center;
            &:first-child{
              width:28.90625vw;
              min-width:417px;
              margin-right:0;
              .sub-text{
                text-align: center;
              }
            }
          }
        }
        &.count2{
          width:261px;
          width:13.59375vw;
          min-width:196.3px;
          .sub-intro-item{
            margin-right:0;
            text-align: center;
            &:first-child{
              width:13.59375vw;
              min-width:196.3px;
              margin-right:0;
              .sub-text{
                text-align: left;
              }
            }
          }
        }
        &.count1{
          .sub-intro-item{
            &:first-child{
              height: 27.65625vw;
              min-height:399px;
              display: flex;
              flex-flow: column;
              justify-content: center;
              align-items: center;
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
      margin-bottom:5.364583vw;
    }
    .desc-intro-group{
      display: flex;
      flex-flow:row wrap;
      justify-content: center;
      align-items: center;
      .desc-intro-item{
        // flex: 0 0 13.59375vw;
        width: 261px;
        height: 244px;
        opacity: 1;
        border: 1px solid #898989;
        padding:38px 30px 20px  30px;
        margin-right:30px;
        background: rgba(255,255,255,.8);
        width: 13.59375vw;
        height: 12.7083vw;
        padding:1.9791vw 1.5625vw 1.0417vw  1.5625vw;
        // margin-right:1.5625vw;
        // margin-bottom:1.5625vw;
        min-width:185px;
        min-height:173px;
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
          padding-bottom:0.989583vw;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
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
          // margin-top:0.78125vw;
          // display: -webkit-box;
          // -webkit-box-orient: vertical;
          // -webkit-line-clamp: 4;
          // overflow: hidden;
          // line-height: 0.88541vw;
          &.bold{
            font-size:17px;
            line-height:24px;
            font-size:0.88541vw;
            line-height:1.25vw;
          }
          
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
    }
  }
}
.section6 .desc-title{
  margin-bottom:85px;margin-top:169px;margin-top:6.8020vw;margin-bottom:4.427vw;
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
  .desc-intro-item{
    padding:15px !important;
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

@media screen and (min-width:1920px) {
  .intro-sub-text{
    font-size: 0.625vw !important;
    line-height: 0.885vw !important;
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
