import Vuex from 'vuex';
const store = ()=>{
    return new Vuex.Store({
        state:()=>({
            isMobile:false
        }),
        getters:{},
        mutations:{
            SET_ISMOBILE(state,ismobile){
                state.isMobile = ismobile;
            }
        },
        actions:{
    
        }
    })
} 


export default store;