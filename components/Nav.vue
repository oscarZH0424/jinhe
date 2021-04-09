<template>
  <div :class="{'nav-head':!isMobile && !mobileStyle,'m-nav-head':isMobile || mobileStyle,'m-pc':mobileStyle}">
    <img class="logo" src="../assets/img/logo.png" alt="" @click="tapMenu('/')">  
    <div v-show="!isMobile && !mobileStyle" class="menu-group">
      <div class="menu-item" v-for="(menu,index) in menus[lan]" :key="index" @click="tapMenu(menu.path)">
        <span>{{menu.name}} <span v-show="menu.child" class="arrow1">></span> </span>
        <div class="drop-down-group" v-show="menu.child" :style="{width:index==1?'19.53125vw':''}">
          <div v-for="(item,index2) in menu.child" :key="index2">
            <div v-show="!item.child" class="drop-down-item" @click="tapMenu(item.path)" >{{item.name}}</div>
            <div v-show="item.child" class="drop-down-item" @click="choose(item.type)" :class="{'active':isActive(item.type)}">{{item.name}} <span v-show="item.child" class="arrow2">></span></div>
            <div v-show="isActive(item.type)">
              <div class="drop-down-item" v-for="(subMenu,index3) in item.child" :key="index3" @click="tapMenu(subMenu.path)">{{subMenu.name}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-btn-group" :class="{'open':isSearch}">
        <div v-show="!isSearch" ><span class="en" @click="toggleLan">{{lan=='ch'?'EN':'中文'}}</span><img @click="toSearch" class="search-btn" src="~/assets/img/ic_search.png" alt=""></div>
        <div v-show="isSearch" class="search-input">
          <input type="text" v-model="searchKey" v-on:keydown.enter="onInputKeyDown">
          <div class="close" @click="close"><img class="close-btn" src="~/assets/img/ic_close.png" alt=""></div>
        </div>
      </div>
    </div>
    <div v-show="isMobile || mobileStyle">
      <span class="en"  @click="toggleLan">{{lan=='ch'?'EN':'中'}}</span>
      <div class="menu"  :class="{'menu_click':open}" @click="tapMenuBtn">
        <span></span>
      </div>
      <div class="m-drop-container" :class="{'show':open}" @click="tapMask($event)">
        <div class="m-drop-menu" >
          <div v-for="(menu,index) in menus[lan]" :key="index">
            <Menu :menu="menu" @tap="onMenuTap"/>
          </div>
          <div>
            <div class="drop-menu-item">
            <span class="menu-title"><input @click="inputClick($event)" type="text" v-model="searchKey" :placeholder="placeholdStr[lan]"></span>
            <span class="menu-arrow"><img @click="toSearch2" class="search-btn" src="~/assets/img/ic_search.png" alt=""></span>
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
      menus:{
        ch:[
        {name:'公司介绍',child:[{name:'管理规模',path:'/#glgm'},{name:'多业态运营',path:'/#dytyy'},{name:'合作方',path:'/#hzf'},{name:'商业模式',path:'/#syms'},{name:'运营优势',path:'/#yyys'}]},
        {name:'项目与品牌',child:[{name:'项目',type:'pro',child:[{name:'上海御锦轩凯宾斯基全套房酒店',path:'/product#pro1'},{name:'北京广安门越都荟',path:'/product#pro2'},{name:'锦和越界陕康里',path:'/product#pro3'},{name:'越界锦和尚城',path:'/product#pro4'}]},{name:'品牌',type:'brand',child:[{name:'base佰舍',path:'/product#pro5'}]}]},
        {name:'管理团队',path:'/team'},{name:'新闻中心',path:'/news'},{name:'企业招聘',path:'/staff'}
      ],
      en:[
        {name:'About',child:[{name:'Management Scale',path:'/#glgm'},{name:'Multi-format Operation',path:'/#dytyy'},{name:'Partners',path:'/#hzf'},{name:'Business Model',path:'/#syms'},{name:'Operational Advantages',path:'/#yyys'}]},
        {name:'Projects and Brands',child:[{name:'Projects',type:'pro',child:[{name:'Kempinski The One Suites Hotel Shanghai Downtown',path:'/product#pro1'},{name:'INFINITE SPACE BEIJING',path:'/product#pro2'},{name:'SURPASS SPACE SHANKANG ALLEY',path:'/product#pro3'},{name:'SURPASS SPACE GOLDEN UNION SHANG CITY',path:'/product#pro4'}]},{name:'Brands',type:'brand',child:[{name:'base service apartment',path:'/product#pro5'}]}]},
        {name:'Leadership',path:'/team'},{name:'Media',path:'/news'},{name:'Careers',path:'/staff'}
      ],
      },
      proShow:false,
      brandShow:false,
      lan:'ch',
      placeholdStr:{ch:'输入关键词搜索',en:'Enter keywords'},
      mobileStyle:false
    }
  },
  created(){
    this.lan = this.$store.state.lan;
  },
  mounted(){
    this.isMobile = this.$store.state.isMobile;
    if(!this.isMobile){
      this.changeMode();
      window.addEventListener('resize', this.changeMode);
    }
  },
  methods:{
    changeMode(){
      let w = document.documentElement.clientWidth;
      this.mobileStyle = w <= 750;
    },
    inputClick(e){
      e.stopPropagation();
    },
    isActive(type){
      return this[`${type}Show`];
    },
    toggleLan(){
      this.lan = this.lan == 'ch' ? 'en' : 'ch';
      if(this.lan == 'ch'){
        this.$router.push({
          path:'/'
        })
      }else{
         this.$router.push({
          path:'/en/'
        })
      }
      
    },
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
        let base = this.lan == 'en' ? '/en' : '';
        path = `${base}${path}` ;
        console.log(path);
        this.$router.push({
          path 
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
    toSearch2(){
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
        margin-right:9.739583vw;
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
        padding-right:5.2083vw;
        >a{
          line-height: 135px;
          color:white;
        }
        .text-btn-group{
          position:absolute;
          right:5px;
          bottom:0px;
          height:108px;
          color: white;
          line-height: 135px;
          font-size: 14px;
          font-family: PingFangSC, PingFangSC-Medium;
          background: #B21E27;
          right:0.2604167vw;
          &.open{
            width:100%;
          }
          .en{
            opacity: 1;
            font-size: 14px;
            font-family: PingFangSC, PingFangSC-Regular;
            font-weight: 400;
            text-align: left;
            color: #ffffff;
            line-height: 20px;
            margin-right:25px;
            margin-right:1.30283vw;

          }
          .search-btn{
            width:14px;
          }
          .close-btn{
            width:14px;
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
            height:108px;
            opacity: 1;
            font-size: 18px;
            font-family: PingFangSC, PingFangSC-Medium;
            font-weight: 500;
            text-align: center;
            color: white;
            line-height: 135px;
            padding:0px 42px;
            min-width:193px;
            padding:0px 2.1875vw;
            min-width:10.05208vw;
            white-space: nowrap;
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
                padding-left:42px;
                line-height:50px;
                opacity: 1;
                font-size: 16px;
                font-family: PingFangSC, PingFangSC-Medium;
                font-weight: 500;
                text-align: left;
                color: #000;
                overflow: hidden;
                padding-left:2.1875vw;
                overflow: hidden;
                text-overflow: ellipsis;
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
  &.m-pc{
    height:108px;
    .logo{
      height:50px;
    }
    .m-drop-container{
      top:108px;
    }
  }
  .logo{
    height:67px;
  }
  .en{
    font-size: 30px;
    font-family: PingFangSC, PingFangSC-Regular;
    font-weight: 400;
    text-align: left;
    color: #ffffff;
    line-height: 42px;
    letter-spacing: 0px;
    margin-right:34px;
  }
  .search-btn{
    width:40px;
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
            width:100%;
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

.menu{display:inline-block;cursor:pointer;height:35px;width:35px;position:relative;}
.menu span{display:inline-block;width:35px;height:2px;background-color:#fff;border-radius: 10px;position:absolute;top:20px;left:0px;transition:background-color 0.2s ease-out 0.1s;}
.menu span:before{content:'';display:inline-block;width:35px;height:2px;background-color:#fff;border-radius: 10px;position:absolute;top:-12px;left:0px;transition:transform 0.1s ease-out,top 0.3s ease 0.2s;transform:rotate(0deg);}
.menu span:after{content:'';display:inline-block;width:35px;height:2px;background-color:#fff;border-radius: 10px;position:absolute;top:12px;left:0px;transition:transform 0.1s ease-out,top 0.3s ease 0.2s;transform:rotate(0deg);}
.menu.menu_click span{background-color:transparent;}
.menu.menu_click span:before{transition:top 0.3s ease,transform 0.1s ease-out 0.2s;transform:rotate(45deg);top:0px;height:4px;width:35px;}
.menu.menu_click span:after{transition:top 0.3s ease,transform 0.1s ease-out 0.2s;transform:rotate(-45deg);top:0px;height:4px;width:35px;}
</style>
