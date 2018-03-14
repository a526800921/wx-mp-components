// components/ExplicitPassword/ExplicitPassword.js
/*
 * @Author: Jafish 
 * @Date: 2018-03-14 15:01:34
 * @Action: 显式的密码输入框
 * @Param: {Number} pwdLength - 密码长度
 * @Param: {Boolean} keyDisable - 是否启用键盘禁用，仅在输入密码完成时禁用键盘，这时返回一个与值一起传入的函数 disable() 用于关闭禁用
 * @Event: {Function} pwdAchieve - 密码达到最大长度时触发的事件，传入一个对象
 * @Event: {Function} pwdForget - 点击忘记密码时触发的事件
 * @PS: 该组件在进入页面节点树时向当前页面注入了一个方法用于显示或隐藏该组件
 *      调用示例： this._explicitPassword({ // 用于显示或隐藏该组件，不传参数时则默认隐藏
                    show: true // 显示或者隐藏
                  })
 */

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    pwdLength: {
      type: Number,
      value: 6
    },

    keyDisable: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    _EPShow: false, // 组件显示隐藏的开关
    _EPAnimation: false, // 组件显示隐藏的动画

    _pwdArr: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '', '0'], // 密码渲染数组

    _pwdNum: 0, // 当前密码数量
    _password: '', // 当前密码

    _keyDisable: false, // 是否禁用键盘
  },

  /* 
   *  在组件实例进入页面节点树时执行
   */
  attached() {
    let pages = getCurrentPages(),
      page = pages[pages.length - 1]

    page._explicitPassword = (config = {}) => {
      // 挂载到当前页面的展示弹窗组件方法
      this._ShowHideAnimation(config.show)
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _onPwdKeyDown(e) {
      // 键盘按下
      let key = e.target.dataset.key,
        password = this.data._password,
        pwdLength = this.properties.pwdLength

      if (!key) return

      if (password.length >= pwdLength && key !== 'remove') return

      password = key === 'remove' ? password.slice(0, -1) : password + key

      this._updatePassword(password)
    },
    _updatePassword(value = '') {
      // 更改密码
      this.setData({
        _password: value,
        _pwdNum: value.length
      }, () => {
        let pwdLength = this.properties.pwdLength

        if (value.length === pwdLength) {
          let keyDisable = this.properties.keyDisable,
            pwdAchieveValue = { value }

          if (keyDisable) {
            this.setData({
              _keyDisable: true
            })

            pwdAchieveValue['disable'] = () => {
              this.setData({
                _keyDisable: false,
              })
            }
          }

          this.triggerEvent('pwdAchieve', pwdAchieveValue)
        }
      })
    },
    _pwdForget() {
      // 忘记密码
      this.triggerEvent('pwdForget')
    },
    _ShowHideAnimation(btstop) {
      // shadow显示隐藏执行的函数
      let shadowShow = this.data._EPShow,
        shadowAnimation = this.data._EPAnimation

      if (shadowShow !== shadowAnimation && shadowShow) return

      // 显示
      if (btstop) return this.setData({
        _EPShow: true,
        _EPAnimation: true
      })

      // 隐藏
      this.setData({
        _EPAnimation: false,
      }, () => setTimeout(() => this.setData({
        _EPShow: false,
        _pwdNum: 0,
        _password: '',
      }), 300))
    },
    _hideShadow(e) {
      // 点击shadow隐藏
      let isShadow = e.target.dataset.isshadow

      isShadow && this._ShowHideAnimation()
    }
  }
})
