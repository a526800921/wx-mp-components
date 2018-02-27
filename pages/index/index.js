//index.js
//获取应用实例
const app = getApp()

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
  }
})
