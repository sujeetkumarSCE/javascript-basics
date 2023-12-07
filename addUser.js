function submitForm() {
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;

    // Do something with the form values (e.g., add to the list)
    var userList = document.getElementById('userList');
    var listItem = document.createElement('li');
    listItem.textContent = 'Name: ' + name + ', Email: ' + email + ', Phone: ' + phone;
    userList.appendChild(listItem);

    // Save user details to local storage
    saveToLocalStorage({ name, email, phone });

    // Clear the form fields using form ID
    document.getElementById('userForm').reset();
}

function saveToLocalStorage(user) {
    // Retrieve existing users from local storage
    var existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Add the new user to the array
    existingUsers.push(user);

    // Save the updated array back to local storage
    localStorage.setItem('users', JSON.stringify(existingUsers));
}
