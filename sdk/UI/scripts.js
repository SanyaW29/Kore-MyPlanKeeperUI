document.addEventListener("DOMContentLoaded", function() {
    const arrows = document.querySelectorAll('.arrow-link');
    arrows.forEach(arrow => {
        arrow.addEventListener('click', function() {
            window.location.href = 'chat.html';
        });
    });
});
    