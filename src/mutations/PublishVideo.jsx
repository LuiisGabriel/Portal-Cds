import { gql } from "@apollo/client";

const publishNewVideo = gql`

mutation publishVideo($slug: String!) {
  publishVideo(where: {slug: $slug}, to: PUBLISHED){
    slug
  }
}
`;


export default publishNewVideo;