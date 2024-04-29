import React, {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import axios from "../../api/axios";

const SearchPage = () => {
    const [searchResult, setSearchResult] = useState([]);
    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    };

    let searchTerm = useQuery().get('q');

    useEffect(() => {
        if (searchTerm) {
            fetchSearchMovie(searchTerm);
        }
    });

    const fetchSearchMovie = async (searchTerm) => {
        try {
            const response = await axios.get(`/search/multi?include_adult=false&query=${searchTerm}`);
            console.log(response);
            setSearchResult(response.data.result);
        } catch (error){
            console.log(error);
        }
    };
    return (
        <div>

        </div>
    )
};

export default SearchPage;