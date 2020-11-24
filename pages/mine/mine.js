// pages/mine/mine.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    img: '',
    name: ''
  },
  nextPages: function (e) {
    let pagesUrl = ['../bole/bole', '../investigate/investigate', '../course/course', '../read/read'];
    let index = e.currentTarget.dataset.index;
    wx.navigateTo({
      url: pagesUrl[index],
    })
  },
  clearStorage: function () {
    wx.showModal({
      title: '清除本地缓存',
      content: '确定要清空本地缓存吗？',
      success(res) {
        if (res.confirm) {
          wx.clearStorageSync();
          wx.showToast({
            title: '缓存已清除',
            icon: 'none',
            duration: 3000
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let avatarUrl = 'http://static.wcip.net/images/header2.jpg',
      nickName = '昵称';
    this.setData({
      img: avatarUrl,
      name: nickName
    })
    // // 查看是否授权
    // wx.getSetting({
    //   success(res) {
    //     if (res.authSetting['scope.userInfo']) {
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称
    //       wx.getUserInfo({
    //         success(res) {
    //           avatarUrl = res.userInfo.avatarUrl;
    //           nickName = res.userInfo.nickName
    // 					the.setData({
    //             img: avatarUrl,
    //             name: nickName
    //           })
    //         }
    //       })
    //     }
    //   }
    // });
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