import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

//NO subscription is needed
const httpLink = createHttpLink({
  uri: "http://localhost:3007/graphql",
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;
