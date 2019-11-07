import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCharacters } from './../actions';
import Character from './Character'

const Characters = (props) => {

  useEffect(() => {
    props.fetchCharacters()
  }, [])

  return (
    <div>
    {props.characters.map(character => {
      return <Character character={character}/>
    })}
    
    </div>
  )
}

const mapStateToProps = state => {
  return {
    characters: state.characters
  }
}

export default connect(mapStateToProps, { fetchCharacters })(Characters);