<template>
  <div :class="{'nav-head':!isMobile && !mobileStyle,'m-nav-head':isMobile || mobileStyle,'m-pc':mobileStyle}">
    <img class="logo" src="../assets/img/logo.png" alt="" @click="tapMenu($event,'/')">  
    <div v-show="!isMobile && !mobileStyle" class="menu-group">
      <div class="menu-item" v-for="(menu,index) in menus[lan]" :key="index" @click="tapMenu($event,menu.banner)" @mouseleave="onMenuBlur">
        <span>{{menu.name}} <span v-show="menu.children && menu.children.length>0" class="arrow1">></span> </span>
        <div class="drop-down-group" v-show="menu.children && menu.children.length>0" >
          <!-- :style="{width:index==1?'19.53125vw':''}" -->
          <div v-for="(item,index2) in menu.children" :key="index2">
            <div v-show="!item.children || item.children.length<=0" class="drop-down-item" @click="tapMenu($event,item.banner)" >{{item.name}}</div>
            <div v-show="item.children && item.children.length>0" class="drop-down-item" @click="choose(`${index}-${index2}`)" :class="{'active':isActive(`${index}-${index2}`)}">{{item.name}} <span v-show="item.children && item.children.length>0" class="arrow2">></span></div>
            <div v-show="isActive(`${index}-${index2}`)">
              <div  v-for="(subMenu,index3) in item.children" :key="index3" @click="tapMenu($event,subMenu.banner)">
                <div v-show="!subMenu.children || subMenu.children.length<=0" class="drop-down-item" @click="tapMenu($event,subMenu.banner)" >{{subMenu.name}}</div>
                <div v-show="subMenu.children && subMenu.children.length>0" class="drop-down-item" @click="choose(`${index}-${index2}-${index3}`)" :class="{'active':isActive(`${index}-${index2}-${index3}`)}">{{subMenu.name}} <span v-show="subMenu.children && subMenu.children.length>0" class="arrow2">></span></div>
                <div v-show="isActive(`${index}-${index2}-${index3}`)">
                  <div  v-for="(subMenu2,index4) in subMenu.children" :key="index4" @click="tapMenu($event,subMenu2.banner)">
                      <div class="drop-down-item" @click="tapMenu($event,subMenu2.banner)" >{{subMenu2.name}}</div>
                  </div>
                </div>
              </div>
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
            <Menu :menu="menu" @tap="onMenuTap" :show="open"/>
          </div>
          <div>
            <div class="drop-menu-item" >
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
        {name:'About',children:[{name:'Management Scale',banner:'/#glgm'},{name:'Multi-format Operation',banner:'/#dytyy'},{name:'Partners',banner:'/#hzf'},{name:'Business Model',banner:'/#syms'},{name:'Operational Advantages',banner:'/#yyys'}]},
        {name:'Projects and Brands',children:[{name:'Projects',type:'pro',children:[{name:'Kempinski The One Suites Hotel Shanghai Downtown',banner:'/product#pro1'},{name:'INFINITE SPACE BEIJING',banner:'/product#pro2'},{name:'SURPASS SPACE SHANKANG ALLEY',banner:'/product#pro3'},{name:'SURPASS SPACE GOLDEN UNION SHANG CITY',banner:'/product#pro4'}]},{name:'Brands',type:'brand',children:[{name:'base service apartment',banner:'/product#pro5'}]}]},
        {name:'Leadership',banner:'/team'},{name:'Media',banner:'/news'},{name:'Careers',banner:'/staff'}
      ],
      },
      proShow:false,
      brandShow:false,
      lan:'ch',
      placeholdStr:{ch:'输入关键词搜索',en:'Enter keywords'},
      mobileStyle:false,
      activeIndexMap:{},
      inputFocus:false
    }
  },
  created(){
    this.lan = this.$store.state.lan;
    // console.log('nav',this.lan);
    let menuList = this.$store.state.menu;
    let menuEnList = this.$store.state.menuEn;

    console.log('menuList',menuList);
    this.menus.ch = menuList;
    this.menus.en = menuEnList;

  },
  mounted(){
    this.isMobile = this.$store.state.isMobile;
    if(!this.isMobile){
      this.changeMode();
      window.addEventListener('resize', this.changeMode);
    }
  },
  methods:{
    onMenuBlur(){
      this.activeIndexMap = {};
    },
    changeMode(){
      let w = document.documentElement.clientWidth;
      this.mobileStyle = w <= 750;
    },
    inputClick(e){
      this.inputFocus = true;
      e.stopPropagation();
    },
    
    toggleLan(){
      console.log(this.$route);
      let fullPath = this.$route.fullPath;
      if(this.$route.name.indexOf('id')!=-1){
        fullPath = '/';
      }
      fullPath = fullPath.replace('/m','');
      this.lan = this.lan == 'ch' ? 'en' : 'ch';
      bus.$emit('lanchange',this.lan);
      if(this.lan == 'ch'){
        fullPath = fullPath.replace('/en','');
        this.$router.push({
          path:fullPath
        })
      }else{
         this.$router.push({
          path:`/en${fullPath}`
        })
      }
    },
    choose(index){
      if(this.activeIndexMap[index] == undefined){
        this.$set(this.activeIndexMap,index,0);
      }else{
        if(this.activeIndexMap[index] == 0){
          this.activeIndexMap[index] = 1;
        }else{
          this.activeIndexMap[index] = 0;
        }
      }
    },
    isActive(index){
      return this.activeIndexMap[index] == undefined ? 1 : this.activeIndexMap[index];
    },
    
    tapMask(e){
      e.stopPropagation();
      this.open = false;
    },
    onMenuTap(){
      this.open = false;
      bus.$emit('hashchange');
    },
    tapMenu(e,path){
      e.stopPropagation();
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
      this.inputFocus = false;
    },
    toSearch(){
      this.isSearch = true;
    },
    toSearch2(){
       let base = this.lan == 'en' ? '/en' : '';
       if(this.searchKey){
         this.$router.push({
          path:`${base}/search/${this.searchKey}`
        })
       }
       this.searchKey = '';
    },
    close(){
      this.isSearch = false;
      this.searchKey = '';

    },
    onInputKeyDown(){
      console.log(this.searchKey);
       let base = this.lan == 'en' ? '/en' : '';
       if(this.searchKey){
         this.$router.push({
          path:`${base}/search/${this.searchKey}`
        })
       }
    },
    toggleContainerTouchAction(v) {
      const container = document.querySelector('.container')
      if (!container) {
        return
      }
      console.log(container);
      container.style['touch-action'] = v ? 'none' : 'auto'
    },
    stopTouch(e) {
      e.preventDefault()
    },
  },
  watch:{
    open(v) {
      // this.toggleContainerTouchAction(v)
      // if (v) {
      //   document.body.addEventListener('touchmove', this.stopTouch, { passive: false, capture: true })
      // } else {
      //   document.body.removeEventListener('touchmove', this.stopTouch, { capture: true })
      // }
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
    height:75px;
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
          line-height: 75px;
          color:white;
        }
        .text-btn-group{
          position:absolute;
          right:5px;
          bottom:0px;
          height:75px;
          color: white;
          line-height: 75px;
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
            margin-top:10px;
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
            height:75px;
            opacity: 1;
            font-size: 18px;
            font-family: PingFangSC, PingFangSC-Regular;
            font-weight: 400;
            text-align: center;
            color: white;
            line-height: 75px;
            padding:0px 42px;
            padding:0px 2.1875vw;
            white-space: nowrap;
            &:hover{
                background:white;
                color:#B21E27;
                font-weight: 600;
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
              top:75px;
              min-width:100%;
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
                font-family: PingFangSC, PingFangSC-Regular;
                font-weight: 400;
                text-align: left;
                color: #000;
                overflow: hidden;
                padding-left:2.1875vw;
                padding-right:2.1875vw;
                overflow: hidden;
                text-overflow: ellipsis;
                &:hover,&.active{
                  font-weight: 600;
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
    font-size: 38px;
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
    position:fixed;
    min-height:80vh;
    width:100%;
    top:128px;
    left:0px;
    bottom:0px;
    right:0;
    background: transparent;
    visibility: hidden;
    opacity:0;
    transition: all 0.3s ease;
    overflow-y: scroll;
    &.show{
      visibility: visible;
      opacity:1;
    }
    .m-drop-menu{
      position:absolute;
      right:0;
      top:0;
      width:100%;
      background:white;
      padding-bottom:56px;
      .drop-menu-item{
         width:100%;
        height:88px;
        padding:24px;
        background:#B21E27;
        display: flex;
        flex-flow:row nowrap;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
        &.fixed{
          position:fixed;
          bottom:0;
          left:0;
        }
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
            width:650px;
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

.menu{display:inline-block;cursor:pointer;height:42px;width:42px;position:relative;}
.menu span{display:inline-block;width:42px;height:2PX;background-color:#fff;border-radius: 10px;position:absolute;top:26px;left:0px;transition:background-color 0.2s ease-out 0.1s;}
.menu span:before{content:'';display:inline-block;width:42px;height:2PX;background-color:#fff;border-radius: 10px;position:absolute;top:-16px;left:0px;transition:transform 0.1s ease-out,top 0.3s ease 0.2s;transform:rotate(0deg);}
.menu span:after{content:'';display:inline-block;width:42px;height:2PX;background-color:#fff;border-radius: 10px;position:absolute;top:16px;left:0px;transition:transform 0.1s ease-out,top 0.3s ease 0.2s;transform:rotate(0deg);}
.menu.menu_click span{background-color:transparent;}
.menu.menu_click span:before{transition:top 0.3s ease,transform 0.1s ease-out 0.2s;transform:rotate(45deg);top:0px;height:4px;width:42px;}
.menu.menu_click span:after{transition:top 0.3s ease,transform 0.1s ease-out 0.2s;transform:rotate(-45deg);top:0px;height:4px;width:42px;}
</style>
