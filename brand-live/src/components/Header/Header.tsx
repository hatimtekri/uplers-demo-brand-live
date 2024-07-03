import { Button } from "antd";
import { useState } from "react";
import AddBookModal from "../AddBookModal/AddBookModal";
import styles from "./Header.module.scss";
const Header = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);

  console.log("header")
  return (
    <div className={styles.hedContainer}>
      Book Store
      <Button className={styles.addBtn} onClick={()=> setIsAddModalOpen(true)} >Add Book</Button>
      {isAddModalOpen && (
        <>
          <AddBookModal
            isModalOpen={isAddModalOpen}
            setIsModalOpen={setIsAddModalOpen}
          />
        </>
      )}
    </div>
  );
};

export default Header;
