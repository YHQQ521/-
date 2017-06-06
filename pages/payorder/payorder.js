// pages/payorder/payorder.js
Page({
  data:{
    headerData:{
      title:'确认并支付订单'
    },
    productInfo:[{
      key:'商品',value:'2017足球冬令营'
    },{
      key:'规格',value:'周六13：00-14：00'
    },{
      key:'单价',value:'￥20000'
    },{
      key:'数量',value:'1'
    },{
      key:'支付金额',value:'￥1000000'
    }],
    footerData:{
      image:'../../images/icon/confirm.png',
      title:'确认支付'
    }   
  },
  //事件函数
  backClick:function(){
    wx.navigateBack({
      delta:1
    })
  },
  applyClick:function(){
    wx.redirectTo({
      url:'../cashpay/cashpay'
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