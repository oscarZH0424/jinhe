<template>
  <div class="container">
        <Pagebanner keystr="staffd"/>
      <div class="paragraph">
          <div class="title">{{detail.name}}</div>
          <div class="subtitle">
              <div class="line"></div>
          </div>
          <div class="content">
              <div class="position-info">
                  <div class="position-label">所属部门：</div>
                  <div class="position-text">{{detail.depart}}</div>
              </div>
              <div class="position-info">
                  <div class="position-label">工作地点：</div>
                  <div class="position-text">{{detail.city}}</div>
              </div>
              <div class="position-info">
                  <div class="position-label">招聘人数：</div>
                  <div class="position-text">{{detail.headCount}}</div>
              </div>
              <div class="position-info">
                  <div class="position-label">发布日期：</div>
                  <div class="position-text">{{detail.createTime | timeForamt}}</div>
              </div>
              <div class="position-info">
                  <div class="position-label block">招聘要求：</div>
                  <div class="position-text" v-html="brStr(detail.description)"></div>
              </div>
              <div class="bottom-info">人力资源经理/管培生项目招聘负责人：某 手机：137********* 人才专线：021-******** 邮箱：********@163.com</div>
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
        url: 'http://www.dream-fly.com.cn:8282/job/detail',
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
    margin-top:108px;
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
            border: 1px dotted #979797;
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

        .position-info{
            .position-label{
                display: inline-block;
                opacity: 1;
                font-size: 16px;
                font-family: PingFangSC, PingFangSC-Medium;
                font-weight: 500;
                text-align: left;
                color: #000000;
                line-height: 30px;

                font-size: 0.83vw;
                line-height: 1.5625vw;

                &.block{
                    display: block;
                }
            }
            .position-text{
                display: inline-block;
                opacity: 1;
                font-size: 16px;
                font-family: PingFangSC, PingFangSC-Medium;
                font-weight: 500;
                text-align: left;
                color: #787878;
                line-height: 30px;

                font-size: 0.83vw;
                line-height: 1.5625vw;
            }
            
        } 
        .bottom-info{
            display: inline-block;
            opacity: 1;
            font-size: 16px;
            font-family: PingFangSC, PingFangSC-Medium;
            font-weight: 500;
            text-align: left;
            color: #B21E27;
            line-height: 30px;
            margin-top:50px;

            font-size: 0.83vw;
            line-height: 1.5625vw;
            margin-top:2.63158vw;

        }
    }
    
}

@media screen and (max-width:1445px) {
    .paragraph{
        .title{
            font-size:24px !important;
            line-height:34px !important;
        }
        .content{
            margin-top:22.5px !important;
            .position-label,.position-text,.bottom-info{
                font-size:12px !important;
                line-height:22.5px !important;
            }
            .bottom-info{
                margin-top:38px !important;
            }
        }
    }
    
}

</style>