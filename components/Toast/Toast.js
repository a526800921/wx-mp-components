// components/Toast/Toast.js
// 暂时无用，淡入淡出可考虑
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    toastShow: { // toast显示与隐藏
      type: Boolean,
      value: false,
      observer: '_ShowHideAnimation'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    _toastShow: false, // toast显示隐藏的开关
    _toastAnimation: false, // toast显示隐藏的动画

    iconColor: '#fff', // 图标颜色
    iconSize: 40, // 图标大小
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _ShowHideAnimation(newVal, oldVal) {
      // toast显示隐藏执行的函数
      let toastShow = this.data._toastShow,
        toastAnimation = this.data._toastAnimation
        
      if (toastShow !== toastAnimation && toastShow) return

      // 显示
      if (newVal) return this.setData({
        _toastShow: true,
        _toastAnimation: true
      })

      // 隐藏
      this.setData({
        _toastAnimation: false
      }, () => setTimeout(() => this.setData({
        _toastShow: false
      }), 300))
    }
  }
})
