<template>
  <div class="container">
      <Pagebanner keystr="pro"/>
      <div class="pro-list">
          <div class="pro-item" v-for="(pro,index) in proList" :key="pro.id" :id="`pro${pro.id}`">
              <img class="bg-img wow fadeIn" :src="pro.mobileCoverUrl" alt=""/>
              <div class="pro-mask wow" :class="{'fadeInLeft':index%2==1,'fadeInRight':index%2==0}" data-wow-delay="1s"></div>
              <div class="pro-info-container wow fadeInUp" data-wow-delay="2s">
                <div class="pro-title">{{pro.firstTitle}}<br v-if="pro.secondTitle">{{pro.secondTitle}}</div>
                <div class="pro-desc" v-html="brStr(pro.information)"></div>
                <div class="pro-btn" @click="toDetail(pro)">了解详情</div>
            </div>
          </div>
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
		url: 'https://api.goldenunionassets.com/project/screen',
        data:{data:{status:true,types:[1,2]},limit:1000,start:0}
	    })
	    .then(function (res) {
            let oriProList = [];
            let total = 0;
            if(res.data.code == 0){
                oriProList = res.data.data;
                let arr1 = oriProList.filter(item=>{
                    return item.type == 1;
                })
                let arr2 = oriProList.filter(item=>{
                    return item.type == 2;
                })
                oriProList = arr1.concat(arr2);
                total = res.data.totalRecord;
            }
		  return { oriProList,total }
	    })
	},
    data(){
        return{
            proList:[],
            pageSize:1000,
            pageNum:0
        }
    },
    mounted() {
        this.init();
        this.setData();
    },
    methods: {
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
            window.open(path);
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
    margin-top:128px;
}
.pro-list{
    .pro-item{
        position: relative;
        width:100%;
        height:908px;
        .bg-img{
            position:absolute;
            height:908px;
            bottom:0;
        }
        .pro-mask{
            position:absolute;
            height:908px;
            mix-blend-mode: multiply;
        }
        .pro-info-container{
            position:absolute;
            top:160px;
            .pro-title{
                position: relative;
                width:380px;
                opacity: 1;
                font-size: 50px;
                font-family: PingFangSC, PingFangSC-Semibold;
                font-weight: 600;
                text-align: left;
                color: #ffffff;
                line-height: 70px;
                margin-bottom:53px;
                display: inline-block;
                &::after{
                    position:absolute;
                    content:' ';
                    width:100px;
                    height:4px;
                    bottom:-18px;
                    background: #8f6d39;
                }
            }
            .pro-desc{
                width:380px;
                opacity: 1;
                font-size: 26px;
                font-family: PingFangSC, PingFangSC-Regular;
                font-weight: 400;
                text-align: left;
                color: #ffffff;
                line-height: 45px;
                margin-bottom:30px;
            }
            .pro-btn{
                display: inline-block;
                width:200px;
                height:58px;
                line-height:58px;
                background: white;
                text-align: center;
                opacity: 1;
                font-size: 24px;
                font-family: PingFangSC, PingFangSC-Medium;
                font-weight: 500;
                color: #b21e27;
            }
        }
        &:nth-child(odd){
            .bg-img{
                right:0;
            }
            .pro-mask{
                left:0;
                top:0;
                border-bottom: 908px solid #b21e27;
                border-left: 0px solid transparent;
                border-right: 380px solid transparent; 
                width: 100%;
            }
            .pro-info-container{
                left:45px;
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
                top:0;
                border-bottom: 908px solid #b21e27;
                border-right: 0px solid transparent;
                border-left: 380px solid transparent; 
                width: 100%;
            }
            .pro-info-container{
                right:45px;
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
</style>