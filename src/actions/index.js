import axios from 'axios';

//action types
export const START_FETCHING_FILMS = 'START_FETCHING_FILMS';
// export const START_FETCHING_CHARACTERS = 'START_FETCHING_CHARACTERS';
// export const START_FETCHING_PLACES = 'START_FETCHING_PLACES';
// export const START_FETCHING_VEHICLES = 'START_FETCHING_VEHICLES';
export const FETCH_SUCCESS_FILMS = 'FETCH_SUCCESS_FILMS'
// export const FETCH_SUCCESS_CHARACTERS = 'FETCH_SUCCESS_CHARACTERS'
// export const FETCH_SUCCESS_PLACES = 'FETCH_SUCCESS_PLACES'
// export const FETCH_SUCCESS_VEHICLES = 'FETCH_SUCCESS_VEHICLES'
export const FETCH_FAILURE = 'FETCH_FAILURE'


//action creator

export const fetchFilms = () => dispatch => {
  dispatch({ type: START_FETCHING_FILMS })
  axios.get('https://ghibliapi.herokuapp.com/films')
    .then(res => {
      console.log(res.data)
      dispatch({ type: FETCH_SUCCESS_FILMS, payload: res.data })})
    .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }))
}