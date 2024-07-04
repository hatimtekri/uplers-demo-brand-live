
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePageNumber } from "../../Redux/slice/Pagination.slice";
import { IRootState } from "../../Redux/store";
import { IPageNumber } from "../../types/book";
import styles from "./Pagination.module.scss";

function PageNumber({ pageNumber }: IPageNumber) {
  const currentPageNumber = useSelector(
    (state: IRootState) => state.pagination?.pageNumber
  );
  const dispatch = useDispatch();
  const updatePageNumberFunc = useCallback(() => {
    dispatch(updatePageNumber(pageNumber));
  }, [pageNumber]);

  return (
    <div
      onClick={updatePageNumberFunc}
      className={`${styles.pageNumber} ${
        pageNumber === currentPageNumber && styles.selected
      }`}
    >
      {pageNumber}
    </div>
  );
}

export default PageNumber;
