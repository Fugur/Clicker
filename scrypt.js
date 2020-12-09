
window.addEventListener('DOMContentLoaded', function() {
	let a = document.querySelectorAll('.block');
	[].forEach.call(document.querySelectorAll('.btn'), function(input,i) {
			input.addEventListener('click', function() {
				a[i].innerHTML -= -1
			});
		});
	});
	