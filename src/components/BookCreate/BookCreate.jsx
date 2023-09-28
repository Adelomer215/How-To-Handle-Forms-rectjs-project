import PropTypes from "prop-types";
import { useRef } from "react";
import styled from "styled-components";

const BookCreate = ({ handleAddBook }) => {
  const titleRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (titleRef.current.value.length == 0) {
      return;
    }

    handleAddBook(titleRef.current.value);

    titleRef.current.value = "";
  };
  return (
    <Header>
      <div className="container">
        <h3>add a book</h3>
        <Form onSubmit={handleSubmit}>
          <label htmlFor="newBook">Ttile</label>
          <input
            type="text"
            id="newBook"
            placeholder="add title"
            ref={titleRef}
          />
          <button type="submit">add book</button>
        </Form>
      </div>
    </Header>
  );
};
BookCreate.propTypes = {
  handleAddBook: PropTypes.func,
};

const Header = styled.header`
  padding: 1rem;
  h3 {
    text-align: center;
    font-size: 1.6rem;
    text-transform: uppercase;
  }
  background-color: #09f;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  input {
    display: block;
    width: 100%;
    border: none;
    border-radius: 0.2rem;
    padding: 0.2rem 1rem;
    min-height: 2rem;
    font-size: 1.5rem;
    outline: none;
  }
  button {
    padding: 0.3rem 1.6rem;
    border: none;
    border-radius: 0.2rem;
    cursor: pointer;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;
export default BookCreate;
