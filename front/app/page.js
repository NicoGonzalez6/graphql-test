import { getClient } from './helpers/apolloClient';

import { gql } from '@apollo/client';

const query = gql`
  query {
    hello
  }
`;

export default async function Home() {
  const { data } = await getClient().query({ query });

  return <main>{data.hello}</main>;
}
