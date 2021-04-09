<template>
  <div class="container">
        <Pagebanner keystr="team"/>
      <div class="main-leader">
          <div class="leader-mask">
          </div>
          <div class="leader-info">
                  <div class="leader-title">郁敏珺<span>董事长</span></div>
                  <div class="leader-desc">
                      上海锦和投资集团有限公司董事长 <br> 上海锦和商业经营管理股份有限公司董事长、总经理  <br> 上海市第十三届政协委员会委员 <br>  上海现代服务业联合会第三届副会长 <br>  上海市宁波商会执行副会长 <br>  上海市文化创意产业促进会副会长 <br>  中国民主建国会上海市第十三届创意产业委员会主任  <br> 上海市浙江商会第十届理事会执行副会长
                  </div>
              </div>
          <img src="~/assets/img/main-leader.png" alt="">
      </div>
      <div class="leaders-container">
          <div class="leader-group">
          <div class="leader-group-content">
              <div class="leader-item">
                  <img src="~/assets/img/leader_1.png" alt=""/>
                  <div class="leader-info">
                      <div class="leader-title">黄浩云<span>财务副总</span></div>
                      <div class="leader-desc">伯明翰大学金融硕士，曾在LCA基金担任大中华区执行董事，2011年加入华平并在投资的砂之船商业地产担任CFO，并于2018年成功在新加坡发行亚洲第一个奥特莱斯REITs。之前在日本大和证券担任中国区执行董事及多家欧美上市公司中国区CFO等职位。</div>
                  </div>
              </div>
              <div class="leader-item">
                  <img src="~/assets/img/leader_2.png" alt=""/>
                  <div class="leader-info">
                      <div class="leader-title">俞晨君<span>投资总监</span></div>
                      <div class="leader-desc">曾任中国华信集团资产管理公司投资总监、集团投资评审会评审委员及投资顾问，7年深耕于开发公司，从事前期土地购置及市场研策工作，11年专注于境内外不动产项目的资产及股权收并购，经手投资总额近百亿人民币，对资产价值判断、交易架构搭建、风险评估及把控等具有极为丰富的实操经验。</div>
                  </div>
              </div>
          </div>
          <div class="leader-group-divide"></div>
          <div class="leader-group-content">
              <div class="leader-item">
                  <img src="~/assets/img/leader_3.png" alt=""/>
                  <div class="leader-info">
                      <div class="leader-title">顾梦捷<span>法务总监</span></div>
                      <div class="leader-desc">拥有多年的房地产投融资及资产管理领域相关从业经验，曾任光大安石商业事业部总裁助理兼法务总监，盈石资产法务经理、外贸信托风控合规高级经理、凯思达地产基金法务总监，拥有中国执业律师资格。</div>
                  </div>
              </div>
              <div class="leader-item">
                  <img src="~/assets/img/leader_4.png" alt=""/>
                  <div class="leader-info">
                      <div class="leader-title">陆志刚<span>公寓首席运营官</span></div>
                      <div class="leader-desc">英国班戈大学工商管理硕士。曾在尚明居、摩根士丹利、雅诗阁担任总经理及区域总经理等职务，具有20多年丰富的资产管理运营经验。现任锦和资管公寓首席运营官。</div>
                  </div>
              </div>
          </div>
          <div class="leader-group-divide"></div>
          <div class="leader-group-content">
              <div class="leader-item">
                  <img src="~/assets/img/leader_5.png" alt=""/>
                  <div class="leader-info">
                      <div class="leader-title">沈净<span>租赁市场总监</span></div>
                      <div class="leader-desc">拥有超过二十年的酒店和公寓市场销售及管理工作经验，曾先后供职于凯宾斯基酒店集团，ONYX 酒店集团Shama 服务式公寓。其敏锐的商业见解和洞察力为他开拓了坚实的市场资源，累积了丰富的销售管理经验。</div>
                  </div>
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
    margin-top:108px;
}
.main-leader{
    position:relative;
    width:100%;
    height:642px;
    // height:33.4375vw;
    // min-height:317px;
    >img{
        height:614px;
        position:absolute;
        bottom:0;
        left:1145px;
        left:59.63541167vw;
        // right: 465px;
        // height:33.4375vw;
        // right: 24.21875vw;
        // min-height:317px;
    }
    .leader-mask{
        position:absolute;
        left:0;
        top:0;
        height:642px;
        width:1278px;
        mix-blend-mode: multiply;
        border-bottom:642px solid #b21e27;
        border-left:0px solid transparent;
        border-right:300px solid transparent;
        z-index: 1;
        // height:33.4375vw;
        width:66.5625vw;
        // border-bottom:33.4375vw solid #b21e27;
        border-right:15.625vw solid transparent;
        // min-height:317px;
        
    }
    .leader-info{
        position:absolute;
        top:73px;
        // left:360px;
        right:1145px;
        right:59.63541167vw;
        // top:3.802083vw;
        // left:18.75vw;
        // min-width:276px;
        z-index: 1;
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
            // font-size: 1.67vw;
            // line-height: 2.34375vw;
            margin-bottom:1.614583vw;
            >span{
                display: inline-block;
                font-size:22px;
                margin-left:1.04167vw;
                // font-size:1.14583vw;
            }
            &::after{
                position:absolute;
                content:' ';
                width:98px;
                height:4px;
                background:#8f6d39;
                bottom:-13px;
                left:0px;
                width:5.104167vw;
                height:0.2083vw;
                bottom:-0.677083vw;


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
            // font-size: 0.9375vw;
            // line-height: 2.1875vw;
            // white-space: nowrap;

        }
    }
}

