// pages/read-detail/read-detail.js
var getData = require("../../data/data.js");
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		img:'',
		title:'',
		name:'',
		publishDate:'',
		press:'',
		brief:'',
		reason:''
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		let id = options.id;
		let data = getData.read[id-1];
		console.log(data)
		this.setData({
			img: data.img,
			title: data.title,
			name: data.name,
			publishDate: data.publishDate,
			press: data.press,
			brief: data.brief,
			reason: data.reason
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