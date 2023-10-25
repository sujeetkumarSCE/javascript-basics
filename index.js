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

//const second = document.getElementsByClassName('list-group-item')
items[1].style.fontWeight = 'bold';
items[1].style.color = 'green';

// Change font color to green for the second item
const secondItem = document.querySelectorAll('.list-group-item')[1];
if (secondItem) {
  secondItem.style.color = 'green';
}

// Select all odd elements and change their background color to green
const oddItems = document.querySelectorAll('.list-group-item:nth-child(odd)');
oddItems.forEach(item => {
  item.style.backgroundColor = 'green';
});
