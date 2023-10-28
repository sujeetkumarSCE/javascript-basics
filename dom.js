var itemList = document.querySelector('#items');
//parentElement
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = 'yellow';
//childNodes;
console.log(itemList.childNodes);
console.log(itemList.parentElement.childNodes);
itemList.children[0].style.backgroundColor = 'black';

//firstElementChild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'How are you ?';
itemList.children[0].style.backgroundColor = 'brown';

//lastElementChild
itemList.lastElementChild.textContent = 'I am fine. Thank you !';

//add Hello before item listener
let son = document.getElementsByClassName('title');
son[0].textContent = 'Hello item Listener';  

// add hello word before item 1
itemList.firstElementChild.textContent = 'Hello, How are you ?';

// previous Sibling
console.log(itemList.previousSibling);

// previous Element Sibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.backgroundColor = 'green';

// create new element
var newDiv = document.createElement('div');

// add a new class
newDiv.className = 'hello';
// add a new id
newDiv.id = 'hello1';

// add attribute
newDiv.setAttribute('title' ,'Hello Div');
console.log(newDiv);

var newDivText = document.createTextNode('Hello World !');
newDiv.appendChild(newDivText);
console.log(newDiv);
