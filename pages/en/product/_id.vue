<template>
  <div class="container pc">
      <Pagebanner keystr="prod"/>
      <div class="paragraph">
          <div class="title">{{detail.title}}</div>
          <div class="subtitle">
              <div class="top">{{detail.tag}}</div>
              <div class="line"></div>
              <div class="bottom">
                  <span>Gross Leasable Area(sqm)：{{detail.area}}</span> <span>Tel：{{detail.telPhone}}</span> <span>ADD：{{detail.address}}</span> 
              </div>
              <div v-if="detail.hot" class="tag">Hot Rent</div>
          </div>
          <div class="content" v-html="detail.body">
          </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
asyncData ({ params }) {//请求
        console.log(params);
        return  axios({
        method: 'post',
        url: 'http://www.dream-fly.com.cn:8383/article/detail',
        data:{data:params.id}
        })
        .then(function (res) {
            let detail;
            if(res.data.code == 0){
                detail = res.data.data;
            }
            return { detail }
        })
    },
    mounted(){
        console.log(this.detail);
    }
}
</script>

<style lang="scss" scoped>
.container{
    margin:0 auto;
    width:100%;
    margin-top:108px;
}
.pc{
.paragraph{
    position:relative;
    width:1200px;
    margin:0 auto;
    padding-top:87px;
    padding-bottom:145px;

    width:62.5vw;
    padding-top:4.53125vw;
    padding-bottom:7.552083vw;

    .title{
        opacity: 1;
        font-size: 32px;
        font-family: PingFangSC, PingFangSC-Semibold;
        font-weight: 600;
        text-align: left;
        color: #000000;
        line-height: 45px;
        margin-bottom:20px;

        font-size: 1.67vw;
        line-height: 2.34375vw;
        margin-bottom:1.04167vw;

    }
    .subtitle{
        position:relative;
        .top{
            opacity: 1;
            font-size: 14px;
            font-family: PingFangSC, PingFangSC-Regular;
            font-weight: 400;
            text-align: left;
            color: #000000;
            line-height: 20px;

            font-size: 0.729167vw;
            line-height: 1.04167vw;


        }
        .line{
            width:100%;
            height: 1px;
            opacity: 0.26;
            border: 1px solid #979797;
            margin:5px auto;
        }
        .bottom{
            opacity: 1;
            font-size: 14px;
            font-family: PingFangSC, PingFangSC-Medium;
            font-weight: 500;
            text-align: left;
            color: #787878;
            line-height: 20px;

            font-size: 0.729167vw;
            line-height: 1.04167vw;
            >span{
                display: inline-block;
                margin-right:40px;
                margin-right:2.083vw;

            }
        }
       .tag{
            position:absolute;
            right:0;
            top:-10px;
            height:30px;
            width:79px;
            border-bottom:30px solid #b21e27;
            border-right:0px solid transparent;
            border-left:20px solid transparent;
            opacity: 1;
            font-size: 12px;
            font-family: PingFangSC, PingFangSC-Medium;
            font-weight: 500;
            text-align: right;
            color: #ffffff;
            line-height: 30px;
            padding-right:10px;

            top:-0.52083vw;
            height:1.5625vw;
            width:79px;
            border-bottom:1.5625vw solid #b21e27;
            border-left:1.04167vw solid transparent;
            font-size: 0.625vw;
            line-height: 1.5625vw;
            padding-right:0.52083vw;

        }
    }
    .content{
        margin-top:30px;
        margin-top:1.5625vw;
        p{
            opacity: 1;
            font-size: 16px;
            font-family: PingFangSC, PingFangSC-Regular;
            font-weight: 400;
            text-align: left;
            color: #787878;
            line-height: 28px;
            margin-bottom:30px;

            font-size: 0.83vw;
            line-height: 1.4583vw;
            margin-bottom:1.5625vw;
        }
        img{
            max-width:1200px;
            margin:0 auto;
            display: block;
            margin-bottom:68px;
            
            max-width:62.5vw;
            margin-bottom:3.54167vw;


        }
    }
    
}
}


@media screen and (max-width:1450px) {
    .pc{
        .paragraph{
            .title{
                font-size:24px !important;
                line-height:34px !important;
                margin-bottom:15px !important;
            }
            .subtitle{
                .top{
                    font-size:12px !important;
                    line-height:15px !important;
                }
                .bottom >span{
                    font-size:12px !important;
                    line-height:15px !important;
                }
                .tag{
                    width:79px !important;
                    height:22.6px !important;
                    line-height:22.6px !important;
                    font-size:12px !important;
                    border-bottom:22.6px solid #b21e27 !important;
                    border-left:15px solid transparent !important;
                    top:-7.5px !important;
                    padding-right:7.5px !important;
                }
            }
        }
        .content{
            margin-top:22.6px !important;
        }
        .content p{
            font-size:12px !important;
            line-height:21px !important;
        }
    }
    
}
</style>
<style lang="scss">
.pc{
    .content{
        margin-top:30px;
        margin-top:1.5625vw;
        p{
            opacity: 1;
            font-size: 16px;
            font-family: PingFangSC, PingFangSC-Regular;
            font-weight: 400;
            text-align: left;
            color: #787878;
            line-height: 28px;
            margin-bottom:30px;

            font-size: 0.83vw;
            line-height: 1.4583vw;
            margin-bottom:1.5625vw;
        }
        img{
            max-width:1200px;
            margin:0 auto;
            display: block;
            margin-bottom:68px;
            
            max-width:62.5vw;
            margin-bottom:3.54167vw;


        }
    }
}


    @media screen and (max-width:1450px) {
        .pc{
             .paragraph{
                .title{
                    font-size:24px !important;
                    line-height:34px !important;
                    margin-bottom:15px !important;
                }
                .subtitle{
                    .top{
                        font-size:12px !important;
                        line-height:15px !important;
                    }
                    .bottom >span{
                        font-size:12px !important;
                        line-height:15px !important;
                    }
                    .tag{
                        width:79px !important;
                        height:22.6px !important;
                        line-height:22.6px !important;
                        font-size:12px !important;
                        border-bottom:22.6px solid #b21e27 !important;
                        border-left:15px solid transparent !important;
                        top:-7.5px !important;
                        padding-right:7.5px !important;
                    }
                }
            }
            .content{
                margin-top:22.6px !important;
            }
            .content p{
                font-size:12px !important;
                line-height:21px !important;
            }
        }
   
}
</style>