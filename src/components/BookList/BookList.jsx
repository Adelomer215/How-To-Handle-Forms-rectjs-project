import PropTypes from "prop-types";

import BookShow from "./BookShow";
import styled from "styled-components";

const BookList = ({ books, handleDelteById, edaitTitle }) => {
  const Rendersbooks = books.map((ele) => {
    return (
      <BookShow
        handleDelteById={handleDelteById}
        book={ele.title}
        id={ele.id}
        key={ele.id}
        edaitTitle={edaitTitle}
      />
    );
  });
  return <BooksContainer className="container">{Rendersbooks}</BooksContainer>;
};
BookList.propTypes = {
  books: PropTypes.array,
  handleDelteById: PropTypes.func,
  edaitTitle: PropTypes.func,
};

const BooksContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
`;

export default BookList;
