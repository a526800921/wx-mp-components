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

 ![显式的密码输入框](https://raw.githubusercontent.com/a526800921/wx-mp-components/master/github_image/ExplicitPassword.jpg)