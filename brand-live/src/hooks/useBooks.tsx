import { useQuery } from "@tanstack/react-query";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTotalRecords } from "../Redux/slice/Pagination.slice";
import { IRootState } from "../Redux/store";
import { IBook } from "../types/book";
import { APIEndpoints } from "../utils/APIEndpoints";
import { get } from "../utils/axios/axios";

// Function to fetch books data from the API
const getBooks = async () => {
  try {
    const res = await get(APIEndpoints.getBooks, {});
    const { data } = res;
    return data;
  } catch (e) {
    // Handle error if needed
  }
};

// Function to paginate the array of books
function paginateArray(
  array: IBook[],
  pageSize: number,
  pageNumber: number
): IBook[] {
  const startIndex = (pageNumber - 1) * pageSize;

  if (!array) {
    return [];
  }
  return array.slice(startIndex, startIndex + pageSize);
}

// Custom hook to manage books data
const useBooks = () => {
  const [paginatedData, setPaginatedData] = useState<IBook[]>([]);

  // Get current page number from Redux store
  const currentPageNumber = useSelector(
    (state: IRootState) => state.pagination?.pageNumber
  );

  

  // Fetch books data using react-query
  const query = useQuery({
    queryKey: [APIEndpoints.getBooks],
    queryFn: getBooks,
  });

  const dispatch = useDispatch();

  // Calculate the length of the books data
  const length = useMemo(() => query?.data?.length, [query?.data?.length]);

  // Update total records in Redux store when data length changes
  useEffect(() => {
    dispatch(updateTotalRecords(length));
  }, [length]);

  // Update paginated data when current page number or books data changes
  useEffect(() => {
    setPaginatedData([...paginateArray(query.data, 5, currentPageNumber)]);
  }, [currentPageNumber, query.data]);

  return {
    ...query,
    totalRecords: query.data?.length ?? 0,
    paginatedData,
  };
};

export default useBooks;
