// pages/food-detail/food-detail.js
var getData = require('../../data/data.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    img: [],
    name: '',
    price: '',
    factoryname: '',
    factoryaddress: '',
    period: '',
    net_content: '',
    detailImg: [],
    place: '',
    indicatorDots: true,
    autoplay: true,
    loop: true,
    interval: 3000,
    duration: 500,
    //所有图片的高度  
    imgheights: [],
    //图片宽度 
    imgwidth: 750,
    //默认  
    current: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let id = options.id;
    let data = getData.food[id - 1];
    this.setData({
      img: data.img,
      name: data.name,
      price: data.price,
      factoryname: data.factoryname,
      factoryaddress: data.factoryaddress,
      period: data.period,
      net_content: data.net_content,
      detailImg: data.detailImg,
      place: data.place
    })
  },
  imageLoad: function(e) { //获取图片真实宽度  
    var imgwidth = e.detail.width,
      imgheight = e.detail.height,
      //宽高比  
      ratio = imgwidth / imgheight;
    //计算的高度值  
    var viewHeight = 750 / ratio;
    var imgheight = viewHeight;
    var imgheights = this.data.imgheights;
    //把每一张图片的对应的高度记录到数组里  
    imgheights[e.target.dataset.id] = imgheight;
    this.setData({
      imgheights: imgheights
    })
  },
  bindchange: function(e) {
    // console.log(e.detail.current)
    this.setData({
      current: e.detail.current
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