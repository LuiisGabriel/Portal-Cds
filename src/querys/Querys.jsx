import { gql } from "@apollo/client";

const getVideos = gql`
query getVideos {
  videos {
    titulo
    slug
    videoId
  }
}
`;




export default getVideos;