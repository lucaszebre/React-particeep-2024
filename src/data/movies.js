const movies = [
    {
      id: '1',
      title: 'Oceans 8',
      category: 'Comedy',
      likes: 4,
      dislikes: 1,
      posterUrl:"https://m.media-amazon.com/images/M/MV5BNzM1MDFlNzgtNWQyMC00ODVjLTkxMjQtZmEzZDZkYmUzN2EwXkEyXkFqcGdeQXVyMTEzOTk1NDk@._V1_QL75_UY562_CR14,0,380,562_.jpg",
      trailerUrl:"./videos/oceans_8.mp4"
    }, {
      id: '2',
      title: 'Midnight Sun',
      category: 'Comedy',
      likes: 2,
      dislikes: 0,
      posterUrl:"https://m.media-amazon.com/images/M/MV5BZGQ0MzBkMDEtZWU3MC00NGY3LThjOTgtN2I3NzExMTMwNDk4XkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_QL75_UX380_CR0,4,380,562_.jpg",
      trailerUrl:"./videos/midnight_sun.mp4"
    }, {
      id: '3',
      title: 'Les indestructibles 2',
      category: 'Animation',
      likes: 3,
      dislikes: 1,
      posterUrl:"https://m.media-amazon.com/images/M/MV5BYzk5ZGMwZWMtODdjZS00MTE3LTgyN2YtZTQwZjk2YmRmMDJmXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_QL75_UY562_CR17,0,380,562_.jpg",
      trailerUrl:"./videos/les_indestructibles_2.mp4"
    }, {
      id: '4',
      title: 'Sans un bruit',
      category: 'Thriller',
      likes: 6,
      dislikes: 6,
      posterUrl:"https://m.media-amazon.com/images/M/MV5BYWFlMjY3M2YtYTFlYi00YzE5LWE0ZGItYTE3YWU1ZGU5NWEwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_QL75_UY562_CR18,0,380,562_.jpg",
      trailerUrl:"/videos/sans_un_bruit.mp4"
    }, {
      id: '5',
      title: 'Creed II',
      category: 'Drame',
      likes: 16,
      dislikes: 2,
      posterUrl:"https://m.media-amazon.com/images/M/MV5BMzkzNjc3ZGYtOTAwYy00ZTY3LTljMGUtZDhkYzkwMjE0YTM0XkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_QL75_UX380_CR0,0,380,562_.jpg",
      trailerUrl:"./videos/creed_2.mp4"
    }, {
      id: '6',
      title: 'Pulp Fiction',
      category: 'Thriller',
      likes: 12344,
      dislikes: 35,
      posterUrl:"https://m.media-amazon.com/images/M/MV5BMjc2ODkzZDEtOWI3Ny00NzBhLWFlY2QtMWVlOTE4YTRjZGZkXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_QL75_UY562_CR18,0,380,562_.jpg",
      trailerUrl:"./videos/pulp_fiction.mp4"
    }, {
      id: '8',
      title: 'Seven',
      category: 'Thriller',
      likes: 2,
      dislikes: 1,
      posterUrl:"https://m.media-amazon.com/images/M/MV5BYjE0MmVmM2YtMDM5MS00ZjhlLThhNTctYmQ2ZDE2NzY4ZjY2XkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
      trailerUrl:"./videos/seven.mp4"
    }, {
      id: '9',
      title: 'Inception',
      category: 'Thriller',
      likes: 2,
      dislikes: 1,
      posterUrl:"https://m.media-amazon.com/images/M/MV5BMjExMjkwNTQ0Nl5BMl5BanBnXkFtZTcwNTY0OTk1Mw@@._V1_QL75_UX298_.jpg",
      trailerUrl:"./videos/inception.mp4"
    }, {
      id: '10',
      title: 'Gone Girl',
      category: 'Thriller',
      likes: 22,
      dislikes: 12,
      posterUrl:"https://m.media-amazon.com/images/M/MV5BMTM0MWVkNzYtODljYS00MmM2LTlkMTEtYzU2ZTdkYjE2NGEyXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_QL75_UX380_CR0,4,380,562_.jpg",
      trailerUrl:"./videos/gone_girl.mp4"
    },
  ]
  
  export const movies$ = new Promise((resolve, reject) => setTimeout(resolve, 100, movies))