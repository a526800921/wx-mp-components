//index.js
//获取应用实例
let app = getApp().globalData
let store = require('../../store.js')

Page({
  data: {
    openRoll: true,
  },
  onLoad() {

  },
  onReady() {

  },
  onShowHide() {
    // 点击隐藏显示切换
    this._explicitPassword({
      show: true
    })
  },
  onReachBottom(e) {
    console.log('触底')
  },
  uploads(e) {
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
  },
  pwdAchieve(e) {
    console.log('密码', e.detail.value)
    // setTimeout(() => e.detail.disable(), 2000)
  },
  pwdForget() {
    console.log('忘记密码')
  } 
})
