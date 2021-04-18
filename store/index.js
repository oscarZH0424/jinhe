import Vuex from 'vuex';
const store = ()=>{
    return new Vuex.Store({
        state:()=>({
            isMobile:false,
            lan:'ch',
            menu:[]
        }),
        getters:{},
        mutations:{
            SET_ISMOBILE(state,ismobile){
                state.isMobile = ismobile;
            },
            SET_LAN(state,lan){
                state.lan = lan;
            },
            SET_MENU(state,menu){
                state.menu = menu;
            }
        },
        actions:{
            async nuxtServerInit({commit},{req,app}){
                const {data:{code,data}}  = await app.$axios.post('http://www.dream-fly.com.cn:8282/menu/tree');
                commit('SET_MENU',data);
            }
        }
    })
} 


export default store;