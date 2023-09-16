export function handleTree (list) {
	var tree = [];
	var childListMap = {};

	for (let d of list) {

		if (childListMap[d.menuId] == null) {
			childListMap[d.menuId] = [];
		}
		if (d.parentId == null) {
			tree.push(d);
		}
		if (d.parentId != null) {
			childListMap[d.parentId].push(d);
		}

	}
	appendChild(tree);

	function appendChild (data) {
		for (let t of data) {
			if (childListMap[t.menuId] != null) {
				t.children = childListMap[t.menuId];
				appendChild(t.children);
			}
		}

	}
	return tree;

}
