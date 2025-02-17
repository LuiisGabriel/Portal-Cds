import { gql } from "@apollo/client";

const createNewVideo = gql`

mutation createVideo($titulo:String!, $slug:String!, $videoId:String!){
  createVideo(input: {title: $title, slug: $slug, videoId: $videoId}){
    titulo
    slug
    videoId
  }
}
`;


export default createNewVideo;