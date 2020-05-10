import {Platform} from 'react-native';

//import ApolloClient, InMemoryCache, and HttpLink to define your client to cnnect to your graphql server.//#endregion
import {ApolloClient, InMemoryCache, HttpLink} from 'apollo-client-preset';

//Define your client for your APolloProvider connecting to your graphql server.
const client = new ApolloClient({
  //Assign to your cache property a instance of a InMemoryCache
  cache: new InMemoryCache(),
  //Assign your link with a new instance of a HttpLink linking to your graphql server.
  link: new HttpLink({
    uri: Platform.select({
      ios: 'http://localhost:4000/graphql',
      android: 'http://10.0.2.2:4000/graphql',
    }),
  }),
});

export default client;
