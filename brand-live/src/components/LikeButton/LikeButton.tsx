import { useQueryClient } from "@tanstack/react-query";
import * as React from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { IBook, ILikeButton } from "../../types/book";
import { APIEndpoints } from "../../utils/APIEndpoints";
import styles from "./LikeButton.module.scss";

const LikeButton = ({ isFav, id }: ILikeButton) => {
  const queryClient = useQueryClient();

  const updateFav = (flag: boolean) => {
    queryClient.setQueryData([APIEndpoints.getBooks], (oldData: IBook[]) => {
      const newData = [...oldData];

      const index = oldData.findIndex((book: IBook) => book.id === id);

      newData[index] = {
        ...newData[index],
        isFav: flag,
      };

      return newData;
    });
  };
console.log("like button - ",id)
  return isFav ? (
    <FaHeart
      className={styles.iconBtn}
      onClick={() => updateFav(false)}
      size={30}
    />
  ) : (
    <CiHeart
      className={styles.iconBtn}
      onClick={() => updateFav(true)}
      size={30}
    />
  );
};

export default React.memo(LikeButton);
