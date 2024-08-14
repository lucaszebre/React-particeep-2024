const movies = [
    {
      id: '1',
      title: 'Oceans 8',
      category: 'Comedy',
      likes: 4,
      dislikes: 1,
      image:"https://m.media-amazon.com/images/M/MV5BNzM1MDFlNzgtNWQyMC00ODVjLTkxMjQtZmEzZDZkYmUzN2EwXkEyXkFqcGdeQXVyMTEzOTk1NDk@._V1_FMjpg_UX376_.jpg"
    }, {
      id: '2',
      title: 'Midnight Sun',
      category: 'Comedy',
      likes: 2,
      dislikes: 0,
      image:"https://m.media-amazon.com/images/M/MV5BM2VjNWI4NjItZTUwYi00NzQ1LWExZDktY2FhZmQyZTBkZDQ3XkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_FMjpg_UX1131_.jpg"
    }, {
      id: '3',
      title: 'Les indestructibles 2',
      category: 'Animation',
      likes: 3,
      dislikes: 1,
      image:"https://m.media-amazon.com/images/M/MV5BMTEzNzY0OTg0NTdeQTJeQWpwZ15BbWU4MDU3OTg3MjUz._V1_QL75_UX144_CR0,0,144,213_.jpg"
    }, {
      id: '4',
      title: 'Sans un bruit',
      category: 'Thriller',
      likes: 6,
      dislikes: 6,
      image:"https://m.media-amazon.com/images/M/MV5BYWFlMjY3M2YtYTFlYi00YzE5LWE0ZGItYTE3YWU1ZGU5NWEwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_QL75_UY562_CR18,0,380,562_.jpg"
    }, {
      id: '5',
      title: 'Creed II',
      category: 'Drame',
      likes: 16,
      dislikes: 2,
      image:"https://m.media-amazon.com/images/M/MV5BMzkzNjc3ZGYtOTAwYy00ZTY3LTljMGUtZDhkYzkwMjE0YTM0XkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_QL75_UX380_CR0,0,380,562_.jpg"
    }, {
      id: '6',
      title: 'Pulp Fiction',
      category: 'Thriller',
      likes: 11,
      dislikes: 3,
      image:"https://m.media-amazon.com/images/M/MV5BMjc2ODkzZDEtOWI3Ny00NzBhLWFlY2QtMWVlOTE4YTRjZGZkXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_QL75_UY562_CR18,0,380,562_.jpg"
    }, {
      id: '7',
      title: 'Pulp Fiction',
      category: 'Thriller',
      likes: 12333,
      dislikes: 32,
      image:"https://m.media-amazon.com/images/M/MV5BMjc2ODkzZDEtOWI3Ny00NzBhLWFlY2QtMWVlOTE4YTRjZGZkXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_QL75_UY562_CR18,0,380,562_.jpg"
    }, {
      id: '8',
      title: 'Seven',
      category: 'Thriller',
      likes: 2,
      dislikes: 1,
      image:"https://m.media-amazon.com/images/M/MV5BYjE0MmVmM2YtMDM5MS00ZjhlLThhNTctYmQ2ZDE2NzY4ZjY2XkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg"
    }, {
      id: '9',
      title: 'Inception',
      category: 'Thriller',
      likes: 2,
      dislikes: 1,
      image:"https://m.media-amazon.com/images/M/MV5BZjkwMGZhOWQtMTZmZS00OTMyLWFmNzctYTJkMzA5YWY5NmQ1XkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_QL75_UY562_CR21,0,380,562_.jpg"
    }, {
      id: '10',
      title: 'Gone Girl',
      category: 'Thriller',
      likes: 22,
      dislikes: 12,
      image:"https://m.media-amazon.com/images/M/MV5BMTM0MWVkNzYtODljYS00MmM2LTlkMTEtYzU2ZTdkYjE2NGEyXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_QL75_UX380_CR0,4,380,562_.jpg"
    },
  ]
  
  export const movies$ = new Promise((resolve, reject) => setTimeout(resolve, 100, movies))