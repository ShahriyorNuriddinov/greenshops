import { useQuery } from "@tanstack/react-query"
import { useAxios } from "../useAxios"
  
interface useQuaryTypes{
    url:string;
    pathname: string;
    param?:object
}
export const useQuaryHandler = ({url, pathname,param}: useQuaryTypes) =>{
    const axios = useAxios();
    return useQuery({
        queryKey: [pathname],
        queryFn: () => axios({url ,param})
    });
};
