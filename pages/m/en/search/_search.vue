<template>
  <div class="container">
      <div class="content">
            <div class="main-title">Search</div>
            <div class="search-tip">Result For Searching “{{searchKey}}”</div>
            <div class="tag-group">
                <div class="tag-item">Total（0）</div>
                <div class="tag-item">Projects（0）</div>
                <div class="tag-item">Brands（0）</div>
                <div class="tag-item">Media（0）</div>
                <div class="tag-item">Careers（0）</div>

            </div>
            <div class="result-group">
                <div v-for="(item,index) in list" :key="index">
                <div v-if="item.type == 1 || item.type==2" class="result-item">
                    <div class="result-type">{{item.type == 1 ? 'Projects' : 'Brands'}}</div>
                    <div class="pro-item">
                        <div class="title">{{item.title}}</div>
                        <div class="subtitle">
                            <div class="top">{{item.tag}}</div>
                            <div class="line"></div>
                            <div class="bottom">
                                <div class="bottom-info">
                                    <span>Gross Leasable Area(sqm)：{{item.area}}</span> <span> Tel：{{item.telPhone}}</span> <span>ADD：{{item.address}}</span> 
                                </div>
                                <div v-if="item.hot" class="tag">Hot rent</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="item.type == 3 " class="result-item">
                     <div class="result-type">Media</div>
                     <div class="news-item">
                        <div class="title">{{item.title}}</div>
                        <div class="subtitle">
                            <div class="line"></div>
                            <div class="bottom">{{item.editTime | timeForamt}}</div>
                        </div>
                    </div>
                </div>
                <div v-if="item.type == 0 " class="result-item">
                     <div class="result-type">Careers</div>
                     <div class="staff-item">
                        <div class="title">{{item.title}}</div>
                    </div>
                </div>
                </div>
            </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    asyncData ({ params }) {//请求
        console.log(params);
	    return  axios({
		method: 'post',
		url: 'http://www.dream-fly.com.cn:8383/article/search',
        data:{data:params.search,start:0,limit:10}
	    })
	    .then(function (res) {
            let list;
            if(res.data.code == 0){
               list = res.data.data
            }

		  return { list , searchKey:params.search}
	    })
	},
    filters:{
        timeForamt(val){
            return val.substring(0,10).split('-').join('.');
        }
    }
}
</script>

<style lang="scss" scoped>
.container{
    margin:0 auto;
    width:100%;
    margin-top:64px;
}
.content{
    position:relative;
    width:100%;
    margin:0 auto;
    padding:20px 24px;
}
.main-title{
    margin-top:13px;
    opacity: 1;
    font-size: 25px;
    font-family: PingFangSC, PingFangSC-Medium;
    font-weight: 500;
    text-align: left;
    color: #000000;
    line-height: 35px;
}
.search-tip{
    opacity: 1;
    font-size: 12px;
    font-family: PingFangSC, PingFangSC-Medium;
    font-weight: 500;
    text-align: left;
    color: #000000;
    line-height: 16px;
    margin-top:3px;
}
.tag-group{
    width:100%;
    height:auto;
    text-align: left;
    padding-bottom:9px;
    border-bottom:1px solid #979797;
    margin-top:4px;
    .tag-item{
        display: inline-block;
        width: 100px;
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
        margin-right:8px;
        margin-top:16px;
        &:nth-child(3n){
            margin-right:0px;
        }
    }

}
.result-group{
    padding-bottom:50px;
    .result-item{
        padding:20px 0px;
        border-bottom:1px solid #979797;
        .result-type{
            opacity: 1;
            font-size: 12px;
            font-family: PingFangSC, PingFangSC-Medium;
            font-weight: 500;
            text-align: left;
            color: #b21e27;
            line-height: 16px;
            margin-bottom:11px;
        }
        .pro-item{
            .title{
                opacity: 1;
                font-size: 20px;
                font-family: PingFangSC, PingFangSC-Semibold;
                font-weight: 600;
                text-align: left;
                color: #000000;
                line-height: 28px;
                margin-bottom:10px;
            }
            .subtitle{
                position:relative;
                .top{
                    opacity: 1;
                    font-size: 12px;
                    font-family: PingFangSC, PingFangSC-Regular;
                    font-weight: 400;
                    text-align: left;
                    color: #000000;
                    line-height: 16px;
                }
                .line{
                    width:100%;
                    height: 0px;
                    opacity: 0.26;
                    border: 1px solid #979797;
                    margin:10px auto;
                }
                .bottom{
                    opacity: 1;
                    font-size: 14px;
                    font-family: PingFangSC, PingFangSC-Medium;
                    font-weight: 500;
                    text-align: left;
                    color: #787878;
                    line-height: 20px;
                    display: flex;
                    flex-flow: row nowrap;
                    justify-content: space-between;
                    align-items: flex-end;
                    .bottom-info{
                        width:215px;
                        >span{
                            display: block;
                        }
                    }
                    .tag{
                        height:30px;
                        width:82px;
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
        }
        .news-item{
            .title{
                opacity: 1;
                font-size: 20px;
                font-family: PingFangSC, PingFangSC-Semibold;
                font-weight: 600;
                text-align: left;
                color: #000000;
                line-height: 28px;
                margin-bottom:10px;
            }
            .subtitle{
                position:relative;
                .top{
                    opacity: 1;
                    font-size: 12px;
                    font-family: PingFangSC, PingFangSC-Regular;
                    font-weight: 400;
                    text-align: left;
                    color: #000000;
                    line-height: 16px;
                }
                .line{
                    width:100%;
                    height: 0px;
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
                    display: flex;
                    flex-flow: row nowrap;
                    justify-content: space-between;
                    align-items: flex-end;
                    .bottom-info{
                        width:215px;
                        >span{
                            display: block;
                        }
                    }
                    .tag{
                        height:30px;
                        width:82px;
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
        }
        .staff-item{
            .title{
                opacity: 1;
                font-size: 17px;
                font-family: PingFangSC, PingFangSC-Semibold;
                font-weight: 600;
                text-align: left;
                color: #000000;
                line-height: 24px;
            }
        }
    }
    
}

</style>