
<style scoped>
.container{
 width:375px;
            height: 100vh;
            /* padding:0 16px; */
            background:rgba(249,249,249,1);
            overflow-x: hidden;
            overflow-y: auto;
            position: relative;
            padding-bottom: 105px;
}
.bg{
    width:375px;
height:245px;
background:linear-gradient(90deg,rgba(71,200,223,1) 0%,rgba(45,197,186,1) 100%);
overflow: hidden;
}
.bg div{
    font-size:23px;
font-family:PingFangSC-Medium,PingFang SC;
font-weight:500;
color:rgba(255,255,255,1);
width:100%;
text-align: center;
margin-top:74px
}
.main{
    position: absolute;
    width:343px;
height:324px;
background:rgba(255,255,255,1);
border-radius:4px;
top:151px;
left:16px;
padding-top:6px;
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

color:#999999;
margin-top:-1px;
width:24px;
text-align: center;
}
.debug div{
 font-size:10px;
font-family:PingFangSC-Regular,PingFang SC;
font-weight:400;
color:rgba(46,197,188,1);
margin-top:-1px;
width:24px;
text-align: center;
}
.debug{
  width:24px;
  margin-top:10px;
  margin-left:163px;
}
.item{
    width: 311px;
    height: 53px;
    margin-left: 16px;

}

