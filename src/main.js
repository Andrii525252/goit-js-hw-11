
// import { getImagesByQuery } from './js/pixabay-api.js';
// import {
//   createGallery,
//   clearGallery,
//   showLoader,
//   hideLoader,
// } from './js/render-functions.js';
// import iziToast from 'izitoast';
// import 'izitoast/dist/css/iziToast.min.css';
// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';

// const form = document.querySelector('.form');
// const input = form.querySelector('input[name="search-text"]');
// const galleryContainer = document.querySelector('.gallery');

// let lightbox = new SimpleLightbox('.gallery a');

// form.addEventListener('submit', async event => {
//   event.preventDefault();
//   const query = input.value.trim();

//   if (!query) {
//     iziToast.warning({
//       message: 'Будь ласка, введіть пошуковий запит.',
//       position: 'topRight',
//     });
//     return;
//   }

//   clearGallery();
//   showLoader();

//   try {
//     const data = await getImagesByQuery(query);
//     hideLoader();

//     if (!data.hits.length) {
//       iziToast.info({
//         message: 'На жаль, зображень за вашим запитом не знайдено.',
//         position: 'topRight',
//       });
//       return;
//     }

//     createGallery(data.hits);

//     lightbox.refresh();

//     lightbox.on('closed.simplelightbox', () => {
//   document.body.classList.remove('sl-open');
//   document.body.style.overflow = 'auto';
// });

//   } catch (error) {
//     hideLoader();
//     iziToast.error({
//       message: 'Сталася помилка. Спробуйте пізніше.',
//       position: 'topRight',
//     });
//     console.error(error);
//   }
// });


// main.js
import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// ── єдиний екземпляр lightbox ─────────────────────────────
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

// слухач закриття — один раз
lightbox.on('closed.simplelightbox', () => {
  // SimpleLightbox сам видаляє sl-open, але
  // повернемо overflow, якщо треба:
  document.body.style.overflow = 'auto';
});

// ── форма пошуку ───────────────────────────────────────────
const form = document.querySelector('.form');
const input = form.querySelector('input[name="search-text"]');

form.addEventListener('submit', async e => {
  e.preventDefault();
  const query = input.value.trim();

  if (!query) {
    iziToast.warning({
      message: 'Будь ласка, введіть пошуковий запит.',
      position: 'topRight',
    });
    return;
  }

  clearGallery();
  showLoader();

  try {
    const data = await getImagesByQuery(query);
    hideLoader();

    if (!data.hits.length) {
      iziToast.info({
        message: 'На жаль, зображень за вашим запитом не знайдено.',
        position: 'topRight',
      });
      return;
    }

    createGallery(data.hits);
    lightbox.refresh();          // просто оновлюємо

  } catch (err) {
    hideLoader();
    iziToast.error({
      message: 'Сталася помилка. Спробуйте пізніше.',
      position: 'topRight',
    });
    console.error(err);
  }
});
