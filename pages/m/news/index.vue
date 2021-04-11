<template>
  <div class="container">
      <Pagebanner keystr="news"/>
      <div class="news-list">
          <div class="news-item" v-for="(news,index) in newsList" :key="index">
              <div class="news-cover">
                  <img :src="news.src" alt=""/>
              </div>
              <div class="news-mask wow" :class="{'fadeInLeft':index%2==1,'fadeInRight':index%2==1}"></div>
              <div class="mask-item">
                <div class="news-info wow fadeInUp"  data-wow-delay="1s">
                    <div class="news-time">{{news.time}}</div>
                    <div class="news-title">{{news.title}}</div>
                    <div class="news-btn" @click="toDetail(news.link)">了解详情</div>
                </div>
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
                {time:'2020-10-29',title:'锦和商业上市后并购项目第一单',src:require('~/assets/img/m/news_1.png'),link:'/news/1'},
                {time:'2020-12-28',title:'锦和越界陕康里荣获2020【金文旅奖】上海在线新文旅20强',src:require('~/assets/img/m/news_2.png'),link:'http://www.iyuejie.com/#/newDatail?id=56bc342f2b1342cc9a0e231537b6a556'},
                {time:'2020-10-18',title:'锦和商业荣膺财联社“2020中国新经济最具投资价值上市公司奖”',src:require('~/assets/img/m/news_3.png'),link:'http://www.iyuejie.com/#/newDatail?id=c924c597e5054240a87f559f4a038eae'},
                {time:'2020-8-24',title:'疫”境前行 | 锦和受邀与沪上商办行业共论创变新机遇',src:require('~/assets/img/m/news_4.png'),link:'http://www.iyuejie.com/#/newDatail?id=c6dddab283c1442fb3257f0a6531ee27'},
                {time:'2020-4-18',title:'湖北省省委宣传部副部长、广播电视局局长邓务贵等一行探访越界•田林坊',src:require('~/assets/img/m/news_5.png'),link:'http://www.iyuejie.com/#/newDatail?id=42491e810ff14474a934a33e487a5ffb'},
            ]
        }
    },
    mounted(){
      new this.$wow.WOW({live:true}).init();
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