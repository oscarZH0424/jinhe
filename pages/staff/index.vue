<template>
  <div class="container">
      <div class="page-banner">
          <img src="~/assets/img/staff_banner.png" alt="" aspect="fill"/>
          <div class="text dark">企业招聘</div>
      </div>
      <div class="staff-container">
          <div class="staff-title">招聘职位</div>
          <div class="position-group">
              <div class="position-item">
                  <div class="position-title">机电工程方向机电工程方向机电工程…</div>
                  <div class="position-desc">锦和资管管培生锦和资管管培生锦和资管管培生生</div>
                  <div class="position-btn">了解更多</div>
              </div>
              <div class="position-item">
                  <div class="position-title">机电工程方向机电工程方向机电工程…</div>
                  <div class="position-desc">锦和资管管培生锦和资管管培生锦和资管管培生生</div>
                  <div class="position-btn">了解更多</div>
              </div>
              <div class="position-item">
                  <div class="position-title">机电工程方向机电工程方向机电工程…</div>
                  <div class="position-desc">锦和资管管培生锦和资管管培生锦和资管管培生生</div>
                  <div class="position-btn">了解更多</div>
              </div>
              <div class="position-item">
                  <div class="position-title">机电工程方向机电工程方向机电工程…</div>
                  <div class="position-desc">锦和资管管培生锦和资管管培生锦和资管管培生生</div>
                  <div class="position-btn">了解更多</div>
              </div>
              <div class="position-item">
                  <div class="position-title">机电工程方向机电工程方向机电工程…</div>
                  <div class="position-desc">锦和资管管培生锦和资管管培生锦和资管管培生生</div>
                  <div class="position-btn">了解更多</div>
              </div>
              <div class="position-item">
                  <div class="position-title">机电工程方向机电工程方向机电工程…</div>
                  <div class="position-desc">锦和资管管培生锦和资管管培生锦和资管管培生生</div>
                  <div class="position-btn">了解更多</div>
              </div>
              <div class="position-item">
                  <div class="position-title">机电工程方向机电工程方向机电工程…</div>
                  <div class="position-desc">锦和资管管培生锦和资管管培生锦和资管管培生生</div>
                  <div class="position-btn">了解更多</div>
              </div>
              <div class="position-item">
                  <div class="position-title">机电工程方向机电工程方向机电工程…</div>
                  <div class="position-desc">锦和资管管培生锦和资管管培生锦和资管管培生生</div>
                  <div class="position-btn">了解更多</div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    
    
}
</script>

<style lang="scss" scoped>
.container{
    margin:0 auto;
    width:1920px;
}
.staff-container{
    width:100%;
    height:1080px;
    background: rgba(0,0,0,.9);
    padding-top:133px;
    padding-left:359px;
    padding-right:359px;
    .staff-title{
        text-align:center;
        opacity: 1;
        font-size: 46px;
        font-family: PingFangSC, PingFangSC-Medium;
        font-weight: 500;
        color: #ffffff;
        line-height: 65px;
        margin-bottom:115px;
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
            }
            .position-desc{
                opacity: 1;
                font-size: 16px;
                font-family: PingFangSC, PingFangSC-Regular;
                font-weight: 400;
                text-align: left;
                color: #000000;
                line-height: 22px;
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