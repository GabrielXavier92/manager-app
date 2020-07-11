import gql from 'graphql-tag';

export const PATIENT_FRAGMENT = gql`
  fragment PatientFragment on Patient {
    id
    name
    birth
    gender
    email
    country
    cep
    state
    city
    street
    neighborhood
    complement
  } 
`;


export const GET_PATIENTS = gql`
  query Patients($take: Int, $cursor: ID, $filter: String) {
    patients(take: $take, cursor: $cursor, filter: $filter) {
      queryInfo {
        ammount
      }
      patients {
        ...PatientFragment
      }
    }
  }
  ${PATIENT_FRAGMENT}
`;


export const GET_PATIENT = gql`
  query Patient($id: ID!) {
    patient(id: $id) {
      ...PatientFragment
    }
  }
  ${PATIENT_FRAGMENT}
`;

export const CREATE_PATIENT = gql`
  mutation CreatePatient($input: PatientInput!){
    createPatient(input: $input) {
      ...PatientFragment
    }
  }
  ${PATIENT_FRAGMENT}
`;

export const UPDATE_PATIENT = gql`
  mutation UpdatePatient($id:ID!, $input: PatientInput!) {
    updatePatient(id: $id, input: $input) {
      ...PatientFragment
    }
  }
  ${PATIENT_FRAGMENT}
`;
