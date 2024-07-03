import { useState } from "react";
import { MdEdit } from "react-icons/md";
import { IEditButton } from "../../types/book";
import EditBookModal from "../EditBookModal/EditBookModal";

function EditButton({ data }: IEditButton) {
  const [isEditBookModalOpen, setIsEditBookModalOpen] = useState(false);

  const editBook = () => {
    setIsEditBookModalOpen(true);
  };

  return (
    <>
      {isEditBookModalOpen && (
        <>
          <EditBookModal
            isModalOpen={isEditBookModalOpen}
            setIsModalOpen={setIsEditBookModalOpen}
            data={data}
          />
        </>
      )}

      <MdEdit onClick={editBook} size={20} />
    </>
  );
}

export default  EditButton;
