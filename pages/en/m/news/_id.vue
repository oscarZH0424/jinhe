<template>
  <div class="container">
      <Pagebanner keystr="newsd"/>
      <div class="paragraph">
          <div class="title">锦和商业上市后并购项目第一单</div>
          <div class="subtitle">
              <div class="line"></div>
              <div class="bottom">2021-12-29</div>
          </div>
          <div class="content">
              <p>2020年12月28日，上海锦和商业经营管理股份有限公司（以下简称“锦和商业”）与翌成创意资产运营管理（上海）股份有限公司（以下简称“翌成创意”）签署股权收购意向书。</p>
              <p>锦和商业拟收购翌成创意持有位于上海的 18 个园区项目，该交易完成后，锦和商业承租经营管理面积将增加 9 . 5 万平方米，承租运营总管理面积达到约 67 万平方米，进一步夯实公司经营管理的稳定性，并为公司的持续性发展增强动力。同时将依托锦和商业在市场定位、设计改造、招商运营和物业管理一站式全价值链的商用物业运营管理服务优势和成熟经验，将拟收购项目换牌“越界”，在越界品牌文化创意园区的有力背书下，通过专业化运营为物业增值，同时为锦和商业注入新的活力。</p>
              <img src="~/assets/img/news_1.png" alt=""/>
              <p>本次收购事项是锦和商业于今年 4 月成功上市后的第一次并购交易，横向并购有利于锦和商业扩大运营管理规模，提高品牌影响力，根据拟收购项目 2020 年的财务表现， 2021 年预计将为公司增加收入超过一个亿。</p>
              <p>本次收购意向的达成，是锦和商业坚定看好城市更新存量市场和对自身轻资产商业模式的信 I 合，与有意向的同行洽商而成。锦和商业今后将持续推进兼并收购计划，进一步巩固行业头部企业的地位，推动上海城市更新行业拉开整合的序幕，未来前景值得期待。</p>
              
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