<template>
  <div class="container">
      <div class="content">
            <div class="main-title">搜索</div>
            <div class="search-tip">对于“{{searchKey}}”的搜索结果</div>
            <div class="tag-group">
                <div class="tag-item" @click="chooseTag(-1)" :class="{'active':curTag==-1}">总（{{countObj['all'] || 0}}）</div>
                <div class="tag-item" @click="chooseTag(1)" :class="{'active':curTag==1}">项目（{{countObj[1] || 0}}）</div>
                <div class="tag-item" @click="chooseTag(2)" :class="{'active':curTag==2}">品牌（{{countObj[2] || 0}}）</div>
                <div class="tag-item" @click="chooseTag(3)" :class="{'active':curTag==3}">新闻中心（{{countObj[3] || 0}}）</div>
                <div class="tag-item" @click="chooseTag(0)" :class="{'active':curTag==0}">企业招聘（{{countObj[4] || 0}}）</div>

            </div>
            <div class="result-group">
                <div v-for="(item,index) in list" :key="index">
                    <div v-if="item.type == 1 || item.type==2" class="result-item" @click="toProduct(item)">
                        <div class="result-type">{{item.type == 1 ? '项目' : '品牌'}}</div>
                        <div class="pro-item">
                            <div class="title">{{item.title}}</div>
                            <div class="subtitle">
                                <div class="top">{{item.tag}}</div>
                                <div class="line"></div>
                                <div class="bottom">
                                    <span>可租面积m2：{{item.area}}</span> <span>园区服务电话：{{item.telPhone}}</span> <span>地址：{{item.address}}</span> 
                                </div>
                                <div v-if="item.hot" class="tag">热租中</div>
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
            <div class="page-bottom">
                <a-pagination :show-quick-jumper="true"  :pageSize="pageSize" :total="total" @change="onChange" />
            </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
const PAGESIZE = 10;
export default {
    async asyncData ({ params }) {//请求
        let list,total,countList,countObj,countAll,oriList;
        let {data:{code,data,totalRecord}} = await axios.post('https://api.goldenunionassets.com/article/search',{data:params.search,start:0,limit:1000});
        if(code == 0){
            oriList = data;
            list = oriList.slice(0,PAGESIZE);
            total = totalRecord;
        }
	    let {data:{code:code2,data:data2}} = await axios.post('https://api.goldenunionassets.com/article/search/count',{data:params.search});
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

        return { oriList,list ,total,countObj, searchKey:params.search}

	},
    data(){
        return {
            pageSize:PAGESIZE,
            pageNum:0,
            curTag:-1
        }
    },
    mounted(){
        console.log(this.countObj);
    },
    methods:{
        chooseTag(tag){
            this.curTag = tag;
            this.pageNum = 0;
            this.getData();
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
        onChange(page){
            this.pageNum = page -1;
            this.getData();
        },
        getData(){
            let start = this.pageNum*this.pageSize;
            this.list = this.oriList.filter(item=>this.curTag<0||item.type==this.curTag).slice(start,start+this.pageSize);       
            this.total = this.oriList.filter(item=>this.curTag<0||item.type==this.curTag).length;  
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
    margin-top:75px;
}
.content{
    position:relative;
    min-height:80vh;
    max-width:1200px;
    margin:0 auto;
    padding:0px 30px;
    padding-top:35px;
}
.main-title{
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
        margin-bottom:16px;
        cursor: pointer;
        border:1px solid #B21E27;
        &.active{
            background: white;
            color:#B21E27;
        }
    }

}
.result-group{
    padding-bottom:50px;
    .result-item{
        padding:25px 0px;
        border-bottom:1px solid #979797;
        cursor: pointer;
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
                font-size: 27px;
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
                    border: 1px dashed #979797;
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
                font-size: 27px;
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
                    border: 1px dashed #979797;
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
                font-size: 27px;
                font-family: PingFangSC, PingFangSC-Semibold;
                font-weight: 600;
                text-align: left;
                color: #000000;
                line-height: 45px;
            }
        }
    }
    
}
.page-bottom{
    padding:55px 0px;
}
</style>