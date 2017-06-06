// pages/cashpay/cashpay.js
Page({
  data:{
    successinfo:'请尽快联系现场工作人员，完成付款。'
  },
  //事件函数
  vieworder:function(){
    wx.redirectTo({
      url:'../orderdetail/orderdetail'
    })
  },
  continuebuy:function(){
    wx.redirectTo({
      url:'../commodity/commodity'
    })
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