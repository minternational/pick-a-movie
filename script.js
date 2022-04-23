let movieArray = [];

document.getElementById('insertMovieToArray').addEventListener('click', () => {
  const getInputValue = document.getElementById('input').value;
  if (!getInputValue) {
    document.getElementById('movieList').style.visibility = 'visible';
    document.getElementById('movieList').innerHTML =
      'Please type in a movie or series!';
  } else {
    movieArray.push(getInputValue);
    document.getElementById('input').value = '';
    document.getElementById('movieList').innerHTML = movieArray.join(', ');
    document.getElementById('movieList').style.visibility = 'visible';
  }
});

document.getElementById('showMovieInDom').addEventListener('click', () => {
  if (movieArray.length) {
    recommendation.innerHTML =
      movieArray[Math.floor(Math.random() * movieArray.length)];
    document.getElementById('recommendation').style.visibility = 'visible';
  } else {
    document.getElementById('recommendation').style.visibility = 'visible';
    recommendation.innerHTML = 'You need to type in a movie or series!';
  }
});

document.getElementById('deleteLastItem').addEventListener('click', () => {
  movieArray.pop();
  document.getElementById('movieList').innerHTML = movieArray.join(', ');
  recommendation.innerHTML = '';
  document.getElementById('recommendation').style.visibility = 'hidden';
});

document.getElementById('deleteAllItems').addEventListener('click', () => {
  movieArray = [];
  document.getElementById('movieList').innerHTML = '';
  recommendation.innerHTML = '';
  document.getElementById('recommendation').style.visibility = 'hidden';
  document.getElementById('movieList').style.visibility = 'hidden';
});
