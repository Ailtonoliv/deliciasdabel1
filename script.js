AOS.init();

// Início do accordion
document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.accordion-button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(otherButton => {
                if (otherButton !== button) {
                    otherButton.classList.remove('active');
                }
            });
            button.classList.toggle('active');
        });
    });
});
// fim do accordion