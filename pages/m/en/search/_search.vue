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
                <div v-if="item.type == 1 || item.type==2" class="result-item"  @click="toProduct(item)">
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
                                <div v-if="item.hot || true" class="tag">Hot rent</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="item.type == 3 " class="result-item" @click="toNews(item)">
                     <div class="result-type">Media</div>
                     <div class="news-item">
                        <div class="title">{{item.title}}</div>
                        <div class="subtitle">
                            <div class="line"></div>
                            <div class="bottom">{{item.editTime | timeForamt}}</div>
                        </div>
                    </div>
                </div>
                <div v-if="item.type == 0 " class="result-item" @click="toCareer(item)">
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
        data:{data:params.search,start:0,limit:1000}
	    })
	    .then(function (res) {
            let list;
            if(res.data.code == 0){
               list = res.data.data
            }

		  return { list , searchKey:params.search}
	    })
	},
    methods:{
        toProduct(item){
            this.$router.push({
                path:`/product/${item.id}`
            })
        },
        toNews(item){
            this.$router.push({
                path:`/news/${item.id}`
            })
        },
        toCareer(item){
            this.$router.push({
                path:`/staff/${item.id}`
            })
        },
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
    margin-top:128px;
}
.content{
    position:relative;
    width:100%;
    margin:0 auto;
    padding:40px 48px;
}
.main-title{
    margin-top:26px;
    opacity: 1;
    font-size: 50px;
    font-family: PingFangSC, PingFangSC-Medium;
    font-weight: 500;
    text-align: left;
    color: #000000;
    line-height: 70px;
}
.search-tip{
    opacity: 1;
    font-size: 24px;
    font-family: PingFangSC, PingFangSC-Medium;
    font-weight: 500;
    text-align: left;
    color: #000000;
    line-height: 32px;
    margin-top:6px;
}
.tag-group{
    width:100%;
    height:auto;
    text-align: left;
    padding-bottom:18px;
    border-bottom:1px solid #979797;
    margin-top:8px;
    .tag-item{
        display: inline-block;
        width: 200px;
        height: 60px;
        opacity: 1;
        text-align:center;
        background: #B21E27;
        line-height:60px;
        opacity: 1;
        font-size: 24px;
        font-family: PingFangSC, PingFangSC-Medium;
        font-weight: 500;
        color: #ffffff;
        margin-right:16px;
        margin-top:32px;
        &:nth-child(3n){
            margin-right:0px;
        }
    }

}
.result-group{
    padding-bottom:100px;
    .result-item{
        padding:40px 0px;
        border-bottom:1px solid #979797;
        .result-type{
            opacity: 1;
            font-size: 24px;
            font-family: PingFangSC, PingFangSC-Medium;
            font-weight: 500;
            text-align: left;
            color: #b21e27;
            line-height: 32px;
            margin-bottom:22px;
        }
        .pro-item{
            .title{
                opacity: 1;
                font-size: 40px;
                font-family: PingFangSC, PingFangSC-Semibold;
                font-weight: 600;
                text-align: left;
                color: #000000;
                line-height: 56px;
                margin-bottom:20px;
            }
            .subtitle{
                position:relative;
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
        }
        .news-item{
            .title{
                opacity: 1;
                font-size: 40px;
                font-family: PingFangSC, PingFangSC-Semibold;
                font-weight: 600;
                text-align: left;
                color: #000000;
                line-height: 56px;
                margin-bottom:20px;
            }
            .subtitle{
                position:relative;
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
                    margin:10px auto;
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
        }
        .staff-item{
            .title{
                opacity: 1;
                font-size: 34px;
                font-family: PingFangSC, PingFangSC-Semibold;
                font-weight: 600;
                text-align: left;
                color: #000000;
                line-height: 48px;
            }
        }
    }
    
}

</style>