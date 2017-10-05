import gql from 'graphql-tag';

export default gql`
  query FetchSongById($id : ID!) {
    song (id:$id) {
      id
      title
      lyrics {
        id
        content
      }
    }
  }
`;
