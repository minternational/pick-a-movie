const elementMovieList = document.getElementById('movieList');
const elementRecommendation = document.getElementById('recommendation');

let movieArray = [];

document.getElementById('insertMovieToArray').addEventListener('click', () => {
  const getInputValue = document.getElementById('input').value;

  if (!getInputValue) {
    alert('Please type in a movie or series!');
  } else {
    movieArray.push(getInputValue);
    document.getElementById('input').value = '';
    elementMovieList.innerHTML = movieArray.join(', ');
    elementMovieList.style.visibility = 'visible';
  }
});

document.getElementById('showMovieInDom').addEventListener('click', () => {
  if (movieArray.length) {
    recommendation.innerHTML =
      movieArray[Math.floor(Math.random() * movieArray.length)];
    elementRecommendation.style.visibility = 'visible';
  } else {
    elementRecommendation.style.visibility = 'visible';
    recommendation.innerHTML = 'You need to type in a movie or series!';
  }
});

document.getElementById('deleteLastItem').addEventListener('click', () => {
  movieArray.pop();
  elementMovieList.innerHTML = movieArray.join(', ');
  recommendation.innerHTML = '';
  elementRecommendation.style.visibility = 'hidden';
});

document.getElementById('deleteAllItems').addEventListener('click', () => {
  movieArray = [];
  elementMovieList.innerHTML = '';
  recommendation.innerHTML = '';
  elementRecommendation.style.visibility = 'hidden';
  elementMovieList.style.visibility = 'hidden';
});
