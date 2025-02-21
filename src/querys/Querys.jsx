import { gql } from "@apollo/client";

const getVideos = gql`
query getVideos {
  videos(first: 999999) {
    titulo
    slug
    videoId
  }
}
`;




export default getVideos;