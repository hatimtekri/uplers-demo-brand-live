import { useQueryClient } from "@tanstack/react-query";
import Book from "../../components/Book/Book";
import useBooks from "../../hooks/useBooks";
import styles from './BookList.module.scss'
const BookList = () => {
  const { data } = useBooks();
  const queryClient = useQueryClient();

  const addData = () => {
    queryClient.setQueryData(["books"], (oldData: any) => ([
      ...oldData,
      { id: 9843, title: "testing" },
    ]));
  };
  return (
    <div className={styles.bookListContainer} >
      <button onClick={addData}>add</button>
      {data?.map((book: any) => {
        return <Book bookData={book}  />;
      })}
    </div>
  );
};

export default BookList;
