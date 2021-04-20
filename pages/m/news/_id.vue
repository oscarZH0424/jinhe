<template>
  <div class="container">
      <Pagebanner keystr="newsd"/>
      <div class="paragraph">
          <div class="title">{{detail.title}}</div>
          <div class="subtitle">
              <div class="line"></div>
              <div class="bottom">{{detail.editTime | timeFormat}}</div>
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
    filters:{
        timeFormat(val){
            return val.split('-').join('.');
        }
    }
}
</script>

<style lang="scss" scoped>
.container{
    margin:0 auto;
    width:100%;
    margin-top:128px;
}
.paragraph{
    position:relative;
    width:100%;
    margin:0 auto;
    padding-top:44px;
    padding-bottom:160px;
    .title{
        opacity: 1;
        font-size: 40px;
        font-family: PingFangSC, PingFangSC-Semibold;
        font-weight: 600;
        text-align: left;
        color: #000000;
        line-height: 56px;
        margin-bottom:20px;
        padding:0px 48px;
    }
    .subtitle{
        position:relative;
        padding:0px 48px;
        .top{
            opacity: 1;
            font-size: 24px;
            font-family: PingFangSC, PingFangSC-Regular;
            font-weight: 400;
            text-align: left;
            color: #000000;
            line-height: 32px;
        }
        .line{
            width:100%;
            height: 0px;
            opacity: 0.26;
            border: 1px solid #979797;
            margin:20px auto;
        }
        .bottom{
            opacity: 1;
            font-size: 28px;
            font-family: PingFangSC, PingFangSC-Medium;
            font-weight: 500;
            text-align: left;
            color: #787878;
            line-height: 40px;
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
            align-items: flex-end;
            .bottom-info{
                width:430px;
                >span{
                    display: block;
                }
            }
            .tag{
                height:60px;
                width:164px;
                border-bottom:60px solid #b21e27;
                border-right:0px solid transparent;
                border-left:40px solid transparent;
                opacity: 1;
                font-size: 24px;
                font-family: PingFangSC, PingFangSC-Medium;
                font-weight: 500;
                text-align: right;
                color: #ffffff;
                line-height: 60px;
                padding-right:20px;
            }
        }
       
    }
    .content{
        margin-top:30px;
        p{
            opacity: 1;
            font-size: 26px;
            font-family: PingFangSC, PingFangSC-Regular;
            font-weight: 400;
            text-align: left;
            color: #787878;
            line-height: 46px;
            margin-bottom:30px;
            padding:0px 48px;
        }
        img{
            max-width:100%;
            margin:0 auto;
            display: block;
            margin-bottom:60px;
        }
    }
    
}


</style>

<style lang="scss">
.content{
        margin-top:30px;
        p{
            opacity: 1;
            font-size: 26px;
            font-family: PingFangSC, PingFangSC-Regular;
            font-weight: 400;
            text-align: left;
            color: #787878;
            line-height: 46px;
            margin-bottom:30px;
            padding:0px 48px;
        }
        img{
            max-width:100%;
            margin:0 auto;
            display: block;
            margin-bottom:60px;
        }
    }
</style>