.label{
    font-family:PingFangSC-Regular,PingFang SC;
font-weight:400;
color:rgba(102,102,102,1);
}
.select{
width:160px;
height:33px;
border-radius:4px;
border:1px solid rgba(221,221,221,1);
padding-left:10px;
font-size:15px;
font-family:PingFangSC-Regular,PingFang SC;
font-weight:400;
color:rgba(51,51,51,1);
line-height: 33px;
position: relative;
}
.noSelect{
    color:rgba(187,187,187,1);
}
.select img{
    width:10px;
height:10px;
position: absolute;
right:10px;
top:12px;
}
.FGX{
    width:311px;
height:1Px;
border-bottom: 1Px solid #eee;
margin-left:16px;
}
.start{
    width:311px;
height:44px;
background:rgba(221,221,221,1);
border-radius:4px;
margin-left:16px;
margin-top:30px;
font-size:16px;
font-family:PingFangSC-Medium,PingFang SC;
font-weight:500;
color:rgba(255,255,255,1);
line-height: 44px;
text-align: center;
}
.item_wrap:nth-child(4) .FGX{
    display: none;
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
.mask{
width:100vw;
height:100vh;
background:rgba(0,0,0,0.5012);
position: fixed;
top:0;
left:0;
z-index:99;
}
.options{
width:100vw;
max-height:309px;
background:rgba(255,255,255,1);
border-radius:10px 10px 0px 0px;
bottom: 0;
position: fixed;
left:0;
z-index:9999;
overflow-x: hidden;
overflow-y:auto;

}
.option{
    width:343px;
    height: 54px;
    border-bottom: 1px solid #eee;
    text-align: center;
    line-height: 54px;
    font-size:16px;
font-family:PingFangSC-Regular,PingFang SC;
font-weight:400;
color:rgba(51,51,51,1);
margin-left: 16px;
}
.start2{
    background:rgba(46,197,188,1);
}
.result{
    width:100vw;
    margin-top:266px;
    
}
.title{
    width:100%;
    height: 22px;;
}
.FGX2{
    width:36px;
height:1Px;
background:rgba(153,153,153,1);
border-radius:1px;
/* margin-left:110px; */
}
.jieguo{
    font-size:16px;
font-family:PingFangSC-Regular,PingFang SC;
font-weight:400;
color:rgba(51,51,51,1);
margin-left:10px;
}
.FGX3{
    width:36px;
height:1Px;
background:rgba(153,153,153,1);
border-radius:1px;
margin-left:10px;
}
.result_main{
    width:343px;
/* height:604px; */
border-radius:5px;
border:1px solid rgba(238,238,238,1);
margin-top:25px;
margin-left: 16px;
}
.result_item{
    width:311px;
    height: 54px;
    border-bottom: 1px solid #eee;
    margin-left:16px;
}
.result_name{
    font-size:15px;
font-family:PingFangSC-Regular,PingFang SC;
font-weight:400;
color:rgba(102,102,102,1);
}
.result_value{
    font-size:15px;
font-family:PingFangSC-Regular,PingFang SC;
font-weight:400;
color:rgba(51,51,51,1);
}
.start_txt{
    font-size:16px;
font-family:PingFangSC-Medium,PingFang SC;
font-weight:500;
color:rgba(255,255,255,1);
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  /* transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0); */
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active 用于 2.1.8 以下版本 */ {
  transform: translateY(10px);
  opacity: 0;
}
</style>
<template>
  <div class="container" ref="container">
      <div class="bg">
          <div>选择机器的硬件和工艺要求</div>
      </div>
      <div class="main">
          <div v-for="(item,index) in params" :key="index" class="item_wrap">
          <div class="item flex align-center justify-between">
              <div class="label">{{item.name}}</div>
              <div class="select" :class="item.selectValue ==''?'noSelect':''" @click="select(index)">
                  {{item.selectValue ==''?'请选择':item.selectValue}}
                  <img :class="item.showSelect?'rotate':'rotate1'" src="../assets/select3.png" alt="">
              </div>
          </div>
          <div class="FGX"></div>
          </div>
          <div v-if="!loading" class="start" :class="count>=4?'start2':''" @click="start">开始预测</div>
      
          <div v-if="loading" class="start" :class="count>=4?'start2':''" @click="start"><van-loading type="spinner"  color="#ffffff" size="24px" ><span class="start_txt">计算中</span></van-loading></div>
      </div>

      <div class="result" ref="result" v-if="showResult">
          <div class="title flex align-center justify-center">
              <div class="FGX2"></div>
              <div class="jieguo">预测结果</div>
              <div class="FGX3"></div>
          </div>
          <div class="result_main">
              <div class="result_item flex align-center justify-between" v-for="(item,index) in result" :key="index">
                  <div class="result_name">{{item.name}}</div>
                  <div class="result_value">{{item.value}}</div>
              </div>
          </div>
      </div>


      <div class="checkMenu flex">
          <router-link to="/">
      <div class="fix">
        <img src="../assets/fix2.png" alt="">
        <div>维修</div>
      </div>
      </router-link>
      <div class="debug">
        <img src="../assets/debug.png" alt="">
        <div>调试</div>
      </div>
      
    </div>



    <div class="mask" v-if="showMask" @click="hideMask"></div>
    <transition name="slide-fade">
    <div class="options animated" v-if="showMask">
        <div class="option" v-for="(item,index) in params[selectIndex].values" :key="index" @click="selectOption(item)">{{item}}</div>
    </div>
    </transition>
  </div>
</template>

<script>
import { getList, getDetail,guess } from '../api/AI'
export default {
    data () {
        return {
            params:{},
            id: '',
            selectIndex:0,
            showMask:false,
            count:0,
            yuceParams:[],
            showResult:false,
            result:[],
            loading:false

    }
    },
    created() {
        this.getList() 

    },
    methods:{
       async getList() {
          await  getList().then(res=>{
                this.id = res[0].id
            })
            await getDetail(this.id).then(res=>{
                // console.log(res)
                for(let i=0;i<res.params.length;i++){
                    res.params[i].showSelect = false
                    res.params[i].selectValue = ''
                }
                this.params = res.params
            })
        },
        select(index) {
            this.showMask = true
            this.selectIndex = index
            this.params[index].showSelect = true
            
        },
        selectOption(item) {
            this.showMask = false
            this.count++
            this.params[this.selectIndex].showSelect = false
            this.params[this.selectIndex].selectValue = item
            
        },
        hideMask() {
            this.showMask = false
            this.params[this.selectIndex].showSelect = false
        },
        start() {
            
            if(this.count<4){
                return
            }
            this.loading = true


            for(let i=0;i<this.params.length;i++){
                const obj = {
                    tag: this.params[i].tag,
                    value: this.params[i].selectValue
                }
                this.yuceParams.push(obj)
            }
            const params = {
                params : this.yuceParams
            }
            
            setTimeout(()=>{
                this.loading = false
            },1000)
            guess(params,this.id).then(res=>{
                this.result = res.data
                this.showResult = true

                setTimeout(()=>{
                this.$refs.result.scrollIntoView({ behavior: "smooth" });
            },1000)

                
            })
        }
    }

}
</script>
