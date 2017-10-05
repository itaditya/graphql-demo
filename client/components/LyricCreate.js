import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import addLyricQuery from '../queries/addLyric';

class LyricCreate extends Component {
    constructor(props) {
      super(props);
      this.state = {
        content: ''
      }
    }
    componentDidMount() {
    }
    onSubmit(event) {
      event.preventDefault();
      this.props.mutate({
        variables: {
          songId: this.props.songId,
          content: this.state.content
        }
      }).then(() => {
        this.setState({
          content: ''
        })
      })
    }
    render() {
        return (
          <form onSubmit={this.onSubmit.bind(this)}>
            <label>Add a Lyric</label>
            <input type="text" value={this.state.content} onChange={event => this.setState({ content: event.target.value})}/>
          </form>
        )
    }
}
export default graphql(addLyricQuery)(LyricCreate);
