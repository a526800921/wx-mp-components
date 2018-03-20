// components/AttachInfoInput/AttachInfoInput.js
/*
 * @Author: Jafish 
 * @Date: 2018-03-05 12:04:48
 * @Action: 附带信息的输入框
 * @Param: {String} attaValue - 自定义左侧名称
 * @Param: {String} attaUnits - 自定义右侧名称
 * @Param: {Boolean} validation - 是否开启验证，开启时右侧名称无效
 * @Param: {Boolean} pass - 验证是否成功
 * @Param: 提供大部分与input原生相同的字段：value、placeholder、type、password、disabled、maxlength、cursorSpacing、focus、confirmType   (name不可用，form无法穿透组件提取name)
 * @Param：事件名称也是一样，input事件有一个回调函数returnValue，调用时传入第一个参数 {String} value，调用时返回该数值到输入框内，与input事件自身return效果相同
 */

Component({
  /**
   * 表单控件，问题很大
    */
  // behaviors: ['wx://form-field'],
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
    validation: {
      type: Boolean,
      value: false
    },
    pass: {
      type: Boolean,
      value: true
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
    _onceBulr: true, // 第一次输入
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _onInput(e) {
      let returnValue, bestop = false
      this.triggerEvent('input', {
        value: e.detail.value, returnValue: value => {
          bestop = true
          returnValue = value
        }
      })

      if (bestop) return returnValue
    },
    _onFocus(e) {
      this.triggerEvent('focus', e.detail.value)
    },
    _onBlur(e) {
      this.setData({
        _onceBulr: false
      })
      this.triggerEvent('blur', e.detail.value)
    },
    _onConfirm(e) {
      this.triggerEvent('confirm', e)
    }
  }
})
