import { useState } from "react";
import BookCreate from "./components/BookCreate/BookCreate";
import BookList from "./components/BookList/BookList";

const App = () => {
  // create the main state for the app Books
  const [books, setBooks] = useState([]);

  const handleAddBook = (title) => {
    const id = Math.random();
    setBooks([
      ...books,
      {
        id,
        title,
      },
    ]);
  };

  const handleDelteById = (id) => {
    const newBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(newBooks);
  };

  const edaitTitle = (id, newTitle) => {
    const newBooks = books.map((ele) => {
      if (ele.id === id) {
        return {
          ...ele,
          title: newTitle,
        };
      }
      return ele;
    });
    setBooks(newBooks);
  };
  return (
    <>
      <BookCreate handleAddBook={handleAddBook} />
      <BookList
        books={books}
        handleDelteById={handleDelteById}
        edaitTitle={edaitTitle}
      />
    </>
  );
};

export default App;
