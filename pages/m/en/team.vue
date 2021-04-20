<template>
  <div class="container">
      <Pagebanner keystr="team"/>
      <div class="main-leader">
          <div class="leader-mask">
          </div>
          <div class="leader-info">
                  <div class="leader-title">{{ceo.name}}<span>{{ceo.title}}</span></div>
                  <div class="leader-desc" v-html="spanStr(ceo.information)">
                  </div>
              </div>
          <img :src="ceo.coverUrl" alt="">
      </div>
      <div class="leader-group">
           <div class="leader-item" v-for="(mem,index) in teams" :key="`mem-${index}`">
                <img :src="mem.coverUrl" alt=""/>
                <div class="leader-info">
                    <div class="leader-title">{{mem.name}}<span>{{mem.title}}</span></div>
                    <div class="leader-desc" v-html="brStr(mem.information)"></div>
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
                        teams.push(member);
                    }
                });
            }
		  return { ceo,teams }
	    })
	},
    methods:{
        brStr(val){
            return val.split('\n').join('<br>')
        },
        spanStr(val){
            let str = "";
            val.split('\n').forEach(text=>{
                str+=`<span>${text}</span>`
            })
            return str;
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
.main-leader{
    position:relative;
    width:100%;
    height:980px;
    >img{
        position:absolute;
        right:0;
        bottom:0;
        height:980px;
    }
    .leader-mask{
        position:absolute;
        left:0;
        top:0;
        height:100%;
        width:100%;
        mix-blend-mode: multiply;
        border-bottom:980px solid rgba(128,0,0,.9);
        border-left:0px solid transparent;
        border-right:400px solid transparent;
        z-index: 10;
        
    }
    .leader-info{
        position:absolute;
        top:100px;
        left:45px;
        z-index: 11;
        .leader-title{
            position: relative;
            opacity: 1;
            font-size: 36px;
            font-family: PingFangSC, PingFangSC-Semibold;
            font-weight: 600;
            text-align: left;
            color: #ffffff;
            line-height: 50px;
            margin-bottom:61px;
            >span{
                display: inline-block;
                margin-left:25px;
                font-size:22px;
            }
            &::after{
                position:absolute;
                content:' ';
                width:100px;
                height:4px;
                background:#8f6d39;
                bottom:-10px;
                left:0px;

            }
        }
        .leader-desc{
            opacity: 1;
            font-size: 22px;
            font-family: PingFangSC, PingFangSC-Regular;
            font-weight: 400;
            text-align: left;
            color: #ffffff;
            line-height: 34px;
            width:400px;
            span{
                display: block;
                position:relative;
                &::before{
                    position:absolute;
                    font-size: 30px;
                    font-weight: bold;
                    content:'·';
                    left:-20px;
                    color:white;
                }
            }
        }
    }
}
.leader-group{
    padding:0px 23px;
    background: rgba(0,0,0,.9);
    box-sizing: border-box;
    .leader-item{
        display: flex;
        flex-flow:row nowrap;
        justify-content: flex-start;
        align-items: flex-start;
        padding:60px 0px;
        border-bottom:1PX solid #979797;
        &:last-child{
            border-bottom:0px;
        }
        img{
            width:250px;
            height:336px;
            object-fit: cover;
        }
        .leader-info{
            width:354px;
            margin-left:56px;
            .leader-title{
                position: relative;
                opacity: 1;
                font-size: 32px;
                font-family: PingFangSC, PingFangSC-Semibold;
                font-weight: 600;
                text-align: left;
                color: #ffffff;
                line-height: 45px;
                margin-bottom:43px;
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
                    bottom:-12px;
                    left:0px;

                }
            }
            .leader-desc{
                opacity: 1;
                font-size: 22px;
                font-family: PingFangSC, PingFangSC-Regular;
                font-weight: 400;
                text-align: left;
                color: #ffffff;
                line-height: 36px;
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