// pages/commodity/commodity.js
Page({
  data: {
    headerData: {
      title: '商品详情',
      home: '回首页'
    },
    courseTitle: '暑假英语拼读练习',
    coursePrice: '80000-120000',
    saleNum: '1000',
    textInfo: '自然拼读课程起源于美国哈佛。由负责儿童早期的智力开发的理查德博士开发。2010由自然拼读课程起源于美国哈佛。由负责儿童早期的智力开发的理查德博士开发。自然拼读课程起源于美国哈佛。由负责儿童早期的智力开发的理查德博士开发。2010由自然拼读课程起源于美国哈佛。由负责儿童早期的智力开发的理查德博士开发。',
    imageShow: [
      "../../images/photo/carousel1.jpg",
      "../../images/photo/carousel2.jpg",
      "../../images/photo/carousel3.jpg",
      "../../images/photo/carousel4.jpg",
      "../../images/photo/carousel5.jpg",
      "../../images/photo/carousel6.jpg",
    ],
    footerData: {
      image: '../../images/icon/choose.png',
      title: '立即报名'
    }
  },
  //事件函数
  backClick: function () {
    wx.navigateBack({
      delta: 1
    })
  },
  homeClick: function () {
    wx.navigateTo({
      url: '../index/index'
    })
  },
  applyClick: function () {
    wx.navigateTo({
      url: '../specification/specification'
    })
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})