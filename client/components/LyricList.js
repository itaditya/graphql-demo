import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import LikeLyricQuery from '../queries/likeLyric';

class LyricList extends Component {
    componentDidMount() {
    }
    onLike({id, likes}) {
      this.props.mutate({
        variables: {
          id
        },
        optimisticResponse: {
          __typename: 'Mutation',
          likeLyric: {
            id,
            __typename: 'LyricType',
            likes: likes + 1
          }
        }
      }).then((data) => {
      })
    }
    renderLyrics() {
      return this.props.lyrics.map(lyric => {
        return (
          <li key={lyric.id} className="collection-item">
            {lyric.content}
            <span className="right">
              {lyric.likes}
              <i className="material-icons" onClick={() => this.onLike(lyric)}>thumb_up</i>
            </span>
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
