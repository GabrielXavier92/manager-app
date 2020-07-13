import gql from 'graphql-tag';

export const SCHEDULES_FRAGMENT = gql`
  fragment SchedulesFragment on Schedule {
    id
    title
    start
    end
    resources {
      doctor { id, name }
      patient { id, name }
      procedures { id, name }
      comments      
    }
  }
`;

export const SCHEDULES = gql`
  query Schedules($start: String!, $end: String!) {
    schedules(start: $start, end: $end) {
      ...SchedulesFragment
    }
  }
  ${SCHEDULES_FRAGMENT}
`;

export const CREATE_SCHEDULE = gql`
  mutation CreateSchedule($input: ScheduleInput!) {
    createSchedule(input: $input) {
      ...SchedulesFragment
    }
  }
  ${SCHEDULES_FRAGMENT}
`;


export const UPDATE_SCHEDULE = gql`
  mutation UpdateSchedule($id:ID!, $input: ScheduleInput!) {
    updateSchedule(id: $id, input: $input) {
      ...SchedulesFragment
    }
  }
  ${SCHEDULES_FRAGMENT}
`;
