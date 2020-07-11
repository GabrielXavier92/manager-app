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
  user: User;
  doctor: Doctor;
  doctors?: Maybe<Array<Doctor>>;
  guide: Guide;
  guides?: Maybe<Array<Guide>>;
  patient: Patient;
  patients?: Maybe<GetPatients>;
  procedureTable: ProcedureTable;
  procedureTables?: Maybe<Array<ProcedureTable>>;
  procedures?: Maybe<GetProcedures>;
  procedure?: Maybe<Procedure>;
  specialty: Specialty;
  specialties?: Maybe<Array<Specialty>>;
  schedule?: Maybe<Schedule>;
  schedules?: Maybe<Array<Maybe<Schedule>>>;
};


export type QueryDoctorArgs = {
  id: Scalars['ID'];
};


export type QueryGuideArgs = {
  id: Scalars['ID'];
};


export type QueryPatientArgs = {
  id: Scalars['ID'];
};


export type QueryPatientsArgs = {
  take?: Maybe<Scalars['Int']>;
  cursor?: Maybe<Scalars['ID']>;
  filter?: Maybe<Scalars['String']>;
};


export type QueryProcedureTableArgs = {
  id: Scalars['ID'];
};


export type QueryProceduresArgs = {
  procedureTableId: Scalars['ID'];
  take?: Maybe<Scalars['Int']>;
  cursor?: Maybe<Scalars['ID']>;
  filter?: Maybe<Scalars['String']>;
};


export type QueryProcedureArgs = {
  id: Scalars['ID'];
};


export type QuerySpecialtyArgs = {
  id: Scalars['ID'];
};


export type QueryScheduleArgs = {
  id: Scalars['ID'];
};


