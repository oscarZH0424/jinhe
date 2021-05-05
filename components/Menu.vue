<template>
    <div class="menu-item">
        <div class="menu-fa" @click="tapHead($event)" :class="{'active':open}">
            <div class="menu-title">{{menu.name}}</div>
            <div v-show="menu.children && menu.children.length>0" class="menu-arrow" :class="{'active':open}">></div>
        </div>
        <div  class="menu-ch" :class="{'show':open}">
            <div v-for="(item,index) in menu.children" :key="index">
                <menu-item :menu="item" @tap="onTap" :show="show"></menu-item>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
        name:'menuItem',
        props:{
            menu:Object,
            show:Boolean
        },
        data(){
            return {
                open:false
            }
        },
        methods:{
            tapHead(e){
                e.stopPropagation();
                if(this.menu.children && this.menu.children.length>0){
                 this.open = !this.open;
                }
                if(this.menu.banner){
                    let base = this.$store.state.lan == 'en' ? '/en' : '';
                    let path = `${base}${this.menu.banner}` ;
                    if(!this.menu.children || this.menu.children.length<=0){
                        this.$router.push({
                            path
                        })
                        this.$emit('tap');
                    }
                }
            },
            onTap(){
                this.$emit('tap');
            },
        },
        watch:{
            show(v){
                this.open = false
            }
        }
    }
</script>

<style lang="scss" scoped>
.menu-item{
    width:100%;
    min-height:88px;
    .menu-fa{
        padding:24px;
        display: flex;
        flex-flow:row nowrap;
        justify-content: space-between;
        align-items: center;
        background:#B21E27;
        border-bottom:1px solid white;
        .menu-title{
            opacity: 1;
            font-size: 30px;
            font-family: PingFangSC, PingFangSC-Regular;
            font-weight: 400;
            text-align: left;
            color: #ffffff;
            line-height: 42px;
            white-space:nowrap;
        }
        .menu-arrow{
            font-size: 30px;
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