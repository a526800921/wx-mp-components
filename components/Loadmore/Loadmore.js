// components/Loadmore/Loadmore.js
/*
 * @Author: Jafish 
 * @Date: 2018-03-19 16:47:17 
 * @Action: 正在加载-暂无数据
 * @Param: {Number} loadmore - 组件状态，0 -> 完成，1 -> 暂无数据， 2 -> 加载中
 * @Param: {String} nodataStr - 暂无数据的替换字段
 */

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    loadmore: { // 状态
      type: Number,
      value: 0
    },
    nodataStr: { // 暂无数据的替换字段
      type: String,
      value: ''
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
