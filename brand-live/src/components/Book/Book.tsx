import moment from "moment";
import * as React from "react";
import { IBookComponent } from "../../types/book";
import DeleteButton from "../DeleteButton/DeleteButton";
import LikeButton from "../LikeButton/LikeButton";
import styles from "./Book.module.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import EditButton from "../EditButton/EditButton";

const Book = ({ bookData }: IBookComponent) => {
  return (
    <div className={styles.bookContainer}>
      <div className={styles.imageWrapper}>
        <LazyLoadImage alt="Book Image" src={bookData.cover} />
      </div>
      <div className={styles.informationWrapper}>
        <div className={styles.title}>{bookData.title}</div>
        <div className={styles.authName}>
          by <span>{bookData.author}</span>
        </div>
        <div className={styles.description}>{bookData.description}</div>
        <div className={styles.pubDate}>
          {moment(bookData.publicationDate).format("MM/DD/YYYY")}
        </div>
        <div className={styles.likebtn}>
          <LikeButton key={bookData.id} id={bookData.id} />
        </div>
        {bookData.isNewBook && (
          <>
            <div className={styles.deleteBtn}>
              <DeleteButton key={bookData.id} id={bookData.id} />
            </div>
            <div className={styles.editBtn}>
              <EditButton data={bookData} key={bookData.id} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default React.memo(Book);
