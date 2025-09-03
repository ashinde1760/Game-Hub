import apiClient from "@/services/api-client";
import { useEffect, useState } from "react";


interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState<string>("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    apiClient
      .get<FetchResponse<T>>(endpoint)
      .then((res) => {
        setData(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch games: " + err.message);
        setLoading(false);
      });
  }, []);
  return { data, error, isLoading };
};

export default useData;
