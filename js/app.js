
let detail = document.querySelector('.detail');

console.log(detail);

detail.addEventListener('click', function(){
	let mod = document.querySelector('.modal');
	mod.style.display = 'block';

	mod.classList.add('show');

});


document.querySelector('.modal-close').addEventListener('click', function(){
	let mod = document.querySelector('.modal');
	mod.style.display = 'none';

	mod.classList.remove('show');

});


