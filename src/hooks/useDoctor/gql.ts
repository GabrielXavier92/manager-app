import gql from 'graphql-tag';

export const GET_DOCTORS_FRAGMENT = gql`
  fragment GetDoctorsFragment on Doctor {
    id
    name
    gender
    register
    createdAt
  } 
`;

export const GET_DOCTOR_FRAGMENT = gql`
  fragment GetDoctorFragment on Doctor {
    id
    name
    gender
    birth
    register
    email
    country
    cep
    state
    city
    street
    neighborhood
    complement
    createdAt
    updatedAt
  } 
`;

export const GET_DOCTORS = gql`
  query GetDoctors {
    getDoctors {
      ...GetDoctorsFragment
    }
  }
  ${GET_DOCTORS_FRAGMENT}
`;


export const GET_DOCTOR = gql`
  query GetDoctor($id: ID!) {
    getDoctor(id: $id) {
      ...GetDoctorFragment
    }
  }
  ${GET_DOCTOR_FRAGMENT}
`;

export const CREATE_DOCTOR = gql`
  mutation createDoctor($input: DoctorInput!){
    createDoctor(input: $input) {
      ...GetDoctorsFragment
    }
  }
  ${GET_DOCTORS_FRAGMENT}
`;

export const UPDATE_DOCTOR = gql`
  mutation UptadateDoctor($id:ID!, $input: DoctorInput!) {
    updateDoctor(id: $id, input: $input) {
      ...GetDoctorFragment
    }
  }
  ${GET_DOCTOR_FRAGMENT}
`;
