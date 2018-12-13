<template>
<div class="confirm-box">
    <div class="mask" v-show="showConfirm">
      <div class="confirm">
        <div class="confirm-title">CloudMusic 温馨提示</div>
        <div class="confirm-text">
          {{ text }}
        </div>
        <div class="confirm-act">
          <span class="confirm-no" @click="comfirmNo">{{ no }}</span>
          <span class="confirm-yes" @click="comfirmYes">{{ yes }}</span>
        </div>
      </div>
    </div>
</div>
</template>
<script>
export default {
    props:{
        showConfirm:{
            type: Boolean,
            default: false
        },
        text:{
            type: String,
            default: '确定要进行该操作吗？'
        },
        no:{
            type: String,
            default: '取消'
        },
        yes:{
            type: String,
            default: '确定'
        }
    },
    methods:{
        comfirmNo(){
            this.$emit('noSelect');
        },
        comfirmYes(){
            this.$emit('select');
        }
    }
}
</script>

<style>
.confirm{
    width: 80%;
    background-color: white;
    position: fixed;
    top: 30%;
    left: 50%;
    margin-left: -40%;
    border-radius: 0.08rem;
    text-align: center;
}
.confirm-title{
    font-weight: bold;
    padding: 1%;
    font-size: 0.18rem
}
.confirm-text{
    width: 100%;
    height: 1rem;
    line-height: 1rem;
}
.confirm-act{
    width: 100%;
    border-top: 0.01rem solid #B6B6B6;
}
.confirm-act span{
    display: inline-block;
    text-align: center;
    width: 48%;
    height: .3rem;
    line-height: .3rem;
}
.confirm-no{
    border-right: 0.01rem solid #B6B6B6;
}
.confirm-yes{
    color: #60D048;
}
</style>

