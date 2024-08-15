import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {  Trash2 } from 'lucide-react';
import { Movie } from '@/types';
import Image from 'next/image';
import { Button } from './ui/button';
import { FaRegThumbsDown, FaThumbsDown, FaThumbsUp } from "react-icons/fa";
import { FaRegThumbsUp } from "react-icons/fa";




interface MovieCardProps extends Movie {
  deleteMovie:(id:string)=>void
}

const MovieCard: React.FC<MovieCardProps> = ({ title, category, likes, dislikes, posterUrl,id,deleteMovie }) => {
  const [likesState,setLikes]=useState(likes)
  const [DislikesState,setDisLikes]=useState(dislikes)
  const [isLike,setIslike]=useState<boolean>()
  const [isDisLike,setIsDislike]=useState<boolean>()
  const totalVotes = likesState + DislikesState;
  const likeRatio = totalVotes > 0 ? (likesState / totalVotes) * 100 : 0;

  return (
    <Card className="w-64 relative m-4">
      <CardHeader className='flex flex-row items-center justify-between w-full'>
        <CardTitle className="font-bold text-lg">{title}</CardTitle>
        <Button variant={"ghost"}>
          <Trash2 onClick={()=>{
            deleteMovie(id)
          }} />
        </Button>
    
      </CardHeader>
      <CardContent className='flex flex-col gap-2'>
        <div className='h-[300px] relative rounded-lg'>
        <Image src={posterUrl} alt={`Affiche de ${title}`}  fill />

        </div>
        <p className="text-sm mb-2">Catégorie : {category}</p>
        <div className="relative h-2 bg-gray-200 rounded">
          <div
            className="absolute top-0 left-0 h-2 bg-green-500 rounded"
            style={{ width: `${likeRatio}%` }}
          ></div>
        </div>
        <div className="flex justify-between items-center text-xs mt-2">
          <div className="flex items-center">
            
            {
              isLike ? 
              <FaThumbsUp  size={16}  
              onClick={()=>{
                  if(isLike){
                    setLikes(likesState=>likesState-1)
                    setIslike(false) 
                   
                  }

               
              }} 
              className="text-green-500 mr-1 cursor-pointer" />
              :
              <FaRegThumbsUp
              onClick={()=>{
                if(!isLike){
                  setLikes(likesState=>likesState+1)
                  setIslike(true)
                  if(isDisLike){
                    setDisLikes(likesState=>likesState-1)
                    setIsDislike(false)
                  }
                }
              }}
               size={16}  className="text-green-500 mr-1 cursor-pointer" />
            }
      
            <span>{likesState}</span>
          </div>
          <div className="flex items-center">
          {
              isDisLike ? <FaThumbsDown  size={16}  onClick={()=>{
                if(isDisLike){
                  setDisLikes(likesState=>likesState-1)
                  setIsDislike(false) 
                  
                }
              }}  className="text-red-500 mr-1 cursor-pointer" />
              :
              <FaRegThumbsDown
              onClick={()=>{
                if(!isDisLike){
                  setDisLikes(likesState=>likesState+1)
                  setIsDislike(true)
                  if(isLike){
                    setLikes(likesState=>likesState-1)
                    setIslike(false)
                  }
                }
              }}
               size={16}   className="text-red-500 mr-1 cursor-pointer" />
            }
            
            <span>{DislikesState}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};


export default MovieCard