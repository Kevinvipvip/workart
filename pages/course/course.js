// pages/course/course.js
var getData = require("../../data/data.js");

Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		forunNum:1,
		indicatorDots: true,
		autoplay: true,
		circular: true,
		interval: 2000,
		duration: 500,
		imgUrls: [],
		courseArry: [],
		teacherArry: [],
	},
	forumClassify: function (e) {
		let num = e.currentTarget.dataset.forum;
		this.setData({
			forunNum: num,
		})
	},
	recommendDetail: function (e) {
		let id = e.currentTarget.id;
		wx.navigateTo({
			url: '../recommend-detail/recommend-detail?id=' + id,
		})
	},
	teacherDetail: function (e) {
		let id = e.currentTarget.id;
		wx.navigateTo({
			url: '../teacher-detail/teacher-detail?id=' + id,
		})
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		let swiper = getData.swiperImg;
		let course = getData.courseRecommend;
		let teacher = getData.teacher;
		this.setData({
			imgUrls: swiper,
			courseArry: course,
			teacherArry: teacher
		})
	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function () {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function () {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function () {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function () {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {

	}
})