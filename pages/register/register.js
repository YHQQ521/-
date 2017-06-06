// pages/register/register.js
Page({
  data:{
    headerData:{
      title:"快速注册",
      home:""
    },
    selected:'circle'
  },
  selectedClick:function(){
    if(this.data.selected=='circle'){
      this.setData({
        selected:'success'
      })
    }else{
      this.setData({
        selected:'circle'
      })
    }
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