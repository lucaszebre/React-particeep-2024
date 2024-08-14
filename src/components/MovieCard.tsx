import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ThumbsUp, ThumbsDown } from 'lucide-react';

interface Movie {
  title: string;
  category: string;
  likes: number;
  dislikes: number;
  posterUrl?: string;
}

interface MovieCardProps extends Movie {}

const MovieCard: React.FC<MovieCardProps> = ({ title, category, likes, dislikes, posterUrl }) => {
  const totalVotes = likes + dislikes;
  const likeRatio = totalVotes > 0 ? (likes / totalVotes) * 100 : 0;

  return (
    <Card className="w-64 m-4">
      <CardHeader>
        <CardTitle className="font-bold text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <img src={posterUrl || "/api/placeholder/200/300"} alt={`Affiche de ${title}`} className="w-full h-48 object-cover mb-4" />
        <p className="text-sm mb-2">Catégorie : {category}</p>
        <div className="relative h-2 bg-gray-200 rounded">
          <div
            className="absolute top-0 left-0 h-2 bg-green-500 rounded"
            style={{ width: `${likeRatio}%` }}
          ></div>
        </div>
        <div className="flex justify-between items-center text-xs mt-2">
          <div className="flex items-center">
            <ThumbsUp size={16} className="text-green-500 mr-1" />
            <span>{likes}</span>
          </div>
          <div className="flex items-center">
            <ThumbsDown size={16} className="text-red-500 mr-1" />
            <span>{dislikes}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
