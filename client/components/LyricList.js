import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import LikeLyricQuery from '../queries/likeLyric';

class LyricList extends Component {
    componentDidMount() {
    }
    onLike(id) {
      console.log(id);
      this.props.mutate({
        variables: {
          id
        }
      }).then((data) => {
        console.log(data);
      })
    }
    renderLyrics() {
      return this.props.lyrics.map(lyric => {
        return (
          <li key={lyric.id} className="collection-item">
            {lyric.content}
            <i className="material-icons right" onClick={() => this.onLike(lyric.id)}>thumb_up</i>
          </li>
        )
      })
    }
    render() {
      return (
        <ul className="collection">
          {this.renderLyrics()}
        </ul>
      )
    }
}
export default graphql(LikeLyricQuery)(LyricList);
