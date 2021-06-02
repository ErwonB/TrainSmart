import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<User>;
  workout?: Maybe<Workout>;
  workouts?: Maybe<PaginatedWorkout>;
  exo?: Maybe<Array<Exo>>;
  template?: Maybe<Template>;
  templates?: Maybe<Array<Template>>;
  genericWorkout?: Maybe<GenericWorkout>;
  genericWorkouts?: Maybe<Array<GenericWorkout>>;
};


export type QueryWorkoutArgs = {
  workoutId: Scalars['Int'];
};


export type QueryWorkoutsArgs = {
  cursor?: Maybe<Scalars['String']>;
  sens?: Maybe<Scalars['Int']>;
};


export type QueryTemplateArgs = {
  templateId: Scalars['Int'];
};


export type QueryGenericWorkoutArgs = {
  genericWorkoutId: Scalars['Int'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['Float'];
  username: Scalars['String'];
  email: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  profile?: Maybe<Profile>;
};

export type Profile = {
  __typename?: 'Profile';
  id: Scalars['Float'];
  lang_cd: Scalars['String'];
  trainingFrequency: Scalars['Float'];
  trainingType: Scalars['String'];
  sex: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type Workout = {
  __typename?: 'Workout';
  id: Scalars['Float'];
  userId: Scalars['Float'];
  workoutDt: Scalars['DateTime'];
  workoutType: Scalars['String'];
  workoutDesc?: Maybe<Scalars['String']>;
  workoutDetails?: Maybe<Array<WorkoutDetail>>;
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  weekNb: Scalars['String'];
};


export type WorkoutDetail = {
  __typename?: 'WorkoutDetail';
  id: Scalars['Float'];
  exoId: Scalars['Float'];
  exoDetail: Array<ExoDetails>;
  workoutId: Scalars['Int'];
  workout: Workout;
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type ExoDetails = {
  __typename?: 'exoDetails';
  sets: Scalars['Float'];
  reps: Scalars['Float'];
  weight: Scalars['Float'];
  grade: Scalars['Float'];
  rest?: Maybe<Scalars['Float']>;
  feedback?: Maybe<Scalars['String']>;
};

export type PaginatedWorkout = {
  __typename?: 'PaginatedWorkout';
  workouts: Array<Workout>;
  hasMorePrev: Scalars['Boolean'];
  hasMoreNext: Scalars['Boolean'];
  weekNb: Scalars['String'];
  nextCursorValue: Scalars['String'];
};

export type Exo = {
  __typename?: 'Exo';
  id: Scalars['Float'];
  exoId: Scalars['Float'];
  exoDesc: Scalars['String'];
  langCd: Scalars['String'];
  bodyPart: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type Template = {
  __typename?: 'Template';
  id: Scalars['Float'];
  userId: Scalars['Float'];
  name: Scalars['String'];
  templateType: Scalars['String'];
  templateDetails: Array<TemplateDetail>;
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type TemplateDetail = {
  __typename?: 'TemplateDetail';
  id: Scalars['Float'];
  exoId: Scalars['Float'];
  exoDetail: Array<ExoDetails>;
  templateId: Scalars['Float'];
  template: Template;
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type GenericWorkout = {
  __typename?: 'GenericWorkout';
  id: Scalars['Float'];
  trainingType: Scalars['String'];
  trainingFrequency: Scalars['Float'];
  genericWorkoutDetails: Array<GenericWorkoutDetail>;
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type GenericWorkoutDetail = {
  __typename?: 'GenericWorkoutDetail';
  id: Scalars['Float'];
  workoutType: Scalars['String'];
  sessionNb: Scalars['Float'];
  exoId: Scalars['Float'];
  exoDetail: Array<ExoDetails>;
  genericWorkoutId: Scalars['Float'];
  genericWorkout: GenericWorkout;
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  changePassword: UserResponse;
  forgotPassword: Scalars['Boolean'];
  register: UserResponse;
  changeProfile: UserResponse;
  login: UserResponse;
  logout: Scalars['Boolean'];
  createWorkout: WorkoutResponse;
  editWorkout: WorkoutResponse;
  deleteWorkout: Scalars['Boolean'];
  createTemplate: TemplateResponse;
  editTemplate: TemplateResponse;
  deleteTemplate: Scalars['Boolean'];
};


export type MutationChangePasswordArgs = {
  newPassword: Scalars['String'];
  token: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationRegisterArgs = {
  options: UsernamePasswordInput;
};


export type MutationChangeProfileArgs = {
  options: ProfileInput;
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  usernameOrEmail: Scalars['String'];
};


export type MutationCreateWorkoutArgs = {
  options: WorkoutInput;
};


export type MutationEditWorkoutArgs = {
  options: WorkoutInput;
  id: Scalars['Int'];
};


export type MutationDeleteWorkoutArgs = {
  id: Scalars['Int'];
};


export type MutationCreateTemplateArgs = {
  options: TemplateInput;
};


export type MutationEditTemplateArgs = {
  options: TemplateInput;
  id: Scalars['Int'];
};


export type MutationDeleteTemplateArgs = {
  id: Scalars['Int'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type UsernamePasswordInput = {
  email: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
};

export type ProfileInput = {
  lang_cd: Scalars['String'];
  trainingFrequency: Scalars['Float'];
  trainingType: Scalars['String'];
  sex: Scalars['String'];
};

export type WorkoutResponse = {
  __typename?: 'WorkoutResponse';
  errors?: Maybe<Array<FieldError>>;
  workout?: Maybe<Workout>;
};

export type WorkoutInput = {
  workoutDt: Scalars['DateTime'];
  workoutType: Scalars['String'];
  workoutDesc?: Maybe<Scalars['String']>;
  workoutDetails: Array<WorkoutDetailInput>;
};

export type WorkoutDetailInput = {
  exoId: Scalars['String'];
  exoDetail: Array<ExoDetailsInput>;
};

export type ExoDetailsInput = {
  sets: Scalars['Float'];
  reps: Scalars['Float'];
  weight: Scalars['Float'];
  grade: Scalars['Float'];
  rest?: Maybe<Scalars['Float']>;
  feedback?: Maybe<Scalars['String']>;
};

export type TemplateResponse = {
  __typename?: 'TemplateResponse';
  errors?: Maybe<Array<FieldError>>;
  template?: Maybe<Template>;
};

export type TemplateInput = {
  templateType: Scalars['String'];
  name: Scalars['String'];
  templateDetails: Array<TemplateDetailInput>;
};

export type TemplateDetailInput = {
  exoId: Scalars['String'];
  exoDetail: Array<ExoDetailsInput>;
};

export type RegularErrorFragment = (
  { __typename?: 'FieldError' }
  & Pick<FieldError, 'field' | 'message'>
);

export type RegularProfileFragment = (
  { __typename?: 'Profile' }
  & Pick<Profile, 'lang_cd' | 'sex' | 'trainingFrequency' | 'trainingType'>
);

export type RegularTemplateFragment = (
  { __typename?: 'Template' }
  & Pick<Template, 'id' | 'templateType' | 'name'>
  & { templateDetails: Array<(
    { __typename?: 'TemplateDetail' }
    & Pick<TemplateDetail, 'id' | 'exoId'>
    & { exoDetail: Array<(
      { __typename?: 'exoDetails' }
      & Pick<ExoDetails, 'sets' | 'feedback' | 'reps' | 'grade' | 'rest' | 'weight'>
    )> }
  )> }
);

export type RegularTemplateResponseFragment = (
  { __typename?: 'TemplateResponse' }
  & { errors?: Maybe<Array<(
    { __typename?: 'FieldError' }
    & RegularErrorFragment
  )>>, template?: Maybe<(
    { __typename?: 'Template' }
    & RegularTemplateFragment
  )> }
);

export type RegularUserFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'username'>
);

export type RegularWorkoutFragment = (
  { __typename?: 'Workout' }
  & Pick<Workout, 'id' | 'workoutDt' | 'createdAt' | 'updatedAt' | 'workoutType' | 'workoutDesc' | 'weekNb'>
  & { workoutDetails?: Maybe<Array<(
    { __typename?: 'WorkoutDetail' }
    & Pick<WorkoutDetail, 'id' | 'exoId'>
    & { exoDetail: Array<(
      { __typename?: 'exoDetails' }
      & Pick<ExoDetails, 'sets' | 'feedback' | 'reps' | 'grade' | 'rest' | 'weight'>
    )> }
  )>> }
);

export type RegularWorkoutResponseFragment = (
  { __typename?: 'WorkoutResponse' }
  & { errors?: Maybe<Array<(
    { __typename?: 'FieldError' }
    & RegularErrorFragment
  )>>, workout?: Maybe<(
    { __typename?: 'Workout' }
    & RegularWorkoutFragment
  )> }
);

export type RegularUserResponseFragment = (
  { __typename?: 'UserResponse' }
  & { errors?: Maybe<Array<(
    { __typename?: 'FieldError' }
    & RegularErrorFragment
  )>>, user?: Maybe<(
    { __typename?: 'User' }
    & RegularUserFragment
  )> }
);

export type ChangePasswordMutationVariables = Exact<{
  token: Scalars['String'];
  newPassword: Scalars['String'];
}>;


export type ChangePasswordMutation = (
  { __typename?: 'Mutation' }
  & { changePassword: (
    { __typename?: 'UserResponse' }
    & RegularUserResponseFragment
  ) }
);

export type ChangeProfileMutationVariables = Exact<{
  options: ProfileInput;
}>;


export type ChangeProfileMutation = (
  { __typename?: 'Mutation' }
  & { changeProfile: (
    { __typename?: 'UserResponse' }
    & RegularUserResponseFragment
  ) }
);

export type CreateTemplateMutationVariables = Exact<{
  options: TemplateInput;
}>;


export type CreateTemplateMutation = (
  { __typename?: 'Mutation' }
  & { createTemplate: (
    { __typename?: 'TemplateResponse' }
    & RegularTemplateResponseFragment
  ) }
);

export type CreateWorkoutMutationVariables = Exact<{
  options: WorkoutInput;
}>;


export type CreateWorkoutMutation = (
  { __typename?: 'Mutation' }
  & { createWorkout: (
    { __typename?: 'WorkoutResponse' }
    & RegularWorkoutResponseFragment
  ) }
);

export type DeleteTemplateMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteTemplateMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteTemplate'>
);

export type DeleteWorkoutMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteWorkoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteWorkout'>
);

export type EditTemplateMutationVariables = Exact<{
  id: Scalars['Int'];
  options: TemplateInput;
}>;


export type EditTemplateMutation = (
  { __typename?: 'Mutation' }
  & { editTemplate: (
    { __typename?: 'TemplateResponse' }
    & RegularTemplateResponseFragment
  ) }
);

export type EditWorkoutMutationVariables = Exact<{
  id: Scalars['Int'];
  options: WorkoutInput;
}>;


export type EditWorkoutMutation = (
  { __typename?: 'Mutation' }
  & { editWorkout: (
    { __typename?: 'WorkoutResponse' }
    & RegularWorkoutResponseFragment
  ) }
);

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type ForgotPasswordMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'forgotPassword'>
);

export type LoginMutationVariables = Exact<{
  usernameOrEmail: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'UserResponse' }
    & RegularUserResponseFragment
  ) }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type RegisterMutationVariables = Exact<{
  options: UsernamePasswordInput;
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'UserResponse' }
    & RegularUserResponseFragment
  ) }
);

export type ExoQueryVariables = Exact<{ [key: string]: never; }>;


export type ExoQuery = (
  { __typename?: 'Query' }
  & { exo?: Maybe<Array<(
    { __typename?: 'Exo' }
    & Pick<Exo, 'id' | 'exoId' | 'exoDesc' | 'bodyPart' | 'langCd'>
  )>> }
);

export type GenericWorkoutQueryVariables = Exact<{
  genericWorkoutId: Scalars['Int'];
}>;


export type GenericWorkoutQuery = (
  { __typename?: 'Query' }
  & { genericWorkout?: Maybe<(
    { __typename?: 'GenericWorkout' }
    & Pick<GenericWorkout, 'id' | 'trainingType' | 'trainingFrequency'>
    & { genericWorkoutDetails: Array<(
      { __typename?: 'GenericWorkoutDetail' }
      & Pick<GenericWorkoutDetail, 'id' | 'exoId'>
      & { exoDetail: Array<(
        { __typename?: 'exoDetails' }
        & Pick<ExoDetails, 'sets' | 'feedback' | 'reps' | 'grade' | 'rest' | 'weight'>
      )> }
    )> }
  )> }
);

export type GenericWorkoutsQueryVariables = Exact<{ [key: string]: never; }>;


export type GenericWorkoutsQuery = (
  { __typename?: 'Query' }
  & { genericWorkouts?: Maybe<Array<(
    { __typename?: 'GenericWorkout' }
    & Pick<GenericWorkout, 'id' | 'trainingType' | 'trainingFrequency'>
    & { genericWorkoutDetails: Array<(
      { __typename?: 'GenericWorkoutDetail' }
      & Pick<GenericWorkoutDetail, 'id' | 'workoutType' | 'exoId' | 'sessionNb'>
      & { exoDetail: Array<(
        { __typename?: 'exoDetails' }
        & Pick<ExoDetails, 'sets' | 'feedback' | 'reps' | 'grade' | 'rest' | 'weight'>
      )> }
    )> }
  )>> }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & { profile?: Maybe<(
      { __typename?: 'Profile' }
      & RegularProfileFragment
    )> }
    & RegularUserFragment
  )> }
);

