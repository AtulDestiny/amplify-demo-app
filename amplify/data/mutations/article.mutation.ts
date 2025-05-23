import {
  a,
} from '@aws-amplify/backend';
import {
  Article,
} from '../models/article';

export const CreateArticle = a.mutation()
  .arguments({
    id: a.string(),
    title: a.string(),
    content: a.string(),
    createdAt: a.datetime(),
    author: a.string(),
  })
  .returns(Article)
  .resolve(async ({
    args, ctx,
  }) => {
    return await ctx.db.Article.create(args);
  });

export const UpdateArticle = a.mutation()
  .arguments({
    id: a.string().required(),
    title: a.string(),
    content: a.string(),
    createdAt: a.datetime(),
    author: a.string(),
  })
  .returns(Article)
  .resolve(async ({
    args, ctx,
  }) => {
    const {
      id, ...updates
    } = args;
    return await ctx.db.Article.update({
      id, updates,
    });
  });

export const DeleteArticle = a.mutation()
  .arguments({
    id: a.string().required(),
  })
  .returns(a.boolean())
  .resolve(async ({
    args, ctx,
  }) => {
    await ctx.db.Article.delete({
      id: args.id,
    });
    return true;
  });
