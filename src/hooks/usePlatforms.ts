import platforms from "@/data/platforms";
import useData from "./useData";

interface Platform{
    id: number;
    name: string;
    slug: string;
}

const usePlatforms = () => ({data: platforms.results, isLoading: false, error: null})
//const usePlatforms = () => useData<Platform>("/platforms/lists/parents")

export default usePlatforms;