export type TemplateQueryVariables = Exact<{
  templateId: Scalars['Int'];
}>;


export type TemplateQuery = (
  { __typename?: 'Query' }
  & { template?: Maybe<(
    { __typename?: 'Template' }
    & Pick<Template, 'id' | 'templateType' | 'name'>
    & { templateDetails: Array<(
      { __typename?: 'TemplateDetail' }
      & Pick<TemplateDetail, 'id' | 'exoId'>
      & { exoDetail: Array<(
        { __typename?: 'exoDetails' }
        & Pick<ExoDetails, 'sets' | 'feedback' | 'reps' | 'grade' | 'rest' | 'weight'>
      )> }
    )> }
  )> }
);

export type TemplatesQueryVariables = Exact<{ [key: string]: never; }>;


export type TemplatesQuery = (
  { __typename?: 'Query' }
  & { templates?: Maybe<Array<(
    { __typename?: 'Template' }
    & Pick<Template, 'id' | 'templateType' | 'name'>
    & { templateDetails: Array<(
      { __typename?: 'TemplateDetail' }
      & Pick<TemplateDetail, 'id' | 'exoId'>
      & { exoDetail: Array<(
        { __typename?: 'exoDetails' }
        & Pick<ExoDetails, 'sets' | 'feedback' | 'reps' | 'grade' | 'rest' | 'weight'>
      )> }
    )> }
  )>> }
);

