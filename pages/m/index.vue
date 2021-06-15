<template>
  <div class="container">
    <a-carousel>
      <Banner v-for="(banner,index) in banners" :info="banner" :key="index"/>
    </a-carousel>
    <div v-for="(config,index) in configList" :key="index" style="width:100%;" :id="config.anchorPoints">
      <div class="desc-panel" v-show="config.templateType == 1" >
      <img class="bg-img bl wow fadeIn" :src="config.mobileCoverUrl || require('~/assets/img/m/desc_bg_1.png')"  alt=""/>
      <div class="panel-mask br wow fadeInRight"  data-wow-delay="1s"></div>
      <div class="desc-info p1 wow fadeInUp" data-wow-delay="2s">
        <div class="desc-title" style="text-align:right;">{{config.text1 || '锦和资产管理公司'}}</div>
        <div class="desc-text">{{config.text2 || '锦和资产管理公司成立于2020年， 是锦和集团与华平投资集团共同创立的一个城市更新/收益型物业投资和资产管理平台， 致力于为存量资产创造更多价值，提升城市活力，激发城市经济增长。'}}</div>
      </div>
    </div>
    <div class="desc-panel" v-show="config.templateType == 2">
      <img class="bg-img br  wow fadeIn"  :src="config.mobileCoverUrl || require('~/assets/img/m/desc_bg_2.png')"  alt=""/>
      <div class="panel-mask bl wow fadeInLeft" data-wow-delay="1s"></div>
      <div class="desc-info p2 wow fadeInUp" data-wow-delay="2s">
        <div class="desc-title" style="margin-bottom:50px;">{{config.text || '锦和资管的管理规模'}}</div>
        <div class="desc-label-group">
          <div class="label-item">
            <div class="label-val">{{config.text1 || '151亿RMB'}}</div>
            <div class="label-name">{{config.text2 || '资产规模'}}</div>
          </div>
          <div class="label-item" style="">
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
      <img class="bg-img br" :src="config.mobileCoverUrl || require('~/assets/img/m/desc_bg_5.png')"  alt=""/>
      <div class="desc-dark">
        <div class="wow fadeInUp">
          <div class="desc-title">{{config.text || '锦和资管的多业态运营'}}</div>
          <div class="desc-subtitle">{{config.text1 || '品牌产品定位精准，擅长多业态运营，盘活社区，综合提升物业资产价值'}}</div>
          <div class="desc-intro-group">
            <div class="desc-intro-item">
              <div class="intro-title" v-html="brStr(config.text2 || 'base佰舍 服务式公寓')"></div>
              <div class="intro-text over">{{config.text3 || '灵感生活空间，服务不同喜好的客户群，通过当代简约的设计，改造城市内的旧建筑，为老社区注入新生活力。'}}</div>
            </div>
            <div class="desc-intro-item">
              <div class="intro-title" v-html="brStr(config.text4 || 'Tulu途楼 青年公寓')"></div>
              <div class="intro-text over">{{config.text5 || '设计型的现代化城市共舍，筑造可供趣味相近与拥有探索精神的年轻人相互启发、交流。'}}</div>
            </div>
            <div class="desc-intro-item">
              <div class="intro-title" v-html="brStr(config.text6 || '越界 办公')"></div>
              <div class="intro-text over">{{config.text7 || '为不同规模的企业提供办公空间解决方案，符合现代办公需求，涵盖商务写字楼、精品办公室、创意园区等多样类型。'}}</div>
            </div>
            <div class="desc-intro-item">
              <div class="intro-title" v-html="brStr(config.text8 || '越界/越都荟社区商业')"></div>
              <div class="intro-text over">{{config.text9 || '生活时尚街区，纳入富有特色的配套商业、社区商业，不仅能为办公租户及周边社区提供便利，更是物业升级的综合体现。'}}</div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
    <div class="desc-panel long" v-show="config.templateType == 4">
      <img class="bg-img tl wow fadeIn" src="~/assets/img/m/desc_bg_3.png" alt=""/>
      <div class="panel-mask tr wow fadeInRight"  data-wow-delay="1s"></div>
      <div class="desc-info p3 wow fadeInUp" data-wow-delay="2s">
        <div class="desc-title">{{config.text || '锦和资管合作方'}}</div>
        <div class="multi-intro">
          <div class="multi-main">
            <img class="main-logo" src="~/assets/img/logo_1.png" alt=""/>
            <div class="main-title">{{config.text1 || '国际领先的私募股权投资公司'}}</div>
            <div class="main-subtitle">{{config.text2 || '自1966年成立以来，华平和世界各地数千名企业家和管理团队建立了密切的合作伙伴关系，积累了丰富的行业经验。'}}</div>
            <div class="text-group">
              <div class="text-item">
                <div class="text-title">{{config.text3 || '50年'}}</div>
                <div class="text-info">{{config.text4 || '产业投资管理经验'}}</div>
              </div>
              <div class="text-item">
                <div class="text-title">{{config.text5 || '370亿美元'}}</div>
                <div class="text-info">{{config.text6 || '目前管理资产额'}}</div>
              </div>
              <div class="text-item">
                <div class="text-title">{{config.text7 || '700家'}}</div>
                <div class="text-info">{{config.text8 || '迄今投资企业总数'}}</div>
              </div>
              <div class="text-item">
                <div class="text-title">{{config.text9 || '120家'}}</div>
                <div class="text-info">{{config.text10 || '目前持有投资企业'}}</div>
              </div>
              <div class="text-item no">
                <div class="text-title">{{config.text11 || '480亿美元'}}</div>
                <div class="text-info">{{config.text12 || '迄今投资额'}}</div>
              </div>
              <div class="text-item no">
                <div class="text-title">{{config.text13 || '1994年'}}</div>
                <div class="text-info">{{config.text14 || '走进中国'}}</div>
              </div>
            </div>
          </div>
          <div class="multi-sub">
            <div class="sub-intro-item">
              <img style="margin-top:13px;height:30px;" src="~/assets/img/logo_2.png" alt=""/>
              <div class="sub-text" style="margin-top:13px;"><span>{{config.text15 || ''}}</span>{{config.text16 || ''}}</div>
            </div>
            <div class="sub-intro-item">
              <img style="margin-top:18px;height:19px;" src="~/assets/img/logo_3.png" alt=""/>
              <div class="sub-text" style="margin-top:20px;"><span>{{config.text17 || ''}}</span>{{config.text18 || ''}}</div>
            </div>
            <div class="sub-intro-item">
              <img style="margin-top:9px;height:32px;" src="~/assets/img/logo_4.png" alt=""/>
              <div class="sub-text" style="margin-top:12px;"><span>{{config.text19 || ''}}</span>{{config.text20 || ''}}</div>
            </div>
            <div class="sub-intro-item">
              <img  style="margin-top:0px;height:50px;" src="~/assets/img/logo_5.png" alt=""/>
              <div class="sub-text" style="margin-top:5px;"><span>{{config.text21 || ''}}</span>{{config.text22 || ''}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="desc-panel" v-show="config.templateType == 5">
      <img class="bg-img br wow fadeIn"  :src="config.mobileCoverUrl || require('~/assets/img/m/desc_bg_4.png')"  alt=""/>
      <div class="panel-mask tl wow fadeInLeft" data-wow-delay="1s"></div>
      <div class="desc-info p4 wow fadeInUp" data-wow-delay="2s">
        <div class="desc-title" style="margin-bottom:10px;">{{config.text || '锦和资管的商业模式'}}</div>
        <div class="desc-subtitle" style="margin-bottom:33px;">{{config.text1 || '锦和资管全生命周期管控系'}}<br>{{config.text2 || '“一站式”资产管理服务'}}</div>
        <div class="tag-group">
          <div class="tag-item" v-if="config.text3">
            <div class="tag-text" v-for="(tag,index2) in config.text3.split('\n')" :key="index2">{{tag}}</div>
          </div>
          <div class="tag-item" v-if="config.text4">
            <div class="tag-text" v-for="(tag,index2) in config.text4.split('\n')" :key="index2">{{tag}}</div>
          </div>
          <div class="tag-item" v-if="config.text5">
            <div class="tag-text" v-for="(tag,index2) in config.text5.split('\n')" :key="index2">{{tag}}</div>
          </div>
          <div class="tag-item" v-if="config.text6">
            <div class="tag-text" v-for="(tag,index2) in config.text6.split('\n')" :key="index2">{{tag}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="desc-panel" v-show="config.templateType == 6">
      <img class="bg-img br" :src="config.mobileCoverUrl || require('~/assets/img/m/desc_bg_5.png')"  alt=""/>
      <div class="desc-dark">
        <div class="wow fadeInUp">
          <div class="desc-title" style="margin-bottom:40px;margin-top:80px;">{{config.text || '锦和资管的运营优势'}}</div>
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
      </div>
    </div>
    </div>
    
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
    let {data:{code,data}} = await axios.post('https://api.goldenunionassets.com/ipe/screen',{data:{status:true},start:0,limit:1000});
    if(code == 0){
      configList = data.map(config=>{
        return Object.assign(config,JSON.parse(config.config));
      });
      data.forEach(config => {
        configObj[config.orderNum] = Object.assign(config,JSON.parse(config.config));
      });
    }
    let {data:{code:code2,data:data2}} = await axios.post('https://api.goldenunionassets.com/banner/screen',{data:{status:true,belong:'home',types:['mobile']},start:0,limit:1000});
    if(code2 == 0){
     banners = data2;
    }
    return { configList,configObj ,banners}

	},
    mounted() {
      new this.$wow.WOW({live:true}).init();
      bus.$on('hashchange',()=>{
        setTimeout(()=>{
          if (window.location.hash) {
              this.goAnchor(window.location.hash)
          }
        },10)
      })
      if (window.location.hash) {
          this.goAnchor(window.location.hash)
      }
      
    },
    methods: {
        goAnchor(selector) {
            // 最好加个定时器给页面缓冲时间
            setTimeout(() => {
                // 获取锚点元素
                let anchor = this.$el.querySelector(selector)
                anchor.scrollIntoView()
            }, 500)
        },
        brStr(val){
          return val ? val.split('\n').join('<br>') : '';
        },
    },
}
</script>

