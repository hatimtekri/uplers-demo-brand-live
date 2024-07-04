import { lazy, Suspense } from "react";
import { BookListLoader } from "../../components/SkeletonLoader/SkeletonLoader";
import styles from "./BookList.module.scss";


const BookList = lazy(() => import("../../components/BookList/BookList"));
const Pagination = lazy(() => import("../../components/Pagination/Pagination"));

const BookListPage = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <Suspense fallback={<BookListLoader />}>
          <BookList />
        </Suspense>
        <Suspense fallback={"Loading Pagination..."}>
          <Pagination />
        </Suspense>
      </div>
    </>
  );
};

export default BookListPage;
