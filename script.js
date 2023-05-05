const apiKey = '344ac3f0a91a3bdaee5dc84bb46edede';

function getMovies(genreId) {
    const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreId}`;
    
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const movieCards = document.getElementById('movie-cards');
        movieCards.innerHTML = '';
        
        data.results.forEach(movie => {
            const movieCard = document.createElement('div');
            movieCard.className = 'movie-card';
            
            const movieImg = document.createElement('img');
            movieImg.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
            
            const movieTitle = document.createElement('h2');
            movieTitle.textContent = movie.title;
            
            const movieOverview = document.createElement('p');
            movieOverview.textContent = movie.overview;
            
            movieCard.appendChild(movieImg);
            movieCard.appendChild(movieTitle);
            movieCard.appendChild(movieOverview);
            
            movieCards.appendChild(movieCard);
        });
    })
    .catch(error => console.error(error));
}