export type WorkoutQueryVariables = Exact<{
  workoutId: Scalars['Int'];
}>;


export type WorkoutQuery = (
  { __typename?: 'Query' }
  & { workout?: Maybe<(
    { __typename?: 'Workout' }
    & Pick<Workout, 'id' | 'workoutDt' | 'createdAt' | 'updatedAt' | 'workoutType' | 'workoutDesc' | 'weekNb'>
    & { workoutDetails?: Maybe<Array<(
      { __typename?: 'WorkoutDetail' }
      & Pick<WorkoutDetail, 'id' | 'exoId'>
      & { exoDetail: Array<(
        { __typename?: 'exoDetails' }
        & Pick<ExoDetails, 'sets' | 'feedback' | 'reps' | 'grade' | 'rest' | 'weight'>
      )> }
    )>> }
  )> }
);

export type WorkoutsQueryVariables = Exact<{
  sens?: Maybe<Scalars['Int']>;
  cursor?: Maybe<Scalars['String']>;
}>;


export type WorkoutsQuery = (
  { __typename?: 'Query' }
  & { workouts?: Maybe<(
    { __typename?: 'PaginatedWorkout' }
    & Pick<PaginatedWorkout, 'hasMorePrev' | 'hasMoreNext' | 'weekNb' | 'nextCursorValue'>
    & { workouts: Array<(
      { __typename?: 'Workout' }
      & Pick<Workout, 'id' | 'workoutDt' | 'createdAt' | 'updatedAt' | 'workoutType' | 'workoutDesc' | 'weekNb'>
      & { workoutDetails?: Maybe<Array<(
        { __typename?: 'WorkoutDetail' }
        & Pick<WorkoutDetail, 'id' | 'exoId'>
        & { exoDetail: Array<(
          { __typename?: 'exoDetails' }
          & Pick<ExoDetails, 'sets' | 'feedback' | 'reps' | 'grade' | 'rest' | 'weight'>
        )> }
      )>> }
    )> }
  )> }
);

