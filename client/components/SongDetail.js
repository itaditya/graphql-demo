import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import  { Link } from "react-router";

import LyricCreate from './LyricCreate';
import LyricList from './LyricList';
import fetchSongByIdQuery from '../queries/fetchSongById';

class SongDetail extends Component {
    componentDidMount() {
    }
    render() {
      if(this.props.data.loading){
        return (<div>Loading ... </div>)
      }
      const { song }  =  this.props.data
      return (
        <div>
          <Link to="/">Back</Link>
          <h2>{song.title}</h2>
          <LyricList lyrics={song.lyrics}/>
          <LyricCreate songId={song.id}/>
        </div>
      )
    }
}

export default graphql(fetchSongByIdQuery, {
  options: (props) => {
    return {
      variables: {
        id: props.params.id
      }
    }
  }
})(SongDetail);
