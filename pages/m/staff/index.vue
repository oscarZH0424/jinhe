<template>
  <div class="container">
      <Pagebanner keystr="staff"/>
      <div class="staff-container">
          <div class="staff-title">招聘职位</div>
          <div class="position-group">
              <div class="position-item">
                  <div class="position-title">幕墙设计方向</div>
                  <div class="position-desc">锦和资管管培生 -2021届毕业生</div>
                  <div class="position-btn">了解更多</div>
              </div>
              <div class="position-item">
                  <div class="position-title">机电工程方向机电工程方向机电工程…</div>
                  <div class="position-desc">锦和资管管培生锦和资管管培生锦和资管管培生生</div>
                  <div class="position-btn">了解更多</div>
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
    
    
}
</script>

<style lang="scss" scoped>
.container{
    margin:0 auto;
    width:100%;
    margin-top:64px;
}
.staff-container{
    width:100%;
    background: rgba(0,0,0,.9);
    padding-top:30px;
    padding-left:23px;
    padding-right:23px;
    padding-bottom:50px;
    .staff-title{
        text-align:center;
        opacity: 1;
        font-size: 20px;
        font-family: PingFangSC, PingFangSC-Medium;
        font-weight: 500;
        text-align: left;
        color: #ffffff;
        line-height: 37px;
        margin-bottom:17px;
    }
    .position-group{
        display: flex;
        flex-flow:row wrap;
        justify-content: flex-start;
        align-items: center;
        .position-item{
            position: relative;
            width:158px;
            height:149px;
            background:white;
            margin-bottom:13px;
            margin-right:13px;
            padding:20px 16px 15px 16px;
            box-sizing: border-box;
            cursor: pointer;
            &:nth-child(2n){
                margin-right:0px;
            }
            .position-title{
                opacity: 1;
                font-size: 16px;
                font-family: PingFangSC, PingFangSC-Semibold;
                font-weight: 600;
                text-align: left;
                color: #a80101;
                line-height: 23px;
                margin-bottom:5px;
            }
            .position-desc{
                opacity: 1;
                font-size: 12px;
                font-family: PingFangSC, PingFangSC-Regular;
                font-weight: 400;
                text-align: left;
                color: #000000;
                line-height: 16px;
            }
            .position-btn{
                position:absolute;
                left:16px;
                bottom:15px;
                opacity: 1;
                font-size: 12px;
                font-family: PingFangSC, PingFangSC-Medium;
                font-weight: 500;
                text-align: center;
                color: #a80101;
                line-height: 16px;
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