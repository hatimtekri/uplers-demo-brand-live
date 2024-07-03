import { lazy, Suspense } from "react";

import { BookListLoader } from "../../components/SkeletonLoader/SkeletonLoader";

const BookList = lazy(() => import("../../components/BookList/BookList"));
const Pagination = lazy(() => import("../../components/Pagination/Pagination"));
import styles from "./BookList.module.scss";
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
