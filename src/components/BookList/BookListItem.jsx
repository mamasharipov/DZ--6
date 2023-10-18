import { Button } from "react-bootstrap";
import classes from "./BookList.module.css";
import { api } from "../../api";


const BookListItem = ({ book, onAddToCart }) => {
  const { id, title, author, price, imgUrl } = book;


  return (
    <li className={classes.list_item}>
      <div className={classes.list_item_cover}>
        <img src={imgUrl} alt="book_image" />
      </div>

      <div className={classes.list_item_details}>
        <h4>{title}</h4>
        <div>{author}</div>
        <div className={classes.list_item_price}>{price}$</div>
        <Button onClick={onAddToCart}>Add to Cart</Button>
      </div>
    </li>
  );
};

export default BookListItem;