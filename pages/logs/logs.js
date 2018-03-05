//logs.js
const util = require('../../utils/util.js')
let store = require('../../store.js')
let app = getApp().globalData

Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  },
  showStore() {
    console.log(store)
    console.log(app)
  }
})
