<template>
  <div class="container">
    <a-carousel>
      <Banner />
      <Banner />
      <Banner />
    </a-carousel>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>

.container {
  width:100%;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
}

</style>
<style>
.ant-carousel {
  width:100%;
}
.ant-carousel  .slick-slider {
  text-align: center;
  height: 1080px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel  .slick-slider h3 {
  color: #fff;
}
.ant-carousel .slick-dots li button{
  width:15px;
  height:15px;
  margin-right:88px;
}
.ant-carousel .slick-dots-bottom{
  bottom:41px;
  height:15px;
}
.ant-carousel .slick-dots li:last-child button{
  margin-right:0px;
}
.ant-carousel .slick-dots li.slick-active button{
  width:15px;
  background: #B21E27;
}
</style>
