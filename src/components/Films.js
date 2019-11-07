import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Film from './Film';
import { fetchFilms } from './../actions';

const Films = (props) => {

  useEffect(() => {
    props.fetchFilms();
  }, []);

  return (
    <div>
      {props.films.map(film => {
        return (
            <Film film={film}/>
        )
      })}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    films: state.films
  }
}

export default connect(mapStateToProps, { fetchFilms })(Films);