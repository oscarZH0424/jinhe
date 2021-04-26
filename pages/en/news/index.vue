<template>
  <div class="container">
      <Pagebanner keystr="news"/>
      <div class="news-list">
          <div class="news-item" v-for="(news,index) in newsList" :key="index">
              <div class="news-mask wow" :class="{'fadeInLeft':index%2==1,'fadeInRight':index%2==0}">
                  <div class="mask-item">
                      <div class="news-info wow fadeInUp"  data-wow-delay="1s">
                        <div class="news-time">{{news.editTime | timeFormat}}</div>
                        <div class="news-title">{{news.title}}</div>
                        <div class="news-btn" @click="toDetail(news)">Learn More</div>
                      </div>
                  </div>
              </div>
              <div class="news-cover">
                  <img :src="news.coverUrl" alt=""/>
              </div>
          </div>
      </div>
      <div class="page-bottom">
          <a-pagination :show-quick-jumper="true"  :pageSize="pageSize" :total="total" @change="onChange" />
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
        onChange(page){
            this.pageNum = page -1;
            this.getData();
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
    margin-top:75px;
}
.news-list{
    .news-item{
        position: relative;
        width:100%;
        height:642px;
        height:33.4375vw;

        display: flex;
        align-items: stretch;
        overflow: hidden;
        min-height:321px;
        .news-mask{
            width:960px;
            height:100%;
            width:50vw;
            .mask-item{
                position: relative;
                top:-1px;
                .news-info{
                    position:absolute;
                    top:166px;
                    top:8.64583vw;
                    .news-time{
                        position: relative;
                        opacity: 1;
                        font-size: 24px;
                        font-family: PingFangSC, PingFangSC-Regular;
                        font-weight: 400;
                        color: #ffffff;
                        line-height: 33px;
                        margin-bottom:45px;
                        font-size: 1.25vw;
                        line-height: 1.71875vw;
                        margin-bottom:2.34375vw;
                        &::after{
                             position:absolute;
                            content:' ';
                            background:#8f6d39;
                            width:62px;
                            height:4px;
                            bottom:-9px;
                            width:3.22917vw;
                            height:0.2083vw;
                            bottom:-0.46875vw;
                        }
                    }
                    .news-title{
                        width:566px;
                        opacity: 1;
                        font-size: 32px;
                        font-family: PingFangSC, PingFangSC-Semibold;
                        font-weight: 600;
                        color: #ffffff;
                        line-height: 48px;
                        margin-bottom:32px;
                        width:29.479167vw;
                        font-size: 1.67vw;
                        line-height: 2.5vw;
                        margin-bottom:1.67vw;
                    }
                    .news-btn{
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
                        cursor: pointer;

                    }
                }
            }
        }
        .news-cover{
            width:50vw;
            height:100%;
            img{
                width:100%;
                height:100%;
                object-fit: cover;
            }
        }
        
        
        &:nth-child(odd){
            flex-flow:row nowrap;
            .news-mask{
                .mask-item{
                    width:50vw;
                    border-bottom:642px solid #b21e27;
                    border-bottom:34.4375vw solid #b21e27;
                    border-left:320px solid transparent;
                    border-left:16.67vw solid transparent;
                    border-right:0px solid transparent;
                    .news-info{
                        right:81px;
                        right:4.21875vw;
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
        &:nth-child(even){
            flex-flow: row-reverse nowrap;
            .news-mask{
                .mask-item{
                    width:50vw;
                    border-bottom:642px solid #b21e27;
                    border-bottom:34.4375vw solid #b21e27;
                    border-right:320px solid transparent;
                    border-right:16.67vw solid transparent;
                    border-left:0px solid transparent;
                    .news-info{
                        left:81px;
                        left:4.21875vw;
                        text-align: left;
                        .news-time{
                            &::after{
                                left:0;
                            }
                        }
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
    .news-title{
        font-size:16px !important;
        line-height:24px !important;
    }
    .news-btn{
        width:107px !important;
        height:33px !important;
        line-height:33px !important;
    }
    
    .news-item{
        &:nth-child(odd){
            .mask-item{
                border-left:160px solid transparent !important;
            }
        }
        &:nth-child(even){
            .mask-item{
               border-right:160px solid transparent !important;
            }
        }
    }
    .mask-item{
        border-bottom:321px solid #b21e27 !important;
    }
    .news-info{
        top:83px !important;
    }
}
</style>