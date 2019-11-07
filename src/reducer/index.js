import { 
  START_FETCHING_FILMS, FETCH_SUCCESS_FILMS,
  START_FETCHING_CHARACTERS, FETCH_SUCCESS_CHARACTERS,
  // START_FETCHING_PLACES, FETCH_SUCCESS_PlACES,
  // START_FETCHING_VEHICLES, FETCH_SUCCESS_VEHICLES
  FETCH_FAILURE, } from '../actions'

  

const initialState = {
  films: [],
  characters: [],
  places: [],
  vehicles: [],
  isFetching: false,
  error: ''
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case START_FETCHING_FILMS:
      return {
        ...state, 
        isFetching: true
      }
    
    case FETCH_SUCCESS_FILMS:
      return {
        ...state,
        isFetching: false,
        error: '',
        films: action.payload
      }

    case START_FETCHING_CHARACTERS:
      return {
        ...state, 
        isFetching: true
      }

    case FETCH_SUCCESS_CHARACTERS:
      return {
        ...state,
        isFetching: false,
        error: '',
        characters: action.payload
      }

    // case START_FETCHING_PLACES:
    //   return {
    //     ...state, 
    //     isFetching: true
    //   }

    // case FETCH_SUCCESS_PLACES:
    //   return {
    //     ...state,
    //     isFetching: false,
    //     error: '',
    //     places: action.payload
    //   }
    
    // case START_FETCHING_VEHICLES:
    //   return {
    //     ...state, 
    //     isFetching: true
    //   }

    // case FETCH_SUCCESS_VEHICLES:
    //   return {
    //     ...state,
    //     isFetching: false,
    //     error: '',
    //     vehicles: action.payload
    //   }  

    case FETCH_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: 'ERROR'
      }  

    default:
      return state
  }
}

export default reducer;