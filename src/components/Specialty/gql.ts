import gql from 'graphql-tag';

export const GET_SPECIALTY_FRAGMENT = gql`
  fragment GetSpecialtyFragment on Specialty {
    id
    name
  }
`;

export const GET_SPECIALTIES = gql`
  query Specialties {
    specialties {
      ...GetSpecialtyFragment
    }
  }
  ${GET_SPECIALTY_FRAGMENT}
`;

export const GET_SPECIALTY = gql`
  query Specialty($id: ID!) {
    specialty(id: $id) {
      ...GetSpecialtyFragment
    }
  }
  ${GET_SPECIALTY_FRAGMENT}
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
