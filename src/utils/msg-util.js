import { Message } from 'element-ui';
const msgUtil = {
	success: function (m) {
		Message({
			showClose: true,
			message: m,
			type: 'success'
		});
	}
}
export default msgUtil;