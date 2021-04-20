<template>
  <div class="container">
      <Pagebanner keystr="news"/>
      <div class="news-list">
          <div class="news-item" v-for="(news,index) in newsList" :key="index">
              <div class="news-cover">
                  <img :src="news.coverUrl" alt=""/>
              </div>
              <div class="news-mask wow" :class="{'fadeInLeft':index%2==1,'fadeInRight':index%2==0}"></div>
              <div class="mask-item">
                <div class="news-info wow fadeInUp"  data-wow-delay="1s">
                    <div class="news-time">{{news.editTime | timeFormat}}</div>
                    <div class="news-title">{{news.title}}</div>
                    <div class="news-btn" @click="toDetail(news)">Learn More</div>
                </div>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    asyncData ({ params }) {//请求
	    return  axios({
		method: 'post',
		url: 'http://www.dream-fly.com.cn:8383/article/screen',
        data:{data:{status:true,types:['3'],editTimeSort:true},limit:5,start:0}
	    })
	    .then(function (res) {
            let newsList = [];
            let total = 0;
            if(res.data.code == 0){
                newsList = res.data.data;
                total = res.data.totalRecord;
            }
		  return { newsList,total }
	    })
	},
    scrollToTop: true,
    data(){
        return {
            pageSize:5,
            pageNum:0
        }
    },
    mounted(){
      new this.$wow.WOW({live:true}).init();
    },
    methods:{
        toDetail(news){
            this.$router.push({
                path:`/en/news/${news.id}`
            })
        },
        getData(){
            let _this = this;
            axios({
            method: 'post',
            url: 'http://www.dream-fly.com.cn:8383/article/screen',
            data:{data:{status:true,types:['3'],editTimeSort:true},limit:this.pageSize,start:this.pageNum*this.pageSize}
            })
            .then( (res)=> {
                if(res.data.code == 0){
                    _this.total = res.data.totalRecord;
                    _this.newsList = res.data.data;
                }
            })
        },
    },
    filters:{
        timeFormat(val){
            return val.split('-').join('.');
        }
    }
}
</script>

<style lang="scss" scoped>
.container{
    margin:0 auto;
    width:100%;
    margin-top:128px;
}
.news-list{
    .news-item{
        position: relative;
        width:100%;
        height:650px;
        .news-mask{
            position:absolute;
            top:0;
            width:624px;
            height:100%;
            z-index: 1;
            mix-blend-mode: multiply;
        }
        .mask-item{
            position: relative;
            width:100%;
            height:100%;
            z-index: 2;
            .news-info{
                position:absolute;
                top:164px;
                .news-time{
                    position: relative;
                    opacity: 1;
                    font-size: 26px;
                    font-family: PingFangSC, PingFangSC-Regular;
                    font-weight: 400;
                    color: #ffffff;
                    line-height: 37px;
                    margin-bottom:44px;
                    &::after{
                        position:absolute;
                        content:' ';
                        background:#8f6d39;
                        width:100px;
                        height:4px;
                        bottom:-10px;
                    }
                }
                .news-title{
                    width:350px;
                    opacity: 1;
                    font-size: 36px;
                    font-family: PingFangSC, PingFangSC-Semibold;
                    font-weight: 600;
                    color: #ffffff;
                    line-height: 50px;
                    margin-bottom:30px;
                }
                .news-btn{
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
        }
        .news-cover{
            position:absolute;
            top:0;
            left:0;
            width:100%;
            height:100%;
            img{
                width:100%;
                height:100%;
                object-fit: cover;
            }
        }
        
        &:nth-child(odd){
            .news-mask{
                left:0;
                 width:624px;
                border-bottom:650px solid #b21e27;
                border-left:0px solid transparent;
                border-right:334px solid transparent;
            }
            .mask-item{
                .news-info{
                    left:45px;
                    text-align: left;
                    .news-time{
                        &::after{
                            left:0;
                        }
                    }
                }
            }
        }
        &:nth-child(even){
            .news-mask{
                right:0;
                width:624px;
                border-bottom:650px solid #b21e27;
                border-right:0px solid transparent;
                border-left:334px solid transparent;
            }
            .mask-item{
                .news-info{
                    right:45px;
                    text-align: right;
                    .news-time{
                        &::after{
                            right:0;
                        }
                    }
                }
            }
        }
    }
}

</style>