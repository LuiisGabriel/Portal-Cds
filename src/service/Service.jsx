import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://us-west-2.cdn.hygraph.com/content/cm7bxzpha01ms07w10wmu6r75/master",
  cache: new InMemoryCache(),
});

export default client;