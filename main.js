var form = document.getElementById('addForm');
var itemList =  document.getElementById('items');

// Form submit event
form.addEventListener('submit', addItem);

//Delete event
itemList.addEventListener('click', removeItem);

// Add item
function addItem(e){
    e.preventDefault();
    
    // Get input value
   var newItem = document.getElementById('item').value;

   // create new li element
   var li = document.createElement('li');
   li.className = 'list';
   // Add text node with input value
   li.appendChild(document.createTextNode(newItem));
  
   // Create del button element
   var deleteBtn = document.createElement('button');
   // Add classes with delete button
    deleteBtn.className = 'btn';
    // Append text node
    deleteBtn.appendChild(document.createTextNode('X'));
    //Append button to li
    li.appendChild(deleteBtn);

   
   // Create Edit button element
   var editBtn = document.createElement('button');
   // Add classes with edit button
    editBtn.className = 'btn';
    // Append text node
    editBtn.appendChild(document.createTextNode('Edit'));
    //Append button to li
    li.appendChild(editBtn);


   itemList.appendChild(li);
}

// Remove item
function removeItem(e){
    if(e.target.classList.contains('btn')){
     if(confirm('Are You Sure?')){
       var li = e.target.parentElement; 
       itemList.removeChild(li);
     }
    }
}