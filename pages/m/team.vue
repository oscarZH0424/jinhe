<template>
  <div class="container">
      <Pagebanner keystr="team"/>
      <div class="main-leader">
          <div class="leader-mask">
          </div>
          <div class="leader-info">
                <div class="leader-title">郁敏珺<span>董事长</span></div>
                <div class="leader-desc">
                    上海锦和投资集团有限公司董事长 <br> 上海锦和商业经营管理股份有限公司董事长、总经理  <br> 上海市第十三届政协委员会委员 <br>  上海现代服务业联合会第三届副会长 <br>  上海市宁波商会执行副会长 <br>  上海市文化创意产业促进会副会长 <br>  中国民主建国会上海市第十三届创意产业委员会主任  <br> 上海市浙江商会第十届理事会执行副会长
                </div>
            </div>
          <img src="~/assets/img/main-leader.png" alt="">
      </div>
      <div class="leader-group">
           <div class="leader-item">
                <img src="~/assets/img/leader_1.png" alt=""/>
                <div class="leader-info">
                    <div class="leader-title">范英<span>首席财务官</span></div>
                    <div class="leader-desc">中山大学经济学学士。曾就职于和记黄埔地产、财富控股、万邦集团等房地产企业，拥有20多年房地产企业工作经验。她在项目投资、并购、融资、财务管理和税收安排等领域有着丰富的经验。</div>
                </div>
            </div>
            <div class="leader-item">
                <img src="~/assets/img/leader_2.png" alt=""/>
                <div class="leader-info">
                    <div class="leader-title">俞晨君<span>投资总监</span></div>
                    <div class="leader-desc">曾任中国华信集团资产管理公司投资总监、集团投资评审会评审委员及投资顾问，7年深耕于开发公司，从事前期土地购置及市场研策工作，9年专注于境内外不动产项目的资产及股权收并购，经手投资总额近百亿人民币，对资产价值判断、交易架构搭建、风险评估及把控等具有极为丰富的实操经验。</div>
                </div>
            </div>
            <div class="leader-item">
                <img src="~/assets/img/leader_3.png" alt=""/>
                <div class="leader-info">
                    <div class="leader-title">顾梦捷<span>法务总监</span></div>
                    <div class="leader-desc">拥有多年的房地产投融资及资产管理领域相关从业经验，曾任光大安石商业事业部总裁助理兼法务总监，盈石资产法务经理、外贸信托风控合规高级经理、凯思达地产基金法务总监，拥有中国执业律师资格。</div>
                </div>
            </div>
            <div class="leader-item">
                <img src="~/assets/img/leader_4.png" alt=""/>
                <div class="leader-info">
                    <div class="leader-title">陆志刚<span>公寓首席运营官</span></div>
                    <div class="leader-desc">英国班戈大学工商管理硕士。曾在尚明居、摩根士丹利、雅诗阁担任总经理及区域总经理等职务，具有20多年丰富的资产管理运营经验。现任锦和资管公寓首席运营官。</div>
                </div>
            </div>
            <div class="leader-item">
                <img src="~/assets/img/leader_5.png" alt=""/>
                <div class="leader-info">
                    <div class="leader-title">沈净<span>租赁市场总监</span></div>
                    <div class="leader-desc">拥有超过二十年的酒店和公寓市场销售及管理工作经验，曾先后供职于凯宾斯基酒店集团，ONYX 酒店集团Shama 服务式公寓。其敏锐的商业见解和洞察力为他开拓了坚实的市场资源，累积了丰富的销售管理经验。</div>
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
.main-leader{
    position:relative;
    width:100%;
    height:490px;
    >img{
        position:absolute;
        right:0;
        bottom:0;
        height:480px;
    }
    .leader-mask{
        position:absolute;
        left:0;
        top:0;
        height:100%;
        width:100%;
        mix-blend-mode: multiply;
        border-bottom:490px solid rgba(128,0,0,.9);
        border-left:0px solid transparent;
        border-right:200px solid transparent;
        z-index: 10;
        
    }
    .leader-info{
            position:absolute;
            top:95px;
            left:23px;
             z-index: 11;
            .leader-title{
                position: relative;
                opacity: 1;
                font-size: 18px;
                font-family: PingFangSC, PingFangSC-Semibold;
                font-weight: 600;
                text-align: left;
                color: #ffffff;
                line-height: 25px;
                margin-bottom:30px;
                >span{
                    display: inline-block;
                    margin-left:13px;
                    font-size:11px;
                }
                &::after{
                    position:absolute;
                    content:' ';
                    width:50px;
                    height:2px;
                    background:#8f6d39;
                    bottom:-5px;
                    left:0px;

                }
            }
            .leader-desc{
                opacity: 1;
                font-size: 11px;
                font-family: PingFangSC, PingFangSC-Regular;
                font-weight: 400;
                text-align: left;
                color: #ffffff;
                line-height: 23px;
                width:182px;
            }
        }
}
.leader-group{
    padding:0px 23px;
    background: rgba(0,0,0,.9);
    box-sizing: border-box;
    
    .leader-item{
        display: flex;
        flex-flow:row nowrap;
        justify-content: flex-start;
        align-items: flex-start;
        padding:30px 0px;
        border-bottom:1px solid #979797;
        img{
            width:125px;
            height:168px;
            object-fit: cover;
        }
        .leader-info{
            width:177px;
            margin-left:28px;
            .leader-title{
                position: relative;
                opacity: 1;
                font-size: 16px;
                font-family: PingFangSC, PingFangSC-Semibold;
                font-weight: 600;
                text-align: left;
                color: #ffffff;
                line-height: 23px;
                margin-bottom:21px;
                >span{
                    display: inline-block;
                    margin-left:10px;
                    font-size:11px;
                }
                &::after{
                    position:absolute;
                    content:' ';
                    width:31px;
                    height:2px;
                    background:#8f6d39;
                    bottom:-6px;
                    left:0px;

                }
            }
            .leader-desc{
                opacity: 1;
                font-size: 11px;
                font-family: PingFangSC, PingFangSC-Regular;
                font-weight: 400;
                text-align: left;
                color: #ffffff;
                line-height: 18px;
            }
        }
    }
    
    .leader-group-divide{
        width:100%;
        height:1px;
        border: 1px solid #979797;
        margin:90px auto;
        opacity: .7;
    }
}

</style>