export const RegularProfileFragmentDoc = gql`
    fragment RegularProfile on Profile {
  lang_cd
  sex
  trainingFrequency
  trainingType
}
    `;
export const RegularErrorFragmentDoc = gql`
    fragment RegularError on FieldError {
  field
  message
}
    `;
export const RegularTemplateFragmentDoc = gql`
    fragment RegularTemplate on Template {
  id
  templateType
  name
  templateDetails {
    id
    exoId
    exoDetail {
      sets
      feedback
      reps
      grade
      rest
      weight
    }
  }
}
    `;
export const RegularTemplateResponseFragmentDoc = gql`
    fragment RegularTemplateResponse on TemplateResponse {
  errors {
    ...RegularError
  }
  template {
    ...RegularTemplate
  }
}
    ${RegularErrorFragmentDoc}
${RegularTemplateFragmentDoc}`;
export const RegularWorkoutFragmentDoc = gql`
    fragment RegularWorkout on Workout {
  id
  workoutDt
  createdAt
  updatedAt
  workoutType
  workoutDesc
  weekNb
  workoutDetails {
    id
    exoId
    exoDetail {
      sets
      feedback
      reps
      grade
      rest
      weight
    }
  }
}
    `;
export const RegularWorkoutResponseFragmentDoc = gql`
    fragment RegularWorkoutResponse on WorkoutResponse {
  errors {
    ...RegularError
  }
  workout {
    ...RegularWorkout
  }
}
    ${RegularErrorFragmentDoc}
${RegularWorkoutFragmentDoc}`;
export const RegularUserFragmentDoc = gql`
    fragment RegularUser on User {
  id
  username
}
    `;
export const RegularUserResponseFragmentDoc = gql`
    fragment RegularUserResponse on UserResponse {
  errors {
    ...RegularError
  }
  user {
    ...RegularUser
  }
}
    ${RegularErrorFragmentDoc}
${RegularUserFragmentDoc}`;
export const ChangePasswordDocument = gql`
    mutation ChangePassword($token: String!, $newPassword: String!) {
  changePassword(token: $token, newPassword: $newPassword) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;
export type ChangePasswordMutationFn = Apollo.MutationFunction<ChangePasswordMutation, ChangePasswordMutationVariables>;

/**
 * __useChangePasswordMutation__
 *
 * To run a mutation, you first call `useChangePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changePasswordMutation, { data, loading, error }] = useChangePasswordMutation({
 *   variables: {
 *      token: // value for 'token'
 *      newPassword: // value for 'newPassword'
 *   },
 * });
 */
export function useChangePasswordMutation(baseOptions?: Apollo.MutationHookOptions<ChangePasswordMutation, ChangePasswordMutationVariables>) {
        return Apollo.useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(ChangePasswordDocument, baseOptions);
      }
