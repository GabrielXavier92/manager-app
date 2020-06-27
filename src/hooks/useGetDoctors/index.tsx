import gql from 'graphql-tag';
import { useLazyQuery } from '@apollo/react-hooks';
import { QueryResult } from '@apollo/react-common';

import { Doctor } from '../../types/types.d';

interface IUseGetDoctors {
  getDoctors(): void;
  queryResults: QueryResult<getDoctors, Record<string, any>>;
}

type getDoctors = {
  getDoctors: [Doctor]
};

export const GET_DOCTORS_FRAGMENT = gql`
  fragment GetDoctorsFragment on Doctor {
    id
    name
    gender
    register
    createdAt
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

export const useGetDoctors = (): IUseGetDoctors => {
  const [query, queryResults] = useLazyQuery<getDoctors>(GET_DOCTORS);

  const getDoctors = () => query();

  return { getDoctors, queryResults };
};

export default useGetDoctors;
