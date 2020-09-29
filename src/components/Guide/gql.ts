import gql from 'graphql-tag';

export const GUIDE_FRAGMENT = gql`
  fragment GuideFragment on Guide {
    id
    patient {
      id
      name
    }    
    doctor {
      id
      name
    }
    procedureTable {
      id
      name
    }
    start
    isClosed
    proceduresGuide {
      id
      procedure {
        id
        name
      }
      value
      quantity
    }
    comments
    createdAt    
  }
`;

export const GET_GUIDES = gql`
  query Guides($take: Int, $cursor: ID, $filter: String) {
  guides(take: $take, cursor: $cursor, filter: $filter) {
    queryInfo {
      ammount
    }
    guides {
      ...GuideFragment
    }
  }
}
  ${GUIDE_FRAGMENT}
`;

export const GET_GUIDE = gql`
  query Guide($id: ID!) {
    guide(id: $id){
      ...GuideFragment
    }
  }
  ${GUIDE_FRAGMENT}
`;

export const CREATE_GUIDE = gql`
  mutation CreateGuide($input: GuideInput!) {
    createGuide(input: $input) {
      ...GuideFragment
    }
  }
  ${GUIDE_FRAGMENT}
`;

export const UPDATE_GUIDE = gql`
  mutation UpdateGuide($id:ID!, $input: GuideInput!) {
    updateGuide(id: $id, input: $input) {
      ...GuideFragment
    }
  }
  ${GUIDE_FRAGMENT}
`;
