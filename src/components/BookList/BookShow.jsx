import PropTypes from "prop-types";
import { useState } from "react";
import { FiEdit2, FiX } from "react-icons/fi";

import styled from "styled-components";
import BooksEdit from "./BooksEdit";

const BookShow = ({ book, id, handleDelteById, edaitTitle }) => {
  const [edait, setEdait] = useState(false);

  const delteBook = () => {
    handleDelteById(id);
  };

  const handleEdait = () => {
    setEdait((edait) => !edait);
  };

  return (
    <Book>
      <Icons>
        <FiX fontSize="2rem" onClick={delteBook} id={id} cursor="pointer" />
        <FiEdit2
          fontSize="2rem"
          onClick={handleEdait}
          id={id}
          cursor="pointer"
        />
      </Icons>
      <img src={`https://picsum.photos/seed/${id}/300/200`} alt="photo" />
      <h2>{book}</h2>
      {edait ? (
        <BooksEdit edaitTitle={edaitTitle} id={id} handleEdait={handleEdait} />
      ) : null}
    </Book>
  );
};
BookShow.propTypes = {
  book: PropTypes.string,
  id: PropTypes.number,
  handleDelteById: PropTypes.func,
  edaitTitle: PropTypes.func,
};
const Book = styled.div`
  border: 4px solid #eee;
  margin: 1rem auto;
  text-align: center;
  padding: 1rem;
  border-radius: 1rem;
`;
const Icons = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  margin-bottom: 1rem;
  gap: 1rem;
`;
export default BookShow;
