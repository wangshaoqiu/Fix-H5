<style scoped >
body {
  width: 100vw;
  height: 100vh;
  background: rgba(249, 249, 249, 1);
}
.container {
  width: 343px;
  /* height: 100vh; */
  padding: 0 16px;
  overflow-x: hidden;
  overflow-y: auto;
  padding-bottom: 83px;
}
.header {
  width: 100%;
  height: 27px;
  margin-top: 28px;
}
.cancel {
  width: 24px;
  height: 24px;
}
.title {
  font-size: 18px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
  margin-left: 154px;
}
.report {
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  margin-left: 97px;
  cursor: pointer;
}
.part1 {
  width: 311px;
  height: 56px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 8px 0px rgba(207, 207, 207, 0.6);
  border-radius: 8px;
  margin-top: 17px;
  font-size: 16px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
  line-height: 56px;
  padding: 0 16px;
}
.part2 {
  width: 343px;
  min-height: 420px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 8px 0px rgba(207, 207, 207, 0.6);
  border-radius: 4px;
  margin-top: 16px;
  padding-top: 16px;
  padding-bottom: 10px;
}
.subTitle {
  font-size: 14px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
  margin-left: 16px;
}
.layui-input-block {
  margin-left: 16px;
  margin-top: 8px;
  width: 311px;
}
.layui-textarea {
  width: 279px;
  min-height: 116px;
  background: rgba(245, 245, 245, 1);
  border-radius: 4px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  padding: 12px 16px;
  border: 0;
}
.picArea {
  margin-top: 8px;
  width: 90px;
  height: 90px;
  margin-left: 16px;
}
.addPic {
  width: 90px;
  height: 90px;
  border-radius: 4px;
  border: 1px solid rgba(221, 221, 221, 1);
}
.addPic img {
  width: 20px;
  height: 20px;
  margin-top: 26px;
  margin-left: 35px;
}
.addPic div {
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(187, 187, 187, 1);
  margin-top: 12px;
  width: 100%;
  text-align: center;
}
.part3 {
  width: 343px;
  height: 44px;
  background: linear-gradient(
    90deg,
    rgba(71, 200, 223, 1) 0%,
    rgba(45, 197, 186, 1) 100%
  );
  border-radius: 4px;
  margin-top: 16px;
  font-size: 18px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  text-align: center;
  line-height: 44px;
  cursor: pointer;
}
.select{
    width:311px;
height:40px;
position: relative;
margin-top:8px;
margin-left: 16px;


}
.select .input{
    width:295px;
height:40px;
background:rgba(245,245,245,1);
border-radius:4px;
border:0;
outline: none;
color:#333333;
padding-left:16px;
line-height: 40px;
}
.select img{
position: absolute;
width:24px;
height: 24px;
top:8px;
right: 10px;
}
.options{
    position: fixed;
     width:311px;
     background: #fff;
     left: 32px;
     top:224px;
     z-index: 99;


         padding: 5px 0;
    /* border: 1px solid #d2d2d2; */
    max-height: 300px;
    overflow-y: auto;
    border-radius: 2px;
    box-shadow: 0 2px 4px rgba(0,0,0,.12);
    box-sizing: border-box;

}
.option{
    width:295px;
height:36px;
background: #fff;
font-size:14px;
font-family:PingFangSC-Regular,PingFang SC;
font-weight:400;
color:rgba(51,51,51,1);
line-height: 36px;
padding-left:16px;
}
.option-select{
background: linear-gradient(
    90deg,
    rgba(71, 200, 223, 1) 0%,
    rgba(45, 197, 186, 1) 100%
  );
  color:#fff;
}
.van-uploader__wrapper{
  display: flex;
  flex-wrap: wrap;
}
.rotate {
  transition: all 0.5s;
}
.rotate1 {
  transform: rotate(-180deg);
  -ms-transform: rotate(-180deg); /* IE 9 */
  -moz-transform: rotate(-180deg); /* Firefox */
  -webkit-transform: rotate(-180deg); /* Safari 和 Chrome */
  -o-transform: rotate(-180deg); /* Opera */
  transition: all 0.5s;
}
.checkMenu{
  width:375px;
  height: 54px;
  background: #fff;
  position: fixed;
  bottom: 0;
  left:0;
}
.fix{
  width:24px;
  margin-top:10px;
  margin-left:82px;
}
.fix img,.debug img{
  width:24px;
  height: 24px;
}
.fix div{
 font-size:10px;
font-family:PingFangSC-Regular,PingFang SC;
font-weight:400;
color:rgba(46,197,188,1);
margin-top:-1px;
width:24px;
text-align: center;
}
.debug div{
 font-size:10px;
font-family:PingFangSC-Regular,PingFang SC;
font-weight:400;
color:#999999;
margin-top:-1px;
width:24px;
text-align: center;
}
.debug{
  width:24px;
  margin-top:10px;
  margin-left:163px;
}


</style>

<template>
  <div class="container">
    <div class="header flex align-center justify-between">
      <!-- <img class="cancel" src="../assets/cancel.png" alt="cancel"> -->
      <div class="title">报修</div>
      <router-link to="/report">
        <div class="report">维修记录</div>
      </router-link>
    </div>
    <div class="part1">已识别机器型号为A厂212型点胶机</div>
    <div class="part2">
      <div class="subTitle">故障类型</div>
      <div class="select" @click="checkSelect">
        <!-- <input disabled v-model="option[select]" type="text" placeholder="请选择"> -->
        <div class="input">{{option[select]}}</div>
        <img  :class="showOption?'rotate':'rotate1'" src="../assets/select2.png" alt="">
      </div>
      <div class="options" v-if="showOption">
          <div class="option" :class="select==index?'option-select':''" @click="selectOption(index)" v-for="(item,index) in option" :key="index">
              {{item}}
          </div>
      </div>

      <div class="subTitle" style="margin-top:16px;">简要描述故障</div>
      <div class="layui-input-block">
        <textarea name="desc" placeholder="请描述故障内容" class="layui-textarea"></textarea>
      </div>
      <div class="subTitle" style="margin-top:16px;">上传故障图片</div>
      <!-- <van-uploader v-model="fileList" multiple /> -->

      <van-uploader v-model="fileList">
        <div class="picArea flex">
          <div class="addPic" id="test1">
            <img src="../assets/add.png" alt="">
            <div>添加图片</div>
          </div>
        </div>
      </van-uploader>

    </div>
    <div class="part3" @click="next">提交</div>
    <div class="checkMenu flex">
      <div class="fix">
        <img src="../assets/fix.png" alt="">
        <div>维修</div>
      </div>
      <router-link to="/debug">
      <div class="debug">
        <img src="../assets/debug2.png" alt="">
        <div>调试</div>
      </div>
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      fileList: [
        // { url: 'https://img.yzcdn.cn/vant/leaf.jpg' },
        // Uploader 根据文件后缀来判断是否为图片文件
        // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
        // { url: 'https://cloud-image', isImage: true }
      ],
      option:[
          '请选择',
          '机器停止运作',
          '其他故障',
      ],
      select:0,
      showOption:false,
      select_Option: '请选择'
    }
  },
  created() {
    const aa = localStorage.getItem("count");
    if(aa==null){
      localStorage.setItem("count", 0);
    }
    
  },
  methods:{
      selectOption(index) {
          this.select = index
          this.showOption = false
      },
      checkSelect() {
          this.showOption = !this.showOption
      },
      next() {
        var count = localStorage.getItem("count");
        count ++
        localStorage.setItem("count", count);
        this.$router.push('/report')
      }
  }

}
</script>

