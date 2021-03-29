<template>
  <div class="container">
      <Pagebanner keystr="pro"/>
      <div class="pro-list">
          <div class="pro-item">
              <img class="bg-img" src="~/assets/img/pro_1.png" alt=""/>
              <div class="pro-mask">
                  <div class="pro-info-container">
                      <div class="pro-title">上海御锦凯宾斯基全套房酒店</div>
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
    width:100%;
    margin-top:64px;
}

.pro-list{
    .pro-item{
        position: relative;
        width:100%;
        height:454px;
        .bg-img{
            position:absolute;
            height:454px;
            bottom:0;
        }
        .pro-mask{
            position:absolute;
            height:454px;
            .pro-info-container{
                position:absolute;
                top:81px;
                .pro-title{
                    position: relative;
                    width:190px;
                    opacity: 1;
                    font-size: 25px;
                    font-family: PingFangSC, PingFangSC-Semibold;
                    font-weight: 600;
                    text-align: left;
                    color: #ffffff;
                    line-height: 35px;
                    margin-bottom:25px;
                    display: inline-block;
                    &::after{
                       
                    }
                }
                .pro-desc{
                    width:190px;
                    opacity: 1;
                    font-size: 13px;
                    font-family: PingFangSC, PingFangSC-Regular;
                    font-weight: 400;
                    text-align: left;
                    color: #ffffff;
                    line-height: 23px;
                     margin-bottom:15px;
                }
                .pro-btn{
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
        &:nth-child(odd){
            .bg-img{
                right:0;
            }
            .pro-mask{
                left:0;
                top:0;
                border-bottom: 454px solid rgba(128,0,0,.9);
                border-left: 0px solid transparent;
                border-right: 190px solid transparent; 
                width: 100%;
               .pro-info-container{
                    left:23px;
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
                border-bottom: 454px solid rgba(128,0,0,.9);
                border-right: 0px solid transparent;
                border-left: 190px solid transparent; 
                width: 100%;
                .pro-info-container{
                    right:23px;
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