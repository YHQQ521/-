// pages/selectman/selectman.js
Page({
  data:{
    headerData:{
      title:'人员选择',
      home:'保存'
    },
    childname:[
      '小名','小刘','小勇'
    ],
    adultname:[
      '老刘','老王','老李'
    ]
  },
  //事件函数
  backClick:function(){
    wx.navigateBack({
      delta:1
    })
  },
  homeClick:function(){
    wx.navigateTo({
      url:'../fillorder/fillorder'
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