import { Module } from '@nestjs/common';

import { GraphQLResolver } from './graphql/graphql.resolver';

@Module({
  providers: [GraphQLResolver],
})
export class GraphqlModule {}
