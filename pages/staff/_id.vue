<template>
  <div class="container">
        <Pagebanner keystr="staffd"/>
      <div class="paragraph">
          <div class="title">集团管培生 （幕墙设计方向）-2021届毕业生</div>
          <div class="subtitle">
              <div class="line"></div>
          </div>
          <div class="content">
              <div class="position-info">
                  <div class="position-label">所属部门：</div>
                  <div class="position-text">市场部</div>
              </div>
              <div class="position-info">
                  <div class="position-label">所属部门：</div>
                  <div class="position-text">市场部</div>
              </div>
              <div class="position-info">
                  <div class="position-label">所属部门：</div>
                  <div class="position-text">市场部</div>
              </div>
              <div class="position-info">
                  <div class="position-label">所属部门：</div>
                  <div class="position-text">市场部</div>
              </div>
              <div class="position-info">
                  <div class="position-label block">所属部门：</div>
                  <div class="position-text">1、2021年本科及以上学历应届毕业生，身体健康，沟通表达能力强，有强烈的成功欲望； <br> 2、学生会干部、演说能力强、中共党员、奖学金获得者优先录取； <br>3、土木工程、机械设计与制造、室内设计、环境艺术设计、建筑设计、土木工程等相关专业；<br> 4、面试者需有个人简历、成绩单、四六级英语证书、各类获奖证书、三方协议原件及复印件；<br> 5、若发现被聘用人员提供的应聘资料有虚假信息，集团公司有权解除其就业协议书及劳动合同。<br> 6、对于工作期间考研/考公成功的同学，公司配合无条件解约，不收取任何违约金！</div>
              </div>
              <div class="bottom-info">人力资源经理/管培生项目招聘负责人：某 手机：137********* 人才专线：021-******** 邮箱：********@163.com</div>
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
.paragraph{
    position:relative;
    width:1200px;
    margin:0 auto;
    padding-top:87px;
    padding-bottom:145px;
    .title{
        opacity: 1;
        font-size: 32px;
        font-family: PingFangSC, PingFangSC-Semibold;
        font-weight: 600;
        text-align: left;
        color: #000000;
        line-height: 45px;
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
        }
       
    }
    .content{
        margin-top:30px;
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
        }
    }
    
}


</style>