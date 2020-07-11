import gql from 'graphql-tag';

export const PROCEDURE_TABLE_FRAGMENT = gql`
  fragment ProcedureTable on ProcedureTable {
    id
    name
    createdAt
    updatedAt
  }
`;

export const GET_PROCEDURE_TABLES = gql`
  query ProcedureTables {
    procedureTables {
      ...ProcedureTable
    }
  }
  ${PROCEDURE_TABLE_FRAGMENT}
`;

export const GET_PROCEDURE_TABLE = gql`
  query ProcedureTable($id: ID!) {
    procedureTable(id: $id) {
      ...ProcedureTable
    }
  }
  ${PROCEDURE_TABLE_FRAGMENT}
`;

export const CREATE_PROCEDURE_TABLE = gql`
  mutation CreateProcedureTable($input: ProcedureTableInput!) {
    createProcedureTable(input: $input) {
      ...ProcedureTable
    }
  }
  ${PROCEDURE_TABLE_FRAGMENT}
`;

export const UPDATE_PROCEDURE_TABLE = gql`
  mutation UpdateProcedureTable($id:ID!, $input: ProcedureTableInput!) {
    updateProcedureTable(id: $id, input: $input) {
      ...ProcedureTable
    }
  }
  ${PROCEDURE_TABLE_FRAGMENT}
`;
