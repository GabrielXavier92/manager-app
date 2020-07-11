import gql from 'graphql-tag';

export const PROCEDURES_FRAGMENT = gql`
  fragment Procedures on Procedure {
    id
    name
    code
    value
    specialty {
      id
      name
    }
  	procedureTable {
      id
      name
    }
  }
`;

export const GET_PROCEDURES = gql`
  query Procedures($procedureTableId: ID!, $take: Int, $cursor: ID, $filter: String) {
    procedures(procedureTableId: $procedureTableId, take: $take, cursor: $cursor, filter: $filter){
      queryInfo {
        ammount
      }
      procedures {
        ...Procedures
      }      
    }
  }
  ${PROCEDURES_FRAGMENT}
`;

export const GET_PROCEDURE = gql`
  query Procedure($id: ID!) {
    procedure(id: $id) {
      ...Procedures
    }
  }
  ${PROCEDURES_FRAGMENT}
`;

export const CREATE_PROCEDURE = gql`
  mutation CreateProcedure($input: ProcedureInput!) {
    createProcedure(input: $input) {
      ...Procedures
    }
  }
  ${PROCEDURES_FRAGMENT}
`;

export const UPDATE_PROCEDURE = gql`
  mutation UpdateProcedure($id:ID!, $input: ProcedureInput!) {
    updateProcedure(id: $id, input: $input) {
      ...Procedures
    }
  }
  ${PROCEDURES_FRAGMENT}
`;
