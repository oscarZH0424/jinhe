<template>
  <div class="container">
     <Pagebanner keystr="staffd"  :src="detail.bannerMobileCoverUrl" :title="detail.bannerTitle"/>
      <div class="paragraph">
          <div class="title">{{detail.name}}</div>
          <div class="subtitle">
              <div class="line"></div>
          </div>
          <div class="content">
              <div class="position-info">
                  <div class="position-label">Department:</div>
                  <div class="position-text">{{detail.depart}}</div>
              </div>
              <div class="position-info">
                  <div class="position-label">Location:</div>
                  <div class="position-text">{{detail.city}}</div>
              </div>
              <div class="position-info">
                  <div class="position-label">Recruiting Numbers:</div>
                  <div class="position-text">{{detail.headCount}}</div>
              </div>
              <div class="position-info">
                  <div class="position-label">Release Time:</div>
                  <div class="position-text">{{detail.createTime | timeForamt}}</div>
              </div>
              <div class="position-info">
                  <div class="position-label block">Requirements:</div>
                  <div class="position-text" v-html="brStr(detail.description)"></div>
              </div>
              <div class="bottom-info">HR Manager：{{detail.publishName}} <br> Tel：{{detail.publishPhone}} <br>Green Channel For Job Hunters：{{detail.telephone}} <br>E-mail：{{detail.email}}</div>
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
        url: 'https://enapi.goldenunionassets.com/job/detail',
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
    },
    methods:{
        brStr(val){
            if(val){
                return val.split('\n').join('<br>');
            }else{
                return '';
            }
        }
    },
    filters:{
        timeForamt(val){
            return val.substring(0,10).split('-').join('.');
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
    padding:0 48px;
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
    }
    .subtitle{
        position:relative;
        
        .line{
            width:100%;
            height: 1px;
            opacity: 0.26;
            border: 1px dotted #979797;
            margin:10px auto;
        }
        .bottom{
            opacity: 1;
            font-size: 32px;
            font-family: PingFangSC, PingFangSC-Medium;
            font-weight: 500;
            text-align: left;
            color: #000000;
            line-height: 44px;
        }
       
    }
    .content{
        margin-top:40px;
        .position-info{
            .position-label{
                display: inline-block;
                opacity: 1;
                font-size: 26px;
                font-family: PingFangSC, PingFangSC-Medium;
                font-weight: 500;
                text-align: left;
                color: #000000;
                line-height: 44px;
                &.block{
                    display: block;
                }
            }
            .position-text{
                display: inline-block;
                opacity: 1;
                font-size: 26px;
                font-family: PingFangSC, PingFangSC-Medium;
                font-weight: 500;
                text-align: left;
                color: #787878;
                line-height: 44px;
            }
            
        } 
        .bottom-info{
            display: inline-block;
            opacity: 1;
            font-size: 32px;
            font-family: PingFangSC, PingFangSC-Medium;
            font-weight: 500;
            text-align: left;
            color: #B21E27;
            line-height: 60px;
            margin-top:100px;
        }
    }
    
}


</style>