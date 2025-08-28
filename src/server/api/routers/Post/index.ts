import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import getLatestPost from "./queries/getLatestPost";
import createPost, { schema as createPostSchema } from "./mutations/createPost";

export const postRouter = createTRPCRouter({
  create: publicProcedure
    .input(createPostSchema)
    .mutation(async ({ ctx, input }) => {
      const createdPost = await createPost(ctx, input);

      return createdPost;
    }),

  getLatest: publicProcedure.query(async ({ ctx }) => {
    const latestPost = await getLatestPost(ctx);

    return latestPost;
  }),
});
