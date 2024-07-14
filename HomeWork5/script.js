


let p = document.getElementsByClassName('sector-three')[0]
.lastElementChild
.lastElementChild;

let importantP = document.querySelector('[important]');

let boldText = document.querySelector('#bold-text');
let boldText2 = document.getElementById('bold-text');

let imageFour = document.querySelector('.image-four');
let imageFour2 = document.querySelector('.image.image-four');

let prevElem = importantP.previousElementSibling;
let nextElem = importantP.nextElementSibling;

let vozElems = document.querySelectorAll('[alt^="Воз"]');

let daElem = document.querySelectorAll("[alt$=' Да']");

let sectorThree = document.querySelector('.sector-three');

let elementsWithId = document.querySelectorAll('[id]');




function countChildren(elem) {
    return elem.children.length;
}

function countChildren2(elem) {
    return elem.childElementCount;
}
countChildren(sectorThree); // 3
countChildren2(sectorThree); // 3