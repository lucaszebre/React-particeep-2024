/* eslint-disable react/jsx-key */
"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import {movies$} from "../data/movies"
import { Movie } from "@/types";
import MovieCard from "@/components/MovieCard";
export default function Home() {

  const [movies,setMovies]=useState<Movie[]>()
  const [IsLoading,setIsLoading]=useState(false)
  const [error,setError]=useState(false)

  useEffect(()=>{
      movies$.then((data)=>{
        setMovies(data);
        setIsLoading(false);
      }).catch((err)=>{
        setIsLoading(false)
        setError(true)
      })
  },[])

  if(IsLoading){
    return (
      <p>...Loading</p>
    )
  }

  if(error){
    return(
      <p>Some error happen...</p>
    )
  }



  function deleteMovie(id:string){
   let newMovies= movies?.filter((value)=>{
      return value.id!==id
    })
    setMovies(newMovies)
  }
  
  return (
   <>
    {movies &&
      movies.map((movie)=>{
        return <MovieCard key={movie.id} id={movie.id} title={movie.title} category={movie.category} deleteMovie={deleteMovie} likes={movie.likes} dislikes={movie.dislikes} posterUrl={movie.posterUrl} />
      })
    }
   </>
  );
}
