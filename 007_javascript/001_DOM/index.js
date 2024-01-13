// const boxes = document.getElementsByTag('div');
// const boxes = document.getElementByClassName('box');
const boxes = document.querySelectorAll('div');
// boxes[0].textContent = 'Hola mundo';
// boxes[0].innerHTML = '<h1>Hello world!</h1>';

const box = document.getElementById('firstBox');
// box.textContent = 'Hello world!';
box.innerHTML = '<u>Hello world!</u>';

// NODES
const newBox = document.createElement('div');
const newText = document.createTextNode('Hello world from the DOM');
newBox.appendChild(newText);
newBox.setAttribute('class', 'box orange');

const container = document.querySelector('.container');
container.appendChild(newBox);


// CHANGE ID AND CLASS
newBox.id = 'first_box';
newBox.className = 'box orange';

console.log(newBox.parentNode);
const father = newBox.parentNode;
// father.insertBefore(newBox, box);

father.replaceChild(newBox,box);

father.removeChild(boxes[3])