import {
  a,
} from '@aws-amplify/backend';

export const Article = a.model({
  id: a.string()
    .required(),
  title: a.string()
    .required(),
  content: a.string()
    .required(),
  createdAt: a.datetime(),
  author: a.string()
    .required(),
  Author: a.belongsTo('Author', 'author'),
})
  .key('byAuthor', [
    'author',
  ]);
