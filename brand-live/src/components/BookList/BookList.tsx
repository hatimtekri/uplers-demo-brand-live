import useBooks from "../../hooks/useBooks";
import { IBook } from "../../types/book";
import Book from "../Book/Book";
import SkeletonLoader from "../SkeletonLoader/SkeletonLoader";
import styles from "./BookList.module.scss";

function BookList() {
  const { paginatedData, isLoading } = useBooks();
  console.log("book list - ");
  return (
    <div className={styles.bookListContainer}>
      {isLoading && (
        <>
          <SkeletonLoader key={1} />
          <SkeletonLoader key={2} />
          <SkeletonLoader key={3} />
          <SkeletonLoader key={4} />
          <SkeletonLoader key={5} />
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
