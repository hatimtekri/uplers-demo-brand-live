import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

const LikeButton = ({ isFav }: any) => {
  return isFav ? <FaHeart size={30} /> : <CiHeart size={30} />;
};

export default LikeButton;
