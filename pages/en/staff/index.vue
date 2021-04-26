<template>
  <div class="container">
      <Pagebanner keystr="staff"/>
      <div class="staff-container">
          <div class="staff-title">Careers</div>
          <div class="position-group">
                <div class="position-group">
                    <div class="position-item" v-for="(job,index) in jobs" :key="index" @click="toDetail(job)">
                        <div class="position-title">{{job.title}}</div>
                        <div class="position-desc">{{job.titleDesc}}</div>
                        <div class="position-btn">more</div>
                    </div>
                </div>
                <div style="text-align:center;width:100%;">
                    <a-pagination class="dark" :show-quick-jumper="true"  :pageSize="pageSize" :total="total" @change="onChange" />
                </div>
          </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
const PAGESIZE = 8;
export default { 
    asyncData ({ params }) {//请求
	    return  axios({
		method: 'post',
		url: 'http://www.dream-fly.com.cn:8383/job/list',
        data:{limit:PAGESIZE,start:0}
	    })
	    .then(function (res) {
            let jobs = [];
            let total = 0;
            if(res.data.code == 0){
                jobs = res.data.data;
                total = res.data.totalRecord;
            }
		  return { jobs,total }
	    })
	},
    data(){
        return {
            pageSize:PAGESIZE,
            pageNum:0
        }
    },
    mounted(){
        console.log(this.jobs);
    },
    methods:{
        toDetail(job){
            this.$router.push({
                path:`/en/staff/${job.id}`
            })
        },
        onChange(page){
            console.log(page);
            this.pageNum = page -1;
            this.getData()
        },
        getData(){
            let _this = this;
            axios({
            method: 'post',
            url: 'http://www.dream-fly.com.cn:8282/job/list',
            data:{limit:this.pageSize,start:this.pageSize*this.pageNum}
            })
            .then( (res)=> {
                if(res.data.code == 0){
                    _this.total = res.data.totalRecord;
                    _this.jobs = res.data.data;
                }
            })
        },
    }
}
</script>

<style lang="scss" scoped>
.container{
    margin:0 auto;
    width:100%;
    margin-top:75px;
}
.staff-container{
    width:100%;
    background: rgba(0,0,0,.9);
    padding-top:133px;
    padding-left:359px;
    padding-right:359px;
    padding-bottom:133px;

    padding-top:6.927083vw;
    padding-left:16.5979167vw;
    padding-right:16.5979167vw;
    padding-bottom:6.927083vw;
    .staff-title{
        text-align:center;
        opacity: 1;
        font-size: 46px;
        font-family: PingFangSC, PingFangSC-Medium;
        font-weight: 500;
        color: #ffffff;
        line-height: 65px;
        margin-bottom:115px;

        font-size: 2.39583vw;
        line-height: 3.3854167vw;
        margin-bottom:5.989583vw;



    }
    .position-group{
        display: flex;
        flex-flow:row wrap;
        justify-content: flex-start;
        align-items: center;
        .position-item{
            position: relative;
            width:260px;
            height:244px;
            background:white;
            margin-bottom:62px;
            margin-right:52px;
            padding:44px 37px 0px 39px;
            box-sizing: border-box;
            cursor: pointer;

            width:13.54167vw;
            height:12.7083vw;
            padding:2.29167vw 1.927083vw 0px 2.03125vw;
            margin-bottom:3.229167vw;
            margin-right:2.7083vw;
            // &:nth-child(4n){
            //     margin-right:0px;
            // }
            .position-title{
                opacity: 1;
                font-size: 20px;
                font-family: PingFangSC, PingFangSC-Semibold;
                font-weight: 600;
                text-align: left;
                color: #a80101;
                line-height: 28px;
                margin-bottom:10px;
                font-size: 1.04167vw;
                line-height: 1.4583vw;
                margin-bottom:0.52083vw;
            }
            .position-desc{
                opacity: 1;
                font-size: 16px;
                font-family: PingFangSC, PingFangSC-Regular;
                font-weight: 400;
                text-align: left;
                color: #000000;
                line-height: 22px;
                font-size: 0.83vw;
                line-height: 1.14583vw;

            }
            .position-btn{
                position:absolute;
                left:39px;
                bottom:43px;
                opacity: 1;
                font-size: 14px;
                font-family: PingFangSC, PingFangSC-Medium;
                font-weight: 500;
                text-align: center;
                color: #a80101;
                line-height: 20px;

                left:2.03125vw;
                bottom:1.239583vw;
                font-size: 0.721967vw;
                line-height: 1.04167vw;


            }
            &:hover{
                background: #B21E27;
                .position-title,.position-desc,.position-btn{
                    color:white;
                }
            }
        }
    }
}
@media screen and (max-width:660px) {
    .position-group{
        justify-content: center !important;
    }
}

@media screen and (max-width:1440px) {
    .staff-container{
        padding-top:99px !important;
    }
    .staff-title{
        font-size:34.5px !important;
        margin-bottom:86.5px !important;
    }
    .position-item{
        width:195px !important;
        height:183px !important;
        padding:33px 28px 0px 29px !important;
    }
    .position-title{
        font-size:15px !important;
        line-height:21px !important;
    }
    .position-desc{
        font-size:12px !important;
        line-height:16px !important;
    }
    .position-btn{
        bottom:27.7px !important;
        left:25px !important;
    }
}
</style>