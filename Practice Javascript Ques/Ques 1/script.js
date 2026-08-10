let books = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    borrowed: true,
  },
  {
    id: 2,
    title: "The Alchemist",
    author: "Paulo Coelho",
    borrowed: false,
  },
  {
    id: 3,
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    borrowed: true,
  },
];

function addBook(title, author) {
  books.push({
    id: books.length + 1,
    title: title,
    author: author,
    borrowed: false,
  });
}

function borrowBook(id) {
  for (let book of books) {
    if (book.id === id) {
      if (book.borrowed === false) {
        book.borrowed = true;
        return `id:'${book.id}', title:'${book.title}' : borrowed`;
      } else {
        return `id:'${book.id}', title:'${book.title}' = cannot borrow`;
      }
    }
  }
  return "Book not found";
}

function returnBook(id) {
  for (let book of books) {
    if (book.id === id) {
      if (book.borrowed === true) {
        book.borrowed = false;
        return `id:'${book.id}', title:'${book.title}' : returned`;
      } else {
        return `id:'${book.id}', title:'${book.title}' : not borrowed`;
      }
    }
  }
  return "Book not found";
}

function showAvailableBooks(books) {
  for (let key of books) {
    let ans = books.filter((book) => {
      return book.borrowed === false;
    });
    return ans;
  }
}

addBook("Deep Work", "Cal Newport");
addBook("Harry Potter", "J.K Rowling");
addBook("The Great Gatsby ", "F. Scott Fitzgerald");
console.log(borrowBook(3));
console.log(borrowBook(6));
console.log(borrowBook(5));
console.log(returnBook(6));
