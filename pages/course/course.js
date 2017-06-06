// pages/course/course.js
Page({
  data:{
    //头部数据
    headerData:{
      title:'课程',
      home:''
    },
    //联动数据
    arrowDown:'../../images/icon/arrowDown.png',
    arrowUp:'../../images/icon/arrowUp.png',
    arrow1:true,
    arrow2:true,
    arrow3:true,
    class1:'全部',//一级分类
    class2:'全部分类',//二级分类
    class3:'全部子类',//三级分类
    selectlist1:[
      "全部","自营"
    ],
    selectlist2:[
      "全部分类","学前速成","亲子","幼托"
    ],
    selectlist3:[
      "全部子类","足球","篮球","棒球"
    ],
    hide1:true,
    hide2:true,
    hide3:true,
    //课程列表数据
    courseNum:0,
    hotCourse:[{
      slImg: "../../images/photo/C1_poster.jpg",
      text:"测试晚托班2",
      price:"1000",
      num:"1000"
    },{
      slImg: "../../images/photo/carousel6.jpg",
      text:"测试晚托班2",
      price:"10",
      num:"10"
    },{
      slImg: "../../images/photo/C1_poster.jpg",
      text:"测试晚托班2",
      price:"10",
      num:"10"
    },{
      slImg: "../../images/photo/carousel6.jpg",
      text:"测试晚托班2",
      price:"10",
      num:"10"
    }]
  },
  //事件函数
  backClick:function(){
    wx.navigateBack({
      delta: 1
    })
  },
  clicktitle1:function(e){
    this.setData({
      hide1:false,
      hide2:true,
      hide3:true,
      arrow1:false,
      arrow2:true,
      arrow3:true,
    })
  },
  clicktitle2:function(e){
    this.setData({
      hide2:false,
      hide1:true,
      hide3:true,
      arrow2:false,
      arrow1:true,
      arrow3:true
    })
  },
  clicktitle3:function(e){
    this.setData({
      hide3:false,
      hide1:true,
      hide2:true,
      arrow3:false,
      arrow1:true,
      arrow2:true
    })
  },
  clickValue1:function(e){
      this.setData({
        class1: e.target.dataset.content,
        hide1:true,
        arrow1:true
      })
  },
  clickValue2:function(e){
      this.setData({
        class2: e.target.dataset.content,
        hide2:true,
        arrow2:true
      })
  },
  clickValue3:function(e){
      this.setData({
        class3: e.target.dataset.content,
        hide3:true,
        arrow3:true
      })
  },
  onLoad:function(options){
    this.setData({
      headerData:{
        title:"课程",
        }
    })
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