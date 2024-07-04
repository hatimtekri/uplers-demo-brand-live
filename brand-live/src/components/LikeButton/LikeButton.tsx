import * as React from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { updateLike } from "../../Redux/slice/like.slice";
import { IRootState } from "../../Redux/store";
import { ILikeButton } from "../../types/book";

import styles from "./LikeButton.module.scss";

const LikeButton = ({ id }: ILikeButton) => {
  const dispatch = useDispatch();
  const isLike = useSelector(
    (state: IRootState) => state.like.likes[id] ?? false
  );
  const updateFav = () => {
    dispatch(updateLike(id));
  };

  return isLike ? (
    <FaHeart className={styles.iconBtn} onClick={updateFav} size={30} />
  ) : (
    <CiHeart className={styles.iconBtn} onClick={updateFav} size={30} />
  );
};

export default React.memo(LikeButton);
