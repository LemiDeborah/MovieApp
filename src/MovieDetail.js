import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useState} from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
export default function MovieDetail() {
    const {id} =useParams();
    const [movie, setMovie] = useState([]);
    useEffect(()=> {
        fetch(`https://65f16b90034bdbecc762719b.mockapi.io/Movie/${id}`,{
            method : "GET"
        })
        .then((data) => data.json())
        .then((mv)=> setMovie(mv));
    },[]);
    const ratingStyles={
        color:movie.rating>=8.5?"green":"red"
    };
    const navigate=useNavigate()
  return (
    <div>
    <iframe width="100%" height="900px" src={movie.trailer} title="KUNG FU PANDA 4 | Official Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    <div className="movie-detail-container">
    <div className="movie-spec">
    <h2 className="movie-name">{movie.name}</h2>
    <h3 styles={ratingStyles} className="movie-rating">⭐{movie.rating}</h3>
    </div>
    <p className="movie-summary">{movie.summary}</p>
    </div>
    <Button variant="contained" startIcon={<ArrowBackIosIcon />} onClick={()=>navigate(-1)}>Back</Button>
    </div>
  )
}
