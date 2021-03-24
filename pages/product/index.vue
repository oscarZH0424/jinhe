<template>
  <div class="container">
      <div class="page-banner">
          <img src="~/assets/img/pro_banner.png" alt="" />
          <div class="text">项目与品牌</div>
      </div>
      <div class="pro-list">
          <div class="pro-item">
              <img class="bg-img" src="~/assets/img/pro_1.png" alt=""/>
              <div class="pro-mask">
                  <div class="pro-info-container">
                      <div class="pro-title">上海御锦<br>凯宾斯基全套房酒店</div>
                      <div class="pro-desc">酒店位于静安区凤阳路601号，与顶级商圈“梅、泰、恒”咫尺之遥，地铁一、二号线汇聚左右，联袂凯宾斯基酒店管理品牌将其打造为上海市中心顶级酒店公寓。</div>
                      <div class="pro-btn">了解详情</div>
                  </div>
              </div>
          </div>
          <div class="pro-item">
              <img class="bg-img" src="~/assets/img/pro_2.png" alt=""/>
              <div class="pro-mask">
                  <div class="pro-info-container">
                      <div class="pro-title">上海御锦<br>凯宾斯基全套房酒店</div>
                      <div class="pro-desc">酒店位于静安区凤阳路601号，与顶级商圈“梅、泰、恒”咫尺之遥，地铁一、二号线汇聚左右，联袂凯宾斯基酒店管理品牌将其打造为上海市中心顶级酒店公寓。</div>
                      <div class="pro-btn">了解详情</div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.container{
    margin:0 auto;
    width:1920px;
}

.pro-list{
    .pro-item{
        position: relative;
        width:100%;
        height:1080px;
        .bg-img{
            position:absolute;
            height:1080px;
            bottom:0;
        }
        .pro-mask{
            position:absolute;
            height:1080px;
            .pro-info-container{
                position:absolute;
                top:212px;
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
                    &::after{
                       
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
                }
            }
        }
        &:nth-child(odd){
            .bg-img{
                right:0;
            }
            .pro-mask{
                left:0;
                top:0;
                border-bottom: 1080px solid rgba(128,0,0,.9);
                border-left: 0px solid transparent;
                border-right: 400px solid transparent; 
                width: 1320px;
               .pro-info-container{
                    left:241px;
                    text-align:left;
                    .pro-title{
                        &::after{
                            left:0;
                        }
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
                border-bottom: 1080px solid rgba(128,0,0,.9);
                border-right: 0px solid transparent;
                border-left: 400px solid transparent; 
                width: 1320px;
                .pro-info-container{
                    right:241px;
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
}
</style>