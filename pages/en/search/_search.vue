<template>
  <div class="container">
      <div class="content">
            <div class="main-title">搜索</div>
            <div class="search-tip">对于“xxx”的搜索结果</div>
            <div class="tag-group">
                <div class="tag-item">总（0）</div>
                <div class="tag-item">项目（0）</div>
                <div class="tag-item">品牌（0）</div>
                <div class="tag-item">新闻中心（0）</div>
                <div class="tag-item">企业招聘（0）</div>

            </div>
            <div class="result-group">
                <div class="result-item">
                    <div class="result-type">项目</div>
                    <div class="pro-item">
                        <div class="title">锦和越界陕康里</div>
                        <div class="subtitle">
                            <div class="top">餐饮酒吧、精品咖啡、创意工坊、潮流设计</div>
                            <div class="line"></div>
                            <div class="bottom">
                                <span>可租面积m2：约10000㎡</span> <span>园区服务电话：021-6288 6309</span> <span>地址：上海市静安区康定路358号</span> 
                            </div>
                            <div class="tag">热租中</div>
                        </div>
                    </div>
                </div>
                <div class="result-item">
                     <div class="result-type">新闻中心</div>
                     <div class="news-item">
                        <div class="title">锦和越界陕康里</div>
                        <div class="subtitle">
                            <div class="line"></div>
                            <div class="bottom">2021-12-12</div>
                        </div>
                    </div>
                </div>
                <div class="result-item">
                     <div class="result-type">企业招聘</div>
                     <div class="staff-item">
                        <div class="title">集团管培生 （幕墙设计方向）-2021届毕业生</div>
                    </div>
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
    margin-top:108px;
}
.content{
    position:relative;
    width:1200px;
    margin:0 auto;
}
.main-title{
    margin-top:35px;
    opacity: 1;
    font-size: 48px;
    font-family: PingFangSC, PingFangSC-Medium;
    font-weight: 500;
    text-align: left;
    color: #000000;
    line-height: 67px;
}
.search-tip{
    opacity: 1;
    font-size: 20px;
    font-family: PingFangSC, PingFangSC-Medium;
    font-weight: 500;
    text-align: left;
    color: #000000;
    line-height: 28px;
    margin-top:8px;
}
.tag-group{
    width:100%;
    height:auto;
    text-align: left;
    padding-bottom:12px;
    border-bottom:1px solid #979797;
    margin-top:27px;
    .tag-item{
        display: inline-block;
        width: 118px;
        height: 30px;
        opacity: 1;
        text-align:center;
        background: #B21E27;
        line-height:30px;
        opacity: 1;
        font-size: 12px;
        font-family: PingFangSC, PingFangSC-Medium;
        font-weight: 500;
        color: #ffffff;
        margin-right:16px;
    }

}
.result-group{
    padding-bottom:50px;
    .result-item{
        padding:25px 0px;
        border-bottom:1px solid #979797;
        .result-type{
            opacity: 1;
            font-size: 16px;
            font-family: PingFangSC, PingFangSC-Medium;
            font-weight: 500;
            text-align: left;
            color: #b21e27;
            line-height: 22px;
            margin-bottom:14px;
        }
        .pro-item{
            .title{
                opacity: 1;
                font-size: 32px;
                font-family: PingFangSC, PingFangSC-Semibold;
                font-weight: 600;
                text-align: left;
                color: #000000;
                line-height: 45px;
                margin-bottom:20px;
            }
            .subtitle{
                position:relative;
                .top{
                    opacity: 1;
                    font-size: 14px;
                    font-family: PingFangSC, PingFangSC-Regular;
                    font-weight: 400;
                    text-align: left;
                    color: #000000;
                    line-height: 20px;
                }
                .line{
                    width:100%;
                    height: 1px;
                    opacity: 0.26;
                    border: 1px solid #979797;
                    margin:5px auto;
                }
                .bottom{
                    opacity: 1;
                    font-size: 14px;
                    font-family: PingFangSC, PingFangSC-Medium;
                    font-weight: 500;
                    text-align: left;
                    color: #787878;
                    line-height: 20px;
                    >span{
                        display: inline-block;
                        margin-right:40px;
                    }
                }
            .tag{
                    position:absolute;
                    right:0;
                    top:-10px;
                    height:30px;
                    width:79px;
                    border-bottom:30px solid #b21e27;
                    border-right:0px solid transparent;
                    border-left:20px solid transparent;
                    opacity: 1;
                    font-size: 12px;
                    font-family: PingFangSC, PingFangSC-Medium;
                    font-weight: 500;
                    text-align: right;
                    color: #ffffff;
                    line-height: 30px;
                    padding-right:10px;
                }
            }
        }
        .news-item{
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
        }
        .staff-item{
            .title{
                opacity: 1;
                font-size: 32px;
                font-family: PingFangSC, PingFangSC-Semibold;
                font-weight: 600;
                text-align: left;
                color: #000000;
                line-height: 45px;
            }
        }
    }
    
}

</style>