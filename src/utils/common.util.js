/**
 * 调用函数
 * @params func传入函数
 * @params res函数参数
 */
function callFun(func, res) {
    if (func) {
        if (res) {
            func(res)
        } else {
            func()
        }
    }
}