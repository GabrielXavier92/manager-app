import gql from 'graphql-tag';

export const GET_SPECIALTIES_FRAGMENT = gql`
  fragment GetSpecialtiesFragment on Specialty {
    id
    name
    procedures {
      id
      name
    }
    createdAt
    updatedAt
  }
`;

export const GET_SPECIALTIES = gql`
  query GetSpecialties {
    getSpecialties {
      ...GetSpecialtiesFragment
    }
  }
  ${GET_SPECIALTIES_FRAGMENT}
`;


export const GET_SPECIALTY = gql`
  query GetSpecialty($id: ID!) {
    getSpecialty(id: $id) {
      id
      name
      procedures { 
        id
        name
        code
        value
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;

export const GET_SPECIALTY_FRAGMENT = gql`
  fragment GetSpecialtyFragment on Specialty {
    id
    name
    procedures {
      id
      name
      code
      value
      createdAt
      updatedAt
    }
    createdAt
    updatedAt
  }
`;

export const CREATE_SPECIALTY = gql`
  mutation CreateSpecialty($input: SpecialtyInput!) {
    createSpecialty(input: $input) {
      ...GetSpecialtyFragment
    }
  }
  ${GET_SPECIALTY_FRAGMENT}
`;

export const UPDATE_SPECIALTY = gql`
  mutation UpdateSpecialty($id:ID!, $input: SpecialtyInput!) {
    updateSpecialty(id: $id, input: $input) {
      ...GetSpecialtyFragment
    }
  }
  ${GET_SPECIALTY_FRAGMENT}
`;
