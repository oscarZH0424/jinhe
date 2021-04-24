<template>
  <div class="container">
      <div class="content">
            <div class="search-input">
                <input type="text" placeholder="输入关键字进行全文搜索" v-model="searchKey">
                <img @click="toSearch" src="~/assets/img/ic_search_1.png" style="width:21px;" alt="">
            </div>
            <div class="main-title">搜索</div>
            <div class="search-tip">对于“{{searchKey}}”的搜索结果</div>
            <div class="tag-group">
                <div class="tag-item">总（{{countObj['all'] || 0}}）</div>
                <div class="tag-item">项目（{{countObj[1] || 0}}）</div>
                <div class="tag-item">品牌（{{countObj[2] || 0}}）</div>
                <div class="tag-item">新闻中心（{{countObj[3] || 0}}）</div>
                <div class="tag-item">企业招聘（{{countObj[4] || 0}}）</div>

            </div>
            <div class="result-group">
                <div v-for="(item,index) in list" :key="index">
                    <div v-if="item.type == 1 || item.type==2" class="result-item"  @click="toProduct(item)">
                        <div class="result-type">{{item.type == 1 ? '项目' : '品牌'}}</div>
                        <div class="pro-item">
                            <div class="title">{{item.title}}</div>
                            <div class="subtitle">
                                <div class="top">{{item.tag}}</div>
                                <div class="line"></div>
                                <div class="bottom">
                                    <div class="bottom-info">
                                        <span>可租面积m2：{{item.area}}</span> <span>园区服务电话：{{item.telPhone}}</span> <span>地址：{{item.address}}</span> 
                                    </div>
                                    <div v-if="item.hot" class="tag">热租中</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-if="item.type == 3 " class="result-item" @click="toNews(item)">
                        <div class="result-type">新闻中心</div>
                        <div class="news-item">
                            <div class="title">{{item.title}}</div>
                            <div class="subtitle">
                                <div class="line"></div>
                                <div class="bottom">{{item.editTime | timeForamt}}</div>
                            </div>
                        </div>
                    </div>
                    <div v-if="item.type == 0 " class="result-item" @click="toCareer(item)">
                        <div class="result-type">企业招聘</div>
                        <div class="staff-item">
                            <div class="title">{{item.name}}</div>
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
    async asyncData ({ params }) {//请求
        let list,total,countList,countObj,countAll;
        let {data:{code,data,totalRecord}} = await axios.post('http://www.dream-fly.com.cn:8282/article/search',{data:params.search.trim(),start:0,limit:1000});
        if(code == 0){
            list = data;
            total = totalRecord;
        }
	    let {data:{code:code2,data:data2}} = await axios.post('http://www.dream-fly.com.cn:8282/article/search/count',{data:params.search.trim()});
        if(code2 == 0){
            countList = data2;
            countAll = 0;
            countObj = {};
            countList.forEach(count=>{
                countObj[count.id] = count.name;
                countAll+=count.name;
            })
            countObj['all'] = countAll;
        }

        return { list ,total,countObj, searchKey:params.search}
	},
    methods:{
        async toSearch(){
            let list,total,countList,countObj,countAll;
            let {data:{code,data,totalRecord}} = await axios.post('http://www.dream-fly.com.cn:8282/article/search',{data:this.searchKey.trim(),start:0,limit:1000});
            if(code == 0){
                list = data;
                total = totalRecord;
            }
            let {data:{code:code2,data:data2}} = await axios.post('http://www.dream-fly.com.cn:8282/article/search/count',{data:this.searchKey.trim()});
            if(code2 == 0){
                countList = data2;
                countAll = 0;
                countObj = {};
                countList.forEach(count=>{
                    countObj[count.id] = count.name;
                    countAll+=count.name;
                })
                countObj['all'] = countAll;
            }
            this.list = list;
            this.countObj = countObj;

        },
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
    min-height:90vh;
    padding:40px 48px;
    box-sizing: border-box;
    overflow:hidden;
}
.search-input{
    width:100%;
    height:58px;
    line-height:58px;
    padding:0px 22px;
    opacity: 1;
    font-size: 24px;
    font-family: PingFangSC, PingFangSC-Regular;
    font-weight: 400;
    text-align: left;
    color: #b21e27;
    border:1px solid #b21e27;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    overflow:hidden;
    input{
        width:100%;
        height:100%;
        outline: none;
        border:0px;
        background: transparent;
        &::-webkit-input-placeholder {
              color: #b21e27;
        }
        &::-moz-input-placeholder {
            color: #b21e27;
        }
        &::-ms-input-placeholder {
            color: #b21e27;
        }
    }
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