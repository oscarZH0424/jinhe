<template>
  <div class="container">
        <Pagebanner keystr="team"/>
      <div class="main-leader">
          <div class="leader-mask">
              <div class="leader-info">
                  <div class="leader-title">Minjun Yu<span>Chairwoman</span></div>
                  <div class="leader-desc">
                      Chairwoman of Shanghai Jinhe Investment Group Co.,Ltd. <br> Chairwoman & General Manager of Shanghai Golden Union Business Management Co.,Ltd. <br> Member of the 13th Shanghai Municipal Committee of the Chinese People's Political Consultative Conference <br>  Vice Chairwoman of the 3rd Shanghai Services Federation <br>  Executive Vice Chairwoman of Ningbo Chamber of Commerce in Shanghai <br>  Vice Chairwoman of Shanghai Cultural and Creative Industry Promotion Association <br>  Director of the 13th Shanghai Creative Industry Committee of China National Democratic Construction Association  <br> Executive Vice Chairwoman of the 10th Council of Zhejiang Chamber of Commerce in Shanghai
                  </div>
              </div>
          </div>
          <img src="~/assets/img/main-leader.png" alt="">
      </div>
      <div class="leader-group">
          <div class="leader-group-content">
              <div class="leader-item">
                  <img src="~/assets/img/leader_1.png" alt=""/>
                  <div class="leader-info">
                      <div class="leader-title">Ying Fan<span>Chief Financial Officer</span></div>
                      <div class="leader-desc">Bachelor of Economics from Sun Yat-sen University; Previously worked in real estate companies such as Hutchison Whampoa Limited (HWL), Fortune Holdings, Wanbang Group, etc.; More than 20 years’ experience in project investment, M&A, financing, financial management and tax arrangements in real estate companies</div>
                  </div>
              </div>
              <div class="leader-item">
                  <img src="~/assets/img/leader_2.png" alt=""/>
                  <div class="leader-info">
                      <div class="leader-title">Chenjun Yu<span>Investment Director</span></div>
                      <div class="leader-desc">
                        Former investment director of the CEFC Asset Management Company;<br>
                        Former investment consultant and member of CEFC investment review committee;<br>
                        7 years of experience in land purchasing and market research and planning in the development companies;<br>
                        9 years of experience in assets and equity M&A of domestic and overseas real estate projects;<br>
                        Tens of billions of yuan AUM;<br>
                        Sophisticated in asset value judgment, transaction structuring, risk assessment and control
                        </div>
                  </div>
              </div>
          </div>
          <div class="leader-group-divide"></div>
          <div class="leader-group-content">
              <div class="leader-item">
                  <img src="~/assets/img/leader_3.png" alt=""/>
                  <div class="leader-info">
                      <div class="leader-title">Mengjie Gu<span>Legal Director</span></div>
                      <div class="leader-desc">Many years of experience in real estate investment and financing and asset management;<br>
Former president assistant and legal director of EBA Investments Business Division, legal manager & Foreign trade trust risk control compliance senior manager of INSITE, legal director of Kastar Real Estate Fund;<br>
Certificated practicing lawyer in China</div>
                  </div>
              </div>
              <div class="leader-item">
                  <img src="~/assets/img/leader_4.png" alt=""/>
                  <div class="leader-info">
                      <div class="leader-title">Steven Lu<span>COO</span></div>
                      <div class="leader-desc">Master of Business Administration from Bangor University, UK;<br>
Former general manager and regional general manager at Shama, Morgan Stanley, Ascott, etc., and now is Chief Operating Officer of Jinhe Asset Management Apartment;<br>
More than 20 years of experience in asset management and operation。</div>
                  </div>
              </div>
          </div>
          <div class="leader-group-divide"></div>
          <div class="leader-group-content">
              <div class="leader-item">
                  <img src="~/assets/img/leader_5.png" alt=""/>
                  <div class="leader-info">
                      <div class="leader-title">Jing Shen<span> Leasing Marketing Director</span></div>
                      <div class="leader-desc">More than 20 years of experience in hotel and apartment market sales and management;<br>
Previously worked for Kempinski Hotels and Shama Serviced Apartments under Onyx Hospitality Group;<br>
Developed abundant market resources with his sharp business insights and accumulated rich experience in sales management.</div>
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
    margin-top:108px;
}
.main-leader{
    position:relative;
    width:100%;
    height:642px;
    >img{
        height:614px;
        position:absolute;
        bottom:0;
        right: 465px;
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