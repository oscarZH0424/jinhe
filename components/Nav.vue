<template>
  <div :class="{'nav-head':!isMobile,'m-nav-head':isMobile}">
    <nuxt-link to="/"><img class="logo" src="../assets/img/logo.png" alt="" @click="tapMenu"></nuxt-link>  
    <div v-show="!isMobile" class="menu-group">
      <div class="menu-item">
        <span>公司介绍 <span class="arrow1">></span></span>
        <div class="drop-down-group">
          <nuxt-link to="/#glgm"><div class="drop-down-item" @click="tapMenu">管理规模</div></nuxt-link>
          <nuxt-link to="/#dytyy"><div class="drop-down-item" @click="tapMenu">多业态运营</div></nuxt-link>
          <nuxt-link to="/#hzf"><div class="drop-down-item" @click="tapMenu">合作方</div></nuxt-link>
          <nuxt-link to="/#syms"><div class="drop-down-item" @click="tapMenu">商业模式</div></nuxt-link>
          <nuxt-link to="/#yyys"><div class="drop-down-item" @click="tapMenu">运营优势</div></nuxt-link>
        </div>
      </div>
      <div class="menu-item">
        <span  @click="tapMenu('/product')">项目与品牌 <span class="arrow1">></span></span> 
        <div class="drop-down-group" style="width:358px">
          <div class="drop-down-item" @click="choose('pro')" :class="{'active':proShow}">项目<span class="arrow2">></span></div>
          <div v-show="proShow">
              <div class="drop-down-item" @click="tapMenu('/product#pro1')">上海御锦轩凯宾斯基全套房酒店</div>
              <div class="drop-down-item" @click="tapMenu('/product#pro2')">北京广安门越都荟</div>
              <div class="drop-down-item" @click="tapMenu('/product#pro3')">锦和越界陕康里</div>
              <div class="drop-down-item" @click="tapMenu('/product#pro4')">越界锦和尚城</div>
          </div>
          <div class="drop-down-item" @click="choose('brand')" :class="{'active':brandShow}">品牌<span class="arrow2">></span></div>
          <div v-show="brandShow">
            <div class="drop-down-item" @click="tapMenu('/product#pro5')">base佰舍</div> 
          </div>
        </div>
      </div>
      <nuxt-link to="/team"><div class="menu-item">管理团队</div></nuxt-link>
      <nuxt-link to="/news"><div class="menu-item">新闻中心</div></nuxt-link>
      <nuxt-link to="/staff"><div class="menu-item">企业招聘</div></nuxt-link>
      <div class="text-btn-group" :class="{'open':isSearch}">
        <div v-show="!isSearch" @click="toSearch"><img class="search-btn" src="~/assets/img/ic_search.png" alt=""></div>
        <div v-show="isSearch" class="search-input">
          <input type="text" v-model="searchKey" v-on:keydown.enter="onInputKeyDown">
          <div class="close" @click="close"><img class="close-btn" src="~/assets/img/ic_close.png" alt=""></div>
        </div>
      </div>
    </div>
    <div v-show="isMobile">
      <div class="menu"  :class="{'menu_click':open}" @click="tapMenuBtn">
        <span></span>
      </div>
      <div class="m-drop-container" :class="{'show':open}" @click="tapMask($event)">
        <div class="m-drop-menu" >
          <div v-for="(menu,index) in menus" :key="index">
            <Menu :menu="menu" @tap="onMenuTap"/>
          </div>
          <div>
            <div class="drop-menu-item">
            <span class="menu-title"><input type="text" v-model="searchKey" placeholder="输入关键词搜索"></span>
            <span class="menu-arrow">搜索</span>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import bus from '@/assets/js/eventBus';
