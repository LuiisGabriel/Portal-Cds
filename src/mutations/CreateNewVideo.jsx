import { gql } from "@apollo/client";

const createNewVideo = gql`

mutation createVideo($titulo:String!, $slug:String!, $videoId:String!){
  createVideo(data: {titulo: $titulo, slug: $slug, videoId: $videoId}){
    titulo
    slug
    videoId
  }
}
`;


export default createNewVideo;