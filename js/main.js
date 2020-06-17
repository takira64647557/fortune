'use strict';

{
  const btn = document.getElementById('btn');

  btn.addEventListener('click', () => {
    // const results = ['Best!', 'Good!', 'Better!', 'Bad'];
    // const results = ['Best!', 'Best!', 'Best!', 'Best', 'Bad'];
    // btn.textContent = results[Math.floor(Math.random() * results.length)];

    const n = Math.random();
    if (n < 0.05) {
      btn.textContent = 'Best!'; //5%
    } else if (n < 0.2) {
      btn.textContent = 'Good!'; //15%
    } else {
      btn.textContent = 'Bad'; //80%
    }

    // switch (n) {
    //   case 0:
    //     btn.textContent = 'Best!';
    //     break;
    //   case 1:
    //     btn.textContent = 'Good!';
    //     break;
    //   case 2:
    //     btn.textContent = 'Bad';
    //     break;

    // }
  });
}