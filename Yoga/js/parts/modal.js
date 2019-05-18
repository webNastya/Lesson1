'use strict';
function modal() {
    let more = document.querySelector('.more'),
		overlay = document.querySelector('.overlay'),
		descriptionBtn = document.querySelectorAll('.description-btn'),
		close = document.querySelector('.popup-close');

	function modalMore() {
		more.addEventListener('click', function() {
			overlay.style.display = 'block';
			this.classList.add('more-splash');
			document.body.style.overflow = 'hidden';
		});

		for (let i = 0; i < descriptionBtn.length; i++) {
			descriptionBtn[i].addEventListener('click', function() {
				overlay.style.display = 'block';
				this.classList.add('more-splash');
				document.body.style.overflow = 'hidden';
			});
		}
	}
	function closeModal() {
		close.addEventListener('click', function(){
			overlay.style.display = 'none';
			more.classList.remove('more-splash');
			document.body.style.overflow = '';
		});
	}
	modalMore();
    closeModal();
}

module.exports = modal;