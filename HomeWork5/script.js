document.body.style.background = "skyblue";

console.log(document.querySelector('sector.sector-three > div:last-child > p:last-child'));

console.log(document.querySelector('sector.sector-two .text[important]'));

console.log(document.querySelector('#bold-text'));

console.log(document.querySelector('.image.image-four'));

const fiveElement = document.querySelector('sector.sector-two .text[important]');
console.log(fiveElement.previousElementSibling);
console.log(fiveElement.nextElementSibling);

console.log(document.querySelector('.image.image-one img'));
console.log(document.querySelector('.image.image-two img'));

console.log(document.querySelector('.image.image-three img'));
console.log(document.querySelector('.image.image-four img'));

console.log(document.querySelectorAll('sector.sector-three p'));

console.log(document.querySelectorAll('[id]'));

function getChildElementCount(element) {
    return element.children.length;
}

function setHtmlContent(selector, htmlContent) {
    document.querySelectorAll(selector).forEach(element => {
        element.innerHTML = htmlContent;
    });
}

// setHtmlContent('p', '<strong>Новый текст для всех параграфов</strong>');

function logClickTime(event) {
    const clickTime = new Date();
    console.log(`Клик произошел в ${clickTime.toLocaleTimeString()}`);
}

document.body.addEventListener('click', logClickTime);

function handleClickMeButton() {
    alert('Click!');
}

document.querySelector('button').addEventListener('click', handleClickMeButton);

function handleNumberParagraphClick(event) {
    if (event.target.tagName.toLowerCase() === 'p') {
      const number = event.target.textContent.trim();
      if (!isNaN(number) && number !== '') {
        alert(`${number}`);
      }
    }
  }
  
document.body.addEventListener('click', handleNumberParagraphClick);