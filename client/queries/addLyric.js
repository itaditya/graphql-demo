import gql from 'graphql-tag';

export default gql`
  mutation AddLyric($content: String, $songId: ID) {
    addLyricToSong(content: $content, songId: $songId){
      id
      title
      lyrics {
        id
        content
        likes
      }
    }
  }
`;
