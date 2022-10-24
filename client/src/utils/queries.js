import { gql } from '@apollo/client';

export const QUERY_TAGS = gql `
query Tags {
  tags {
    tagTitle
    description
    category
  }
}`;

export const QUERY_TAG = gql `
query Tag( $tagTitle: String! ) {
  tag(tagTitle: $tagTitle) {
    _id
    tagTitle
    description
    category
  }
}`;

export const QUERY_MATURES = gql `
query Matures {
   matures {
    _id
    matureRating
    lewd
  }
}`

export const QUERY_REGIONS = gql `
query Regions {
  regions {
    regionTitle
    description
  }
}`;