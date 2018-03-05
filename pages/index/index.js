//index.js
//获取应用实例
let app = getApp().globalData
let store = require('../../store.js')

Page({
  data: {
    toastShow: false,
    openRoll: true,
  },
  onLoad () {
    
  },
  onShowHide(){
    // 点击隐藏显示切换
    this.setData({
      toastShow: !this.data.toastShow
    })
  },
  onReachBottom(e){
    console.log('触底')
  },
  uploads(e){
    console.log(e)
  },
  goLogs() {
    wx.navigateTo({
      url: '../logs/logs',
    })
  },
  requireImport() {
    // console.log(store)
    // store.a = 2
    console.log(app)
    app.b = 2
  },
  onInputs(e) {
    // value
    console.log(e)
    e.detail.returnValue(1)
  }
})
