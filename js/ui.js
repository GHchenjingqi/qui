/*qui v1.1* */
//checkbox多选盒子
function Check(inputId, labelId) {
	var chc = document.getElementById(inputId);
	var cbox = document.getElementById(labelId);
	var check = document.getElementsByClassName("check-input");
	var check_lable = document.getElementsByClassName("check-label");
	chc.onclick = function() {
		var ct = chc.checked;
		if(ct) {
			if(inputId == "all-check") { //全选
				for(var i = 0; i < check.length; i++) {
					check[i].checked = true;
					check_lable[i].classList.add("checked");
				}
			} else {
				cbox.classList.add("checked");
			}
		} else {
			if(inputId == "all-check") { //全不选
				for(var i = 0; i < check.length; i++) {
					check[i].checked = false;
					check_lable[i].classList.remove("checked");
				}
			} else {
				cbox.classList.remove("checked")
			}
		}
		console.log(inputId + ":" + ct);
	}
}