import request from "@/utils/request";
const prefix = '/system/menu/'

export function listMenu (params) {
	return request({
		url: prefix + 'list',
		method: 'get',
		params: params
	})
}
export function saveMenu (params) {
	return request({
		url: prefix + 'save',
		method: 'post',
		data: params
	})
}
export function getMenuInfo (menuId) {
	return request({
		url: prefix + menuId,
		method: 'get',

	})
}
export function deleteMenu (menuIds) {
	return request({
		url: prefix + `delete/${menuIds}`,
		method: 'delete',
	})
}