.leaders-container{
    width:100%;
    background: rgba(0,0,0,.9);
}
.leader-group{
    padding:134px 0px;
    box-sizing: border-box;
    // padding:6.979167vw 11.4583vw;
    width:77%;
    overflow: hidden;
    margin:0 auto;
    .leader-group-content{
        display: flex;
        flex-flow:row wrap;
        justify-content: space-between;
        align-items: center;
        .leader-item{
            display: flex;
            flex-flow:row nowrap;
            justify-content: flex-start;
            align-items: flex-start;
            margin-bottom:90px;
            img{
                width:250px;
                height:336px;
                object-fit: cover;
                // width:13.02083vw;
                // height:17.5vw;
            }
            .leader-info{
                width:364px;
                margin-left:55px;
                margin-top:36px;
                // width:18.9583vw;
                margin-left:2.864583vw;
                margin-top:1.875vw;
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
                    // font-size: 1.67vw;
                    // line-height: 2.34375vw;
                    // margin-bottom:1.875vw;
                    >span{
                        display: inline-block;
                        font-size:22px;
                        margin-left:1.04167vw;
                        // font-size:1.14583vw;
                    }
                    &::after{
                        position:absolute;
                        content:' ';
                        width:62px;
                        height:4px;
                        background:#8f6d39;
                        bottom:-13px;
                        left:0px;
                        // width:3.229167vw;
                        height:0.2083vw;
                        // bottom:-0.677083vw;

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
                    // font-size: 0.9375vw;
                    // line-height: 1.4583vw;
                }
            }
        }
    }
    .leader-group-divide{
        width:100%;
        height:1px;
        border: 1px solid #979797;
        margin:90px auto;
        margin-top:0px;
        opacity: .7;

    }
}

@media screen and  (max-width:700px) {
    .main-leader{
        >img{
            left:auto;
            right:0px;
        }
    }
}

@media screen and  (max-width:895px) {
    .main-leader{
        .leader-info{
            width:46.257vw;
            min-width:287px ;
        }
    }
}
@media screen and  (max-width:950px) {
    .leader-mask{
        // border-bottom:317px solid #b21e27 !important;
        border-right:150px solid transparent !important;
    }
}
@media screen and  (max-width:1280px) {
    .main-leader{
        .leader-info{
            right:auto;
            left:7.083vw;
        }
    }
//   .leader-group{
//       .leader-desc{
//         line-height:18px !important;
//       }
//   }
}
@media screen and  (max-width:1745px) {
    .leader-group-content{
        justify-content: center !important;
    }
}

</style>