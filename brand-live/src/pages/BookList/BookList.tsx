import Book from "../../components/Book/Book";

import useBooks from "../../hooks/useBooks";
import { IBook } from "../../types/book";
import styles from "./BookList.module.scss";
const BookList = () => {
  const { data, isLoading } = useBooks();

  return (
    <div className={styles.bookListContainer}>
      {isLoading && <div>Loading...</div>}
      {!isLoading && (
        <>
          {data?.map((book: IBook) => {
            return <Book key={book.id} bookData={book} />;
          })}
        </>
      )}
    </div>
  );
};

export default BookList;
