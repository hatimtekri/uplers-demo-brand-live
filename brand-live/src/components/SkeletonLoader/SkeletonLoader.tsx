import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import styles from './SkeletonLoader.module.scss'

function SkeletonLoader() {
  return (
    <div className={styles.wrapper} >
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

export default SkeletonLoader;
