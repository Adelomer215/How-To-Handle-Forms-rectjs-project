import { useState } from "react";
import PropTypes from "prop-types";

const BooksEdit = ({ edaitTitle, id, handleEdait }) => {
  const [newTitle, setNewTitle] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    edaitTitle(id, newTitle);
    handleEdait();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
        autoFocus
      />
      <button type="submit">save</button>
    </form>
  );
};
BooksEdit.propTypes = {
  id: PropTypes.number,
  edaitTitle: PropTypes.func,
  handleEdait: PropTypes.func,
};
export default BooksEdit;