export type ChangePasswordMutationHookResult = ReturnType<typeof useChangePasswordMutation>;
export type ChangePasswordMutationResult = Apollo.MutationResult<ChangePasswordMutation>;
export type ChangePasswordMutationOptions = Apollo.BaseMutationOptions<ChangePasswordMutation, ChangePasswordMutationVariables>;
export const ChangeProfileDocument = gql`
    mutation ChangeProfile($options: ProfileInput!) {
  changeProfile(options: $options) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;
export type ChangeProfileMutationFn = Apollo.MutationFunction<ChangeProfileMutation, ChangeProfileMutationVariables>;

/**
 * __useChangeProfileMutation__
 *
 * To run a mutation, you first call `useChangeProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeProfileMutation, { data, loading, error }] = useChangeProfileMutation({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useChangeProfileMutation(baseOptions?: Apollo.MutationHookOptions<ChangeProfileMutation, ChangeProfileMutationVariables>) {
        return Apollo.useMutation<ChangeProfileMutation, ChangeProfileMutationVariables>(ChangeProfileDocument, baseOptions);
      }
export type ChangeProfileMutationHookResult = ReturnType<typeof useChangeProfileMutation>;
export type ChangeProfileMutationResult = Apollo.MutationResult<ChangeProfileMutation>;
export type ChangeProfileMutationOptions = Apollo.BaseMutationOptions<ChangeProfileMutation, ChangeProfileMutationVariables>;
export const CreateTemplateDocument = gql`
    mutation CreateTemplate($options: TemplateInput!) {
  createTemplate(options: $options) {
    ...RegularTemplateResponse
  }
}
    ${RegularTemplateResponseFragmentDoc}`;
export type CreateTemplateMutationFn = Apollo.MutationFunction<CreateTemplateMutation, CreateTemplateMutationVariables>;

/**
 * __useCreateTemplateMutation__
 *
 * To run a mutation, you first call `useCreateTemplateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTemplateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTemplateMutation, { data, loading, error }] = useCreateTemplateMutation({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useCreateTemplateMutation(baseOptions?: Apollo.MutationHookOptions<CreateTemplateMutation, CreateTemplateMutationVariables>) {
        return Apollo.useMutation<CreateTemplateMutation, CreateTemplateMutationVariables>(CreateTemplateDocument, baseOptions);
      }
export type CreateTemplateMutationHookResult = ReturnType<typeof useCreateTemplateMutation>;
export type CreateTemplateMutationResult = Apollo.MutationResult<CreateTemplateMutation>;
export type CreateTemplateMutationOptions = Apollo.BaseMutationOptions<CreateTemplateMutation, CreateTemplateMutationVariables>;
export const CreateWorkoutDocument = gql`
    mutation CreateWorkout($options: WorkoutInput!) {
  createWorkout(options: $options) {
    ...RegularWorkoutResponse
  }
}
    ${RegularWorkoutResponseFragmentDoc}`;
export type CreateWorkoutMutationFn = Apollo.MutationFunction<CreateWorkoutMutation, CreateWorkoutMutationVariables>;

/**
 * __useCreateWorkoutMutation__
 *
 * To run a mutation, you first call `useCreateWorkoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateWorkoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createWorkoutMutation, { data, loading, error }] = useCreateWorkoutMutation({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useCreateWorkoutMutation(baseOptions?: Apollo.MutationHookOptions<CreateWorkoutMutation, CreateWorkoutMutationVariables>) {
        return Apollo.useMutation<CreateWorkoutMutation, CreateWorkoutMutationVariables>(CreateWorkoutDocument, baseOptions);
      }
export type CreateWorkoutMutationHookResult = ReturnType<typeof useCreateWorkoutMutation>;
export type CreateWorkoutMutationResult = Apollo.MutationResult<CreateWorkoutMutation>;
export type CreateWorkoutMutationOptions = Apollo.BaseMutationOptions<CreateWorkoutMutation, CreateWorkoutMutationVariables>;
export const DeleteTemplateDocument = gql`
    mutation DeleteTemplate($id: Int!) {
  deleteTemplate(id: $id)
}
    `;
export type DeleteTemplateMutationFn = Apollo.MutationFunction<DeleteTemplateMutation, DeleteTemplateMutationVariables>;

/**
 * __useDeleteTemplateMutation__
 *
 * To run a mutation, you first call `useDeleteTemplateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTemplateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTemplateMutation, { data, loading, error }] = useDeleteTemplateMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteTemplateMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTemplateMutation, DeleteTemplateMutationVariables>) {
        return Apollo.useMutation<DeleteTemplateMutation, DeleteTemplateMutationVariables>(DeleteTemplateDocument, baseOptions);
      }
export type DeleteTemplateMutationHookResult = ReturnType<typeof useDeleteTemplateMutation>;
export type DeleteTemplateMutationResult = Apollo.MutationResult<DeleteTemplateMutation>;
export type DeleteTemplateMutationOptions = Apollo.BaseMutationOptions<DeleteTemplateMutation, DeleteTemplateMutationVariables>;
export const DeleteWorkoutDocument = gql`
    mutation DeleteWorkout($id: Int!) {
  deleteWorkout(id: $id)
}
    `;
export type DeleteWorkoutMutationFn = Apollo.MutationFunction<DeleteWorkoutMutation, DeleteWorkoutMutationVariables>;

/**
 * __useDeleteWorkoutMutation__
 *
 * To run a mutation, you first call `useDeleteWorkoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteWorkoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteWorkoutMutation, { data, loading, error }] = useDeleteWorkoutMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteWorkoutMutation(baseOptions?: Apollo.MutationHookOptions<DeleteWorkoutMutation, DeleteWorkoutMutationVariables>) {
        return Apollo.useMutation<DeleteWorkoutMutation, DeleteWorkoutMutationVariables>(DeleteWorkoutDocument, baseOptions);
      }
export type DeleteWorkoutMutationHookResult = ReturnType<typeof useDeleteWorkoutMutation>;
export type DeleteWorkoutMutationResult = Apollo.MutationResult<DeleteWorkoutMutation>;
export type DeleteWorkoutMutationOptions = Apollo.BaseMutationOptions<DeleteWorkoutMutation, DeleteWorkoutMutationVariables>;
export const EditTemplateDocument = gql`
    mutation EditTemplate($id: Int!, $options: TemplateInput!) {
  editTemplate(id: $id, options: $options) {
    ...RegularTemplateResponse
  }
}
    ${RegularTemplateResponseFragmentDoc}`;
export type EditTemplateMutationFn = Apollo.MutationFunction<EditTemplateMutation, EditTemplateMutationVariables>;

/**
 * __useEditTemplateMutation__
 *
 * To run a mutation, you first call `useEditTemplateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditTemplateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editTemplateMutation, { data, loading, error }] = useEditTemplateMutation({
 *   variables: {
 *      id: // value for 'id'
 *      options: // value for 'options'
 *   },
 * });
 */
export function useEditTemplateMutation(baseOptions?: Apollo.MutationHookOptions<EditTemplateMutation, EditTemplateMutationVariables>) {
        return Apollo.useMutation<EditTemplateMutation, EditTemplateMutationVariables>(EditTemplateDocument, baseOptions);
      }
export type EditTemplateMutationHookResult = ReturnType<typeof useEditTemplateMutation>;
export type EditTemplateMutationResult = Apollo.MutationResult<EditTemplateMutation>;
export type EditTemplateMutationOptions = Apollo.BaseMutationOptions<EditTemplateMutation, EditTemplateMutationVariables>;
export const EditWorkoutDocument = gql`
    mutation EditWorkout($id: Int!, $options: WorkoutInput!) {
  editWorkout(id: $id, options: $options) {
    ...RegularWorkoutResponse
  }
}
    ${RegularWorkoutResponseFragmentDoc}`;
export type EditWorkoutMutationFn = Apollo.MutationFunction<EditWorkoutMutation, EditWorkoutMutationVariables>;

/**
 * __useEditWorkoutMutation__
 *
 * To run a mutation, you first call `useEditWorkoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditWorkoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editWorkoutMutation, { data, loading, error }] = useEditWorkoutMutation({
 *   variables: {
 *      id: // value for 'id'
 *      options: // value for 'options'
 *   },
 * });
 */
export function useEditWorkoutMutation(baseOptions?: Apollo.MutationHookOptions<EditWorkoutMutation, EditWorkoutMutationVariables>) {
        return Apollo.useMutation<EditWorkoutMutation, EditWorkoutMutationVariables>(EditWorkoutDocument, baseOptions);
      }
export type EditWorkoutMutationHookResult = ReturnType<typeof useEditWorkoutMutation>;
export type EditWorkoutMutationResult = Apollo.MutationResult<EditWorkoutMutation>;
export type EditWorkoutMutationOptions = Apollo.BaseMutationOptions<EditWorkoutMutation, EditWorkoutMutationVariables>;
export const ForgotPasswordDocument = gql`
    mutation ForgotPassword($email: String!) {
  forgotPassword(email: $email)
}
    `;
export type ForgotPasswordMutationFn = Apollo.MutationFunction<ForgotPasswordMutation, ForgotPasswordMutationVariables>;

/**
 * __useForgotPasswordMutation__
 *
 * To run a mutation, you first call `useForgotPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForgotPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forgotPasswordMutation, { data, loading, error }] = useForgotPasswordMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useForgotPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>) {
        return Apollo.useMutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>(ForgotPasswordDocument, baseOptions);
      }
export type ForgotPasswordMutationHookResult = ReturnType<typeof useForgotPasswordMutation>;
export type ForgotPasswordMutationResult = Apollo.MutationResult<ForgotPasswordMutation>;
export type ForgotPasswordMutationOptions = Apollo.BaseMutationOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>;
export const LoginDocument = gql`
    mutation Login($usernameOrEmail: String!, $password: String!) {
  login(usernameOrEmail: $usernameOrEmail, password: $password) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      usernameOrEmail: // value for 'usernameOrEmail'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, baseOptions);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($options: UsernamePasswordInput!) {
  register(options: $options) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, baseOptions);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const ExoDocument = gql`
    query Exo {
  exo {
    id
    exoId
    exoDesc
    bodyPart
    langCd
  }
}
    `;

/**
 * __useExoQuery__
 *
 * To run a query within a React component, call `useExoQuery` and pass it any options that fit your needs.
 * When your component renders, `useExoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useExoQuery({
 *   variables: {
 *   },
 * });
 */
export function useExoQuery(baseOptions?: Apollo.QueryHookOptions<ExoQuery, ExoQueryVariables>) {
        return Apollo.useQuery<ExoQuery, ExoQueryVariables>(ExoDocument, baseOptions);
      }
export function useExoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ExoQuery, ExoQueryVariables>) {
          return Apollo.useLazyQuery<ExoQuery, ExoQueryVariables>(ExoDocument, baseOptions);
        }
export type ExoQueryHookResult = ReturnType<typeof useExoQuery>;
export type ExoLazyQueryHookResult = ReturnType<typeof useExoLazyQuery>;
export type ExoQueryResult = Apollo.QueryResult<ExoQuery, ExoQueryVariables>;
export const GenericWorkoutDocument = gql`
    query GenericWorkout($genericWorkoutId: Int!) {
  genericWorkout(genericWorkoutId: $genericWorkoutId) {
    id
    trainingType
    trainingFrequency
    genericWorkoutDetails {
      id
      exoId
      exoDetail {
        sets
        feedback
        reps
        grade
        rest
        weight
      }
    }
  }
}
    `;

/**
 * __useGenericWorkoutQuery__
 *
 * To run a query within a React component, call `useGenericWorkoutQuery` and pass it any options that fit your needs.
 * When your component renders, `useGenericWorkoutQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGenericWorkoutQuery({
 *   variables: {
 *      genericWorkoutId: // value for 'genericWorkoutId'
 *   },
 * });
 */
export function useGenericWorkoutQuery(baseOptions: Apollo.QueryHookOptions<GenericWorkoutQuery, GenericWorkoutQueryVariables>) {
        return Apollo.useQuery<GenericWorkoutQuery, GenericWorkoutQueryVariables>(GenericWorkoutDocument, baseOptions);
      }
export function useGenericWorkoutLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GenericWorkoutQuery, GenericWorkoutQueryVariables>) {
          return Apollo.useLazyQuery<GenericWorkoutQuery, GenericWorkoutQueryVariables>(GenericWorkoutDocument, baseOptions);
        }
