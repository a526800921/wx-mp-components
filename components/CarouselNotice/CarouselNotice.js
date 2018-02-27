// components/CarouselNotice/CarouselNotice.js
/*
 * @Author: Jafish 
 * @Date: 2018-02-27 15:27:06 
 * @Action: 文字跑马灯，建议文字超出时启用滚动，动画时间8秒
 * @Param: {Boolean} openRoll - 是否开启文字滚动
 * @Param: {String} definedStyle - 自定义最外层style样式，可设置文字继承样式
 * @Param: {String} noticeText - 滚动文字
 */

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    openRoll: { // 是否开启文字滚动
      type: Boolean,
      value: true,
    },
    definedStyle: { // 自定义最外层style样式，字体大小颜色
      type: String,
      value: '',
    },
    noticeText: { // 滚动文字
      type: String,
      value: '非会员用户只有少量查看权限，开通会员获取更多权限吧'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
