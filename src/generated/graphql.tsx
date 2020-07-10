import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';

export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: Date;
};


export type Query = {
  __typename?: 'Query';
  me: Account;
  getUser: User;
  getDoctor: Doctor;
  getDoctors?: Maybe<Array<Doctor>>;
  getGuide: Guide;
  getGuides?: Maybe<Array<Guide>>;
  getPatient: Patient;
  getPatients?: Maybe<Array<Patient>>;
  getProcedureTable: ProcedureTable;
  getProcedureTables?: Maybe<Array<ProcedureTable>>;
  getProcedures?: Maybe<GetProcedures>;
  getProcedure?: Maybe<Procedure>;
  getSpecialty: Specialty;
  getSpecialties?: Maybe<Array<Specialty>>;
};


export type QueryGetDoctorArgs = {
  id: Scalars['ID'];
};


export type QueryGetGuideArgs = {
  id: Scalars['ID'];
};


export type QueryGetPatientArgs = {
  id: Scalars['ID'];
};


export type QueryGetProcedureTableArgs = {
  id: Scalars['ID'];
};


export type QueryGetProceduresArgs = {
  procedureTableId: Scalars['ID'];
  take?: Maybe<Scalars['Int']>;
  cursor?: Maybe<Scalars['ID']>;
  filter?: Maybe<Scalars['String']>;
};


export type QueryGetProcedureArgs = {
  id: Scalars['ID'];
};


export type QueryGetSpecialtyArgs = {
  id: Scalars['ID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAccount: Account;
  signIn: LoginUser;
  createDoctor: Doctor;
  updateDoctor: Doctor;
  createGuide: Guide;
  updateGuides: Guide;
  createPatient: Patient;
  updatePatient: Patient;
  createProcedureTable: ProcedureTable;
  updateProcedureTable: ProcedureTable;
  createProcedure: Procedure;
  updateProcedure: Procedure;
  createSpecialty: Specialty;
  updateSpecialty: Specialty;
};


export type MutationCreateAccountArgs = {
  input: CreateAccountInput;
};


export type MutationSignInArgs = {
  input: LoginUserInput;
};


export type MutationCreateDoctorArgs = {
  input: DoctorInput;
};


export type MutationUpdateDoctorArgs = {
  id: Scalars['ID'];
  input: DoctorInput;
};


export type MutationCreateGuideArgs = {
  input: GuideInput;
};


export type MutationUpdateGuidesArgs = {
  id: Scalars['ID'];
  input: GuideInput;
};


export type MutationCreatePatientArgs = {
  input: PatientInput;
};


export type MutationUpdatePatientArgs = {
  id: Scalars['ID'];
  input: PatientInput;
};


export type MutationCreateProcedureTableArgs = {
  input: ProcedureTableInput;
};


export type MutationUpdateProcedureTableArgs = {
  id: Scalars['ID'];
  input: ProcedureTableInput;
};


export type MutationCreateProcedureArgs = {
  input: ProcedureInput;
};


export type MutationUpdateProcedureArgs = {
  id: Scalars['ID'];
  input?: Maybe<ProcedureInput>;
};


export type MutationCreateSpecialtyArgs = {
  input: SpecialtyInput;
};


export type MutationUpdateSpecialtyArgs = {
  id: Scalars['ID'];
  input?: Maybe<SpecialtyInput>;
};

export type Gender =
  | 'MASCULINO'
  | 'FEMININO';

export type Plan =
  | 'STARTER';

export type CreateAccountInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  name: Scalars['String'];
  plan?: Maybe<Plan>;
};

export type LoginUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginUser = {
  __typename?: 'LoginUser';
  token: Scalars['String'];
  user: User;
};

