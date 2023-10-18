import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BookListItem from "./BookListItem";
import { fetchAllBooks } from "../../store/creators/booksCreator";

const BookList = () => {
  const { books, isErrorBooks, status } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllBooks());
  }, [dispatch]);

  const cases = {
    // pending: "...loading",
    rejected: isErrorBooks,
    fulfilled: books?.map((el, idx) => (
      <BookListItem book={el} key={`book-${idx}`} />
    )),
  };

  return <ul>{cases[status]}</ul>;
};

export default BookList;