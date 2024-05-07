import axios from "axios";
import ApiData from "../ApiData";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: ApiData.MovieApiKey,
        language: "ko-KR"
    }
})

export default instance;