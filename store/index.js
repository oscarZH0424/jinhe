import Vuex from 'vuex';
const store = ()=>{
    return new Vuex.Store({
        state:()=>({
            isMobile:false,
            lan:'ch'
        }),
        getters:{},
        mutations:{
            SET_ISMOBILE(state,ismobile){
                state.isMobile = ismobile;
            },
            SET_LAN(state,lan){
                state.lan = lan;
            }
        },
        actions:{
    
        }
    })
} 


export default store;