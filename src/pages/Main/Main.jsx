import React from "react";
import { BookList, Cart } from "../../components";

const Main = () => {
  return (
    <main className="container">
      <BookList />
      <Cart />
    </main>
  );
};

export default Main;