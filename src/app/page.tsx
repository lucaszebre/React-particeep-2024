/* eslint-disable react/jsx-key */
"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import {movies$} from "../data/movies"
import { Movie } from "@/types";
import MovieCard from "@/components/MovieCard";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Pagination, PaginationContent, PaginationItem, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
export default function Home() {

  const [movies,setMovies]=useState<Movie[]>([])
  const [categorie,setCategorie]=useState<string>("novalue")
  const [amount,setAmount]=useState<number>(10)
  const [pagination,setPagination]=useState<number>(0)
  const [ListCategorie,setListCategorie]=useState<string[]>()
  const [isLoading,setIsLoading]=useState(true)
  const [error,setError]=useState(false)


  // at the mount of components we fetch all the movies 
  useEffect(()=>{
    setIsLoading(true)
      movies$.then((data )=>{
        setMovies( data as Movie[]);
        setIsLoading(false);
        setAmount(data.length)

      }).catch((err)=>{
        console.error(err)
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







  if (isLoading) return <p className="text-2xl text-black">Loading...</p>;
  if (error) return <p className="text-2xl text-black">An error occurred. Please try again later.</p>;
  if (!movies.length) return <p className="text-2xl text-black">No movies available.</p>;



  function deleteMovie(id: string) {
    setMovies(prevMovies => prevMovies.filter(movie => movie.id !== id));
  }
  
  function changeCategorie(categorie:string){
    if(pagination>0){
      setPagination(0)
    }
    setCategorie(categorie)
  } 
  
  function handleAmountChange(value: string) {
    const newAmount = parseInt(value);
    setAmount(newAmount);
    setPagination(0); 
  }


  function getFilteredMovies() {
    if (categorie === "novalue") return movies;
    return movies.filter(movie => movie.category === categorie);
  }

  

  function getPaginatedMovies() {
    const filteredMovies = getFilteredMovies();
    if (amount >= filteredMovies.length) return filteredMovies;
    const start = amount * pagination;
    const end = start + amount;
    return filteredMovies.slice(start, end);
  }


  const filteredMovies = getFilteredMovies();
  const paginatedMovies = getPaginatedMovies();
  

  return (
   <>
   <div className="flex flex-row gap-4 mb-4 mt-8">
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

    <Select onValueChange={handleAmountChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Movie amount" />
        </SelectTrigger>
        <SelectContent>
              <SelectItem value={"10"}>No Amount</SelectItem>
              <SelectItem  value="4">4</SelectItem>
              <SelectItem value="8">8</SelectItem>
        
        </SelectContent>
    </Select>
  </div>
   


  <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 mb-4">
    {paginatedMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              {...movie}
              deleteMovie={deleteMovie}
            />
          ))}
  </div>

{/*  here i need to check if the total amount is lower than the amount we choose  */}
{amount < filteredMovies.length && (
        <Pagination className="mt-4 mb-4">
          <PaginationContent>
            {pagination > 0 && (
              <PaginationItem>
                <PaginationPrevious
                  className="cursor-pointer"
                  onClick={() => setPagination(prev => prev - 1)}
                />
              </PaginationItem>
            )}
            {pagination < Math.floor(filteredMovies.length / amount)  && (
              <PaginationItem>
                <PaginationNext
                  className="cursor-pointer"
                  onClick={() => setPagination(prev => prev + 1)}
                />
              </PaginationItem>
            )}
          </PaginationContent>
        </Pagination>
      )}
   
   </>
  );
}
