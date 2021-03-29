<template>
    <div class="menu-item">
        <div class="menu-fa" @click="tapHead" :class="{'active':open}">
            <div class="menu-title">{{menu.name}}</div>
            <div v-show="menu.child && menu.child.length>0" class="menu-arrow" :class="{'active':open}">></div>
        </div>
        <div  class="menu-ch" :class="{'show':open}">
            <div v-for="(item,index) in menu.child" :key="index">
                <menu-item :menu="item"></menu-item>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'menuItem',
        props:{
            menu:Object
        },
        data(){
            return {
                open:false
            }
        },
        methods:{
            tapHead(){
                if(this.menu.child && this.menu.child.length>0){
                 this.open = !this.open;
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
.menu-item{
    width:100%;
    min-height:44px;
    .menu-fa{
        padding:12px;
        display: flex;
        flex-flow:row nowrap;
        justify-content: space-between;
        align-items: center;
        background:#B21E27;
        border-bottom:1px solid white;
        .menu-title{
            opacity: 1;
            font-size: 15px;
            font-family: PingFangSC, PingFangSC-Regular;
            font-weight: 400;
            text-align: left;
            color: #ffffff;
            line-height: 21px;
        }
        .menu-arrow{
            font-size: 15px;
            color: #ffffff;
            &.active{
                transform: rotate(90deg);
            }
        }
    }
    .menu-ch{
        height:0;
        overflow: hidden;
        &.show{
            height:auto;
        }
        .menu-fa{
            background:white;
            border-bottom:0px;
            .menu-title{
                color:#000;
            }
            .menu-arrow{
                color:#000;
            }
            &.active{
                background:#B21E27;
                .menu-title{
                    color:#fff;
                }
                .menu-arrow{
                    color:#fff;
                }
            }
        }
    }
      
}
</style>