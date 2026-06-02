document.addEventListener('click', function(event) {
    var link = event.target.closest('a');
    if (link && link.href && !link.href.startsWith('javascript:')) {
        event.preventDefault();
        alert('Страница в разработке');
    }
});