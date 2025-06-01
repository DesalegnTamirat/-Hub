import useData from "./useData";

export interface Platform {
  id: number,
  name: string
}

const usePlatform = (endpoint: string) => useData<Platform>(endpoint);

export default usePlatform;