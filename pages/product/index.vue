<template>
  <div class="container">
      <Pagebanner keystr="pro"/>
      <div class="pro-list">
          <div class="pro-item" v-for="(pro,index) in proList" :key="pro.id" :id="`pro${pro.id}`" >
              <img class="bg-img wow fadeIn" :src="pro.coverUrl" alt=""/>
              <div class="pro-mask wow " :class="{'fadeInLeft':index%2==1,'fadeInRight':index%2==0}" data-wow-delay="1s"></div>
              <div class="pro-info-container wow fadeInUp" data-wow-delay="2s">
                <div class="pro-title">{{pro.firstTitle}}<br v-if="pro.secondTitle">{{pro.secondTitle}}</div>
                <div class="pro-desc" v-html="brStr(pro.information)"></div>
                <div class="pro-btn" @click="toDetail(pro)">了解详情</div>
            </div>
          </div>
          
      </div>
      <div class="page-bottom">
          <a-pagination :show-quick-jumper="true"  :pageSize="pageSize" :total="total" @change="onChange" />
      </div>
  </div>
</template>

<script>
import bus from '@/assets/js/eventBus';
import axios from 'axios';
export default {
    asyncData ({ params }) {//请求
	    return  axios({
		method: 'post',
		url: 'http://www.dream-fly.com.cn:8282//project/screen',
        data:{data:true,limit:1000,start:0}
	    })
	    .then(function (res) {
            let oriProList = [];
            let total = 0;
            if(res.data.code == 0){
                oriProList = res.data.data;
                total = res.data.totalRecord;
            }
		  return { oriProList,total }
	    })
	},
    data(){
        return{
            proList:[],
            pageSize:10,
            pageNum:0
        }
    },
    mounted() {
        this.init();
        this.setData();
    },
    methods: {
        onChange(page){
            this.pageNum = page -1;
            this.setData();
        },
        setData(){
            let arr = [];
            this.oriProList.forEach((pro,index) => {
                let start = this.pageNum*this.pageSize;
                let end = start + this.pageSize;
                if(index >= start && index < end){
                    arr.push(pro)
                }
            });
            this.proList = arr;
        },
        init(){
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
        goAnchor(selector) {
            // 最好加个定时器给页面缓冲时间
            setTimeout(() => {
                // 获取锚点元素
                let anchor = this.$el.querySelector(selector)
                anchor.scrollIntoView()
            }, 500)
        },
        toDetail(pro){
            if(pro.urlType == 1){
                window.open(pro.url);
            }else{
                this.$router.push({
                    path:`/product/${pro.url}`
                })
            }
        },
        toDetail2(path){
            this.$router.push({
                path
            })
        },
        brStr(val){
            if(val){
                return val.split('\n').join('<br>');
            }else{
                return '';
            }
        },
    }
}
</script>

<style lang="scss" scoped>
.container{
    margin:0 auto;
    width:100%;
    margin-top:108px;
    overflow-x:hidden ;
}

.pro-list{
    .pro-item{
        position: relative;
        width:100%;
        height:1080px;
        height:56.25vw;
        min-height:540px;
        overflow:hidden;
        .bg-img{
            position:absolute;
            height:1080px;
            height:56.25vw;
            min-height:540px;
            bottom:0;
        }
        .pro-mask{
            position:absolute;
            height:1080px;
            height:56.25vw;
            min-height:540px;
            mix-blend-mode: multiply;
        }
        .pro-info-container{
            position:absolute;
            top:212px;
            top:11.04167vw;
            .pro-title{
                position: relative;
                opacity: 1;
                font-size: 62px;
                font-family: PingFangSC, PingFangSC-Semibold;
                font-weight: 600;
                text-align: left;
                color: #ffffff;
                line-height: 93px;
                margin-bottom:74px;
                font-size: 3.229167vw;
                line-height: 4.84375vw;
                margin-bottom:3.854167vw;
                &::after{
                    position:absolute;
                    content:' ';
                    bottom:-18px;
                    width:100px;
                    height:4px;
                    background: #8f6d39;
                    bottom:-0.9375vw;
                    width:5.2083vw;
                    height:0.2083vw;
                }
            }
            .pro-desc{
                width:566px;
                opacity: 1;
                font-size: 24px;
                font-family: PingFangSC, PingFangSC-Regular;
                font-weight: 400;
                text-align: left;
                color: #ffffff;
                line-height: 42px;
                margin-bottom:50px;
                width:29.479167vw;
                font-size: 1.25vw;
                line-height: 2.1875vw;
                margin-bottom:2.604167vw;
                min-width:300px;

            }
            .pro-btn{
                display: inline-block;
                width:214px;
                height:66px;
                line-height:66px;
                background: white;
                text-align: center;
                opacity: 1;
                font-size: 20px;
                font-family: PingFangSC, PingFangSC-Medium;
                font-weight: 500;
                color: #b21e27;

                width:11.14583vw;
                height:3.4375vw;
                line-height:3.4375vw;
                font-size: 1.04167vw;
                min-width:106px;
                min-height:33px;
                cursor: pointer;
            }
        }
        &:nth-child(odd){
            .bg-img{
                right:0;
            }
            .pro-mask{
                left:0;
                top:-1px;
                border-bottom: 1080px solid #b21e27;
                border-bottom: 57.25vw solid #b21e27;

                border-left: 0px solid transparent;
                border-right: 400px solid transparent; 
                border-right: 20.83vw solid transparent; 

                width: 1320px;
                width: 68.75vw;

            }
            .pro-info-container{
                left:241px;
                left:12.552083vw;

                text-align:left;
                .pro-title{
                    &::after{
                        left:0;
                    }
                }
            }
        }
        &:nth-child(even){
            .bg-img{
                left:0;
            }
            .pro-mask{
                right:0;
                top:-1px;
                border-bottom: 1080px solid #b21e27;
                border-bottom: 57.25vw solid #b21e27;

                border-right: 0px solid transparent;
                border-left: 400px solid transparent; 
                border-left: 20.83vw solid transparent; 

                width: 1320px;
                width: 68.75vw;


            }
            .pro-info-container{
                right:241px;
                right:12.552083vw;
                text-align: right;
                .pro-title{
                    text-align: right;
                    &::after{
                        right:0;
                    }
                }
            }
        }
    }
}
.page-bottom{
    padding:55px 0px;
}
@media screen and (max-width:960px) {

    .pro-title{
        font-size:31px !important;
        line-height:46.5px !important;
    }
    .pro-desc{
        font-size:12px !important;
        line-height:21px !important;
    }
    .pro-mask{
        border-bottom: 540px solid #b21e27 !important;
    }
    .pro-info-container{
        top:106px !important;
    }
    .pro-btn{
        line-height:33px !important;
    }
}
</style>