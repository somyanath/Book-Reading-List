// Deleting the book using delete button
const list = document.querySelector('.book-list ul');

list.addEventListener('click', function (e) {
  if (e.target.className == 'delete') {
    const li = e.target.parentElement;
    list.removeChild(li);
  }
});


// Adding the new book
const addForm = document.forms['add-book'];

addForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const value = addForm.querySelector('input[type="text"]').value;

  // create elements
  const li = document.createElement('li');
  const bookName = document.createElement('span');
  const deleteBtn = document.createElement('span');

  // assign values
  bookName.textContent = value;
  deleteBtn.textContent = 'delete';

  // add classes
  bookName.classList.add('name');
  deleteBtn.classList.add('delete');

  // append all to the documents
  li.appendChild(bookName);
  li.appendChild(deleteBtn);
  list.appendChild(li);

  addForm.reset();
});

// Checkbox Hide Event
const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', function (e) {
  if (hideBox.checked) {
    list.style.display = 'none';
  } else {
    list.style.display = 'initial';
  }
});
