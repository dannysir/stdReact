import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "../../api/axios";

const DetailPage = () => {
    let {movieId} = useParams();
    const [movie, setMovie] = useState({});

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`/movie/${movieId}`);
                // console.log('response', response);
                setMovie(response.data);
            } catch (error) {
                console.error("에러가 났네", error);
            }
        }
        fetchData();
    }, [movieId]);

    if (!movie || Object.keys(movie).length === 0) return null;

    return (
        <section>
            <img className='modal__poster-img'
                 src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                 alt="img"
            />
        </section>
    );
};

export default DetailPage;