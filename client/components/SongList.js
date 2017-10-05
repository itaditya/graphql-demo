import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import  { Link } from "react-router";

import fetchSongsQuery from '../queries/fetchSongs';
import deleteSongQuery from '../queries/deleteSong';

class SongList extends Component {
    componentDidMount() {
    }
    onSongDelete(id) {
      this.props.mutate({
        variables: {
          id
        }
      }).then(() => {
        this.props.data.refetch()
      })
    }
    renderSongs() {
      return (
        this.props.data.songs.map(song => {
          return <li key={song.id} className="collection-item">
            <Link to={`/songs/${song.id}`}>
              {song.title}
            </Link>
            <i className="material-icons right" onClick={() => this.onSongDelete(song.id)}>delete</i>
          </li>
        })
      )
    }
    render() {
      if(this.props.data.loading){
        return (
          <div>Loading....</div>
        )
      }
      return (
        <div>
          <ul className="collection">
            {this.renderSongs()}
          </ul>
          <Link to="/songs/new" className="btn-floating btn-large red right">
            <i className="material-icons">add</i>
          </Link>
        </div>
      )
    }
}

export default graphql(deleteSongQuery)(
  graphql(fetchSongsQuery)(SongList)
);
