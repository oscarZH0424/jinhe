<template>
    <div :class="{'page-banner':!isMobile,'m-page-banner':isMobile}">
         <img v-show="isMobile" :src="map.m[keystr].src" alt="" />
         <img v-show="!isMobile" :src="map.pc[keystr].src" alt="" />
         <div v-show="isMobile" class="text">{{map.m[keystr].name[lan]}}</div>
         <div v-show="!isMobile" class="text">{{map.pc[keystr].name[lan]}}</div>
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
                        pro:{src:require('~/assets/img/pro_banner.png'),name:{ch:'项目与品牌',en:'Projects and Brands'}},
                        news:{src:require('~/assets/img/news_banner.png'),name:{ch:'新闻中心',en:'Media'}},
                        staff:{src:require('~/assets/img/staff_banner.png'),name:{ch:'企业招聘',en:'Careers'}},
                        team:{src:require('~/assets/img/team_banner.png'),name:{ch:'管理团队',en:'Leadership'}},
                        prod:{src:require('~/assets/img/product_id_banner.png'),name:{ch:'项目',en:'Projects'}},
                        newsd:{src:require('~/assets/img/news_id_banner.png'),name:{ch:'新闻中心',en:'Media'}},
                        staffd:{src:require('~/assets/img/staff_banner.png'),name:{ch:'企业招聘',en:'Careers'}},

                    },
                    m:{
                        pro:{src:require('~/assets/img/m/pro_banner.png'),name:{ch:'项目与品牌',en:'Projects and Brands'}},
                        news:{src:require('~/assets/img/m/news_banner.png'),name:{ch:'新闻中心',en:'Media'}},
                        staff:{src:require('~/assets/img/m/staff_banner.png'),name:{ch:'企业招聘',en:'Careers'}},
                        team:{src:require('~/assets/img/m/team_banner.png'),name:{ch:'管理团队',en:'Leadership'}},
                        prod:{src:require('~/assets/img/m/product_id_banner.png'),name:{ch:'项目',en:'Projects'}},
                        newsd:{src:require('~/assets/img/m/news_id_banner.png'),name:{ch:'新闻中心',en:'Media'}},
                        staffd:{src:require('~/assets/img/m/staff_banner.png'),name:{ch:'企业招聘',en:'Careers'}},

                    }
                },
                lan:'ch'
            }
        },
        created(){
            this.lan = this.$store.state.lan;
        },
        mounted(){
            this.isMobile = this.$store.state.isMobile;
            this.lan = this.$store.state.lan;
            console.log(this.lan);
        }
    }
</script>

<style lang="scss" scoped>

</style>