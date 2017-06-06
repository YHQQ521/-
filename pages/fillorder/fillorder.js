// pages/fillorder/fillorder.js
Page({
  data:{
    headerData:{
      title:'填写订单'
    },
    title:'2017足球冬令营',
    time:'周六13：00-14：00',
    price:'2000',
    child:'刘勇',
    phoneNum:'12345678901',
    footerData:{
      image:'../../images/icon/nextstep.png',
      title:'下一步'
    },
    choose:'success'
  },
  //事件函数
  backClick:function(){
    wx.navigateBack({
      delta:1
    })
  },
  applyClick:function(){
    wx.navigateTo({
      url:'../confirmorder/confirmorder'
    })
  },
  choose:function(){
    if(this.data.choose=='success'){
      this.setData({
        choose:'circle'
      })
    }else{
      this.setData({
        choose:'success'
      })
    }
  },
  addman:function(){
    wx.navigateTo({
      url:'../selectman/selectman'
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