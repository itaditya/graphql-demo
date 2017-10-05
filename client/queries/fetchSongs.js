import gql from 'graphql-tag';

export default gql`
  query FetchSongs {
    songs {
      id
      title
    }
  }
`;
