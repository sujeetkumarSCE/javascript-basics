var items = document.getElementsByClassName('list-group-item');
items[2].style.backgroundColor = 'green';

const element = document.getElementById("items");
element.style.fontWeight = "bold";

const list = document.createElement('li');
list.textContent = 'This is a list';

const ol = document.createElement('ol');
const li = document.createElement('li');
li.textContent = 'This is list 4';
ol.appendChild(li);
document.body.appendChild(ol);

li.style.backgroundColor = 'red';