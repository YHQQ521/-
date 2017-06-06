// pages/confirmorder/confirmorder.js
Page({
  data:{
    headerData:{
      title:'确认订单'
    },
    productInfo:[{
      key:'商品',value:'2017足球冬令营'
    },{
      key:'规格',value:'周六13：00-14：00'
    },{
      key:'单价',value:'￥20000'
    },{
      key:'购买数量',value:'1'
    },{
      key:'订单金额',value:'￥1000000'
    }],
    studentInfo:[{
      key:'姓名',value:'小刘'
    },{
      key:'证件类型',value:'省份证'
    },{
      key:'证件号',value:'126357268398657829'
    }],
    linkmanInfo:[{
      key:'注册手机号',value:'15786548902'
    },{
      key:'其他手机号',value:'12367675789'
    },{
      key:'联系地址',value:'上海市闵行区水清路'
    },{
      key:'联系微信',value:'初升的太阳'
    }],
    footerData:{
      image:'../../images/icon/confirm.png',
      title:'去支付'
    }
  },
  //事件函数
  backClick:function(){
    wx.navigateBack({
      delta: 1
    })
  },
  applyClick:function(){
    wx.redirectTo({
      url: '../payorder/payorder'
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