//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    carouselimgUrls:[
      "../../images/photo/carousel1.jpg",
      "../../images/photo/carousel2.jpg",
      "../../images/photo/carousel3.jpg",
      "../../images/photo/carousel4.jpg",
      "../../images/photo/carousel5.jpg",
      "../../images/photo/carousel6.jpg",
    ],
    unit:[{
      id:"1",
      imgUrl:  "../../images/icon/kc.png",
      text:"课程"   
    },{
      id:"2",
      imgUrl:  "../../images/icon/dxl.png",
      text:"冬夏令营"  
    },{
      id:"3",
      imgUrl:  "../../images/icon/ta.png",
      text:"TA课后班"  
    }],
    hotCourse:[{
      id:"1",
      slImg: "../../images/photo/C1_poster.jpg",
      text:"测试晚托班2",
      price:"1000",
      num:"1000"
    },{
      id:"2",
      slImg: "../../images/photo/carousel6.jpg",
      text:"测试晚托班2",
      price:"10",
      num:"10"
    },{
      id:"3",
      slImg: "../../images/photo/C1_poster.jpg",
      text:"测试晚托班2",
      price:"10",
      num:"10"
    },{
      id:"4",
      slImg: "../../images/photo/carousel6.jpg",
      text:"测试晚托班2",
      price:"10",
      num:"10"
    }]
  },
  //事件处理函数
  unitClick:function(e){
    if(e.currentTarget.id){
      wx.navigateTo({
        url:'../course/course?id='+e.currentTarget.id
      })
    }
  },
  commodityClick:function(e){
    if(e.currentTarget.id){
      wx.navigateTo({
        url:'../commodity/commodity?id='+e.currentTarget.id
      })
    }
  },
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
