function toggleButton(selector) {
    const button = document.querySelector(selector);
    if (!button.classList.contains('is-toggled')) {
         QuitarElAnterior();
         button.classList.add('is-toggled');
    } else {
        button.classList.remove('is-toggled');    
    }
}

function QuitarElAnterior() {
    const AnteriorButton = document.querySelector('.is-toggled')
    if(AnteriorButton) {
      AnteriorButton.classList.remove('is-toggled');
    }
}
