/**
 * 封装小程序api
 */

/**
 * 跳转页面api
 */
export function toTargetRoute(pageName, urlParams) {
	let targetPage = `/pages/${pageName}/index`
	if (urlParams) {
		targetPage += "?urlParams=" + JSON.stringify(urlParams)
	}
	uni.navigateTo({
		url: targetPage
	})
}

export default {
	toTargetRoute
}