export type GenericWorkoutQueryHookResult = ReturnType<typeof useGenericWorkoutQuery>;
export type GenericWorkoutLazyQueryHookResult = ReturnType<typeof useGenericWorkoutLazyQuery>;
export type GenericWorkoutQueryResult = Apollo.QueryResult<GenericWorkoutQuery, GenericWorkoutQueryVariables>;
export const GenericWorkoutsDocument = gql`
    query GenericWorkouts {
  genericWorkouts {
    id
    trainingType
    trainingFrequency
    genericWorkoutDetails {
      id
      workoutType
      exoId
      sessionNb
      exoDetail {
        sets
        feedback
        reps
        grade
        rest
        weight
      }
    }
  }
}
    `;

/**
 * __useGenericWorkoutsQuery__
 *
 * To run a query within a React component, call `useGenericWorkoutsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGenericWorkoutsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGenericWorkoutsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGenericWorkoutsQuery(baseOptions?: Apollo.QueryHookOptions<GenericWorkoutsQuery, GenericWorkoutsQueryVariables>) {
        return Apollo.useQuery<GenericWorkoutsQuery, GenericWorkoutsQueryVariables>(GenericWorkoutsDocument, baseOptions);
      }
export function useGenericWorkoutsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GenericWorkoutsQuery, GenericWorkoutsQueryVariables>) {
          return Apollo.useLazyQuery<GenericWorkoutsQuery, GenericWorkoutsQueryVariables>(GenericWorkoutsDocument, baseOptions);
        }
export type GenericWorkoutsQueryHookResult = ReturnType<typeof useGenericWorkoutsQuery>;
export type GenericWorkoutsLazyQueryHookResult = ReturnType<typeof useGenericWorkoutsLazyQuery>;
export type GenericWorkoutsQueryResult = Apollo.QueryResult<GenericWorkoutsQuery, GenericWorkoutsQueryVariables>;
export const MeDocument = gql`
    query Me {
  me {
    ...RegularUser
    profile {
      ...RegularProfile
    }
  }
}
    ${RegularUserFragmentDoc}
${RegularProfileFragmentDoc}`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const TemplateDocument = gql`
    query Template($templateId: Int!) {
  template(templateId: $templateId) {
    id
    templateType
    name
    templateDetails {
      id
      exoId
      exoDetail {
        sets
        feedback
        reps
        grade
        rest
        weight
      }
    }
  }
}
    `;

/**
 * __useTemplateQuery__
 *
 * To run a query within a React component, call `useTemplateQuery` and pass it any options that fit your needs.
 * When your component renders, `useTemplateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTemplateQuery({
 *   variables: {
 *      templateId: // value for 'templateId'
 *   },
 * });
 */
