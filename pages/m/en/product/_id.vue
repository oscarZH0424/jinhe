<template>
  <div class="container">
      <Pagebanner keystr="prod"/>
      <div class="paragraph">
          <div class="title">锦和越界陕康里</div>
          <div class="subtitle">
              <div class="top">餐饮酒吧、精品咖啡、创意工坊、潮流设计</div>
              <div class="line"></div>
              <div class="bottom">
                  <div class="bottom-info">
                      <span>可租面积m2：约10000㎡</span> <span>园区服务电话：021-6288 6309</span> <span>地址：上海市静安区康定路358号</span> 
                  </div>
                  <div class="tag">热租中</div>
              </div>
                
          </div>
          <div class="content">
              <p>随着城市推进，市中心扩容，许多原本废弃的老厂房又重获新生，加上商业的去中心化，消费观念的升级，激发新一代的消费群体。人们不再只追求高大上的物质需求，而转为更有个性的生活方式，锦和越界陕康里正是在这样的时代背景下破茧而出。随着城市推进，市中心扩容， 许多原本废弃的老厂房又重获新生，加上商业的去中心化，消费观念的升级，激发新一代的消费群体。人们不再只追求高大上的物质需求，而转为更有个性的生活方式，锦和越界陕康里正是在这样的时代背景下破茧而出。</p>
              <img src="~/assets/img/pro/pro_img_1.png" alt=""/>
              <p>随着城市推进，市中心扩容，许多原本废弃的老厂房又重获新生，加上商业的去中心化，消费观念的升级，激发新一代的消费群体。人们不再只追求高大上的物质需求，而转为更有个性的生活方式，锦和越界陕康里正是在这样的时代背景下破茧而出。 随着城市推进，市中心扩容，许多原本废弃的老厂房又重获新生，加上商业的去中心化，消费观念的升级，激发新一代的消费群体。人们不再只追求高大上的物质需求，而转为更有个性的生活方式，锦和越界陕康里正是在这样的时代背景下破茧而出。随着城市推进，市中心扩容， 许多原本废弃的老厂房又重获新生，加上商业的去中心化，消费观念的升级，激发新一代的消费群体。人们不再只追求高大上的物质需求，而转为更有个性的生活方式，锦和越界陕康里正是在这样的时代背景下破茧而出。</p>
              <p>随着城市推进，市中心扩容，许多原本废弃的老厂房又重获新生，加上商业的去中心化，消费观念的升级，激发新一代的消费群体。人们不再只追求高大上的物质需求，而转为更有个性的生活方式，锦和越界陕康里正是在这样的时代背景下破茧而出。 随着城市推进，市中心扩容，许多原本废弃的老厂房又重获新生，加上商业的去中心化，消费观念的升级，激发新一代的消费群体。人们不再只追求高大上的物质需求，而转为更有个性的生活方式，锦和越界陕康里正是在这样的时代背景下破茧而出。随着城市推进，市中心扩容， 许多原本废弃的老厂房又重获新生，加上商业的去中心化，消费观念的升级，激发新一代的消费群体。人们不再只追求高大上的物质需求，而转为更有个性的生活方式，锦和越界陕康里正是在这样的时代背景下破茧而出。</p>
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
        margin-bottom:20px;
        padding:0px 48px;
    }
    .subtitle{
        position:relative;
        padding:0px 48px;
        .top{
            opacity: 1;
            font-size: 24px;
            font-family: PingFangSC, PingFangSC-Regular;
            font-weight: 400;
            text-align: left;
            color: #000000;
            line-height: 32px;
        }
        .line{
            width:100%;
            height: 0px;
            opacity: 0.26;
            border: 1px solid #979797;
            margin:20px auto;
        }
        .bottom{
            opacity: 1;
            font-size: 28px;
            font-family: PingFangSC, PingFangSC-Medium;
            font-weight: 500;
            text-align: left;
            color: #787878;
            line-height: 40px;
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
            align-items: flex-end;
            .bottom-info{
                width:430px;
                >span{
                    display: block;
                }
            }
            .tag{
                height:60px;
                width:164px;
                border-bottom:60px solid #b21e27;
                border-right:0px solid transparent;
                border-left:40px solid transparent;
                opacity: 1;
                font-size: 24px;
                font-family: PingFangSC, PingFangSC-Medium;
                font-weight: 500;
                text-align: right;
                color: #ffffff;
                line-height: 60px;
                padding-right:20px;
            }
        }
       
    }
    .content{
        margin-top:30px;
        p{
            opacity: 1;
            font-size: 26px;
            font-family: PingFangSC, PingFangSC-Regular;
            font-weight: 400;
            text-align: left;
            color: #787878;
            line-height: 46px;
            margin-bottom:30px;
            padding:0px 48px;
        }
        img{
            max-width:100%;
            margin:0 auto;
            display: block;
            margin-bottom:60px;
        }
    }
    
}


</style>