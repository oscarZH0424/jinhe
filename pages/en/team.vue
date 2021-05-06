<template>
  <div class="container">
        <Pagebanner keystr="team"/>
      <div class="main-leader">
          <div class="leader-mask">
          </div>
          <div class="leader-info">
                  <div class="leader-title">{{ceo.name}}<span>{{ceo.title}}</span></div>
                  <div class="leader-desc" v-html="brStr(ceo.information)">
                  </div>
              </div>
          <img :src="ceo.coverUrl" alt="">
      </div>
        <div class="leaders-container">
            <div style="background:rgba(0,0,0,.69);">
                <div class="leader-group">
                    <div v-for="(mems,index) in teams" :key="`mem-g-${index}`">
                        <div class="leader-group-content" >
                            <div class="leader-item" v-for="(mem,index2) in mems" :key="`mem-${index}-${index2}`">
                                <img :src="mem.coverUrl" alt=""/>
                                <div class="leader-info">
                                    <div class="leader-title">{{mem.name}}<span>{{mem.title}}</span></div>
                                    <div class="leader-desc">{{mem.information}}</div>
                                </div>
                            </div>
                        </div>
                        <div v-if="index<teams.length-1" class="leader-group-divide"></div>
                    </div>
                    <!-- <div class="leader-group-content">
                        <div class="leader-item">
                            <img src="~/assets/img/leader_1.png" alt=""/>
                            <div class="leader-info">
                                <div class="leader-title">Ricky Huang<span>Vice Chief Financial Officer</span></div>
                                <div class="leader-desc">Master of Finance and accounting. Former ED at LCA and DaiWa capital market. More than 20 years of financial management and operating experiences in Asia with multinational and PE backed companies.</div>
                            </div>
                        </div>
                        <div class="leader-item">
                            <img src="~/assets/img/leader_2.png" alt=""/>
                            <div class="leader-info">
                                <div class="leader-title">Sandy Yu<span>Investment Director</span></div>
                                <div class="leader-desc">
                                    Former investment director of the CEFC Asset Management Company;<br>
                                    Former investment consultant and member of CEFC investment review committee;<br>
                                    7 years’ experience in land purchasing and market research and planning in the development companies;<br>
                                    11 years’ experience in assets and equity M&A of domestic and overseas real estate projects;<br>
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
                                <div class="leader-title">Jeff Gu<span>Legal Director</span></div>
                                <div class="leader-desc">
                                        Many years’ experience in real estate investment and financing and asset management;<br>
                                        Former president assistant and legal director of EBA Investments Business Division, legal manager & Foreign trade trust risk control compliance senior manager of INSITE, legal director of Kastar Real Estate Fund;<br>
                                        Certificated practicing lawyer in China
                                    </div>
                            </div>
                        </div>
                        <div class="leader-item">
                            <img src="~/assets/img/leader_4.png" alt=""/>
                            <div class="leader-info">
                                <div class="leader-title">Steven Lu<span>COO Of base &. Tulu</span></div>
                                <div class="leader-desc">
                                        Master of Business Administration from Bangor University, UK;<br>
                                        Former general manager and regional general manager at Shama, Morgan Stanley, Ascott, etc., and now is Chief Operating Officer of Base;<br>
                                        More than 20 years’ experience in asset management and operation
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div class="leader-group-divide"></div>
                    <div class="leader-group-content">
                        <div class="leader-item">
                            <img src="~/assets/img/leader_5.png" alt=""/>
                            <div class="leader-info">
                                <div class="leader-title">Charley Shen<span> Leasing Marketing Director</span></div>
                                <div class="leader-desc">
                                        More than 20 years’ experience in hotel and apartment market sales and management;<br>
                                        Previously worked for Kempinski Hotels and Shama Serviced Apartments under ONYX Hospitality Group;<br>
                                        Developed abundant market resources with his sharp business insights and accumulated rich experience in sales management.
                                    </div>
                            </div>
                        </div>
                    </div> -->
                </div>
            </div>
        </div>
      
  </div>
</template>

<script>
import axios from 'axios'

export default {
    asyncData ({ params }) {//请求
	    return  axios({
		method: 'post',
		url: 'http://www.dream-fly.com.cn:8383/team/screen',
        data:{data:true,limit:100,start:0}
	    })
	    .then(function (res) {
            let ceo = {};
            let arr = []; 
            let teams = [];
            if(res.data.code == 0){
                res.data.data.forEach(member => {
                    if(member.chairman){
                        ceo = member
                    }else{
                        arr.push(member);
                    }
                });
            }
            for(var i=0;i<arr.length;i+=2){
                teams.push(arr.slice(i,i+2));
            }
		  return { ceo,teams }
	    })
	},
    mounted(){
        console.log(this.teams,this.ceo)
    },
    methods:{
        brStr(val){
            return val.split('\n').join('<br>')
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
        right:837px;
        right:43.59375vw;
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
            width:845px;
            width:44.01vw;
            font-size: 0.9375vw;
            line-height: 2.1875vw;
            min-width:351px;
            // white-space: nowrap;

        }
    }
}

.leaders-container{
    width:100%;
    background: rgba(0,0,0,.9);
    background-image: url('~/assets/img/team-bg.png');
    background-size: 100% 100%;
}
.leader-group{
    padding:134px 0px;
    box-sizing: border-box;
    overflow: hidden;
    margin:0 auto;
    .leader-group-content{
        display: flex;
        flex-flow:row wrap;
        justify-content: space-between;
        align-items: flex-start;
        max-width:1465px;
        margin:0 auto;
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
                margin-left:2.864583vw;
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
                        display: block;
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
        max-width:1465px;
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
        overflow: hidden;
        .leader-info{
            // width:46.257vw;
            min-width:287px ;
        }
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
@media screen and  (max-width:1320px) {
    .leader-group-content{
        justify-content: center !important;
    }
}

@media screen and  (max-width:1500px) {
    .main-leader{
        .leader-desc{
            font-size:14px !important;
            line-height:33px !important;
        }
    }
}
@media screen and  (min-width:1920px) {
    .main-leader{
        .leader-desc{
            width:845px !important;
            font-size:18px !important;
            line-height:42px !important;
        }
    }

    .leader-group-content{
        .leader-item{
            .leader-info{
                margin-left:55px !important;
                .leader-title{
                    &::after{
                        height:4px !important;
                    }
                }
            }
        }
    }
}

@media screen and  (max-width:950px) {
    .leader-mask{
        // border-bottom:317px solid #b21e27 !important;
        border-right:150px solid transparent !important;
    }
    .main-leader{
        .leader-desc{
            font-size:12px !important;
            line-height:33px !important;
        }
    }
}
</style>