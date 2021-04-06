<template>
  <div class="container">
      <Pagebanner keystr="staff"/>
      <div class="staff-container">
          <div class="staff-title">招聘职位</div>
          <div class="position-group">
              <div class="position-item" @click="toDetail">
                  <div class="position-title">幕墙设计方向</div>
                  <div class="position-desc">锦和资管管培生 -2021届毕业生</div>
                  <div class="position-btn">了解更多</div>
              </div>
              <div class="position-item">
                  <div class="position-title">机电工程方向机电工程方向机电工程…</div>
                  <div class="position-desc">锦和资管管培生锦和资管管培生锦和资管管培生生</div>
                  <div class="position-btn" >了解更多</div>
              </div>
              <div class="position-item">
                  <div class="position-title">装饰装修方向</div>
                  <div class="position-desc">锦和资管管培生 -2021届毕业生</div>
                  <div class="position-btn">了解更多</div>
              </div>
              <div class="position-item">
                  <div class="position-title">机电事业部</div>
                  <div class="position-desc">水电工程师</div>
                  <div class="position-btn">了解更多</div>
              </div>
              <div class="position-item">
                  <div class="position-title">运营中心</div>
                  <div class="position-desc">营销助理</div>
                  <div class="position-btn">了解更多</div>
              </div>
              <div class="position-item">
                  <div class="position-title">云采购事业部</div>
                  <div class="position-desc">总经理</div>
                  <div class="position-btn">了解更多</div>
              </div>
              <div class="position-item">
                  <div class="position-title">幕墙事业部</div>
                  <div class="position-desc">幕墙预算员</div>
                  <div class="position-btn">了解更多</div>
              </div>
              <div class="position-item">
                  <div class="position-title">幕墙事业部</div>
                  <div class="position-desc">幕墙项目经理</div>
                  <div class="position-btn">了解更多</div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    
    methods:{
        toDetail(){
            window.open('/staff/1');
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
.staff-container{
    width:100%;
    background: rgba(0,0,0,.9);
    padding-top:133px;
    padding-left:359px;
    padding-right:359px;
    padding-bottom:133px;

    padding-top:6.927083vw;
    padding-left:17.5979167vw;
    padding-right:17.5979167vw;
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
            &:nth-child(4n){
                margin-right:0px;
            }
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
                bottom:2.239583vw;
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

</style>