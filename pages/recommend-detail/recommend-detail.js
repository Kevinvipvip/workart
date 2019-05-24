// pages/recommend-detail/recommend-detail.js
var getData = require("../../data/data.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
		video:'',
		title:'',
		teacher:'',
		courseBrief:'',
		courseList:[]
  },
	playVideo:function(){
		wx.showModal({
			title: '课程播放',
			content: '这是一个图片，暂时放置'
		})
	},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
		let id = options.id;
		let data = getData.courseRecommend[id - 1];
		this.setData({
			video: data.video,
			title: data.title,
			teacher: data.teacher,
			courseBrief: data.courseBrief,
			courseList: data.courseList
		})
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})