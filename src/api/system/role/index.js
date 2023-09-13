import request from "@/utils/request";
const prefix = '/system/role/'

export function listRole (params) {
	return request({
		url: prefix + 'list',
		method: 'get',
		params: params
	})
}
export function saveRole (params) {
	return request({
		url: prefix + 'save',
		method: 'post',
		data: params
	})
}
export function getRoleInfo (roleId) {
	return request({
		url: prefix + roleId,
		method: 'get',

	})
}
export function deleteRole (roleIds) {
	return request({
		url: prefix + `delete/${roleIds}`,
		method: 'delete',
	})
}