export type QuerySchedulesArgs = {
  start: Scalars['String'];
  end: Scalars['String'];
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
  createSchedule?: Maybe<Schedule>;
  updateSchedule?: Maybe<Schedule>;
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


export type MutationCreateScheduleArgs = {
  input: ScheduleInput;
};


export type MutationUpdateScheduleArgs = {
  id: Scalars['ID'];
  input: ScheduleInput;
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
  specialties?: Maybe<Array<Maybe<Specialties>>>;
};

export type Specialties = {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
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
  specialties?: Maybe<Array<Maybe<Specialty>>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  guides?: Maybe<Array<Maybe<Guide>>>;
};

export type Specialty = {
  __typename?: 'Specialty';
  id: Scalars['ID'];
  name: Scalars['String'];
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
};

export type PatientInput = {
  name: Scalars['String'];
  birth?: Maybe<Scalars['String']>;
  gender?: Maybe<Gender>;
  email?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  cep?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  neighborhood?: Maybe<Scalars['String']>;
  complement?: Maybe<Scalars['String']>;
};

export type QueryInfo = {
  __typename?: 'QueryInfo';
  ammount?: Maybe<Scalars['Int']>;
};

export type GetPatients = {
  __typename?: 'GetPatients';
  queryInfo?: Maybe<QueryInfo>;
  patients?: Maybe<Array<Maybe<Patient>>>;
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

export type GetProcedures = {
  __typename?: 'GetProcedures';
  queryInfo?: Maybe<QueryInfo>;
  procedures?: Maybe<Array<Maybe<Procedure>>>;
};

export type ScheduleInput = {
  doctor?: Maybe<ScheduleDoctorInput>;
  patient?: Maybe<SchedulePatientInput>;
  procedures?: Maybe<Array<Maybe<ScheduleProceduresInput>>>;
  time: Scalars['String'];
  comments?: Maybe<Scalars['String']>;
};

export type ScheduleDoctorInput = {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type SchedulePatientInput = {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type ScheduleProceduresInput = {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type Schedule = {
  __typename?: 'Schedule';
  id: Scalars['ID'];
  doctor: Doctor;
  patient: Patient;
  procedures?: Maybe<Array<Maybe<Procedure>>>;
  time: Scalars['String'];
  comments?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type GetDoctorsFragmentFragment = (
  { __typename?: 'Doctor' }
  & Pick<Doctor, 'id' | 'name' | 'gender' | 'register' | 'createdAt'>
);

export type GetDoctorFragmentFragment = (
  { __typename?: 'Doctor' }
  & Pick<Doctor, 'id' | 'name' | 'gender' | 'birth' | 'register' | 'email' | 'country' | 'cep' | 'state' | 'city' | 'street' | 'neighborhood' | 'complement' | 'createdAt' | 'updatedAt'>
  & { specialties?: Maybe<Array<Maybe<(
    { __typename?: 'Specialty' }
    & Pick<Specialty, 'id' | 'name'>
  )>>> }
);

export type DoctorsQueryVariables = {};


export type DoctorsQuery = (
  { __typename?: 'Query' }
  & { doctors?: Maybe<Array<(
    { __typename?: 'Doctor' }
    & GetDoctorsFragmentFragment
  )>> }
);

export type DoctorQueryVariables = {
  id: Scalars['ID'];
};


export type DoctorQuery = (
  { __typename?: 'Query' }
  & { doctor: (
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

export type PatientFragmentFragment = (
  { __typename?: 'Patient' }
  & Pick<Patient, 'id' | 'name' | 'birth' | 'gender' | 'email' | 'country' | 'cep' | 'state' | 'city' | 'street' | 'neighborhood' | 'complement'>
);

export type PatientsQueryVariables = {
  take?: Maybe<Scalars['Int']>;
  cursor?: Maybe<Scalars['ID']>;
  filter?: Maybe<Scalars['String']>;
};


export type PatientsQuery = (
  { __typename?: 'Query' }
  & { patients?: Maybe<(
    { __typename?: 'GetPatients' }
    & { queryInfo?: Maybe<(
      { __typename?: 'QueryInfo' }
      & Pick<QueryInfo, 'ammount'>
    )>, patients?: Maybe<Array<Maybe<(
      { __typename?: 'Patient' }
      & PatientFragmentFragment
    )>>> }
  )> }
);

export type PatientQueryVariables = {
  id: Scalars['ID'];
};


export type PatientQuery = (
  { __typename?: 'Query' }
  & { patient: (
    { __typename?: 'Patient' }
    & PatientFragmentFragment
  ) }
);

export type CreatePatientMutationVariables = {
  input: PatientInput;
};


export type CreatePatientMutation = (
  { __typename?: 'Mutation' }
  & { createPatient: (
    { __typename?: 'Patient' }
    & PatientFragmentFragment
  ) }
);

export type UpdatePatientMutationVariables = {
  id: Scalars['ID'];
  input: PatientInput;
};


export type UpdatePatientMutation = (
  { __typename?: 'Mutation' }
  & { updatePatient: (
    { __typename?: 'Patient' }
    & PatientFragmentFragment
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

export type ProceduresQueryVariables = {
  procedureTableId: Scalars['ID'];
  take?: Maybe<Scalars['Int']>;
  cursor?: Maybe<Scalars['ID']>;
  filter?: Maybe<Scalars['String']>;
};


export type ProceduresQuery = (
  { __typename?: 'Query' }
  & { procedures?: Maybe<(
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

export type ProcedureQueryVariables = {
  id: Scalars['ID'];
};


export type ProcedureQuery = (
  { __typename?: 'Query' }
  & { procedure?: Maybe<(
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

export type ProcedureTablesQueryVariables = {};


export type ProcedureTablesQuery = (
  { __typename?: 'Query' }
  & { procedureTables?: Maybe<Array<(
    { __typename?: 'ProcedureTable' }
    & ProcedureTableFragment
  )>> }
);

export type ProcedureTableQueryVariables = {
  id: Scalars['ID'];
};


export type ProcedureTableQuery = (
  { __typename?: 'Query' }
  & { procedureTable: (
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

export type SpecialtiesQueryVariables = {};


export type SpecialtiesQuery = (
  { __typename?: 'Query' }
  & { specialties?: Maybe<Array<(
    { __typename?: 'Specialty' }
    & GetSpecialtyFragmentFragment
  )>> }
);

export type SpecialtyQueryVariables = {
  id: Scalars['ID'];
};


export type SpecialtyQuery = (
  { __typename?: 'Query' }
  & { specialty: (
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

export type UserQueryVariables = {};


export type UserQuery = (
  { __typename?: 'Query' }
  & { user: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'status' | 'email' | 'name' | 'gender'>
    & { roles?: Maybe<Array<(
      { __typename?: 'Role' }
      & Pick<Role, 'id' | 'role'>
    )>> }
  ) }
);

export type SignInMutationVariables = {
  input: LoginUserInput;
};


export type SignInMutation = (
  { __typename?: 'Mutation' }
  & { signIn: (
    { __typename?: 'LoginUser' }
    & Pick<LoginUser, 'token'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'accountId' | 'status' | 'email' | 'name' | 'gender'>
      & { roles?: Maybe<Array<(
        { __typename?: 'Role' }
        & Pick<Role, 'id' | 'role'>
      )>> }
    ) }
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
  specialties {
    id
    name
  }
  createdAt
  updatedAt
}
    `;
export const PatientFragmentFragmentDoc = gql`
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
export const DoctorsDocument = gql`
    query Doctors {
  doctors {
    ...GetDoctorsFragment
  }
}
    ${GetDoctorsFragmentFragmentDoc}`;
export type DoctorsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<DoctorsQuery, DoctorsQueryVariables>, 'query'>;

    export const DoctorsComponent = (props: DoctorsComponentProps) => (
      <ApolloReactComponents.Query<DoctorsQuery, DoctorsQueryVariables> query={DoctorsDocument} {...props} />
    );
    
export type DoctorsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<DoctorsQuery, DoctorsQueryVariables>
    } & TChildProps;
export function withDoctors<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DoctorsQuery,
  DoctorsQueryVariables,
  DoctorsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, DoctorsQuery, DoctorsQueryVariables, DoctorsProps<TChildProps, TDataName>>(DoctorsDocument, {
      alias: 'doctors',
      ...operationOptions
    });
};

/**
 * __useDoctorsQuery__
 *
 * To run a query within a React component, call `useDoctorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useDoctorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDoctorsQuery({
 *   variables: {
 *   },
 * });
 */
export function useDoctorsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<DoctorsQuery, DoctorsQueryVariables>) {
        return ApolloReactHooks.useQuery<DoctorsQuery, DoctorsQueryVariables>(DoctorsDocument, baseOptions);
      }
export function useDoctorsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<DoctorsQuery, DoctorsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<DoctorsQuery, DoctorsQueryVariables>(DoctorsDocument, baseOptions);
        }
export type DoctorsQueryHookResult = ReturnType<typeof useDoctorsQuery>;
export type DoctorsLazyQueryHookResult = ReturnType<typeof useDoctorsLazyQuery>;
export type DoctorsQueryResult = ApolloReactCommon.QueryResult<DoctorsQuery, DoctorsQueryVariables>;
export const DoctorDocument = gql`
    query Doctor($id: ID!) {
  doctor(id: $id) {
    ...GetDoctorFragment
  }
}
    ${GetDoctorFragmentFragmentDoc}`;
export type DoctorComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<DoctorQuery, DoctorQueryVariables>, 'query'> & ({ variables: DoctorQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const DoctorComponent = (props: DoctorComponentProps) => (
      <ApolloReactComponents.Query<DoctorQuery, DoctorQueryVariables> query={DoctorDocument} {...props} />
    );
    
export type DoctorProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<DoctorQuery, DoctorQueryVariables>
    } & TChildProps;
export function withDoctor<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DoctorQuery,
  DoctorQueryVariables,
  DoctorProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, DoctorQuery, DoctorQueryVariables, DoctorProps<TChildProps, TDataName>>(DoctorDocument, {
      alias: 'doctor',
      ...operationOptions
    });
};

/**
 * __useDoctorQuery__
 *
 * To run a query within a React component, call `useDoctorQuery` and pass it any options that fit your needs.
 * When your component renders, `useDoctorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDoctorQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDoctorQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<DoctorQuery, DoctorQueryVariables>) {
        return ApolloReactHooks.useQuery<DoctorQuery, DoctorQueryVariables>(DoctorDocument, baseOptions);
      }
export function useDoctorLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<DoctorQuery, DoctorQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<DoctorQuery, DoctorQueryVariables>(DoctorDocument, baseOptions);
        }
export type DoctorQueryHookResult = ReturnType<typeof useDoctorQuery>;
export type DoctorLazyQueryHookResult = ReturnType<typeof useDoctorLazyQuery>;
export type DoctorQueryResult = ApolloReactCommon.QueryResult<DoctorQuery, DoctorQueryVariables>;
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
      ...operationOptions
    });
};

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
      ...operationOptions
    });
};

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
export const PatientsDocument = gql`
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
    ${PatientFragmentFragmentDoc}`;
export type PatientsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<PatientsQuery, PatientsQueryVariables>, 'query'>;

    export const PatientsComponent = (props: PatientsComponentProps) => (
      <ApolloReactComponents.Query<PatientsQuery, PatientsQueryVariables> query={PatientsDocument} {...props} />
    );
    
export type PatientsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<PatientsQuery, PatientsQueryVariables>
    } & TChildProps;
export function withPatients<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  PatientsQuery,
  PatientsQueryVariables,
  PatientsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, PatientsQuery, PatientsQueryVariables, PatientsProps<TChildProps, TDataName>>(PatientsDocument, {
      alias: 'patients',
      ...operationOptions
    });
};

/**
 * __usePatientsQuery__
 *
 * To run a query within a React component, call `usePatientsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePatientsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePatientsQuery({
 *   variables: {
 *      take: // value for 'take'
 *      cursor: // value for 'cursor'
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function usePatientsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<PatientsQuery, PatientsQueryVariables>) {
        return ApolloReactHooks.useQuery<PatientsQuery, PatientsQueryVariables>(PatientsDocument, baseOptions);
      }
export function usePatientsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PatientsQuery, PatientsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<PatientsQuery, PatientsQueryVariables>(PatientsDocument, baseOptions);
        }
export type PatientsQueryHookResult = ReturnType<typeof usePatientsQuery>;
export type PatientsLazyQueryHookResult = ReturnType<typeof usePatientsLazyQuery>;
export type PatientsQueryResult = ApolloReactCommon.QueryResult<PatientsQuery, PatientsQueryVariables>;
export const PatientDocument = gql`
    query Patient($id: ID!) {
  patient(id: $id) {
    ...PatientFragment
  }
}
    ${PatientFragmentFragmentDoc}`;
export type PatientComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<PatientQuery, PatientQueryVariables>, 'query'> & ({ variables: PatientQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const PatientComponent = (props: PatientComponentProps) => (
      <ApolloReactComponents.Query<PatientQuery, PatientQueryVariables> query={PatientDocument} {...props} />
    );
    
export type PatientProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<PatientQuery, PatientQueryVariables>
    } & TChildProps;
export function withPatient<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  PatientQuery,
  PatientQueryVariables,
  PatientProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, PatientQuery, PatientQueryVariables, PatientProps<TChildProps, TDataName>>(PatientDocument, {
      alias: 'patient',
      ...operationOptions
    });
};

/**
 * __usePatientQuery__
 *
 * To run a query within a React component, call `usePatientQuery` and pass it any options that fit your needs.
 * When your component renders, `usePatientQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePatientQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePatientQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<PatientQuery, PatientQueryVariables>) {
        return ApolloReactHooks.useQuery<PatientQuery, PatientQueryVariables>(PatientDocument, baseOptions);
      }
export function usePatientLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PatientQuery, PatientQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<PatientQuery, PatientQueryVariables>(PatientDocument, baseOptions);
        }
export type PatientQueryHookResult = ReturnType<typeof usePatientQuery>;
export type PatientLazyQueryHookResult = ReturnType<typeof usePatientLazyQuery>;
export type PatientQueryResult = ApolloReactCommon.QueryResult<PatientQuery, PatientQueryVariables>;
export const CreatePatientDocument = gql`
    mutation CreatePatient($input: PatientInput!) {
  createPatient(input: $input) {
    ...PatientFragment
  }
}
    ${PatientFragmentFragmentDoc}`;
export type CreatePatientMutationFn = ApolloReactCommon.MutationFunction<CreatePatientMutation, CreatePatientMutationVariables>;
export type CreatePatientComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreatePatientMutation, CreatePatientMutationVariables>, 'mutation'>;

    export const CreatePatientComponent = (props: CreatePatientComponentProps) => (
      <ApolloReactComponents.Mutation<CreatePatientMutation, CreatePatientMutationVariables> mutation={CreatePatientDocument} {...props} />
    );
    
export type CreatePatientProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<CreatePatientMutation, CreatePatientMutationVariables>
    } & TChildProps;
export function withCreatePatient<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreatePatientMutation,
  CreatePatientMutationVariables,
  CreatePatientProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreatePatientMutation, CreatePatientMutationVariables, CreatePatientProps<TChildProps, TDataName>>(CreatePatientDocument, {
      alias: 'createPatient',
      ...operationOptions
    });
};

/**
 * __useCreatePatientMutation__
 *
 * To run a mutation, you first call `useCreatePatientMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePatientMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPatientMutation, { data, loading, error }] = useCreatePatientMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreatePatientMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreatePatientMutation, CreatePatientMutationVariables>) {
        return ApolloReactHooks.useMutation<CreatePatientMutation, CreatePatientMutationVariables>(CreatePatientDocument, baseOptions);
      }
export type CreatePatientMutationHookResult = ReturnType<typeof useCreatePatientMutation>;
export type CreatePatientMutationResult = ApolloReactCommon.MutationResult<CreatePatientMutation>;
export type CreatePatientMutationOptions = ApolloReactCommon.BaseMutationOptions<CreatePatientMutation, CreatePatientMutationVariables>;
export const UpdatePatientDocument = gql`
    mutation UpdatePatient($id: ID!, $input: PatientInput!) {
  updatePatient(id: $id, input: $input) {
    ...PatientFragment
  }
}
    ${PatientFragmentFragmentDoc}`;
export type UpdatePatientMutationFn = ApolloReactCommon.MutationFunction<UpdatePatientMutation, UpdatePatientMutationVariables>;
export type UpdatePatientComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdatePatientMutation, UpdatePatientMutationVariables>, 'mutation'>;

    export const UpdatePatientComponent = (props: UpdatePatientComponentProps) => (
      <ApolloReactComponents.Mutation<UpdatePatientMutation, UpdatePatientMutationVariables> mutation={UpdatePatientDocument} {...props} />
    );
    
export type UpdatePatientProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<UpdatePatientMutation, UpdatePatientMutationVariables>
    } & TChildProps;
export function withUpdatePatient<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdatePatientMutation,
  UpdatePatientMutationVariables,
  UpdatePatientProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdatePatientMutation, UpdatePatientMutationVariables, UpdatePatientProps<TChildProps, TDataName>>(UpdatePatientDocument, {
      alias: 'updatePatient',
      ...operationOptions
    });
};

/**
 * __useUpdatePatientMutation__
 *
 * To run a mutation, you first call `useUpdatePatientMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePatientMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePatientMutation, { data, loading, error }] = useUpdatePatientMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdatePatientMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdatePatientMutation, UpdatePatientMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdatePatientMutation, UpdatePatientMutationVariables>(UpdatePatientDocument, baseOptions);
      }
export type UpdatePatientMutationHookResult = ReturnType<typeof useUpdatePatientMutation>;
export type UpdatePatientMutationResult = ApolloReactCommon.MutationResult<UpdatePatientMutation>;
export type UpdatePatientMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdatePatientMutation, UpdatePatientMutationVariables>;
export const ProceduresDocument = gql`
    query Procedures($procedureTableId: ID!, $take: Int, $cursor: ID, $filter: String) {
  procedures(procedureTableId: $procedureTableId, take: $take, cursor: $cursor, filter: $filter) {
    queryInfo {
      ammount
    }
    procedures {
      ...Procedures
    }
  }
}
    ${ProceduresFragmentDoc}`;
export type ProceduresComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ProceduresQuery, ProceduresQueryVariables>, 'query'> & ({ variables: ProceduresQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const ProceduresComponent = (props: ProceduresComponentProps) => (
      <ApolloReactComponents.Query<ProceduresQuery, ProceduresQueryVariables> query={ProceduresDocument} {...props} />
    );
    
export type ProceduresProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<ProceduresQuery, ProceduresQueryVariables>
    } & TChildProps;
export function withProcedures<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ProceduresQuery,
  ProceduresQueryVariables,
  ProceduresProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, ProceduresQuery, ProceduresQueryVariables, ProceduresProps<TChildProps, TDataName>>(ProceduresDocument, {
      alias: 'procedures',
      ...operationOptions
    });
};

/**
 * __useProceduresQuery__
 *
 * To run a query within a React component, call `useProceduresQuery` and pass it any options that fit your needs.
 * When your component renders, `useProceduresQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProceduresQuery({
 *   variables: {
 *      procedureTableId: // value for 'procedureTableId'
 *      take: // value for 'take'
 *      cursor: // value for 'cursor'
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useProceduresQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ProceduresQuery, ProceduresQueryVariables>) {
        return ApolloReactHooks.useQuery<ProceduresQuery, ProceduresQueryVariables>(ProceduresDocument, baseOptions);
      }
export function useProceduresLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ProceduresQuery, ProceduresQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ProceduresQuery, ProceduresQueryVariables>(ProceduresDocument, baseOptions);
        }
export type ProceduresQueryHookResult = ReturnType<typeof useProceduresQuery>;
export type ProceduresLazyQueryHookResult = ReturnType<typeof useProceduresLazyQuery>;
export type ProceduresQueryResult = ApolloReactCommon.QueryResult<ProceduresQuery, ProceduresQueryVariables>;
export const ProcedureDocument = gql`
    query Procedure($id: ID!) {
  procedure(id: $id) {
    ...Procedures
  }
}
    ${ProceduresFragmentDoc}`;
export type ProcedureComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ProcedureQuery, ProcedureQueryVariables>, 'query'> & ({ variables: ProcedureQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const ProcedureComponent = (props: ProcedureComponentProps) => (
      <ApolloReactComponents.Query<ProcedureQuery, ProcedureQueryVariables> query={ProcedureDocument} {...props} />
    );
    
export type ProcedureProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<ProcedureQuery, ProcedureQueryVariables>
    } & TChildProps;
export function withProcedure<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ProcedureQuery,
  ProcedureQueryVariables,
  ProcedureProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, ProcedureQuery, ProcedureQueryVariables, ProcedureProps<TChildProps, TDataName>>(ProcedureDocument, {
      alias: 'procedure',
      ...operationOptions
    });
};

/**
 * __useProcedureQuery__
 *
 * To run a query within a React component, call `useProcedureQuery` and pass it any options that fit your needs.
 * When your component renders, `useProcedureQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProcedureQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useProcedureQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ProcedureQuery, ProcedureQueryVariables>) {
        return ApolloReactHooks.useQuery<ProcedureQuery, ProcedureQueryVariables>(ProcedureDocument, baseOptions);
      }
export function useProcedureLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ProcedureQuery, ProcedureQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ProcedureQuery, ProcedureQueryVariables>(ProcedureDocument, baseOptions);
        }
export type ProcedureQueryHookResult = ReturnType<typeof useProcedureQuery>;
export type ProcedureLazyQueryHookResult = ReturnType<typeof useProcedureLazyQuery>;
export type ProcedureQueryResult = ApolloReactCommon.QueryResult<ProcedureQuery, ProcedureQueryVariables>;
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
      ...operationOptions
    });
};

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
      ...operationOptions
    });
};

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
export const ProcedureTablesDocument = gql`
    query ProcedureTables {
  procedureTables {
    ...ProcedureTable
  }
}
    ${ProcedureTableFragmentDoc}`;
export type ProcedureTablesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ProcedureTablesQuery, ProcedureTablesQueryVariables>, 'query'>;

    export const ProcedureTablesComponent = (props: ProcedureTablesComponentProps) => (
      <ApolloReactComponents.Query<ProcedureTablesQuery, ProcedureTablesQueryVariables> query={ProcedureTablesDocument} {...props} />
    );
    
export type ProcedureTablesProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<ProcedureTablesQuery, ProcedureTablesQueryVariables>
    } & TChildProps;
export function withProcedureTables<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ProcedureTablesQuery,
  ProcedureTablesQueryVariables,
  ProcedureTablesProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, ProcedureTablesQuery, ProcedureTablesQueryVariables, ProcedureTablesProps<TChildProps, TDataName>>(ProcedureTablesDocument, {
      alias: 'procedureTables',
      ...operationOptions
    });
};

/**
 * __useProcedureTablesQuery__
 *
 * To run a query within a React component, call `useProcedureTablesQuery` and pass it any options that fit your needs.
 * When your component renders, `useProcedureTablesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProcedureTablesQuery({
 *   variables: {
 *   },
 * });
 */
export function useProcedureTablesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ProcedureTablesQuery, ProcedureTablesQueryVariables>) {
        return ApolloReactHooks.useQuery<ProcedureTablesQuery, ProcedureTablesQueryVariables>(ProcedureTablesDocument, baseOptions);
      }
export function useProcedureTablesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ProcedureTablesQuery, ProcedureTablesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ProcedureTablesQuery, ProcedureTablesQueryVariables>(ProcedureTablesDocument, baseOptions);
        }
export type ProcedureTablesQueryHookResult = ReturnType<typeof useProcedureTablesQuery>;
export type ProcedureTablesLazyQueryHookResult = ReturnType<typeof useProcedureTablesLazyQuery>;
export type ProcedureTablesQueryResult = ApolloReactCommon.QueryResult<ProcedureTablesQuery, ProcedureTablesQueryVariables>;
export const ProcedureTableDocument = gql`
    query ProcedureTable($id: ID!) {
  procedureTable(id: $id) {
    ...ProcedureTable
  }
}
    ${ProcedureTableFragmentDoc}`;
export type ProcedureTableComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ProcedureTableQuery, ProcedureTableQueryVariables>, 'query'> & ({ variables: ProcedureTableQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const ProcedureTableComponent = (props: ProcedureTableComponentProps) => (
      <ApolloReactComponents.Query<ProcedureTableQuery, ProcedureTableQueryVariables> query={ProcedureTableDocument} {...props} />
    );
    
export type ProcedureTableProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<ProcedureTableQuery, ProcedureTableQueryVariables>
    } & TChildProps;
export function withProcedureTable<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ProcedureTableQuery,
  ProcedureTableQueryVariables,
  ProcedureTableProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, ProcedureTableQuery, ProcedureTableQueryVariables, ProcedureTableProps<TChildProps, TDataName>>(ProcedureTableDocument, {
      alias: 'procedureTable',
      ...operationOptions
    });
};

/**
 * __useProcedureTableQuery__
 *
 * To run a query within a React component, call `useProcedureTableQuery` and pass it any options that fit your needs.
 * When your component renders, `useProcedureTableQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProcedureTableQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useProcedureTableQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ProcedureTableQuery, ProcedureTableQueryVariables>) {
        return ApolloReactHooks.useQuery<ProcedureTableQuery, ProcedureTableQueryVariables>(ProcedureTableDocument, baseOptions);
      }
export function useProcedureTableLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ProcedureTableQuery, ProcedureTableQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ProcedureTableQuery, ProcedureTableQueryVariables>(ProcedureTableDocument, baseOptions);
        }
export type ProcedureTableQueryHookResult = ReturnType<typeof useProcedureTableQuery>;
export type ProcedureTableLazyQueryHookResult = ReturnType<typeof useProcedureTableLazyQuery>;
export type ProcedureTableQueryResult = ApolloReactCommon.QueryResult<ProcedureTableQuery, ProcedureTableQueryVariables>;
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
      ...operationOptions
    });
};

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
      ...operationOptions
    });
};

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
export const SpecialtiesDocument = gql`
    query Specialties {
  specialties {
    ...GetSpecialtyFragment
  }
}
    ${GetSpecialtyFragmentFragmentDoc}`;
export type SpecialtiesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<SpecialtiesQuery, SpecialtiesQueryVariables>, 'query'>;

    export const SpecialtiesComponent = (props: SpecialtiesComponentProps) => (
      <ApolloReactComponents.Query<SpecialtiesQuery, SpecialtiesQueryVariables> query={SpecialtiesDocument} {...props} />
    );
    
export type SpecialtiesProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<SpecialtiesQuery, SpecialtiesQueryVariables>
    } & TChildProps;
export function withSpecialties<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SpecialtiesQuery,
  SpecialtiesQueryVariables,
  SpecialtiesProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, SpecialtiesQuery, SpecialtiesQueryVariables, SpecialtiesProps<TChildProps, TDataName>>(SpecialtiesDocument, {
      alias: 'specialties',
      ...operationOptions
    });
};

/**
 * __useSpecialtiesQuery__
 *
 * To run a query within a React component, call `useSpecialtiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useSpecialtiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSpecialtiesQuery({
 *   variables: {
 *   },
 * });
 */
export function useSpecialtiesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SpecialtiesQuery, SpecialtiesQueryVariables>) {
        return ApolloReactHooks.useQuery<SpecialtiesQuery, SpecialtiesQueryVariables>(SpecialtiesDocument, baseOptions);
      }
export function useSpecialtiesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SpecialtiesQuery, SpecialtiesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SpecialtiesQuery, SpecialtiesQueryVariables>(SpecialtiesDocument, baseOptions);
        }
export type SpecialtiesQueryHookResult = ReturnType<typeof useSpecialtiesQuery>;
export type SpecialtiesLazyQueryHookResult = ReturnType<typeof useSpecialtiesLazyQuery>;
export type SpecialtiesQueryResult = ApolloReactCommon.QueryResult<SpecialtiesQuery, SpecialtiesQueryVariables>;
export const SpecialtyDocument = gql`
    query Specialty($id: ID!) {
  specialty(id: $id) {
    ...GetSpecialtyFragment
  }
}
    ${GetSpecialtyFragmentFragmentDoc}`;
export type SpecialtyComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<SpecialtyQuery, SpecialtyQueryVariables>, 'query'> & ({ variables: SpecialtyQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const SpecialtyComponent = (props: SpecialtyComponentProps) => (
      <ApolloReactComponents.Query<SpecialtyQuery, SpecialtyQueryVariables> query={SpecialtyDocument} {...props} />
    );
    
export type SpecialtyProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<SpecialtyQuery, SpecialtyQueryVariables>
    } & TChildProps;
export function withSpecialty<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SpecialtyQuery,
  SpecialtyQueryVariables,
  SpecialtyProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, SpecialtyQuery, SpecialtyQueryVariables, SpecialtyProps<TChildProps, TDataName>>(SpecialtyDocument, {
      alias: 'specialty',
      ...operationOptions
    });
};

/**
 * __useSpecialtyQuery__
 *
 * To run a query within a React component, call `useSpecialtyQuery` and pass it any options that fit your needs.
 * When your component renders, `useSpecialtyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSpecialtyQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSpecialtyQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SpecialtyQuery, SpecialtyQueryVariables>) {
        return ApolloReactHooks.useQuery<SpecialtyQuery, SpecialtyQueryVariables>(SpecialtyDocument, baseOptions);
      }
export function useSpecialtyLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SpecialtyQuery, SpecialtyQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SpecialtyQuery, SpecialtyQueryVariables>(SpecialtyDocument, baseOptions);
        }
export type SpecialtyQueryHookResult = ReturnType<typeof useSpecialtyQuery>;
export type SpecialtyLazyQueryHookResult = ReturnType<typeof useSpecialtyLazyQuery>;
export type SpecialtyQueryResult = ApolloReactCommon.QueryResult<SpecialtyQuery, SpecialtyQueryVariables>;
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
      ...operationOptions
    });
};

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
      ...operationOptions
    });
};

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
export const UserDocument = gql`
    query User {
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
export type UserComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<UserQuery, UserQueryVariables>, 'query'>;

    export const UserComponent = (props: UserComponentProps) => (
      <ApolloReactComponents.Query<UserQuery, UserQueryVariables> query={UserDocument} {...props} />
    );
    
export type UserProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<UserQuery, UserQueryVariables>
    } & TChildProps;
export function withUser<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UserQuery,
  UserQueryVariables,
  UserProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, UserQuery, UserQueryVariables, UserProps<TChildProps, TDataName>>(UserDocument, {
      alias: 'user',
      ...operationOptions
    });
};

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<UserQuery, UserQueryVariables>) {
        return ApolloReactHooks.useQuery<UserQuery, UserQueryVariables>(UserDocument, baseOptions);
      }
export function useUserLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, baseOptions);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = ApolloReactCommon.QueryResult<UserQuery, UserQueryVariables>;
export const SignInDocument = gql`
    mutation SignIn($input: LoginUserInput!) {
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
export type SignInMutationFn = ApolloReactCommon.MutationFunction<SignInMutation, SignInMutationVariables>;
export type SignInComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<SignInMutation, SignInMutationVariables>, 'mutation'>;

    export const SignInComponent = (props: SignInComponentProps) => (
      <ApolloReactComponents.Mutation<SignInMutation, SignInMutationVariables> mutation={SignInDocument} {...props} />
    );
    
export type SignInProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<SignInMutation, SignInMutationVariables>
    } & TChildProps;
export function withSignIn<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SignInMutation,
  SignInMutationVariables,
  SignInProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, SignInMutation, SignInMutationVariables, SignInProps<TChildProps, TDataName>>(SignInDocument, {
      alias: 'signIn',
      ...operationOptions
    });
};

/**
 * __useSignInMutation__
 *
 * To run a mutation, you first call `useSignInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInMutation, { data, loading, error }] = useSignInMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSignInMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SignInMutation, SignInMutationVariables>) {
        return ApolloReactHooks.useMutation<SignInMutation, SignInMutationVariables>(SignInDocument, baseOptions);
      }
export type SignInMutationHookResult = ReturnType<typeof useSignInMutation>;
export type SignInMutationResult = ApolloReactCommon.MutationResult<SignInMutation>;
export type SignInMutationOptions = ApolloReactCommon.BaseMutationOptions<SignInMutation, SignInMutationVariables>;