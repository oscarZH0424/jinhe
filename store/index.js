import Vuex from 'vuex';
const store = ()=>{
    return new Vuex.Store({
        state:()=>({
            isMobile:false,
            lan:'ch',
            menu:[],
            menuEn:[],

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
            },
            SET_MENUEN(state,menu){
                state.menuEn = menu;
            }
        },
        actions:{
            async nuxtServerInit({commit},{req,app}){
                const {data:{code,data}}  = await app.$axios.post('http://www.dream-fly.com.cn:8282/menu/tree');
                commit('SET_MENU',data);
                const {data:{code:code2,data:data2}}  = await app.$axios.post('http://www.dream-fly.com.cn:8383/menu/tree');
                commit('SET_MENUEN',data2);

            }
        }
    })
} 


export default store;