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
                  <div class="position-label">工作地点：</div>
                  <div class="position-text">上海</div>
              </div>
              <div class="position-info">
                  <div class="position-label">招聘人数：</div>
                  <div class="position-text">10人</div>
              </div>
              <div class="position-info">
                  <div class="position-label">发布日期：</div>
                  <div class="position-text">2020-08-27</div>
              </div>
              <div class="position-info">
                  <div class="position-label block">招聘要求：</div>
                  <div class="position-text">1、2021年本科及以上学历应届毕业生，身体健康，沟通表达能力强，有强烈的成功欲望； <br> 2、学生会干部、演说能力强、中共党员、奖学金获得者优先录取； <br>3、土木工程、机械设计与制造、室内设计、环境艺术设计、建筑设计、土木工程等相关专业；<br> 4、面试者需有个人简历、成绩单、四六级英语证书、各类获奖证书、三方协议原件及复印件；<br> 5、若发现被聘用人员提供的应聘资料有虚假信息，集团公司有权解除其就业协议书及劳动合同。<br> 6、对于工作期间考研/考公成功的同学，公司配合无条件解约，不收取任何违约金！</div>
              </div>
              <div class="bottom-info">人力资源经理/管培生项目招聘负责人：某 <br> 手机：137********* <br>人才专线：021-******** <br>邮箱：********@163.com</div>
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