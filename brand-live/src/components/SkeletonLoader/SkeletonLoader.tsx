import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "./SkeletonLoader.module.scss";

function SkeletonLoader() {
  return (
    <div className={styles.wrapper}>
      <h1>
        <Skeleton />
      </h1>
      <h6>
        <Skeleton />
      </h6>
      <Skeleton count={6} />
    </div>
  );
}

export const BookListLoader = () => {
  return (
    <>
      <SkeletonLoader key={1} />
      <SkeletonLoader key={2} />
      <SkeletonLoader key={3} />
      <SkeletonLoader key={4} />
      <SkeletonLoader key={5} />
    </>
  );
};

export default SkeletonLoader;
