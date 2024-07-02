import { useQueryClient } from "@tanstack/react-query";
import { MdDelete } from "react-icons/md";
import { IBook } from "../../types/book";
import { APIEndpoints } from "../../utils/APIEndpoints";

function DeleteButton({ id }: any) {
  const queryClient = useQueryClient();
  const deleteBook = () => {
    queryClient.setQueryData([APIEndpoints.getBooks], (oldData: IBook[]) => {
      const newData = [...oldData.filter((book: IBook) => book.id !== id)];

      return newData;
    });
  };

  return <MdDelete onClick={deleteBook} size={20} />;
}

export default DeleteButton;
