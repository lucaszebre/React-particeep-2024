/* eslint-disable react/jsx-key */
"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import {movies$} from "../data/movies"
import { Movie } from "@/types";
import MovieCard from "@/components/MovieCard";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
export default function Home() {

  const [movies,setMovies]=useState<Movie[]>()
  const [categorie,setCategorie]=useState<string>("novalue")
  const [amount,setAmount]=useState<number>(10)
  const [ListCategorie,setListCategorie]=useState<string[]>()
  const [IsLoading,setIsLoading]=useState(false)
  const [error,setError]=useState(false)


  // at the mount we fetch all the movies 
  useEffect(()=>{
      movies$.then((data)=>{
        setMovies(data);
        setIsLoading(false);
      }).catch((err)=>{
        setIsLoading(false)
        setError(true)
      })
  },[])



  //  if we delete a movies we need update the list of categorie
  useEffect(()=>{
    if(movies){
      let CategorieList=  movies?.map((movie)=>{
        return movie.category
      })

      if(CategorieList){
        const filteredArray = CategorieList.filter(function(ele, pos) {
          return CategorieList.indexOf(ele) == pos;
        })

        setListCategorie(filteredArray)
      }
    }
  },[movies])

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
  
  function changeCategorie(categorie:string){
    setCategorie(categorie)
  } 
  
  function changeAmount(amount:string){
    let AmountNumber = parseInt(amount)
    setAmount(AmountNumber)
  }




  return (
   <>
   <Select onValueChange={changeCategorie}>
    <SelectTrigger className="w-[180px]">
      <SelectValue placeholder="Categorie" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value={"novalue"}>No categorie</SelectItem>
      {ListCategorie &&
          ListCategorie.map((categorie)=>{
            return     <SelectItem value={categorie}>{categorie}</SelectItem>
    
          })
      }
    </SelectContent>
</Select> 

<Select onValueChange={changeAmount}>
    <SelectTrigger className="w-[180px]">
      <SelectValue placeholder="Amout movie" />
    </SelectTrigger>
    <SelectContent>
          <SelectItem value={"100"}>No Amount</SelectItem>
          <SelectItem  value="4">4</SelectItem>
          <SelectItem value="8">8</SelectItem>
    
    </SelectContent>
</Select>

{
  categorie=="novalue" &&
  <>
   {movies &&
      movies.map((movie)=>{
        return <MovieCard key={movie.id} id={movie.id} title={movie.title} category={movie.category} deleteMovie={deleteMovie} likes={movie.likes} dislikes={movie.dislikes} posterUrl={movie.posterUrl} />
      }).slice(0,amount!)
    }
  </>
  ||
  <>
       {movies &&
      movies.filter((movie:Movie)=>{
        return movie.category == categorie
      }).map((movie)=>{
        return <MovieCard key={movie.id} id={movie.id} title={movie.title} category={movie.category} deleteMovie={deleteMovie} likes={movie.likes} dislikes={movie.dislikes} posterUrl={movie.posterUrl} />
      }).slice(0,amount)
    }
  </>
}
   
   </>
  );
}
