import request from "@/utils/request";
const prefix = '/system/user/'

export function listUser (params) {
	return request({
		url: prefix + 'list',
		method: 'get',
		params: params
	})
}
export function saveUser (params) {
	return request({
		url: prefix + 'save',
		method: 'post',
		data: params
	})
}
export function getUserInfo (userId) {
	return request({
		url: prefix + userId,
		method: 'get',

	})
}
export function deleteUser (userIds) {
	return request({
		url: prefix + `delete/${userIds}`,
		method: 'delete',
	})
}
