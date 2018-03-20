// components/RoundImage/RoundImage.js
/*
 * @Author: Jafish 
 * @Date: 2018-02-28 17:23:18 
 * @Action: 圆形图片
 * @Param: {String} imageSrc - 图片路径
 * @Param: {Number} imageSize - 图片尺寸（单位rpx）
 * @Param: {String} class-c - 组件class样式
 */

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    imageSrc: { // 图片路径
      type: String,
      value: 'https://avatars2.githubusercontent.com/u/26155877?s=200'
    },
    imageSize: { // 图片尺寸
      type: Number,
      value: 0,
    }
  },
  externalClasses: ['class-c'],

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
