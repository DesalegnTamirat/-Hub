import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";



interface DataResponse<T> {
  count: number;
  results: T[];
}


export default function useData<T>(endpoint: string) {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true); 

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<DataResponse<T>>(endpoint, { signal: controller.signal })
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
  }, []);

  return { data, error,  isLoading };
}