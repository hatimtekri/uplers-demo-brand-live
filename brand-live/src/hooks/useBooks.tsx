import { useQuery } from "@tanstack/react-query";
import { APIEndpoints } from "../utils/APIEndpoints";
import { get } from "../utils/axios/axios";

const getBooks = async () => {
  try {
    const res = await get(APIEndpoints.getBooks, {});
    const { data } = res;
    return data;
  } catch (e) {}
};
const useBooks = () => {
  const query = useQuery({
    queryKey: [APIEndpoints.getBooks],
    queryFn: getBooks,
  });
  return {
    ...query,
  };
};

export default useBooks;
