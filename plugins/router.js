export default ({  app }) => {

    app.router.afterEach((to, from, next) => {
       document.body.scrollTop = 0
       document.documentElement.scrollTop = 0
       // 或者滚动容器的scrollTop = 0
    });
    /*----------------------------下面是给页面加入百度统计代码的方法，有需要的可以参考下-----------------------------------------*/
      app.router.beforeEach((to, from, next) => {
        next();
      })
    }
   