// pages/investigate/investigate.js
var getData = require('../../data/data.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    problemArry: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let data = getData.problem;
    this.setData({
      problemArry: data
    })
  },

  formSubmit: function(e) {
    let answer = [],
      answerString = '';
    // console.log(e.detail.value)
    for (let i in e.detail.value) {
      answer.push(e.detail.value[i])
    }
    for (let j = 0; j < answer.length; j++) {
      if (j < answer.length - 1) {
        let s = j + 1;
        answerString += '答案' + s + ':' + answer[j] + '\n';
      } else {
        answerString += '联系方式:' + answer[j] + '\n';
      }
    }
    // console.log(answer)
    wx.showModal({
      title: '输入的内容',
      content: answerString
    })
  },

  formReset: function(e) {
    console.log('重置成功')
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