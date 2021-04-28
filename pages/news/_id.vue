<template>
  <div class="container pc">
      <Pagebanner keystr="newsd"  :src="detail.bannerCoverUrl" :title="detail.bannerTitle"/>
      <div class="paragraph">
          <div class="title">{{detail.title}}</div>
          <div class="subtitle">
              <div class="line"></div>
              <div class="bottom">{{detail.editTime}}</div>
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
        url: 'http://www.dream-fly.com.cn:8282/article/detail',
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
}
</script>

<style lang="scss" scoped>


.container{
    margin:0 auto;
    width:100%;
    margin-top:75px;
}

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

        font-size: 1.67vw;
        line-height: 2.34375vw;
    }
    .subtitle{
        position:relative;
        
        .line{
            width:100%;
            height: 1px;
            opacity: 0.26;
            border: 1px dashed #979797;
            margin:5px auto;
        }
        .bottom{
            opacity: 1;
            font-size: 16px;
            font-family: PingFangSC, PingFangSC-Medium;
            font-weight: 500;
            text-align: left;
            color: #000000;
            line-height: 22px;

            font-size: 0.83vw;
            line-height: 1.14583vw;
        }
       
    }
    .content{
        margin-top:30px;
        margin-top:1.5625vw;

        p{
            opacity: 1;
            font-size: 14px;
            font-family: PingFangSC, PingFangSC-Regular;
            font-weight: 400;
            text-align: left;
            color: #787878;
            line-height: 28px;

            font-size: 0.729167vw;
            line-height: 1.4583vw;
        }
        img{
            max-width:1200px;
            margin:0 auto;
            display: block;
            // margin-bottom:68px;

            max-width:62.5vw;
            // margin-bottom:3.54167vw;


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
                
                .bottom{
                    font-size:12px !important;
                    line-height:15px !important;
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
            // margin-bottom:68px;
            
            max-width:62.5vw;
            // margin-bottom:3.54167vw;


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
                    
                    .bottom{
                        font-size:12px !important;
                        line-height:15px !important;
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