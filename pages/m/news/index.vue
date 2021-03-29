<template>
  <div class="container">
      <Pagebanner keystr="news"/>
      <div class="news-list">
          <div class="news-item">
              <div class="news-mask">
                  <div class="mask-item">
                      <div class="news-info">
                        <div class="news-time">2020-10-29</div>
                        <div class="news-title">锦和商业上市后并购项目第一单</div>
                        <div class="news-btn">了解详情</div>
                      </div>
                  </div>
              </div>
              <div class="news-cover">
                  <img src="~/assets/img/news_1.png" alt=""/>
              </div>
          </div>
          <div class="news-item">
              <div class="news-mask">
                  <div class="mask-item">
                      <div class="news-info">
                        <div class="news-time">2020-10-29</div>
                        <div class="news-title">锦和越界陕康里荣获2020【金文旅奖】上海在线新文旅20强</div>
                        <div class="news-btn">了解详情</div>
                      </div>
                  </div>
              </div>
              <div class="news-cover">
                  <img src="~/assets/img/news_2.png" alt=""/>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    scrollToTop: true
}
</script>

<style lang="scss" scoped>
.container{
    margin:0 auto;
    width:100%;
    margin-top:64px;
}
.news-list{
    .news-item{
        position: relative;
        width:100%;
        height:325px;
        .news-mask{
            position:absolute;
            top:0;
            width:312px;
            height:100%;
            z-index: 1;
            .mask-item{
                position: relative;
                .news-info{
                    position:absolute;
                    top:82px;
                    .news-time{
                        position: relative;
                        opacity: 1;
                        font-size: 13px;
                        font-family: PingFangSC, PingFangSC-Regular;
                        font-weight: 400;
                        color: #ffffff;
                        line-height: 16px;
                        margin-bottom:22px;
                        &::after{
                             position:absolute;
                            content:' ';
                            background:#8f6d39;
                            width:50px;
                            height:2px;
                            bottom:-5px;
                        }
                    }
                    .news-title{
                        width:175px;
                        opacity: 1;
                        font-size: 18px;
                        font-family: PingFangSC, PingFangSC-Semibold;
                        font-weight: 600;
                        color: #ffffff;
                        line-height: 25px;
                        margin-bottom:15px;
                    }
                    .news-btn{
                        display: inline-block;
                        width:100px;
                        height:29px;
                        line-height:29px;
                        background: white;
                        text-align: center;
                        opacity: 1;
                        font-size: 12px;
                        font-family: PingFangSC, PingFangSC-Medium;
                        font-weight: 500;
                        color: #b21e27;
                    }
                }
            }
        }
        .news-cover{
            position:absolute;
            top:0;
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
                .mask-item{
                    width:312px;
                    border-bottom:325px solid rgba(128,0,0,.7);
                    border-left:0px solid transparent;
                    border-right:167px solid transparent;
                    .news-info{
                        left:23px;
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
        &:nth-child(even){
            .news-mask{
                right:0;
                .mask-item{
                    width:312px;
                    border-bottom:325px solid rgba(128,0,0,.7);
                    border-right:0px solid transparent;
                    border-left:167px solid transparent;
                    .news-info{
                        right:23px;
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
}

</style>