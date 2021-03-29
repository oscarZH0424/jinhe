<template>
    <div :class="{'page-banner':!isMobile,'m-page-banner':isMobile}">
         <img v-show="isMobile" :src="map.m[keystr].src" alt="" />
         <img v-show="!isMobile" :src="map.pc[keystr].src" alt="" />
         <div v-show="isMobile" class="text">{{map.m[keystr].name}}</div>
         <div v-show="!isMobile" class="text">{{map.pc[keystr].name}}</div>
    </div>
</template>

<script>
    export default {
        props:{
            keystr:String,
            theme:String
        },
        data(){
            return {
                isMobile:false,
                map:{
                    pc:{
                        pro:{src:require('~/assets/img/pro_banner.png'),name:'项目与品牌'},
                        news:{src:require('~/assets/img/news_banner.png'),name:'新闻中心'},
                        staff:{src:require('~/assets/img/staff_banner.png'),name:'企业招聘'},
                        team:{src:require('~/assets/img/team_banner.png'),name:'管理团队'},
                        prod:{src:require('~/assets/img/product_id_banner.png'),name:'项目'},
                        newsd:{src:require('~/assets/img/news_id_banner.png'),name:'新闻中心'},
                        staffd:{src:require('~/assets/img/staff_banner.png'),name:'企业招聘'},

                    },
                    m:{
                        pro:{src:require('~/assets/img/m/pro_banner.png'),name:'项目与品牌'},
                        news:{src:require('~/assets/img/m/news_banner.png'),name:'新闻中心'},
                        staff:{src:require('~/assets/img/m/staff_banner.png'),name:'企业招聘'},
                        team:{src:require('~/assets/img/m/team_banner.png'),name:'管理团队'},
                        prod:{src:require('~/assets/img/m/product_id_banner.png'),name:'项目'},
                        newsd:{src:require('~/assets/img/m/news_id_banner.png'),name:'新闻中心'},
                        staffd:{src:require('~/assets/img/m/staff_banner.png'),name:'企业招聘'},

                    }
                }
            }
        },
        mounted(){
            this.isMobile = this.$store.state.isMobile;
        }
    }
</script>

<style lang="scss" scoped>

</style>