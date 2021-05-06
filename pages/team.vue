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
                        <div class="leader-group-divide"  v-if="index<teams.length-1"></div>
                    </div>
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
		url: 'http://www.dream-fly.com.cn:8282/team/screen',
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
    background-image: url('~/assets/img/team-bg.png');
    background-size: 100% 100%;
}
.leader-group{
    padding:134px 0px;
    box-sizing: border-box;
    // padding:6.979167vw 11.4583vw;
    // width:77%;
    overflow: hidden;
    margin:0 auto;
    .leader-group-content{
        display: flex;
        flex-flow:row wrap;
        justify-content: space-between;
        align-items: center;
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
                    margin-bottom:49px;
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
}
@media screen and  (max-width:1320px) {
    .leader-group-content{
        justify-content: center !important;
    }
}

@media screen and  (min-width:1920px) {
    .leader-group-content{
        .leader-item{
            .leader-info{
                margin-left:55px !important;
                margin-top:36px !important;
                .leader-title{
                    >span{
                        margin-left:20px !important;
                    }
                    &::after{
                        height:4px !important;
                    }
                }
            }
        }
    }
}

</style>