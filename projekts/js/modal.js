document.addEventListener('DOMContentLoaded', function() {

    const modal = document.getElementById('modal');
    const closeBtn = document.querySelector('.modal-close');
    const modalForm = document.getElementById('modal-form');

    // Функция открытия (глобальная)
    window.openModal = function() {
        if (modal) {
            modal.style.display = 'flex';
        } else {
            console.log('Модальное окно не найдено');
        }
    }

    function closeModal() {
        if (modal) {
            modal.style.display = 'none';
        }
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    if (modalForm) {
        modalForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Заявка отправлена! Мы свяжемся с вами.');
            closeModal();
            modalForm.reset();
        });
    }

});