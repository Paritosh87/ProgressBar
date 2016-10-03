
function Increase(increment) {
	
	var e = document.getElementById('select');
	var selectedvalue = e.options[e.selectedIndex].value;

	var parentWidth = document.getElementById('div'+selectedvalue).clientWidth;
	var childWidth = document.getElementById(selectedvalue).clientWidth;
	var changedWidth = childWidth/parentWidth * 100 + parseInt(increment) +"%";

	var intChangedWidth = parseInt(changedWidth)+"%";

	document.getElementById('percentage'+selectedvalue).innerText = intChangedWidth;
	document.getElementById(selectedvalue).style.width = intChangedWidth;
}

/*
document.getElementById('btnaddstatusbar1').onclick = function() {
document.getElementById('btnsubstatusbar1').onclick = function() {

}*/

function Decrease(decrement) {
	
	var e = document.getElementById('select');
	var selectedvalue = e.options[e.selectedIndex].value;

	var parentWidth = document.getElementById('div'+selectedvalue).clientWidth;
	var childWidth = document.getElementById(selectedvalue).clientWidth;
	var changedWidth = childWidth/parentWidth * 100 - parseInt(decrement) +"%";

	var intChangedWidth = parseInt(changedWidth)+"%";

	if(changedWidth >= "0%") {
		document.getElementById('percentage'+selectedvalue).innerText = intChangedWidth;
		document.getElementById(selectedvalue).style.width = intChangedWidth;
	}
}