<style lang="scss" scoped>

.container {
  width:100%;
  margin: 0 auto;
  margin-top:128px;
  min-height: 90vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
}
.desc-panel{
  position: relative;
  width:100%;
  min-height:1108px;
  overflow: hidden;
  .panel-mask{
    position:absolute;
    height:1108px;
    width:100%;
    top:0;
    mix-blend-mode: multiply;
    &.br{
      border-bottom:1108px solid #af1e23;
      border-left:280px solid transparent;
      border-right:0px solid transparent;
      right:0;
    }
    &.bl{
      border-bottom:1108px solid #af1e23;
      border-right:280px solid transparent;
      border-left:0px solid transparent;
      left:0;
    }
    &.tr{
      border-top:1108px solid #af1e23;
      border-left:280px solid transparent;
      border-right:0px solid transparent;
      right:0;
    }
    &.tl{
      border-top:1108px solid #af1e23;
      border-right:280px solid transparent;
      border-left:0px solid transparent;
      left:0;
    }
  }
  &.long{
    height:1709px;
    .panel-mask{
      position:absolute;
      height:1709px;
      width:100%;
      top:0;
      &.br{
        border-bottom:1709px solid #af1e23;
        border-left:280px solid transparent;
        border-right:0px solid transparent;
        right:0;
      }
      &.bl{
        border-bottom:1709px solid #af1e23;
        border-right:280px solid transparent;
        border-left:0px solid transparent;
        left:0;
      }
      &.tr{
        border-top:1709px solid #af1e23;
        border-left:280px solid transparent;
        border-right:0px solid transparent;
        right:0;
      }
      &.tl{
        border-top:1709px solid #af1e23;
        border-right:280px solid transparent;
        border-left:0px solid transparent;
        left:0;
      }
    }
  }
  .bg-img{
    position:absolute;
    width:100%;
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
  }
  .desc-info{
    position:absolute;
    &.p1{
      top:264px;
      right:45px;
      width:398px;
    }
    &.p2{
      left:45px;
      top:178px;
    }
    &.p3{
      right:45px;
      top:100px;
      .desc-title{
        text-align: right;
      }
    }
    &.p4{
      top:126px;
      left:45px;
    }

    .desc-title{
      opacity: 1;
      font-size: 50px;
      font-family: PingFangSC, PingFangSC-Semibold;
      font-weight: bold;
      color: #ffffff;
      text-align: left;
      line-height: 70px;
      margin-bottom:28px;
    }
    .desc-subtitle{
      opacity: 1;
      font-size: 24px;
      font-family: PingFangSC, PingFangSC-Regular;
      font-weight: 400;
      text-align: left;
      color: #ffffff;
      line-height: 33px;
    }
    .desc-text{
      opacity: 1;
      font-size: 26px;
      font-family: PingFangSC, PingFangSC-Regular;
      font-weight: 400;
      
      text-align: left;
      color: #ffffff;
      line-height: 45px;
    }
    .desc-label-group{
      display: flex;
      flex-flow: row wrap;
      align-items: flex-start;
      .label-item{
        position: relative;
        margin-bottom:70px;
        &:first-child{
          margin-right:128px;
        }
        &::after{
          position:absolute;
          content:' ';
          width:111px;
          height:4px;
          background:#8f6d39;
          top:-18px;
          left:0px;
        }
        .label-val{
          opacity: 1;
          font-size: 42px;
          font-family: Arial, Arial-BoldMT;
          font-weight: bold;
          text-align: left;
          color: #ffffff;
          line-height: 48px;
        }
        .label-name{
          opacity: 1;
          font-size: 29px;
          font-family: PingFangSC, PingFangSC-Regular;
          font-weight: 400;
          text-align: left;
          color: #ffffff;
          line-height: 41px;
        }
      }
    }
    .desc-tip{
      margin-top:50px;
      opacity: 1;
      font-size: 18px;
      font-family: LucidaGrande;
      text-align: left;
      color: #ffffff;
      line-height: 21px;
    }
    .multi-intro{
      display: flex;
      flex-flow:column nowrap;
      justify-content: center;
      align-items: stretch;
      .multi-main{
        width:660px;
        height:702px;
        background: white;
        border:1px solid #898989;
        text-align:center;
        padding:60px 16px;
        .main-logo{
          width:265px;
        }
        .main-title{
          opacity: 1;
          font-size: 20px;
          font-family: PingFangSC, PingFangSC-Regular;
          font-weight: 400;
          color: #231815;
          line-height: 28px;
          margin-top:19px;
        }
        .main-subtitle{
          margin:0 auto;
          width:549px;
          opacity: 1;
          font-size: 18px;
          font-family: LucidaGrande;
          text-align: center;
          color: #898989;
          line-height: 21px;
          margin-top:11px;
          margin-bottom:25px;
        }
        .text-group{
          border-top:1PX dashed rgba(137,137,137,.1);
          padding-top:25px;
          display: flex;
          flex-flow: row wrap;
          justify-content: center;
          width:632px;
          align-items: center;
          .text-item{
            width:212px;
            height:112px;
            padding:24px 0px;
            display: flex;
            flex-flow:column;
            justify-content: center;
            align-items: center;
            &:nth-child(odd){
              border-right:1PX dashed rgba(137,137,137,.1);
              border-bottom:1PX dashed rgba(137,137,137,.1);
            }
            &:nth-child(even){
              border-bottom:1PX dashed rgba(137,137,137,.1);
            }
            &.no{
              border-bottom:0px !important;
            }
            .text-title{
              opacity: 1;
              font-size: 34px;
              font-family: Arial, Arial-BoldMT;
              font-weight: BoldMT;
              color: #af1f22;
              line-height: 39px;
              white-space: nowrap;
              text-align: center;
            }
            .text-info{
              opacity: 1;
              font-size: 18px;
              font-family: PingFangSC, PingFangSC-Regular;
              font-weight: 400;
              text-align: center;
              color: #898989;
              line-height: 25px;
              white-space: nowrap;
            }
          }
        }
      }
      .multi-sub{
        width:660px;
        min-height:331px;
        display: flex;
        flex-flow:row wrap;
        justify-content: space-between;
        align-items: center;
        margin-top:40px;
        .sub-intro-item{
          width:311px;
          height:292px;
          margin-bottom:39px;
          background: white;
          padding:30px;
          border:1px solid #898989;
          &:nth-child(2n){
            margin-right:0px;
          }
          .sub-text{
            text-align: left;
            opacity: 1;
            font-size: 16px;
            font-family: PingFangSC, PingFangSC-Regular;
            font-weight: 400;
            color: #000;
            line-height: 28px;
            >span{
              color: #af1e23;
            }
          }
        }
      }

    }
    .tag-group{
      width:550px;
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      align-items: center;
      .tag-item{
        width:260px;
        height:244px;
        margin-bottom:38px;
        background: rgba(255,255,255,.85);
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
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
    padding:0px 46px;
    .desc-title{
      margin-top:131px;
      opacity: 1;
      font-size: 50px;
      font-family: PingFangSC, PingFangSC-Semibold;
      font-weight: bold;
      color: #ffffff;
      line-height: 70px;
      margin-bottom:26px;
    }
    .desc-subtitle{
      opacity: 1;
      font-size: 24px;
      font-family: PingFangSC, PingFangSC-Regular;
      font-weight: 400;
      color: #ffffff;
      line-height: 33px;
      margin-bottom:84px;
    }
    .desc-intro-group{
      display: flex;
      flex-flow:row wrap;
      justify-content: space-between;
      align-items: center;
      .desc-intro-item{
        width: 314px;
        height: 294px;
        opacity: 1;
        border: 1px solid #898989;
        padding:40px 36px 40px  36px;
        background: rgba(255,255,255,.8);
        margin-bottom:33px;
        .intro-title{
          opacity: 1;
          font-size: 32px;
          font-family: LucidaGrande;
          color: #af1e23;
          line-height: 38px;
          padding-bottom:9px;
          border-bottom:1PX dashed rgba(175, 30, 35, 0.36) ;
          text-align: left;
          &.no-border{
            padding-bottom:0px;
            border-bottom:0;
          }
        }
        .intro-text{
          margin-top:9px;
          opacity: 1;
          font-size: 18px;
          font-family: PingFangSC, PingFangSC-Regular;
          font-weight: 400;
          color: #231815;
          line-height: 32px;
          text-align: left;
          &.bold{
            font-size: 24px;
            line-height: 40px;
          }
          &.over{
            display: -webkit-box;    
            -webkit-box-orient: vertical;    
            -webkit-line-clamp: 4;    
            overflow: hidden;
          }
        }
        .intro-sub-text{
            margin-top:8px;
            opacity: 1;
            font-size: 18px;
            font-family: PingFangSC, PingFangSC-Regular;
            font-weight: 400;
            color: #727171;
            line-height: 24px;
            text-align: left;
          }
      }
    }
  }
}
</style>
<style>
.ant-carousel {
  width:100%;
}
.ant-carousel  .slick-slider {
  text-align: center;
  height: 1108px !important;
  line-height: 280px !important;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel  .slick-slider h3 {
  color: #fff;
}
.ant-carousel .slick-dots li button{
  width:10px !important;
  height:10px !important;
  margin-right:30px !important;
}
.ant-carousel .slick-dots-bottom{
  bottom:49px !important;
  height:10px !important;
}
.ant-carousel .slick-dots li:last-child button{
  margin-right:0px;
}
.ant-carousel .slick-dots li.slick-active button{
  width:10px !important;
  background: #B21E27;
}
</style>
