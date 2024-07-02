import LikeButton from "../LikeButton/LikeButton";
import styles from "./Book.module.scss";
const Book = ({ bookData }: any) => {
  return (
    <div className={styles.bookContainer}>
      <div className={styles.imageWrapper}>
        <img alt="Book Image" src={bookData.cover}></img>
      </div>
      <div className={styles.informationWrapper}>
        
        <div className={styles.title} >{bookData.title}</div>
        <div className={styles.authName} >{bookData.author}</div>
        <div className={styles.description} >{bookData.description}</div>
        <div className={styles.likebtn} >
        <LikeButton isFav={true} />
        </div>
        
      </div>
    </div>
  );
};

export default Book;
