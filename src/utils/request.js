import axios from "axios";
import { getToken } from "./auth";
import { Message } from 'element-ui'
const request = axios.create({
	// withCredentials: true,
	baseURL: process.env.VUE_APP_URL,
	timeout: 15000
})

request.interceptors.request.use(config => {
	config.headers['Content-Type'] = 'application/json;charset=utf-8';
	config.headers['token'] = getToken();  // 设置请求头
	return config;
}, error => {
	return Promise.reject(error)
});

// response 拦截器
// 可以在接口响应后统一处理结果
request.interceptors.response.use(
	response => {
		let res = response.data;
		if (res.code !== 200) {
			Message({
				message: res.msg,
				duration: 5 * 1000,
				type: 'error'
			})
			return Promise.reject(new Error(res.msg || 'Error'))
		} else {

			return res
		}
	},
	error => {
		console.log('err' + error) // for debug
		Message({
			message: error.message,
			duration: 5 * 1000,
			type: 'error'
		})
		return Promise.reject(error)
	}
)


export default request
