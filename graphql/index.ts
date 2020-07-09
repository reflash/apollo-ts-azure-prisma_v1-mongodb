import { ApolloServer, gql } from "apollo-server-azure-functions"
import { prisma } from '../generated/prisma-client'

const rootTypeDefs = gql`
  type User {
    id: ID!
    name: String!
  }
  
  type Query {
    users: [User!]!
  }
`;

const resolvers = {
  Query: {
    users: async (parent, args, context, info) => await prisma.users(args),
  },
};

const server = new ApolloServer({ typeDefs: rootTypeDefs, resolvers });

export default server.createHandler();