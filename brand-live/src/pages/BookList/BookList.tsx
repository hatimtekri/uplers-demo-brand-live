import BookList from "../../components/BookList/BookList";
import Pagination from "../../components/Pagination/Pagination";

import styles from "./BookList.module.scss";
const BookListPage = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <BookList />
        <Pagination />
      </div>
    </>
  );
};

export default BookListPage;
