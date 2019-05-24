// pages/teacher-detail/teacher-detail.js
var getData = require('../../data/data.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
		pic:'',
		name:'',
		teachAge: '',
		grade:'',
		brief:'',
		peculiarity: '',
		courseArry:[]
  },
	gotodetail:function(e){
		let id = e.currentTarget.id;
		wx.navigateTo({
			url: '../recommend-detail/recommend-detail?id=' + id,
		})
	},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let id = options.id;
    let data = getData.teacher[id - 1];
    console.log(data)
		this.setData({
			pic: data.pic,
			name: data.name,
			teachAge: data.teachAge,
			grade: data.grade,
			brief: data.brief,
			peculiarity: data.peculiarity,
			courseArry: data.course
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