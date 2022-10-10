import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios, { AxiosRequestConfig } from "axios";

export interface RequestResponse<T> {
  response: T | undefined;
  loading: boolean;
}
interface DataFetched<T> {
  averageSession?: T;
  mainData?: T;
  userActivity?: T;
  userPerf?: T;
}
interface DataFetched<T> {
  data?: T;
}
/**
 * Custom hook to fetch data
 * it will give the component who fetch with this hook a loading value to wait for the data
 * @param {Object} axiosParams
 * @returns {{response: Object, loading: boolean}} {response, loading} - Objet that has loading and response as key
 */
const useAxios = <T extends any>(
  axiosParams: AxiosRequestConfig
): RequestResponse<T> => {
  const navigate = useNavigate();
  const [response, setResponse] = useState<T>();
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async (params: AxiosRequestConfig) => {
    try {
      const { data } = await axios.request<DataFetched<T>>(params);
      setResponse(data.data);
    } catch (error) {
      navigate("/notfound");
      throw new Error("Cannot get data");
      // if (axios.isAxiosError(error)) {
      //   console.error("Axios Error with Message: " + error.message);
      //   navigate("/notfound");
      // } else {
      //   console.error(error);
      //   navigate("/notfound");
      // }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(axiosParams);
  }, []); // execute once only
  return { response, loading };
};

export default useAxios;
