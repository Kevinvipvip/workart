//index.js
//获取应用实例
const app = getApp()
var getData = require("../../data/data.js");

Page({
  data: {
    flagNum: 1,
    forunNum: 1,
    wearArry: [],
    indicatorDots: true,
    autoplay: true,
    circular: true,
    interval: 2000,
    duration: 500,
    imgUrls: [],
    courseArry: [],
    teacherArry: [],
    readArry: [],
    foodArry: []
  },
  //事件处理函数
  choiceClassify: function(e) {
    let num = e.currentTarget.dataset.flagnum;
    this.setData({
      flagNum: num,
    })
  },
  forumClassify: function(e) {
    let num = e.currentTarget.dataset.forum;
    this.setData({
      forunNum: num,
    })
  },
  recommendDetail: function(e) {
    let id = e.currentTarget.id;
    wx.navigateTo({
      url: '../recommend-detail/recommend-detail?id=' + id,
    })
  },
  teacherDetail: function(e) {
    let id = e.currentTarget.id;
    wx.navigateTo({
      url: '../teacher-detail/teacher-detail?id=' + id,
    })
  },
  readDetail: function(e) {
    let id = e.currentTarget.id;
    wx.navigateTo({
      url: '../read-detail/read-detail?id=' + id,
    })
  },
	foodDetail:function(e){
		let id = e.currentTarget.id;
		wx.navigateTo({
			url: '../food-detail/food-detail?id=' + id,
		})
	},

  //页面加载处理函数
  onLoad: function(e) {
    let wear = getData.wearAndRide;
    let swiper = getData.swiperImg;
    let course = getData.courseRecommend;
    let teacher = getData.teacher;
    let read = getData.read;
    let food = getData.food;
    this.setData({
      wearArry: wear,
      imgUrls: swiper,
      courseArry: course,
      teacherArry: teacher,
      readArry: read,
      foodArry: food
    })
	},
	
	// 下拉刷新
  onPullDownRefresh() {
		console.log('刷新了');
	},

  onShareAppMessage() {
    wx.showShareMenu({
      withShareTicket: true,
      success: function () {
      }
    });

    return { path: app.share_path() };
  }
})