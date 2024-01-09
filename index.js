function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  function fetchData() {
    fetch('https://anapioficeandfire.com/api/books')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        // Further code logic here
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  
  // Call the function to initiate the fetch request
  fetchData()
.then((resp) => resp.json())
    .then((data) => {
      console.log(data);
      // Further code logic here
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});  // Close the DOMContentLoaded callback