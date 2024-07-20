// const wrapper = document.querySelector('.wrapper');

// wrapper.addEventListener('click', (event) => {
//   if (event.target.classList.contains('box')) {
//     const box = event.target;
//     const rect = box.getBoundingClientRect();

//     console.log('Координаты клика:', {
//       x: event.clientX,
//       y: event.clientY
//     });

//     console.log('Размеры прямоугольника:', {
//       width: rect.width,
//       height: rect.height
//     });

//     console.log('Заголовок прямоугольника:', box.dataset.title);
//   }
// });

const wrapper = document.querySelector('.wrapper');
wrapper.addEventListener('click', (event) => {
    if (event.target.classList.contains('box')) {
        const box = event.target;
        const rect = box.getBoundingClientRect();

    console.log("Координаты клика: ", {
        x: event.clientX,
        y: event.clientY
    });
    console.log('Размеры прямоугольника:', {
      width: rect.width,
      height: rect.height
    });

    console.log('Заголовок прямоугольника:', box.dataset.title);
    }

});