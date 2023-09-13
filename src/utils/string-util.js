const stringUtil = {
	isEmpty: function (o) {
		if (o === null || o === undefined || o === '') {
			return true;
		}
		return false;
	}
}

export default stringUtil;