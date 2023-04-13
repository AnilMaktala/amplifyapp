// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Post, PostNode } = initSchema(schema);

export {
  Post,
  PostNode
};