// pages/bole/bole.js
var getData = require('../../data/data.js');
var flag = false,
  firstData, lastData, type, flag_name = true;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag: flag,
    finish: '',
    skill: '选择技能要求',
    selectTitle: '请选择',
    switchData: '',
    switchFirstData: '',
    arryList: [],
    type: 1,
    name: '',
    claim: '',
    experience: '',
    education: '',
    salary: '',
    address: ''
  },
  openselect: function(e) {
    type = e.currentTarget.dataset.type
    this.setData({
      flag: true,
      type: type,
      selectTitle: '请选择'
    })
    if (type == 1) {
      let data = getData.experience;
      this.setData({
        arryList: data
      })
    } else if (type == 2) {
      let data = getData.education;
      this.setData({
        arryList: data
      })
    } else if (type == 3) {
      let data = getData.salary;
      this.setData({
        arryList: data
      })
    }
  },
  firstTap: function(e) {
    firstData = e.currentTarget.dataset.data;
    this.setData({
      switchFirstData: firstData
    })
  },
  lastTap: function(e) {
    flag_name = false;
    lastData = e.currentTarget.dataset.data;
    this.setData({
      switchData: lastData
    })
    if (type == 3) {
      if (parseInt(firstData) < parseInt(lastData)) {
        this.setData({
          selectTitle: firstData + 'k-' + lastData + 'k',
          finish: firstData + 'k-' + lastData + 'k'
        })
      } else if (parseInt(firstData) == parseInt(lastData)) {
        this.setData({
          selectTitle: lastData + 'k',
          finish: lastData + 'k'
        })
      } else {
        wx.showToast({
          title: '第一次选择的工资低于最后一次选择的工资',
          icon: 'none',
          duration: 3000
        })
        flag_name = true;
      }

    } else {
      this.setData({
        selectTitle: lastData,
        finish: lastData
      })
    }
  },
  finish: function(e) {
    var finish = e.currentTarget.dataset.finish;
    console.log(finish)
    if (flag_name) {
      wx.showToast({
        title: '您还没有选择',
        icon: 'none',
        duration: 3000
      })
    } else {
      if (type == 1) {
        this.setData({
          experience: finish,
          flag: false
        })
      } else if (type == 2) {
        this.setData({
          education: finish,
          flag: false
        })
      } else if (type == 3) {
        this.setData({
          salary: finish,
          flag: false
        })
      }
      flag_name = true;
    }
  },
  getNameInputValue: function(e) {
    this.setData({
      name: e.detail.value,
    })
  },
  getClaimInputValue: function(e) {
    this.setData({
      claim: e.detail.value,
    })
  },
  getAddressInputValue: function(e) {
    this.setData({
      address: e.detail.value,
    })
  },
  release: function(e) {
    console.log(e.currentTarget.dataset)
    let name = e.currentTarget.dataset.name,
      claim = e.currentTarget.dataset.claim,
      experience = e.currentTarget.dataset.experience,
      education = e.currentTarget.dataset.education,
      salary = e.currentTarget.dataset.salary,
      address = e.currentTarget.dataset.address;
    if (name == '') {
      wx.showToast({
        title: '职位名称不能为空',
        icon: 'none',
        duration: 3000
      })
		} else if (claim == '') {
			wx.showToast({
				title: '请填写您对这个岗位的要求',
				icon: 'none',
				duration: 3000
			})
		} else if (experience == '') {
			wx.showToast({
				title: '请填写你对应聘者的经验要求',
				icon: 'none',
				duration: 3000
			})
		} else if (education == '') {
			wx.showToast({
				title: '请填写你对应聘者的学历要求',
				icon: 'none',
				duration: 3000
			})
		} else if (salary == '') {
			wx.showToast({
				title: '请填写你给应聘者的薪资条件',
				icon: 'none',
				duration: 3000
			})
		} else if (address == '') {
			wx.showToast({
				title: '请填写你公司的工作地址',
				icon: 'none',
				duration: 3000
			})
		}else{
			wx.showModal({
				title:'输入的内容',
				content: '职位名称：' + name + '\n岗位要求:' + claim + '\n经验要求:' + experience + '\n最低学历:' + education + '\n月薪:' + salary + '\n工作地址:' + address,
				
			})
		}
  },








  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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