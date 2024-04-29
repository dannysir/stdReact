import React, {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import axios from "../../api/axios";
import './SearchPage.css'
import {useDebounce} from "../../hooks/useDebounce";

const SearchPage = () => {
    const [searchResult, setSearchResult] = useState([]);
    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    };

    let searchTerm = useQuery().get('q');
    const debouncedSearch = useDebounce(searchTerm, 500);

    useEffect(() => {
        if (debouncedSearch) {
            fetchSearchMovie(debouncedSearch);
        }
    }, [debouncedSearch]);

    const fetchSearchMovie = async (searchTerm) => {
        try {
            const response = await axios.get(`/search/multi?include_adult=false&query=${searchTerm}`);
            setSearchResult(response.data.results);
        } catch (error){
            console.log(error);
        }
    };

    const navigate = useNavigate();

    if (searchResult.length > 0) {
        return (
            <section className={'search-container'}>
                {searchResult.map((movie) => {
                    if (movie.backdrop_path !== null && movie.media_type !== "person") {
                        const movieImageUrl = "https://image.tmdb.org/t/p/w500" + movie.backdrop_path;
                        return (
                            <div className={'movie'} key={movie.id}>
                                <div className={'movie__column-poster'} onClick={() => navigate(`/${movie.id}`)}>
                                    <img src={movieImageUrl} alt='movie' className='movie__posters'/>
                                </div>
                            </div>
                        );
                    }
                })}
            </section>
        );
    } else {
        return (
            <section className='no-results'>
                <div className={'no-result__texts'}>
                    <p>
                        찾고자하는 검색어 "{searchTerm}"에 맞는 영화가 없습니다.
                    </p>
                </div>
            </section>
        )
    }
};

export default SearchPage;