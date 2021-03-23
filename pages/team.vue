<template>
  <div class="container">
      <div class="page-banner">
          <img src="~/assets/img/team_banner.png" alt="" aspect="fill">
          <div class="text">管理团队</div>
      </div>
      <div class="main-leader">
          <div class="leader-mask">
              <div class="leader-info">
                  <div class="leader-title">郁敏珺<span>董事长</span></div>
                  <div class="leader-desc">
                      上海锦和投资集团有限公司董事长 <br> 上海锦和商业经营管理股份有限公司董事长、总经理  <br> 上海市第十三届政协委员会委员 <br>  上海现代服务业联合会第三届副会长 <br>  上海市宁波商会执行副会长 <br>  上海市文化创意产业促进会副会长 <br>  中国民主建国会上海市第十三届创意产业委员会主任  <br> 上海市浙江商会第十届理事会执行副会长
                  </div>
              </div>
          </div>
      </div>
      <div class="leader-group">
          <div class="leader-group-content">
              <div class="leader-item">
                  <img src="~/assets/img/leader_1.png" alt="">
                  <div class="leader-info">
                      <div class="leader-title">范英<span>首席财务官</span></div>
                      <div class="leader-desc">中山大学经济学学士。曾就职于和记黄埔地产、财富控股、万邦集团等房地产企业，拥有20多年房地产企业工作经验。她在项目投资、并购、融资、财务管理和税收安排等领域有着丰富的经验。</div>
                  </div>
              </div>
              <div class="leader-item">
                  <img src="~/assets/img/leader_1.png" alt="">
                  <div class="leader-info">
                      <div class="leader-title">范英<span>首席财务官</span></div>
                      <div class="leader-desc">中山大学经济学学士。曾就职于和记黄埔地产、财富控股、万邦集团等房地产企业，拥有20多年房地产企业工作经验。她在项目投资、并购、融资、财务管理和税收安排等领域有着丰富的经验。</div>
                  </div>
              </div>
          </div>
          <div class="leader-group-divide"></div>
          <div class="leader-group-content">
              <div class="leader-item">
                  <img src="~/assets/img/leader_1.png" alt="">
                  <div class="leader-info">
                      <div class="leader-title">范英<span>首席财务官</span></div>
                      <div class="leader-desc">中山大学经济学学士。曾就职于和记黄埔地产、财富控股、万邦集团等房地产企业，拥有20多年房地产企业工作经验。她在项目投资、并购、融资、财务管理和税收安排等领域有着丰富的经验。</div>
                  </div>
              </div>
              <div class="leader-item">
                  <img src="~/assets/img/leader_1.png" alt="">
                  <div class="leader-info">
                      <div class="leader-title">范英<span>首席财务官</span></div>
                      <div class="leader-desc">中山大学经济学学士。曾就职于和记黄埔地产、财富控股、万邦集团等房地产企业，拥有20多年房地产企业工作经验。她在项目投资、并购、融资、财务管理和税收安排等领域有着丰富的经验。</div>
                  </div>
              </div>
          </div>
          <div class="leader-group-divide"></div>
          <div class="leader-group-content">
              <div class="leader-item">
                  <img src="~/assets/img/leader_1.png" alt="">
                  <div class="leader-info">
                      <div class="leader-title">范英<span>首席财务官</span></div>
                      <div class="leader-desc">中山大学经济学学士。曾就职于和记黄埔地产、财富控股、万邦集团等房地产企业，拥有20多年房地产企业工作经验。她在项目投资、并购、融资、财务管理和税收安排等领域有着丰富的经验。</div>
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
.main-leader{
    position:relative;
    width:100%;
    height:642px;
    .leader-mask{
        position:absolute;
        left:0;
        top:0;
        height:642px;
        width:1278px;
        border-bottom:642px solid rgba(128,0,0,.9);
        border-left:0px solid transparent;
        border-right:300px solid transparent;
        .leader-info{
            position:absolute;
            top:73px;
            left:360px;
            .leader-title{
                position: relative;
                opacity: 1;
                font-size: 32px;
                font-family: PingFangSC, PingFangSC-Semibold;
                font-weight: 600;
                text-align: left;
                color: #ffffff;
                line-height: 45px;
                margin-bottom:31px;
                >span{
                    display: inline-block;
                    margin-left:20px;
                    font-size:22px;
                }
                &::after{
                    position:absolute;
                    content:' ';
                    width:98px;
                    height:4px;
                    background:#8f6d39;
                    bottom:-13px;
                    left:0px;

                }
            }
            .leader-desc{
                opacity: 1;
                font-size: 18px;
                font-family: PingFangSC, PingFangSC-Regular;
                font-weight: 400;
                text-align: left;
                color: #ffffff;
                line-height: 42px;
            }
        }
    }
}
.leader-group{
    padding:134px 220px;
    background: rgba(0,0,0,.9);
    box-sizing: border-box;
    .leader-group-content{
        display: flex;
        flex-flow:row nowrap;
        justify-content: space-between;
        align-items: center;
        .leader-item{
            display: flex;
            flex-flow:row nowrap;
            justify-content: flex-start;
            align-items: flex-start;
            img{
                width:250px;
                height:336px;
                object-fit: cover;
            }
            .leader-info{
                width:364px;
                margin-left:55px;
                margin-top:36px;
                .leader-title{
                    position: relative;
                    opacity: 1;
                    font-size: 32px;
                    font-family: PingFangSC, PingFangSC-Semibold;
                    font-weight: 600;
                    text-align: left;
                    color: #ffffff;
                    line-height: 45px;
                    margin-bottom:36px;
                    >span{
                        display: inline-block;
                        margin-left:20px;
                        font-size:22px;
                    }
                    &::after{
                        position:absolute;
                        content:' ';
                        width:62px;
                        height:4px;
                        background:#8f6d39;
                        bottom:-13px;
                        left:0px;

                    }
                }
                .leader-desc{
                    opacity: 1;
                    font-size: 18px;
                    font-family: PingFangSC, PingFangSC-Regular;
                    font-weight: 400;
                    text-align: left;
                    color: #ffffff;
                    line-height: 28px;
                }
            }
        }
    }
    .leader-group-divide{
        width:100%;
        height:1px;
        border: 1px solid #979797;
        margin:90px auto;
        opacity: .7;
    }
}

</style>