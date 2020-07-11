import gql from 'graphql-tag';

export const GET_USER = gql`
  query User{
    user {
      id
      status
      email
      name
      gender
      roles {
        id
        role
      }
    }
  }
`;

export const SIGN_IN = gql`
  mutation SignIn($input: LoginUserInput!){
    signIn(input: $input) {
      token
      user {
        id
        accountId
        status
        email
        name
        gender
        roles {
          id
          role
        }
      }
    }
  }
`;
