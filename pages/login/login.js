// pages/login/login.js
Page({
  data:{
    //头部数据
    headerData:{
      title:'登录',
      home:'注册账号'
    }
  },
  //事件函数
  formsubmit:function(){
    console.log('您点击提交按钮了')
  },
  formreset:function(){
    console.log('您点击重置按钮了')
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})