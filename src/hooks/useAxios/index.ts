import axios from "axios";
interface AxiosType {
  url: string;
  method?: "GET" | "POST" | "PUT" | "DELETE";
  body?: object;
  param?: object;
}

export const useAxios = () => {
  const request = ({ url, method = "GET", body, param }: AxiosType) => {
    return axios({
        url: `${import.meta.env}/${url}`,
        method,
        headers:{
            'Content-Type': 'application/json'
        },
        data: body,
        params:{
            accsess_token: "",
            ...param
        },
    })
    .then((res) => res.data.data)
    .catch((error) => console.log(error))
  };

  return  request ;
};
