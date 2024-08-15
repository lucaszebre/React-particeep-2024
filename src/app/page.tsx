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

  const [movies,setMovies]=useState<Movie[]|null>()
  const [categorie,setCategorie]=useState<string>("novalue")
  const [amount,setAmount]=useState<number>(10)
  const [pagination,setPagination]=useState<number>(0)
  const [ListCategorie,setListCategorie]=useState<string[]>()
  const [IsLoading,setIsLoading]=useState(false)
  const [error,setError]=useState(false)


  // at the mount we fetch all the movies 
  useEffect(()=>{
    setIsLoading(true)
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
      <p className="text-2xl text-black">...Loading</p>
    )
  }

  if(error){
    return(
      <p className="text-2xl text-black">Some error happen...</p>
    )
  }


   if(!movies && !IsLoading){
     return(
       <p className="text-2xl text-black" >Look like you delete all the movies</p>
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

    <Select onValueChange={changeAmount}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Movie amount" />
        </SelectTrigger>
        <SelectContent>
              <SelectItem value={"100"}>No Amount</SelectItem>
              <SelectItem  value="4">4</SelectItem>
              <SelectItem value="8">8</SelectItem>
        
        </SelectContent>
    </Select>
   </div>
   


<div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 mb-4">
   
    

{
  categorie=="novalue" &&
  <>
   {movies &&
      movies.map((movie)=>{
        return <MovieCard key={movie.id} id={movie.id} title={movie.title} category={movie.category} deleteMovie={deleteMovie} likes={movie.likes} dislikes={movie.dislikes} posterUrl={movie.posterUrl} />
      }).slice(0+amount*pagination,amount*(1+pagination)!)
    }
  </>
  ||
  <>
       {movies &&
      movies.filter((movie:Movie)=>{
        return movie.category == categorie
      }).map((movie)=>{
        return <MovieCard key={movie.id} id={movie.id} title={movie.title} category={movie.category} deleteMovie={deleteMovie} likes={movie.likes} dislikes={movie.dislikes} posterUrl={movie.posterUrl} />
      }).slice(0+amount*pagination,amount*(1+pagination)!)
    }
  </>
}

</div>



{
  amount!==100  && 
  
  <Pagination className="mt-4 mb-4">
  <PaginationContent>
    <PaginationItem>
      {
        pagination >= 1 &&
        <PaginationPrevious 
        className="cursor-pointer"
        onClick={()=>{
          if(pagination>=1){
            setPagination(pagination=>pagination-1)
  
          }
        }} 
        
        />
      }
   
    </PaginationItem>
    
    <PaginationItem>
     
      <PaginationNext  
      className="cursor-pointer"  
      onClick={()=>{
          setPagination(pagination=>pagination+1)

        
      }} 
      
      />   
    </PaginationItem>
  </PaginationContent>
</Pagination>
}
   
   </>
  );
}
