export default function ({store,req,redirect,route}){
    let isMobile = (ua)=>{
        return !!ua.match(/AppleWebKit.*Mobile.*/);
    }
    let userAgent =req ? req.headers['user-agent'] : "";
    let ismobile = isMobile(userAgent);
    store.commit('SET_ISMOBILE',ismobile);
    const path = route.fullPath;
    let pathArr = path.split('/');
    let url = '';
    if(ismobile){
        if(pathArr[1] != 'm'){
            pathArr.splice(1,0,'m');
            url = pathArr.join('/');
            redirect(url);
        }else{
        }
    }else{
        if(pathArr[1] == 'm'){
            pathArr.splice(1,1);
            url = pathArr.join('/');
            redirect(url);
        }else{
        }
    }
    
}