export function useTemplateQuery(baseOptions: Apollo.QueryHookOptions<TemplateQuery, TemplateQueryVariables>) {
        return Apollo.useQuery<TemplateQuery, TemplateQueryVariables>(TemplateDocument, baseOptions);
      }
export function useTemplateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TemplateQuery, TemplateQueryVariables>) {
          return Apollo.useLazyQuery<TemplateQuery, TemplateQueryVariables>(TemplateDocument, baseOptions);
        }
export type TemplateQueryHookResult = ReturnType<typeof useTemplateQuery>;
export type TemplateLazyQueryHookResult = ReturnType<typeof useTemplateLazyQuery>;
export type TemplateQueryResult = Apollo.QueryResult<TemplateQuery, TemplateQueryVariables>;
export const TemplatesDocument = gql`
    query Templates {
  templates {
    id
    templateType
    name
    templateDetails {
      id
      exoId
      exoDetail {
        sets
        feedback
        reps
        grade
        rest
        weight
      }
    }
  }
}
    `;

/**
 * __useTemplatesQuery__
 *
 * To run a query within a React component, call `useTemplatesQuery` and pass it any options that fit your needs.
 * When your component renders, `useTemplatesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTemplatesQuery({
 *   variables: {
 *   },
 * });
 */
export function useTemplatesQuery(baseOptions?: Apollo.QueryHookOptions<TemplatesQuery, TemplatesQueryVariables>) {
        return Apollo.useQuery<TemplatesQuery, TemplatesQueryVariables>(TemplatesDocument, baseOptions);
      }
