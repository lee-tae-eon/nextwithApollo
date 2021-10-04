import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloProvider,
  split,
} from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { WebSocketLink } from "@apollo/link-ws";

const httpLink = new HttpLink({
  uri: "https://dev-larchive.simplogis.com/v1/graphql",
});

const wsLink = process.browser
  ? new WebSocketLink({
      uri: `ws://dev-larchive.simplogis.com/dev/events/push?token=bGFyY2hpdmUuc2ltcGxvZ2lzLmRldg== `,
      options: {
        reconnect: 2000,
      },
    })
  : null;

const splitLink = process.browser
  ? split(
      ({ query }) => {
        const definition = getMainDefinition(query);
        return (
          definition.kind === "OperationDefinition" &&
          definition.operation === "subscription"
        );
      },
      wsLink,
      httpLink
    )
  : httpLink;

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: splitLink,
});

export default client;
