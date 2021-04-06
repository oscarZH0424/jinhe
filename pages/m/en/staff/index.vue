<template>
  <div class="container">
      <Pagebanner keystr="staff"/>
      <div class="staff-container">
          <div class="staff-title">Job offerings</div> 
          <div class="position-group">
              <div class="position-item" @click="toDetail">
                  <div class="position-title">Curtain wall design direction</div>
                  <div class="position-desc">Jinhe Asset Management Trainee - 2021 graduates</div>
                  <div class="position-btn">more</div>
              </div>
              <div class="position-item">
                  <div class="position-title">Mechanical and electrical engineering...</div>
                  <div class="position-desc">Jinhe Asset Management Trainee - 2021 graduates...</div>
                  <div class="position-btn" >more</div>
              </div>
              <div class="position-item">
                  <div class="position-title">Direction of decoration</div>
                  <div class="position-desc">Jinhe Asset Management Trainee - 2021 graduates...</div>
                  <div class="position-btn">more</div>
              </div>
              <div class="position-item">
                  <div class="position-title">Mechanical and Electrical Division</div>
                  <div class="position-desc">Hydropower Engineer</div>
                  <div class="position-btn">more</div>
              </div>
              <div class="position-item">
                  <div class="position-title">Direction of decoration</div>
                  <div class="position-desc">Hydropower Engineer</div>
                  <div class="position-btn">more</div>
              </div>
              <div class="position-item">
                  <div class="position-title">Direction of decoration</div>
                  <div class="position-desc">Jinhe Asset Management Trainee - 2021 graduates...</div>
                  <div class="position-btn">more</div>
              </div>
              <div class="position-item">
                  <div class="position-title">Mechanical and Electrical Division</div>
                  <div class="position-desc">Hydropower Engineer</div>
                  <div class="position-btn">more</div>
              </div>
              <div class="position-item">
                  <div class="position-title">Direction of decoration</div>
                  <div class="position-desc">Hydropower Engineer</div>
                  <div class="position-btn">more</div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    methods:{
        toDetail(){
            window.open('/en/staff/1');
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
.staff-container{
    width:100%;
    background: rgba(0,0,0,.9);
    padding-top:63px;
    padding-left:45px;
    padding-right:45px;
    padding-bottom:100px;
    .staff-title{
        text-align:center;
        opacity: 1;
        font-size: 40px;
        font-family: PingFangSC, PingFangSC-Medium;
        font-weight: 500;
        text-align: left;
        color: #ffffff;
        line-height: 75px;
        margin-bottom:34px;
    }
    .position-group{
        display: flex;
        flex-flow:row wrap;
        justify-content: flex-start;
        align-items: center;
        .position-item{
            position: relative;
            width:316px;
            height:297px;
            background:white;
            margin-bottom:26px;
            margin-right:26px;
            padding:40px 32px 30px 32px;
            box-sizing: border-box;
            cursor: pointer;
            &:nth-child(2n){
                margin-right:0px;
            }
            .position-title{
                height:90px;
                overflow : hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                opacity: 1;
                font-size: 32px;
                font-family: PingFangSC, PingFangSC-Semibold;
                font-weight: 600;
                text-align: left;
                color: #a80101;
                line-height: 45px;
                margin-bottom:10px;
            }
            .position-desc{
                opacity: 1;
                font-size: 24px;
                font-family: PingFangSC, PingFangSC-Regular;
                font-weight: 400;
                text-align: left;
                color: #000000;
                line-height: 33px;
            }
            .position-btn{
                position:absolute;
                left:32px;
                bottom:30px;
                opacity: 1;
                font-size: 24px;
                font-family: PingFangSC, PingFangSC-Medium;
                font-weight: 500;
                text-align: center;
                color: #a80101;
                line-height: 33px;
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