export function useTemplatesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TemplatesQuery, TemplatesQueryVariables>) {
          return Apollo.useLazyQuery<TemplatesQuery, TemplatesQueryVariables>(TemplatesDocument, baseOptions);
        }
export type TemplatesQueryHookResult = ReturnType<typeof useTemplatesQuery>;
export type TemplatesLazyQueryHookResult = ReturnType<typeof useTemplatesLazyQuery>;
export type TemplatesQueryResult = Apollo.QueryResult<TemplatesQuery, TemplatesQueryVariables>;
export const WorkoutDocument = gql`
    query Workout($workoutId: Int!) {
  workout(workoutId: $workoutId) {
    id
    workoutDt
    createdAt
    updatedAt
    workoutType
    workoutDesc
    weekNb
    workoutDetails {
      id
      exoId
      exoDetail {
        sets
        feedback
        reps
        grade
        rest
        weight
      }
    }
  }
}
    `;

/**
 * __useWorkoutQuery__
 *
 * To run a query within a React component, call `useWorkoutQuery` and pass it any options that fit your needs.
 * When your component renders, `useWorkoutQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWorkoutQuery({
 *   variables: {
 *      workoutId: // value for 'workoutId'
 *   },
 * });
 */
export function useWorkoutQuery(baseOptions: Apollo.QueryHookOptions<WorkoutQuery, WorkoutQueryVariables>) {
        return Apollo.useQuery<WorkoutQuery, WorkoutQueryVariables>(WorkoutDocument, baseOptions);
      }
export function useWorkoutLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WorkoutQuery, WorkoutQueryVariables>) {
          return Apollo.useLazyQuery<WorkoutQuery, WorkoutQueryVariables>(WorkoutDocument, baseOptions);
        }
export type WorkoutQueryHookResult = ReturnType<typeof useWorkoutQuery>;
export type WorkoutLazyQueryHookResult = ReturnType<typeof useWorkoutLazyQuery>;
export type WorkoutQueryResult = Apollo.QueryResult<WorkoutQuery, WorkoutQueryVariables>;
export const WorkoutsDocument = gql`
    query Workouts($sens: Int, $cursor: String) {
  workouts(sens: $sens, cursor: $cursor) {
    hasMorePrev
    hasMoreNext
    weekNb
    nextCursorValue
    workouts {
      id
      workoutDt
      createdAt
      updatedAt
      workoutType
      workoutDesc
      weekNb
      workoutDetails {
        id
        exoId
        exoDetail {
          sets
          feedback
          reps
          grade
          rest
          weight
        }
      }
    }
  }
}
    `;

/**
 * __useWorkoutsQuery__
 *
 * To run a query within a React component, call `useWorkoutsQuery` and pass it any options that fit your needs.
 * When your component renders, `useWorkoutsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWorkoutsQuery({
 *   variables: {
 *      sens: // value for 'sens'
 *      cursor: // value for 'cursor'
 *   },
 * });
 */
export function useWorkoutsQuery(baseOptions?: Apollo.QueryHookOptions<WorkoutsQuery, WorkoutsQueryVariables>) {
        return Apollo.useQuery<WorkoutsQuery, WorkoutsQueryVariables>(WorkoutsDocument, baseOptions);
      }
export function useWorkoutsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WorkoutsQuery, WorkoutsQueryVariables>) {
          return Apollo.useLazyQuery<WorkoutsQuery, WorkoutsQueryVariables>(WorkoutsDocument, baseOptions);
        }
export type WorkoutsQueryHookResult = ReturnType<typeof useWorkoutsQuery>;
export type WorkoutsLazyQueryHookResult = ReturnType<typeof useWorkoutsLazyQuery>;
export type WorkoutsQueryResult = Apollo.QueryResult<WorkoutsQuery, WorkoutsQueryVariables>;