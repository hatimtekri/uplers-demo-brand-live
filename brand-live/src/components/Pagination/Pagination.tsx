import React from "react";
import { useSelector } from "react-redux";
import { IRootState } from "../../Redux/store";
import PageNumber from "./PageNumber";
import styles from "./Pagination.module.scss";
function createArray(num: number) {
  return Array.from({ length: num }, (_, i) => i + 1);
}
function Pagination() {
  const totalRecords = useSelector(
    (state: IRootState) => state.pagination?.totalRecords
  );

  return (
    <div className={styles.pagination}>
      {createArray(Math.ceil(totalRecords / 5)).map((_, index) => {
        return <PageNumber key={index + 1} pageNumber={index + 1} />;
      })}
    </div>
  );
}

export default React.memo(Pagination);
