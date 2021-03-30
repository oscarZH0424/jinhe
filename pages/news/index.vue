<template>
  <div class="container">
      <div class="page-banner">
          <img src="~/assets/img/news_banner.png" alt="" aspect="fill">
          <div class="text">新闻中心</div>
      </div>
      <div class="news-list">
          <div class="news-item" v-for="(news,index) in newsList" :key="index">
              <div class="news-mask">
                  <div class="mask-item">
                      <div class="news-info">
                        <div class="news-time">{{news.time}}</div>
                        <div class="news-title">{{news.title}}</div>
                        <div class="news-btn" @click="toDetail(news.link)">了解详情</div>
                      </div>
                  </div>
              </div>
              <div class="news-cover">
                  <img :src="news.src" alt=""/>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    scrollToTop: true,
    data(){
        return {
            newsList:[
                {time:'2020-10-29',title:'锦和商业上市后并购项目第一单',src:require('~/assets/img/news_1.png'),link:'http://www.iyuejie.com/#/newDatail?id=a52ca4e053a34630ab9d7642a63d2963'},
                {time:'2020-12-28',title:'锦和越界陕康里荣获2020【金文旅奖】上海在线新文旅20强',src:require('~/assets/img/news_2.png'),link:'http://www.iyuejie.com/#/newDatail?id=56bc342f2b1342cc9a0e231537b6a556'},
                {time:'2020-10-18',title:'锦和商业荣膺财联社“2020中国新经济最具投资价值上市公司奖”',src:require('~/assets/img/news_3.png'),link:'http://www.iyuejie.com/#/newDatail?id=c924c597e5054240a87f559f4a038eae'},
                {time:'2020-8-24',title:'疫”境前行 | 锦和受邀与沪上商办行业共论创变新机遇',src:require('~/assets/img/news_4.png'),link:'http://www.iyuejie.com/#/newDatail?id=c6dddab283c1442fb3257f0a6531ee27'},
                {time:'2020-4-18',title:'湖北省省委宣传部副部长、广播电视局局长邓务贵等一行探访越界•田林坊',src:require('~/assets/img/news_5.png'),link:'http://www.iyuejie.com/#/newDatail?id=42491e810ff14474a934a33e487a5ffb'},
            ]
        }
    },
    methods:{
        toDetail(link){
            window.open(link);
        }
    },
}
</script>

<style lang="scss" scoped>
.container{
    margin:0 auto;
    width:1920px;
    margin-top:108px;
}
.news-list{
    .news-item{
        position: relative;
        width:100%;
        height:642px;
        display: flex;
        align-items: stretch;
        .news-mask{
            width:960px;
            height:100%;
            .mask-item{
                position: relative;
                .news-info{
                    position:absolute;
                    top:166px;
                    .news-time{
                        position: relative;
                        opacity: 1;
                        font-size: 24px;
                        font-family: PingFangSC, PingFangSC-Regular;
                        font-weight: 400;
                        color: #ffffff;
                        line-height: 33px;
                        margin-bottom:45px;
                        &::after{
                             position:absolute;
                            content:' ';
                            background:#8f6d39;
                            width:62px;
                            height:4px;
                            bottom:-9px;
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
                    }
                }
            }
        }
        .news-cover{
            width:960px;
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
                    width:960px;
                    border-bottom:642px solid #b21e27;
                    border-left:320px solid transparent;
                    border-right:0px solid transparent;
                    .news-info{
                        right:81px;
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
                    width:960px;
                    border-bottom:642px solid #b21e27;
                    border-right:320px solid transparent;
                    border-left:0px solid transparent;
                    .news-info{
                        left:81px;
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

</style>