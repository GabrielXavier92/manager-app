export type Maybe<T> = T | null;
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
  take: Scalars['Int'];
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

export type GetProcedures = {
  __typename?: 'GetProcedures';
  ammount: Scalars['Int'];
  procedures?: Maybe<Array<Maybe<Procedure>>>;
};

export type Specialty = {
  __typename?: 'Specialty';
  id: Scalars['ID'];
  name: Scalars['String'];
};