export default {
  data(){
    return{
      isSearch:false,
      searchKey:'',
      isMobile:false,
      open:false,
      menus:[
        {name:'公司介绍',child:[{name:'管理规模',path:'/#glgm'},{name:'多业态运营',path:'/#dytyy'},{name:'合作方',path:'/#hzf'},{name:'商业模式',path:'/#syms'},{name:'运营优势',path:'/#yyys'}]},
        {name:'项目与品牌',child:[{name:'项目',child:[{name:'上海御锦轩凯宾斯基全套房酒店',path:'/product#pro1'},{name:'北京广安门越都荟',path:'/product#pro2'},{name:'锦和越界陕康里',path:'/product#pro3'},{name:'越界锦和尚城',path:'/product#pro4'}]},{name:'品牌',child:[{name:'base佰舍',path:'/product#pro5'}]}]},
        {name:'管理团队',path:'/team'},{name:'新闻中心',path:'/news'},{name:'企业招聘',path:'/staff'}
      ],
      proShow:false,
      brandShow:false
    }
  },
  mounted(){
    console.log('isMobile',this.$store.state.isMobile);
    this.isMobile = this.$store.state.isMobile;
  },
  methods:{
    choose(type){
      if(type=='pro'){
        this.proShow = !this.proShow;
      }
       if(type=='brand'){
        this.brandShow = !this.brandShow;
      }
    },
    tapMask(e){
      this.open = false;
    },
    onMenuTap(){
      this.open = false;
      bus.$emit('hashchange');
    },
    tapMenu(path){
      this.open = false;
      if(path && typeof path == 'string'){
        console.log(path);
        this.$router.push({
          path:path
        })
      }
      bus.$emit('hashchange');
    },
    tapMenuBtn(){
      this.open = !this.open;
    },
    toSearch(){
      this.isSearch = true;
    },
    close(){
      this.isSearch = false;
      this.searchKey = '';

    },
    onInputKeyDown(){
      console.log(this.searchKey);
      this.$router.push({
        path:`/search/${this.searchKey}`
      })
    },
  }
}
</script>
<style lang="scss" scoped>
a{
  color:white;
}
.nav-head{
    position:fixed;
    top:0px;
    width:100%;
    height:108px;
    background: #B21E27;
    display: flex;
    flex-flow:row nowrap;
    justify-content: center;
    align-items: center;
    z-index: 10;
    .logo{
        height:50px;
        margin-right:187px;
    }
    .menu-group{
        position:relative;
        width:auto;
        height:100%;
        display: flex;
        flex-flow:row nowrap;
        justify-content: flex-start;
        align-items: center;
        user-select: none;
        padding-right:100px;
        >a{
          line-height: 135px;
          color:white;
        }
        .text-btn-group{
          position:absolute;
          right:80px;
          bottom:0px;
          height:108px;
          color: white;
          line-height: 135px;
          font-size: 14px;
          font-family: PingFangSC, PingFangSC-Medium;
          background: #B21E27;
          &.open{
            width:100%;
          }
          .search-btn{
            width:26px;
          }
          .close-btn{
            width:26px;
          }
          .search-input{
            position:relative;
            width:100%;
            height:50px;
            border-bottom:1px solid white;
            padding-right:50px;
            margin-top:40px;
            input{
              position:absolute;
              bottom:0px;
              height:50px;
              width:100%;
              background: transparent;
              border:0px;
              outline: none;
              opacity: 1;
              font-size: 18px;
              font-family: PingFangSC, PingFangSC-Regular;
              font-weight: 400;
              text-align: left;
              color: #ffffff;
              line-height: 25px;
            }
            .close{
              position:absolute;
              right:0px;
              top:50%;
              transform: translateY(-50%);
            }
          }
        }
        .menu-item{
            position:relative;
            width:223px;
            height:108px;
            opacity: 1;
            font-size: 18px;
            font-family: PingFangSC, PingFangSC-Medium;
            font-weight: 500;
            text-align: center;
            color: white;
            line-height: 135px;
            &:hover{
                background:white;
                color:#B21E27;
                .drop-down-group{
                  opacity:1;
                  visibility: visible;
                }
                .arrow1{
                  display: inline-block;
                  transform: rotate(90deg);
                }
            }
            .drop-down-group{
              position:absolute;
              top:108px;
              width:100%;
              left:0px;
              height:auto;
              background: rgba(255,255,255,.9);
              visibility: hidden;
              opacity:0;
              transition: all 100ms linear;
              z-index: 1;
              .drop-down-item{
                width:100%;
                height:50px;
                padding-left:67px;
                line-height:50px;
                opacity: 1;
                font-size: 16px;
                font-family: PingFangSC, PingFangSC-Medium;
                font-weight: 500;
                text-align: left;
                color: #000;
                &:hover,&.active{
                  background: #B21E27;
                  color:white;
                }
                &.active{
                  .arrow2{
                    display: inline-block;
                    transform: rotate(90deg);
                  }
                }
                
              }
            }
        }
    }
}
.m-nav-head{
  position:fixed;
  top:0px;
  width:100%;
  padding:30px;
  height:128px;
  background: #B21E27;
  z-index: 100;
  display: flex;
  flex-flow:row nowrap;
  justify-content: space-between;
  align-items: center;
  .logo{
    height:67px;
  }
  .m-drop-container{
    position:absolute;
    width:100%;
    height:100vh;
    top:128px;
    right:0;
    background: transparent;
    visibility: hidden;
    opacity:0;
    transition: all 0.3s ease;
    &.show{
      visibility: visible;
      opacity:1;
    }
    .m-drop-menu{
      position:absolute;
      right:0;
      top:0;
      width:60%;
      .drop-menu-item{
        width:100%;
        height:88px;
        padding:24px;
        background:#B21E27;
        display: flex;
        flex-flow:row nowrap;
        justify-content: space-between;
        align-items: center;
        .menu-title{
          opacity: 1;
          font-size: 30px;
          font-family: PingFangSC, PingFangSC-Regular;
          font-weight: 400;
          text-align: left;
          color: #ffffff;
          line-height: 42px;
          input{
            background: transparent;
            outline: none;
            color:white;
            width:300px;
            border:0px;
            &::-webkit-input-placeholder {
              color: #fff;
            }
            &::-moz-input-placeholder {
              color: #fff;
            }
            &::-ms-input-placeholder {
              color: #fff;
            }
          }
        }
        .menu-arrow{
          font-size: 30px;
          color: #ffffff;
        }
      }
    }
  }
  
}

.menu{display:inline-block;cursor:pointer;height:70px;width:70px;position:relative;}
.menu span{display:inline-block;width:70px;height:2px;background-color:#fff;border-radius: 10px;position:absolute;top:40px;left:0px;transition:background-color 0.2s ease-out 0.1s;}
.menu span:before{content:'';display:inline-block;width:70px;height:2px;background-color:#fff;border-radius: 10px;position:absolute;top:-24px;left:0px;transition:transform 0.1s ease-out,top 0.3s ease 0.2s;transform:rotate(0deg);}
.menu span:after{content:'';display:inline-block;width:70px;height:2px;background-color:#fff;border-radius: 10px;position:absolute;top:24px;left:0px;transition:transform 0.1s ease-out,top 0.3s ease 0.2s;transform:rotate(0deg);}
.menu.menu_click span{background-color:transparent;}
.menu.menu_click span:before{transition:top 0.3s ease,transform 0.1s ease-out 0.2s;transform:rotate(45deg);top:0px;height:4px;width:60px;}
.menu.menu_click span:after{transition:top 0.3s ease,transform 0.1s ease-out 0.2s;transform:rotate(-45deg);top:0px;height:4px;width:60px;}
</style>
