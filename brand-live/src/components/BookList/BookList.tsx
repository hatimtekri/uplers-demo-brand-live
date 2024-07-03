import useBooks from "../../hooks/useBooks";
import { IBook } from "../../types/book";
import Book from "../Book/Book";
import SkeletonLoader, { BookListLoader } from "../SkeletonLoader/SkeletonLoader";
import styles from "./BookList.module.scss";

function BookList() {
  const { paginatedData, isLoading } = useBooks();
  console.log("book list - ");
  return (
    <div className={styles.bookListContainer}>
      {isLoading && (
        <>
          <BookListLoader />
        </>
      )}
      {!isLoading && (
        <>
          {paginatedData?.map((book: IBook) => {
            return <Book key={book.id} bookData={book} />;
          })}
        </>
      )}
    </div>
  );
}

export default BookList;