export const schema = gql`
  type Contact {
    id: Int!
    name: String!
    email: String!
    createdAt: DateTime!
  }

  type Query {
    contacts: [Contact!]! @requireAuth
    contact(id: Int!): Contact @requireAuth
  }

  input CreateContactInput {
    name: String!
    email: String!
  }

  input UpdateContactInput {
    name: String
    email: String
  }

  type Mutation {
    createContact(input: CreateContactInput!): Contact! @skipAuth
  }
`
