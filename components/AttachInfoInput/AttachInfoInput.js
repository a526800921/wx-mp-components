// components/AttachInfoInput/AttachInfoInput.js
/*
 * @Author: Jafish 
 * @Date: 2018-03-05 12:04:48
 * @Action: 附带信息的输入框
 * @Param: 提供大部分与input原生相同的字段：value、placeholder、type、password、disabled、maxlength、cursorSpacing、focus、confirmType
 * @Param：事件名称也是一样，input事件有一个回调函数returnValue，调用时传入第一个参数 {String} value，调用时返回该数值到输入框内，与input事件自身return效果相同
 */

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    attaValue: {
      type: String,
      value: '数量'
    },
    attaUnits: {
      type: String,
      value: '个'
    },
    value: {
      type: String,
      value: ''
    },
    placeholder: {
      type: String,
      value: '请输入数量'
    },
    type: {
      type: String,
      value: 'text'
    },
    password: {
      type: Boolean,
      value: false
    },
    disabled: {
      type: Boolean,
      value: false
    },
    maxlength: {
      type: Number,
      value: 140
    },
    cursorSpacing: {
      type: Number,
      value: 0
    },
    focus: {
      type: Boolean,
      value: false
    },
    confirmType: {
      type: String,
      value: 'done'
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
    _onInput(e) {
      let returnValue, bestop = false
      this.triggerEvent('input', {value: e.detail.value, returnValue: value => {
        bestop = true
        returnValue = value
      }})

      if (bestop) return returnValue
    },
    _onFocus(e) {
      this.triggerEvent('focus', e.detail.value)
    },
    _onBlur(e) {
      this.triggerEvent('blur', e.detail.value)
    },
    _onConfirm(e) {
      this.triggerEvent('confirm', e)
    }
  }
})
