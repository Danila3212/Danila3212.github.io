$('.show-large').click(function () {
	$('.news-large').modal('show')
})
$('.sho-large').click(function () {
	$('.new-large').modal('show')
})
$('.sh-large').click(function () {
	$('.ne-large').modal('show')
})
$('.show-large').click(function () {
	$('.news-large').modal('show')
})
$('.show-large').click(function () {
	$('.news-large').modal('show')
})
$('.show-large').click(function () {
	$('.news-large').modal('show')
})
$('.show-large').click(function () {
	$('.news-large').modal('show')
})
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0]
btn.onclick = function () {
	modal.style.display = "block";
}
span.onclick = function () {
	modal.style.display = "none"
}
window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}