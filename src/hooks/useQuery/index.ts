import { useQuery } from "@tanstack/react-query";
import { useAxios } from "../useAxios";

interface QueryType {
  pathname: string;
  url: string;
  params?: object;
}

export const useQueryHandler = ({ pathname, url, params }: QueryType) => {
  const axios = useAxios();
  return useQuery({
    queryKey: [pathname],
    //queryKey: [pathname],
    queryFn: () => axios({ url, params }),
  });
};
