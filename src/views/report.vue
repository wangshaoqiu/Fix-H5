<template>
  <div class="container">
      <div class="header flex">
         <router-link to="/"> <img class="cancel" src="../assets/cancel.png" alt="cancel"></router-link>
          <!-- <img src="../assets/cancel.png" alt=""> -->
        <div class="title">维修记录</div>
      </div>
      <div class="part" v-for="item in count" :key="item">
          <div class="line flex justify-between">
              <div class="subTitle">机器型号：</div>
              <div class="value">XXXX991</div>
          </div>
          <div class="line flex justify-between">
              <div class="subTitle">地点：</div>
              <div class="value">苏州工业园区港田路190号</div>
          </div>
          <div class="line flex justify-between">
              <div class="subTitle">保修时间：</div>
              <div class="value">2020-01-09</div>
          </div>
          <div class="line flex justify-between">
              <div class="subTitle">处理人：</div>
              <div class="value">李振祥</div>
          </div>

          <div class="FGX"></div>
          <div class="process flex">
              <div class="plan">
                  <div class="img_wrap">
                  <img src="../assets/1.png" alt="">
                  </div>
                  <div class="name" style="color:#2EC5BC">提交故障</div>
              </div>
              <div class="link"></div>
              <div class="plan">
                  <div class="img_wrap">
                  <img src="../assets/22.png" alt="">
                  </div>
                  <div class="name">已接单</div>
              </div>
              <div class="link"></div>
              <div class="plan">
                  <div class="img_wrap">
                  <img src="../assets/33.png" alt="">
                  </div>
                  <div class="name">维修中</div>
              </div>
              <div class="link"></div>
              <div class="plan">
                  <div class="img_wrap">
                  <img src="../assets/44.png" alt="">
                  </div>
                  <div class="name">完成</div>
              </div>
          </div>

          
      </div>
  </div>
</template>

<script>
export default {
data () {
    return {
      count:0
    }
  },
   created() {
    this.count =Number(localStorage.getItem("count")) 

  },
}
</script>

<style scoped>
.container{
            width:343px;
            height: 100vh;
            padding:0 16px;

            overflow-x: hidden;
            overflow-y: auto;
        }
        .header{
            width:100%;
            height: 27px;
            margin-top:28px;
        }
        .cancel{
            width:24px;
            height:24px;
        }
        .title{
            font-size:18px;
font-family:PingFangSC-Medium,PingFang SC;
font-weight:500;
color:rgba(51,51,51,1);
margin-left: 112px;
        }
        .part{
            margin-top:16px;
           width:311px;
min-height:202px;
background:rgba(255,255,255,1);
box-shadow:0px 0px 8px 0px rgba(207,207,207,0.6);
border-radius:4px;
padding:16px;
        }
        .line{
            width:311px;
            margin-bottom: 8px;
        }
        .subTitle{
            font-size:14px;
font-family:PingFangSC-Regular,PingFang SC;
font-weight:400;
color:rgba(102,102,102,1);
        }
        .value{
            font-size:14px;
font-family:PingFangSC-Regular,PingFang SC;
font-weight:400;
color:rgba(51,51,51,1);
        }
        .FGX{
            width:311px;
height:1Px;
border-bottom:1Px solid rgba(238,238,238,1);
margin-top:16px;
        }
        .process{
            margin-top:16px;
        }
        .plan{
            width:48px;
            height: 60px;

        }
        .plan .img_wrap{
            width:34px;
            height: 34px;
            margin-left: 5px;
        }
        .img_wrap img{
            width:34px;
            height: 34px;
        }
        .name{
            font-size:12px;
font-family:PingFangSC-Regular,PingFang SC;
font-weight:400;
color:rgba(51,51,51,1);
width: 100%;
text-align: center;
margin-top:8px;
        }
        .link{
            width:37px;
height:1Px;
margin-top:17px;
border-bottom: 1PX dashed #979797;
	/* height: 1px;
border:1Px dashed #2EC5BC; */
        }

</style>