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

/**
 * Custom hook to fetch data
 * it will give the component who fetch with this hook a loading value to wait for the data
 * @param {Object} axiosParams
 * @returns {{response: Object, loading: boolean}} {response, loading} - Objet that has loading and response as key
 */
const useAxios = <T extends any>(
  axiosParams: AxiosRequestConfig,
  dataType: string
): RequestResponse<T> => {
  const navigate = useNavigate();
  const [response, setResponse] = useState<T>();
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async (params: AxiosRequestConfig) => {
    try {
      const { data } = await axios.request<DataFetched<T>>(params);
      setResponse(data[dataType as keyof typeof data]);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Axios Error with Message: " + error.message);
        navigate("/404");
      } else {
        console.error(error);
        navigate("/404");
      }
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
