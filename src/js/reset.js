'use strict';

// Variables asociadas al botón reset
const form = document.querySelector('.js_form');
const resetButton = document.querySelector('.js_reset');

// Funciones con una única acción

function resetCardFields() {
  cardName.innerHTML = 'Nombre Apellidos';
  cardJob.innerHTML = 'Front-end developer';
  cardPhone.href = '';
  cardEmail.href = '';
  cardLinkedin.href = '';
  cardGithub.href = '';
  cardImage.style = '';
  cardImagePrev.style = '';
}

function resetCreateCard() {
  buttonCreateCard.classList.remove('buttonCreateCard--sent');
  containerDone.classList.add('collapsed');
}

// Función para resetear las paletas de colores
function resetPalettes() {
  previewContainerCard.classList.add('palette-1');
  previewContainerCard.classList.remove('palette-2');
  previewContainerCard.classList.remove('palette-3');
}

// Función manejadora de reset
function handleClickButtonReset() {
  // Reset de los inputs del formulario (incluyendo las paletas que vuelven al valor predeterminado asignando el atributo 'checked' a la paleta 1)
  form.reset();

  // Reset de los campos de las tarjeta preview
  resetCardFields();

  // Reset de Crear tarjeta
  resetCreateCard();

  // Reset de las paletas
  resetPalettes();
}

// Evento reset haciendo click en el botón reset
resetButton.addEventListener('click', handleClickButtonReset);
