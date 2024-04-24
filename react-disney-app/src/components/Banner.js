import React, {useEffect, useState} from "react";
import axios from "../api/axios";
import requests from "../api/request"
import "./Banner.css"
const Banner = () => {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        fetchDate();
    }, []);

    const fetchDate = async () =>{
        const response = await axios.get(requests.fetchNowPlaying);
        const RandomMovieId = response.data.results[
            Math.floor(Math.random() * response.data.results.length)
            ].id
        const { data:movieDetail } = await axios.get(`movie/${RandomMovieId}`,{
            params: { append_to_response: "videos" }
        })
        setMovie(movieDetail);
        console.log(movieDetail);
    }

    return (
        <header
            className='banner'
            style={{
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
                backgroundPosition: "top center",
                backgroundSize: "cover",
            }}
        >
            <div className='banner_contents'>
                <h1 className='banner_title'>
                    {movie.title || movie.name || movie.original_name}
                </h1>

                <div className='banner_buttons'>
                    {movie?.videos?.results[0]?.key &&
                    <button
                        className="banner_button play">
                        Play
                    </button>
                    }
                </div>
                <p className='banner_description'>
                    {movie.overview}
                </p>
            </div>
            <div className='banner--fadeBottom'/>
        </header>
    );
};
export default Banner;