export type Account = {
  __typename?: 'Account';
  id: Scalars['ID'];
  plan: Plan;
  name?: Maybe<Scalars['String']>;
  users?: Maybe<Array<Maybe<User>>>;
  status?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  accountId: Scalars['ID'];
  status?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  gender?: Maybe<Gender>;
  roles?: Maybe<Array<Role>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type Role = {
  __typename?: 'Role';
  id: Scalars['ID'];
  role: Scalars['String'];
};

export type DoctorInput = {
  name: Scalars['String'];
  gender?: Maybe<Gender>;
  birth?: Maybe<Scalars['String']>;
  register?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  cep?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  neighborhood?: Maybe<Scalars['String']>;
  complement?: Maybe<Scalars['String']>;
};

export type Doctor = {
  __typename?: 'Doctor';
  id: Scalars['ID'];
  name: Scalars['String'];
  gender?: Maybe<Gender>;
  birth?: Maybe<Scalars['String']>;
  register?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  cep?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  neighborhood?: Maybe<Scalars['String']>;
  complement?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  guides?: Maybe<Array<Maybe<Guide>>>;
};

export type GuideInput = {
  description: Scalars['String'];
  patientId: Scalars['ID'];
  doctorId: Scalars['ID'];
};

export type Guide = {
  __typename?: 'Guide';
  id: Scalars['ID'];
  description: Scalars['String'];
  doctor?: Maybe<Doctor>;
  patient?: Maybe<Patient>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type Patient = {
  __typename?: 'Patient';
  guides?: Maybe<Array<Maybe<Guide>>>;
  id: Scalars['ID'];
  name: Scalars['String'];
  gender?: Maybe<Gender>;
  birth?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PatientInput = {
  name: Scalars['String'];
  birth?: Maybe<Scalars['String']>;
  gender?: Maybe<Gender>;
};

export type ProcedureTableInput = {
  name: Scalars['String'];
};

export type ProcedureInput = {
  name: Scalars['String'];
  code?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  specialtyId: Scalars['ID'];
  procedureTableId: Scalars['ID'];
};

export type SpecialtyInput = {
  name: Scalars['String'];
};

export type ProcedureTable = {
  __typename?: 'ProcedureTable';
  id: Scalars['ID'];
  name: Scalars['String'];
  procedures?: Maybe<Array<Maybe<Procedure>>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type Procedure = {
  __typename?: 'Procedure';
  id: Scalars['ID'];
  name: Scalars['String'];
  code?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  specialty?: Maybe<Specialty>;
  procedureTable?: Maybe<ProcedureTable>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type QueryInfo = {
  __typename?: 'QueryInfo';
  ammount?: Maybe<Scalars['Int']>;
};

export type GetProcedures = {
  __typename?: 'GetProcedures';
  queryInfo?: Maybe<QueryInfo>;
  procedures?: Maybe<Array<Maybe<Procedure>>>;
};

export type Specialty = {
  __typename?: 'Specialty';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type GetDoctorsFragmentFragment = (
  { __typename?: 'Doctor' }
  & Pick<Doctor, 'id' | 'name' | 'gender' | 'register' | 'createdAt'>
);

export type GetDoctorFragmentFragment = (
  { __typename?: 'Doctor' }
  & Pick<Doctor, 'id' | 'name' | 'gender' | 'birth' | 'register' | 'email' | 'country' | 'cep' | 'state' | 'city' | 'street' | 'neighborhood' | 'complement' | 'createdAt' | 'updatedAt'>
);

export type GetDoctorsQueryVariables = {};


export type GetDoctorsQuery = (
  { __typename?: 'Query' }
  & { getDoctors?: Maybe<Array<(
    { __typename?: 'Doctor' }
    & GetDoctorsFragmentFragment
  )>> }
);

export type GetDoctorQueryVariables = {
  id: Scalars['ID'];
};


export type GetDoctorQuery = (
  { __typename?: 'Query' }
  & { getDoctor: (
    { __typename?: 'Doctor' }
    & GetDoctorFragmentFragment
  ) }
);

export type CreateDoctorMutationVariables = {
  input: DoctorInput;
};


export type CreateDoctorMutation = (
  { __typename?: 'Mutation' }
  & { createDoctor: (
    { __typename?: 'Doctor' }
    & GetDoctorsFragmentFragment
  ) }
);

export type UptadateDoctorMutationVariables = {
  id: Scalars['ID'];
  input: DoctorInput;
};


export type UptadateDoctorMutation = (
  { __typename?: 'Mutation' }
  & { updateDoctor: (
    { __typename?: 'Doctor' }
    & GetDoctorFragmentFragment
  ) }
);

export type ProceduresFragment = (
  { __typename?: 'Procedure' }
  & Pick<Procedure, 'id' | 'name' | 'code' | 'value'>
  & { specialty?: Maybe<(
    { __typename?: 'Specialty' }
    & Pick<Specialty, 'id' | 'name'>
  )>, procedureTable?: Maybe<(
    { __typename?: 'ProcedureTable' }
    & Pick<ProcedureTable, 'id' | 'name'>
  )> }
);

export type GetProceduresQueryVariables = {
  procedureTableId: Scalars['ID'];
  take?: Maybe<Scalars['Int']>;
  cursor?: Maybe<Scalars['ID']>;
  filter?: Maybe<Scalars['String']>;
};


export type GetProceduresQuery = (
  { __typename?: 'Query' }
  & { getProcedures?: Maybe<(
    { __typename?: 'GetProcedures' }
    & { queryInfo?: Maybe<(
      { __typename?: 'QueryInfo' }
      & Pick<QueryInfo, 'ammount'>
    )>, procedures?: Maybe<Array<Maybe<(
      { __typename?: 'Procedure' }
      & ProceduresFragment
    )>>> }
  )> }
);

export type GetProcedureQueryVariables = {
  id: Scalars['ID'];
};


export type GetProcedureQuery = (
  { __typename?: 'Query' }
  & { getProcedure?: Maybe<(
    { __typename?: 'Procedure' }
    & ProceduresFragment
  )> }
);

export type CreateProcedureMutationVariables = {
  input: ProcedureInput;
};


export type CreateProcedureMutation = (
  { __typename?: 'Mutation' }
  & { createProcedure: (
    { __typename?: 'Procedure' }
    & ProceduresFragment
  ) }
);

export type UpdateProcedureMutationVariables = {
  id: Scalars['ID'];
  input: ProcedureInput;
};


export type UpdateProcedureMutation = (
  { __typename?: 'Mutation' }
  & { updateProcedure: (
    { __typename?: 'Procedure' }
    & ProceduresFragment
  ) }
);

export type ProcedureTableFragment = (
  { __typename?: 'ProcedureTable' }
  & Pick<ProcedureTable, 'id' | 'name' | 'createdAt' | 'updatedAt'>
);

export type GetProcedureTablesQueryVariables = {};


export type GetProcedureTablesQuery = (
  { __typename?: 'Query' }
  & { getProcedureTables?: Maybe<Array<(
    { __typename?: 'ProcedureTable' }
    & ProcedureTableFragment
  )>> }
);

export type GetProcedureTableQueryVariables = {
  id: Scalars['ID'];
};


export type GetProcedureTableQuery = (
  { __typename?: 'Query' }
  & { getProcedureTable: (
    { __typename?: 'ProcedureTable' }
    & ProcedureTableFragment
  ) }
);

export type CreateProcedureTableMutationVariables = {
  input: ProcedureTableInput;
};


export type CreateProcedureTableMutation = (
  { __typename?: 'Mutation' }
  & { createProcedureTable: (
    { __typename?: 'ProcedureTable' }
    & ProcedureTableFragment
  ) }
);

export type UpdateProcedureTableMutationVariables = {
  id: Scalars['ID'];
  input: ProcedureTableInput;
};


export type UpdateProcedureTableMutation = (
  { __typename?: 'Mutation' }
  & { updateProcedureTable: (
    { __typename?: 'ProcedureTable' }
    & ProcedureTableFragment
  ) }
);

export type GetSpecialtyFragmentFragment = (
  { __typename?: 'Specialty' }
  & Pick<Specialty, 'id' | 'name'>
);

export type GetSpecialtiesQueryVariables = {};


export type GetSpecialtiesQuery = (
  { __typename?: 'Query' }
  & { getSpecialties?: Maybe<Array<(
    { __typename?: 'Specialty' }
    & GetSpecialtyFragmentFragment
  )>> }
);

export type GetSpecialtyQueryVariables = {
  id: Scalars['ID'];
};


export type GetSpecialtyQuery = (
  { __typename?: 'Query' }
  & { getSpecialty: (
    { __typename?: 'Specialty' }
    & GetSpecialtyFragmentFragment
  ) }
);

export type CreateSpecialtyMutationVariables = {
  input: SpecialtyInput;
};


export type CreateSpecialtyMutation = (
  { __typename?: 'Mutation' }
  & { createSpecialty: (
    { __typename?: 'Specialty' }
    & GetSpecialtyFragmentFragment
  ) }
);

export type UpdateSpecialtyMutationVariables = {
  id: Scalars['ID'];
  input: SpecialtyInput;
};


export type UpdateSpecialtyMutation = (
  { __typename?: 'Mutation' }
  & { updateSpecialty: (
    { __typename?: 'Specialty' }
    & GetSpecialtyFragmentFragment
  ) }
);

export const GetDoctorsFragmentFragmentDoc = gql`
    fragment GetDoctorsFragment on Doctor {
  id
  name
  gender
  register
  createdAt
}
    `;
export const GetDoctorFragmentFragmentDoc = gql`
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
export const ProceduresFragmentDoc = gql`
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
export const ProcedureTableFragmentDoc = gql`
    fragment ProcedureTable on ProcedureTable {
  id
  name
  createdAt
  updatedAt
}
    `;
export const GetSpecialtyFragmentFragmentDoc = gql`
    fragment GetSpecialtyFragment on Specialty {
  id
  name
}
    `;
export const GetDoctorsDocument = gql`
    query GetDoctors {
  getDoctors {
    ...GetDoctorsFragment
  }
}
    ${GetDoctorsFragmentFragmentDoc}`;
export type GetDoctorsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetDoctorsQuery, GetDoctorsQueryVariables>, 'query'>;

export const GetDoctorsComponent = (props: GetDoctorsComponentProps) => (
  <ApolloReactComponents.Query<GetDoctorsQuery, GetDoctorsQueryVariables> query={GetDoctorsDocument} {...props} />
);

export type GetDoctorsProps<TChildProps = {}, TDataName extends string = 'data'> = {
  [key in TDataName]: ApolloReactHoc.DataValue<GetDoctorsQuery, GetDoctorsQueryVariables>
} & TChildProps;
export function withGetDoctors<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
TProps,
GetDoctorsQuery,
GetDoctorsQueryVariables,
GetDoctorsProps<TChildProps, TDataName>>) {
  return ApolloReactHoc.withQuery<TProps, GetDoctorsQuery, GetDoctorsQueryVariables, GetDoctorsProps<TChildProps, TDataName>>(GetDoctorsDocument, {
    alias: 'getDoctors',
    ...operationOptions,
  });
}

/**
 * __useGetDoctorsQuery__
 *
 * To run a query within a React component, call `useGetDoctorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDoctorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDoctorsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetDoctorsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetDoctorsQuery, GetDoctorsQueryVariables>) {
  return ApolloReactHooks.useQuery<GetDoctorsQuery, GetDoctorsQueryVariables>(GetDoctorsDocument, baseOptions);
}
export function useGetDoctorsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetDoctorsQuery, GetDoctorsQueryVariables>) {
  return ApolloReactHooks.useLazyQuery<GetDoctorsQuery, GetDoctorsQueryVariables>(GetDoctorsDocument, baseOptions);
}
export type GetDoctorsQueryHookResult = ReturnType<typeof useGetDoctorsQuery>;
export type GetDoctorsLazyQueryHookResult = ReturnType<typeof useGetDoctorsLazyQuery>;
export type GetDoctorsQueryResult = ApolloReactCommon.QueryResult<GetDoctorsQuery, GetDoctorsQueryVariables>;
export const GetDoctorDocument = gql`
    query GetDoctor($id: ID!) {
  getDoctor(id: $id) {
    ...GetDoctorFragment
  }
}
    ${GetDoctorFragmentFragmentDoc}`;
export type GetDoctorComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetDoctorQuery, GetDoctorQueryVariables>, 'query'> & ({ variables: GetDoctorQueryVariables; skip?: boolean; } | { skip: boolean; });

export const GetDoctorComponent = (props: GetDoctorComponentProps) => (
  <ApolloReactComponents.Query<GetDoctorQuery, GetDoctorQueryVariables> query={GetDoctorDocument} {...props} />
);

export type GetDoctorProps<TChildProps = {}, TDataName extends string = 'data'> = {
  [key in TDataName]: ApolloReactHoc.DataValue<GetDoctorQuery, GetDoctorQueryVariables>
} & TChildProps;
export function withGetDoctor<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
TProps,
GetDoctorQuery,
GetDoctorQueryVariables,
GetDoctorProps<TChildProps, TDataName>>) {
  return ApolloReactHoc.withQuery<TProps, GetDoctorQuery, GetDoctorQueryVariables, GetDoctorProps<TChildProps, TDataName>>(GetDoctorDocument, {
    alias: 'getDoctor',
    ...operationOptions,
  });
}

/**
 * __useGetDoctorQuery__
 *
 * To run a query within a React component, call `useGetDoctorQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDoctorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDoctorQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetDoctorQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetDoctorQuery, GetDoctorQueryVariables>) {
  return ApolloReactHooks.useQuery<GetDoctorQuery, GetDoctorQueryVariables>(GetDoctorDocument, baseOptions);
}
export function useGetDoctorLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetDoctorQuery, GetDoctorQueryVariables>) {
  return ApolloReactHooks.useLazyQuery<GetDoctorQuery, GetDoctorQueryVariables>(GetDoctorDocument, baseOptions);
}
export type GetDoctorQueryHookResult = ReturnType<typeof useGetDoctorQuery>;
export type GetDoctorLazyQueryHookResult = ReturnType<typeof useGetDoctorLazyQuery>;
export type GetDoctorQueryResult = ApolloReactCommon.QueryResult<GetDoctorQuery, GetDoctorQueryVariables>;
export const CreateDoctorDocument = gql`
    mutation createDoctor($input: DoctorInput!) {
  createDoctor(input: $input) {
    ...GetDoctorsFragment
  }
}
    ${GetDoctorsFragmentFragmentDoc}`;
export type CreateDoctorMutationFn = ApolloReactCommon.MutationFunction<CreateDoctorMutation, CreateDoctorMutationVariables>;
export type CreateDoctorComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateDoctorMutation, CreateDoctorMutationVariables>, 'mutation'>;

export const CreateDoctorComponent = (props: CreateDoctorComponentProps) => (
  <ApolloReactComponents.Mutation<CreateDoctorMutation, CreateDoctorMutationVariables> mutation={CreateDoctorDocument} {...props} />
);

export type CreateDoctorProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
  [key in TDataName]: ApolloReactCommon.MutationFunction<CreateDoctorMutation, CreateDoctorMutationVariables>
} & TChildProps;
export function withCreateDoctor<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
TProps,
CreateDoctorMutation,
CreateDoctorMutationVariables,
CreateDoctorProps<TChildProps, TDataName>>) {
  return ApolloReactHoc.withMutation<TProps, CreateDoctorMutation, CreateDoctorMutationVariables, CreateDoctorProps<TChildProps, TDataName>>(CreateDoctorDocument, {
    alias: 'createDoctor',
    ...operationOptions,
  });
}

/**
 * __useCreateDoctorMutation__
 *
 * To run a mutation, you first call `useCreateDoctorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDoctorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDoctorMutation, { data, loading, error }] = useCreateDoctorMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateDoctorMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateDoctorMutation, CreateDoctorMutationVariables>) {
  return ApolloReactHooks.useMutation<CreateDoctorMutation, CreateDoctorMutationVariables>(CreateDoctorDocument, baseOptions);
}
export type CreateDoctorMutationHookResult = ReturnType<typeof useCreateDoctorMutation>;
export type CreateDoctorMutationResult = ApolloReactCommon.MutationResult<CreateDoctorMutation>;
export type CreateDoctorMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateDoctorMutation, CreateDoctorMutationVariables>;
export const UptadateDoctorDocument = gql`
    mutation UptadateDoctor($id: ID!, $input: DoctorInput!) {
  updateDoctor(id: $id, input: $input) {
    ...GetDoctorFragment
  }
}
    ${GetDoctorFragmentFragmentDoc}`;
export type UptadateDoctorMutationFn = ApolloReactCommon.MutationFunction<UptadateDoctorMutation, UptadateDoctorMutationVariables>;
export type UptadateDoctorComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UptadateDoctorMutation, UptadateDoctorMutationVariables>, 'mutation'>;

export const UptadateDoctorComponent = (props: UptadateDoctorComponentProps) => (
  <ApolloReactComponents.Mutation<UptadateDoctorMutation, UptadateDoctorMutationVariables> mutation={UptadateDoctorDocument} {...props} />
);

export type UptadateDoctorProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
  [key in TDataName]: ApolloReactCommon.MutationFunction<UptadateDoctorMutation, UptadateDoctorMutationVariables>
} & TChildProps;
export function withUptadateDoctor<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
TProps,
UptadateDoctorMutation,
UptadateDoctorMutationVariables,
UptadateDoctorProps<TChildProps, TDataName>>) {
  return ApolloReactHoc.withMutation<TProps, UptadateDoctorMutation, UptadateDoctorMutationVariables, UptadateDoctorProps<TChildProps, TDataName>>(UptadateDoctorDocument, {
    alias: 'uptadateDoctor',
    ...operationOptions,
  });
}

/**
 * __useUptadateDoctorMutation__
 *
 * To run a mutation, you first call `useUptadateDoctorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUptadateDoctorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uptadateDoctorMutation, { data, loading, error }] = useUptadateDoctorMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUptadateDoctorMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UptadateDoctorMutation, UptadateDoctorMutationVariables>) {
  return ApolloReactHooks.useMutation<UptadateDoctorMutation, UptadateDoctorMutationVariables>(UptadateDoctorDocument, baseOptions);
}
export type UptadateDoctorMutationHookResult = ReturnType<typeof useUptadateDoctorMutation>;
export type UptadateDoctorMutationResult = ApolloReactCommon.MutationResult<UptadateDoctorMutation>;
export type UptadateDoctorMutationOptions = ApolloReactCommon.BaseMutationOptions<UptadateDoctorMutation, UptadateDoctorMutationVariables>;
export const GetProceduresDocument = gql`
    query GetProcedures($procedureTableId: ID!, $take: Int, $cursor: ID, $filter: String) {
  getProcedures(procedureTableId: $procedureTableId, take: $take, cursor: $cursor, filter: $filter) {
    queryInfo {
      ammount
    }
    procedures {
      ...Procedures
    }
  }
}
    ${ProceduresFragmentDoc}`;
export type GetProceduresComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetProceduresQuery, GetProceduresQueryVariables>, 'query'> & ({ variables: GetProceduresQueryVariables; skip?: boolean; } | { skip: boolean; });

export const GetProceduresComponent = (props: GetProceduresComponentProps) => (
  <ApolloReactComponents.Query<GetProceduresQuery, GetProceduresQueryVariables> query={GetProceduresDocument} {...props} />
);

export type GetProceduresProps<TChildProps = {}, TDataName extends string = 'data'> = {
  [key in TDataName]: ApolloReactHoc.DataValue<GetProceduresQuery, GetProceduresQueryVariables>
} & TChildProps;
export function withGetProcedures<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
TProps,
GetProceduresQuery,
GetProceduresQueryVariables,
GetProceduresProps<TChildProps, TDataName>>) {
  return ApolloReactHoc.withQuery<TProps, GetProceduresQuery, GetProceduresQueryVariables, GetProceduresProps<TChildProps, TDataName>>(GetProceduresDocument, {
    alias: 'getProcedures',
    ...operationOptions,
  });
}

/**
 * __useGetProceduresQuery__
 *
 * To run a query within a React component, call `useGetProceduresQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProceduresQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProceduresQuery({
 *   variables: {
 *      procedureTableId: // value for 'procedureTableId'
 *      take: // value for 'take'
 *      cursor: // value for 'cursor'
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useGetProceduresQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetProceduresQuery, GetProceduresQueryVariables>) {
  return ApolloReactHooks.useQuery<GetProceduresQuery, GetProceduresQueryVariables>(GetProceduresDocument, baseOptions);
}
export function useGetProceduresLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetProceduresQuery, GetProceduresQueryVariables>) {
  return ApolloReactHooks.useLazyQuery<GetProceduresQuery, GetProceduresQueryVariables>(GetProceduresDocument, baseOptions);
}
export type GetProceduresQueryHookResult = ReturnType<typeof useGetProceduresQuery>;
export type GetProceduresLazyQueryHookResult = ReturnType<typeof useGetProceduresLazyQuery>;
export type GetProceduresQueryResult = ApolloReactCommon.QueryResult<GetProceduresQuery, GetProceduresQueryVariables>;
export const GetProcedureDocument = gql`
    query GetProcedure($id: ID!) {
  getProcedure(id: $id) {
    ...Procedures
  }
}
    ${ProceduresFragmentDoc}`;
export type GetProcedureComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetProcedureQuery, GetProcedureQueryVariables>, 'query'> & ({ variables: GetProcedureQueryVariables; skip?: boolean; } | { skip: boolean; });

export const GetProcedureComponent = (props: GetProcedureComponentProps) => (
  <ApolloReactComponents.Query<GetProcedureQuery, GetProcedureQueryVariables> query={GetProcedureDocument} {...props} />
);

export type GetProcedureProps<TChildProps = {}, TDataName extends string = 'data'> = {
  [key in TDataName]: ApolloReactHoc.DataValue<GetProcedureQuery, GetProcedureQueryVariables>
} & TChildProps;
export function withGetProcedure<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
TProps,
GetProcedureQuery,
GetProcedureQueryVariables,
GetProcedureProps<TChildProps, TDataName>>) {
  return ApolloReactHoc.withQuery<TProps, GetProcedureQuery, GetProcedureQueryVariables, GetProcedureProps<TChildProps, TDataName>>(GetProcedureDocument, {
    alias: 'getProcedure',
    ...operationOptions,
  });
}

/**
 * __useGetProcedureQuery__
 *
 * To run a query within a React component, call `useGetProcedureQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProcedureQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProcedureQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetProcedureQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetProcedureQuery, GetProcedureQueryVariables>) {
  return ApolloReactHooks.useQuery<GetProcedureQuery, GetProcedureQueryVariables>(GetProcedureDocument, baseOptions);
}
export function useGetProcedureLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetProcedureQuery, GetProcedureQueryVariables>) {
  return ApolloReactHooks.useLazyQuery<GetProcedureQuery, GetProcedureQueryVariables>(GetProcedureDocument, baseOptions);
}
export type GetProcedureQueryHookResult = ReturnType<typeof useGetProcedureQuery>;
export type GetProcedureLazyQueryHookResult = ReturnType<typeof useGetProcedureLazyQuery>;
export type GetProcedureQueryResult = ApolloReactCommon.QueryResult<GetProcedureQuery, GetProcedureQueryVariables>;
export const CreateProcedureDocument = gql`
    mutation CreateProcedure($input: ProcedureInput!) {
  createProcedure(input: $input) {
    ...Procedures
  }
}
    ${ProceduresFragmentDoc}`;
export type CreateProcedureMutationFn = ApolloReactCommon.MutationFunction<CreateProcedureMutation, CreateProcedureMutationVariables>;
export type CreateProcedureComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateProcedureMutation, CreateProcedureMutationVariables>, 'mutation'>;

export const CreateProcedureComponent = (props: CreateProcedureComponentProps) => (
  <ApolloReactComponents.Mutation<CreateProcedureMutation, CreateProcedureMutationVariables> mutation={CreateProcedureDocument} {...props} />
);

export type CreateProcedureProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
  [key in TDataName]: ApolloReactCommon.MutationFunction<CreateProcedureMutation, CreateProcedureMutationVariables>
} & TChildProps;
export function withCreateProcedure<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
TProps,
CreateProcedureMutation,
CreateProcedureMutationVariables,
CreateProcedureProps<TChildProps, TDataName>>) {
  return ApolloReactHoc.withMutation<TProps, CreateProcedureMutation, CreateProcedureMutationVariables, CreateProcedureProps<TChildProps, TDataName>>(CreateProcedureDocument, {
    alias: 'createProcedure',
    ...operationOptions,
  });
}

/**
 * __useCreateProcedureMutation__
 *
 * To run a mutation, you first call `useCreateProcedureMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProcedureMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProcedureMutation, { data, loading, error }] = useCreateProcedureMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateProcedureMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateProcedureMutation, CreateProcedureMutationVariables>) {
  return ApolloReactHooks.useMutation<CreateProcedureMutation, CreateProcedureMutationVariables>(CreateProcedureDocument, baseOptions);
}
export type CreateProcedureMutationHookResult = ReturnType<typeof useCreateProcedureMutation>;
export type CreateProcedureMutationResult = ApolloReactCommon.MutationResult<CreateProcedureMutation>;
export type CreateProcedureMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateProcedureMutation, CreateProcedureMutationVariables>;
export const UpdateProcedureDocument = gql`
    mutation UpdateProcedure($id: ID!, $input: ProcedureInput!) {
  updateProcedure(id: $id, input: $input) {
    ...Procedures
  }
}
    ${ProceduresFragmentDoc}`;
export type UpdateProcedureMutationFn = ApolloReactCommon.MutationFunction<UpdateProcedureMutation, UpdateProcedureMutationVariables>;
export type UpdateProcedureComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateProcedureMutation, UpdateProcedureMutationVariables>, 'mutation'>;

export const UpdateProcedureComponent = (props: UpdateProcedureComponentProps) => (
  <ApolloReactComponents.Mutation<UpdateProcedureMutation, UpdateProcedureMutationVariables> mutation={UpdateProcedureDocument} {...props} />
);

export type UpdateProcedureProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
  [key in TDataName]: ApolloReactCommon.MutationFunction<UpdateProcedureMutation, UpdateProcedureMutationVariables>
} & TChildProps;
export function withUpdateProcedure<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
TProps,
UpdateProcedureMutation,
UpdateProcedureMutationVariables,
UpdateProcedureProps<TChildProps, TDataName>>) {
  return ApolloReactHoc.withMutation<TProps, UpdateProcedureMutation, UpdateProcedureMutationVariables, UpdateProcedureProps<TChildProps, TDataName>>(UpdateProcedureDocument, {
    alias: 'updateProcedure',
    ...operationOptions,
  });
}

/**
 * __useUpdateProcedureMutation__
 *
 * To run a mutation, you first call `useUpdateProcedureMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProcedureMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProcedureMutation, { data, loading, error }] = useUpdateProcedureMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateProcedureMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateProcedureMutation, UpdateProcedureMutationVariables>) {
  return ApolloReactHooks.useMutation<UpdateProcedureMutation, UpdateProcedureMutationVariables>(UpdateProcedureDocument, baseOptions);
}
export type UpdateProcedureMutationHookResult = ReturnType<typeof useUpdateProcedureMutation>;
export type UpdateProcedureMutationResult = ApolloReactCommon.MutationResult<UpdateProcedureMutation>;
export type UpdateProcedureMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateProcedureMutation, UpdateProcedureMutationVariables>;
export const GetProcedureTablesDocument = gql`
    query GetProcedureTables {
  getProcedureTables {
    ...ProcedureTable
  }
}
    ${ProcedureTableFragmentDoc}`;
export type GetProcedureTablesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetProcedureTablesQuery, GetProcedureTablesQueryVariables>, 'query'>;

export const GetProcedureTablesComponent = (props: GetProcedureTablesComponentProps) => (
  <ApolloReactComponents.Query<GetProcedureTablesQuery, GetProcedureTablesQueryVariables> query={GetProcedureTablesDocument} {...props} />
);

export type GetProcedureTablesProps<TChildProps = {}, TDataName extends string = 'data'> = {
  [key in TDataName]: ApolloReactHoc.DataValue<GetProcedureTablesQuery, GetProcedureTablesQueryVariables>
} & TChildProps;
export function withGetProcedureTables<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
TProps,
GetProcedureTablesQuery,
GetProcedureTablesQueryVariables,
GetProcedureTablesProps<TChildProps, TDataName>>) {
  return ApolloReactHoc.withQuery<TProps, GetProcedureTablesQuery, GetProcedureTablesQueryVariables, GetProcedureTablesProps<TChildProps, TDataName>>(GetProcedureTablesDocument, {
    alias: 'getProcedureTables',
    ...operationOptions,
  });
}

/**
 * __useGetProcedureTablesQuery__
 *
 * To run a query within a React component, call `useGetProcedureTablesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProcedureTablesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProcedureTablesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProcedureTablesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetProcedureTablesQuery, GetProcedureTablesQueryVariables>) {
  return ApolloReactHooks.useQuery<GetProcedureTablesQuery, GetProcedureTablesQueryVariables>(GetProcedureTablesDocument, baseOptions);
}
export function useGetProcedureTablesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetProcedureTablesQuery, GetProcedureTablesQueryVariables>) {
  return ApolloReactHooks.useLazyQuery<GetProcedureTablesQuery, GetProcedureTablesQueryVariables>(GetProcedureTablesDocument, baseOptions);
}
export type GetProcedureTablesQueryHookResult = ReturnType<typeof useGetProcedureTablesQuery>;
export type GetProcedureTablesLazyQueryHookResult = ReturnType<typeof useGetProcedureTablesLazyQuery>;
export type GetProcedureTablesQueryResult = ApolloReactCommon.QueryResult<GetProcedureTablesQuery, GetProcedureTablesQueryVariables>;
export const GetProcedureTableDocument = gql`
    query GetProcedureTable($id: ID!) {
  getProcedureTable(id: $id) {
    ...ProcedureTable
  }
}
    ${ProcedureTableFragmentDoc}`;
export type GetProcedureTableComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetProcedureTableQuery, GetProcedureTableQueryVariables>, 'query'> & ({ variables: GetProcedureTableQueryVariables; skip?: boolean; } | { skip: boolean; });

export const GetProcedureTableComponent = (props: GetProcedureTableComponentProps) => (
  <ApolloReactComponents.Query<GetProcedureTableQuery, GetProcedureTableQueryVariables> query={GetProcedureTableDocument} {...props} />
);

export type GetProcedureTableProps<TChildProps = {}, TDataName extends string = 'data'> = {
  [key in TDataName]: ApolloReactHoc.DataValue<GetProcedureTableQuery, GetProcedureTableQueryVariables>
} & TChildProps;
export function withGetProcedureTable<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
TProps,
GetProcedureTableQuery,
GetProcedureTableQueryVariables,
GetProcedureTableProps<TChildProps, TDataName>>) {
  return ApolloReactHoc.withQuery<TProps, GetProcedureTableQuery, GetProcedureTableQueryVariables, GetProcedureTableProps<TChildProps, TDataName>>(GetProcedureTableDocument, {
    alias: 'getProcedureTable',
    ...operationOptions,
  });
}

/**
 * __useGetProcedureTableQuery__
 *
 * To run a query within a React component, call `useGetProcedureTableQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProcedureTableQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProcedureTableQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetProcedureTableQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetProcedureTableQuery, GetProcedureTableQueryVariables>) {
  return ApolloReactHooks.useQuery<GetProcedureTableQuery, GetProcedureTableQueryVariables>(GetProcedureTableDocument, baseOptions);
}
export function useGetProcedureTableLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetProcedureTableQuery, GetProcedureTableQueryVariables>) {
  return ApolloReactHooks.useLazyQuery<GetProcedureTableQuery, GetProcedureTableQueryVariables>(GetProcedureTableDocument, baseOptions);
}
export type GetProcedureTableQueryHookResult = ReturnType<typeof useGetProcedureTableQuery>;
export type GetProcedureTableLazyQueryHookResult = ReturnType<typeof useGetProcedureTableLazyQuery>;
export type GetProcedureTableQueryResult = ApolloReactCommon.QueryResult<GetProcedureTableQuery, GetProcedureTableQueryVariables>;
export const CreateProcedureTableDocument = gql`
    mutation CreateProcedureTable($input: ProcedureTableInput!) {
  createProcedureTable(input: $input) {
    ...ProcedureTable
  }
}
    ${ProcedureTableFragmentDoc}`;
export type CreateProcedureTableMutationFn = ApolloReactCommon.MutationFunction<CreateProcedureTableMutation, CreateProcedureTableMutationVariables>;
export type CreateProcedureTableComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateProcedureTableMutation, CreateProcedureTableMutationVariables>, 'mutation'>;

export const CreateProcedureTableComponent = (props: CreateProcedureTableComponentProps) => (
  <ApolloReactComponents.Mutation<CreateProcedureTableMutation, CreateProcedureTableMutationVariables> mutation={CreateProcedureTableDocument} {...props} />
);

export type CreateProcedureTableProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
  [key in TDataName]: ApolloReactCommon.MutationFunction<CreateProcedureTableMutation, CreateProcedureTableMutationVariables>
} & TChildProps;
export function withCreateProcedureTable<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
TProps,
CreateProcedureTableMutation,
CreateProcedureTableMutationVariables,
CreateProcedureTableProps<TChildProps, TDataName>>) {
  return ApolloReactHoc.withMutation<TProps, CreateProcedureTableMutation, CreateProcedureTableMutationVariables, CreateProcedureTableProps<TChildProps, TDataName>>(CreateProcedureTableDocument, {
    alias: 'createProcedureTable',
    ...operationOptions,
  });
}

/**
 * __useCreateProcedureTableMutation__
 *
 * To run a mutation, you first call `useCreateProcedureTableMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProcedureTableMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProcedureTableMutation, { data, loading, error }] = useCreateProcedureTableMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateProcedureTableMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateProcedureTableMutation, CreateProcedureTableMutationVariables>) {
  return ApolloReactHooks.useMutation<CreateProcedureTableMutation, CreateProcedureTableMutationVariables>(CreateProcedureTableDocument, baseOptions);
}
export type CreateProcedureTableMutationHookResult = ReturnType<typeof useCreateProcedureTableMutation>;
export type CreateProcedureTableMutationResult = ApolloReactCommon.MutationResult<CreateProcedureTableMutation>;
export type CreateProcedureTableMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateProcedureTableMutation, CreateProcedureTableMutationVariables>;
export const UpdateProcedureTableDocument = gql`
    mutation UpdateProcedureTable($id: ID!, $input: ProcedureTableInput!) {
  updateProcedureTable(id: $id, input: $input) {
    ...ProcedureTable
  }
}
    ${ProcedureTableFragmentDoc}`;
export type UpdateProcedureTableMutationFn = ApolloReactCommon.MutationFunction<UpdateProcedureTableMutation, UpdateProcedureTableMutationVariables>;
export type UpdateProcedureTableComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateProcedureTableMutation, UpdateProcedureTableMutationVariables>, 'mutation'>;

export const UpdateProcedureTableComponent = (props: UpdateProcedureTableComponentProps) => (
  <ApolloReactComponents.Mutation<UpdateProcedureTableMutation, UpdateProcedureTableMutationVariables> mutation={UpdateProcedureTableDocument} {...props} />
);

export type UpdateProcedureTableProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
  [key in TDataName]: ApolloReactCommon.MutationFunction<UpdateProcedureTableMutation, UpdateProcedureTableMutationVariables>
} & TChildProps;
export function withUpdateProcedureTable<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
TProps,
UpdateProcedureTableMutation,
UpdateProcedureTableMutationVariables,
UpdateProcedureTableProps<TChildProps, TDataName>>) {
  return ApolloReactHoc.withMutation<TProps, UpdateProcedureTableMutation, UpdateProcedureTableMutationVariables, UpdateProcedureTableProps<TChildProps, TDataName>>(UpdateProcedureTableDocument, {
    alias: 'updateProcedureTable',
    ...operationOptions,
  });
}

/**
 * __useUpdateProcedureTableMutation__
 *
 * To run a mutation, you first call `useUpdateProcedureTableMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProcedureTableMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProcedureTableMutation, { data, loading, error }] = useUpdateProcedureTableMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateProcedureTableMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateProcedureTableMutation, UpdateProcedureTableMutationVariables>) {
  return ApolloReactHooks.useMutation<UpdateProcedureTableMutation, UpdateProcedureTableMutationVariables>(UpdateProcedureTableDocument, baseOptions);
}
export type UpdateProcedureTableMutationHookResult = ReturnType<typeof useUpdateProcedureTableMutation>;
export type UpdateProcedureTableMutationResult = ApolloReactCommon.MutationResult<UpdateProcedureTableMutation>;
export type UpdateProcedureTableMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateProcedureTableMutation, UpdateProcedureTableMutationVariables>;
export const GetSpecialtiesDocument = gql`
    query GetSpecialties {
  getSpecialties {
    ...GetSpecialtyFragment
  }
}
    ${GetSpecialtyFragmentFragmentDoc}`;
export type GetSpecialtiesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetSpecialtiesQuery, GetSpecialtiesQueryVariables>, 'query'>;

export const GetSpecialtiesComponent = (props: GetSpecialtiesComponentProps) => (
  <ApolloReactComponents.Query<GetSpecialtiesQuery, GetSpecialtiesQueryVariables> query={GetSpecialtiesDocument} {...props} />
);

export type GetSpecialtiesProps<TChildProps = {}, TDataName extends string = 'data'> = {
  [key in TDataName]: ApolloReactHoc.DataValue<GetSpecialtiesQuery, GetSpecialtiesQueryVariables>
} & TChildProps;
export function withGetSpecialties<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
TProps,
GetSpecialtiesQuery,
GetSpecialtiesQueryVariables,
GetSpecialtiesProps<TChildProps, TDataName>>) {
  return ApolloReactHoc.withQuery<TProps, GetSpecialtiesQuery, GetSpecialtiesQueryVariables, GetSpecialtiesProps<TChildProps, TDataName>>(GetSpecialtiesDocument, {
    alias: 'getSpecialties',
    ...operationOptions,
  });
}

/**
 * __useGetSpecialtiesQuery__
 *
 * To run a query within a React component, call `useGetSpecialtiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSpecialtiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSpecialtiesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSpecialtiesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetSpecialtiesQuery, GetSpecialtiesQueryVariables>) {
  return ApolloReactHooks.useQuery<GetSpecialtiesQuery, GetSpecialtiesQueryVariables>(GetSpecialtiesDocument, baseOptions);
}
export function useGetSpecialtiesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetSpecialtiesQuery, GetSpecialtiesQueryVariables>) {
  return ApolloReactHooks.useLazyQuery<GetSpecialtiesQuery, GetSpecialtiesQueryVariables>(GetSpecialtiesDocument, baseOptions);
}
export type GetSpecialtiesQueryHookResult = ReturnType<typeof useGetSpecialtiesQuery>;
export type GetSpecialtiesLazyQueryHookResult = ReturnType<typeof useGetSpecialtiesLazyQuery>;
export type GetSpecialtiesQueryResult = ApolloReactCommon.QueryResult<GetSpecialtiesQuery, GetSpecialtiesQueryVariables>;
export const GetSpecialtyDocument = gql`
    query GetSpecialty($id: ID!) {
  getSpecialty(id: $id) {
    ...GetSpecialtyFragment
  }
}
    ${GetSpecialtyFragmentFragmentDoc}`;
export type GetSpecialtyComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetSpecialtyQuery, GetSpecialtyQueryVariables>, 'query'> & ({ variables: GetSpecialtyQueryVariables; skip?: boolean; } | { skip: boolean; });

export const GetSpecialtyComponent = (props: GetSpecialtyComponentProps) => (
  <ApolloReactComponents.Query<GetSpecialtyQuery, GetSpecialtyQueryVariables> query={GetSpecialtyDocument} {...props} />
);

export type GetSpecialtyProps<TChildProps = {}, TDataName extends string = 'data'> = {
  [key in TDataName]: ApolloReactHoc.DataValue<GetSpecialtyQuery, GetSpecialtyQueryVariables>
} & TChildProps;
export function withGetSpecialty<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
TProps,
GetSpecialtyQuery,
GetSpecialtyQueryVariables,
GetSpecialtyProps<TChildProps, TDataName>>) {
  return ApolloReactHoc.withQuery<TProps, GetSpecialtyQuery, GetSpecialtyQueryVariables, GetSpecialtyProps<TChildProps, TDataName>>(GetSpecialtyDocument, {
    alias: 'getSpecialty',
    ...operationOptions,
  });
}

/**
 * __useGetSpecialtyQuery__
 *
 * To run a query within a React component, call `useGetSpecialtyQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSpecialtyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSpecialtyQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetSpecialtyQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetSpecialtyQuery, GetSpecialtyQueryVariables>) {
  return ApolloReactHooks.useQuery<GetSpecialtyQuery, GetSpecialtyQueryVariables>(GetSpecialtyDocument, baseOptions);
}
export function useGetSpecialtyLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetSpecialtyQuery, GetSpecialtyQueryVariables>) {
  return ApolloReactHooks.useLazyQuery<GetSpecialtyQuery, GetSpecialtyQueryVariables>(GetSpecialtyDocument, baseOptions);
}
export type GetSpecialtyQueryHookResult = ReturnType<typeof useGetSpecialtyQuery>;
export type GetSpecialtyLazyQueryHookResult = ReturnType<typeof useGetSpecialtyLazyQuery>;
export type GetSpecialtyQueryResult = ApolloReactCommon.QueryResult<GetSpecialtyQuery, GetSpecialtyQueryVariables>;
export const CreateSpecialtyDocument = gql`
    mutation CreateSpecialty($input: SpecialtyInput!) {
  createSpecialty(input: $input) {
    ...GetSpecialtyFragment
  }
}
    ${GetSpecialtyFragmentFragmentDoc}`;
export type CreateSpecialtyMutationFn = ApolloReactCommon.MutationFunction<CreateSpecialtyMutation, CreateSpecialtyMutationVariables>;
export type CreateSpecialtyComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateSpecialtyMutation, CreateSpecialtyMutationVariables>, 'mutation'>;

export const CreateSpecialtyComponent = (props: CreateSpecialtyComponentProps) => (
  <ApolloReactComponents.Mutation<CreateSpecialtyMutation, CreateSpecialtyMutationVariables> mutation={CreateSpecialtyDocument} {...props} />
);

export type CreateSpecialtyProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
  [key in TDataName]: ApolloReactCommon.MutationFunction<CreateSpecialtyMutation, CreateSpecialtyMutationVariables>
} & TChildProps;
export function withCreateSpecialty<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
TProps,
CreateSpecialtyMutation,
CreateSpecialtyMutationVariables,
CreateSpecialtyProps<TChildProps, TDataName>>) {
  return ApolloReactHoc.withMutation<TProps, CreateSpecialtyMutation, CreateSpecialtyMutationVariables, CreateSpecialtyProps<TChildProps, TDataName>>(CreateSpecialtyDocument, {
    alias: 'createSpecialty',
    ...operationOptions,
  });
}

/**
 * __useCreateSpecialtyMutation__
 *
 * To run a mutation, you first call `useCreateSpecialtyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSpecialtyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSpecialtyMutation, { data, loading, error }] = useCreateSpecialtyMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateSpecialtyMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateSpecialtyMutation, CreateSpecialtyMutationVariables>) {
  return ApolloReactHooks.useMutation<CreateSpecialtyMutation, CreateSpecialtyMutationVariables>(CreateSpecialtyDocument, baseOptions);
}
export type CreateSpecialtyMutationHookResult = ReturnType<typeof useCreateSpecialtyMutation>;
export type CreateSpecialtyMutationResult = ApolloReactCommon.MutationResult<CreateSpecialtyMutation>;
export type CreateSpecialtyMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateSpecialtyMutation, CreateSpecialtyMutationVariables>;
export const UpdateSpecialtyDocument = gql`
    mutation UpdateSpecialty($id: ID!, $input: SpecialtyInput!) {
  updateSpecialty(id: $id, input: $input) {
    ...GetSpecialtyFragment
  }
}
    ${GetSpecialtyFragmentFragmentDoc}`;
export type UpdateSpecialtyMutationFn = ApolloReactCommon.MutationFunction<UpdateSpecialtyMutation, UpdateSpecialtyMutationVariables>;
export type UpdateSpecialtyComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateSpecialtyMutation, UpdateSpecialtyMutationVariables>, 'mutation'>;

export const UpdateSpecialtyComponent = (props: UpdateSpecialtyComponentProps) => (
  <ApolloReactComponents.Mutation<UpdateSpecialtyMutation, UpdateSpecialtyMutationVariables> mutation={UpdateSpecialtyDocument} {...props} />
);

export type UpdateSpecialtyProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
  [key in TDataName]: ApolloReactCommon.MutationFunction<UpdateSpecialtyMutation, UpdateSpecialtyMutationVariables>
} & TChildProps;
export function withUpdateSpecialty<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
TProps,
UpdateSpecialtyMutation,
UpdateSpecialtyMutationVariables,
UpdateSpecialtyProps<TChildProps, TDataName>>) {
  return ApolloReactHoc.withMutation<TProps, UpdateSpecialtyMutation, UpdateSpecialtyMutationVariables, UpdateSpecialtyProps<TChildProps, TDataName>>(UpdateSpecialtyDocument, {
    alias: 'updateSpecialty',
    ...operationOptions,
  });
}

/**
 * __useUpdateSpecialtyMutation__
 *
 * To run a mutation, you first call `useUpdateSpecialtyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSpecialtyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSpecialtyMutation, { data, loading, error }] = useUpdateSpecialtyMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateSpecialtyMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateSpecialtyMutation, UpdateSpecialtyMutationVariables>) {
  return ApolloReactHooks.useMutation<UpdateSpecialtyMutation, UpdateSpecialtyMutationVariables>(UpdateSpecialtyDocument, baseOptions);
}
export type UpdateSpecialtyMutationHookResult = ReturnType<typeof useUpdateSpecialtyMutation>;
export type UpdateSpecialtyMutationResult = ApolloReactCommon.MutationResult<UpdateSpecialtyMutation>;
export type UpdateSpecialtyMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateSpecialtyMutation, UpdateSpecialtyMutationVariables>;
