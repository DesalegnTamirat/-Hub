import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError, type AxiosRequestConfig } from "axios";



interface DataResponse<T> {
  count: number;
  results: T[];
}


export default function useData<T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: unknown[]) {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false); 

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<DataResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig })
      .then(({data: {results}}) => {
        setData(results);
        setError("");
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      })

    return () => controller.abort();
  }, deps ? [...deps]: []);

  return { data, error,  isLoading };
}