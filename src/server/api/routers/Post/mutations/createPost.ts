import type { Post } from "@prisma/client";
import { z } from "zod";
import type { TRPCContext } from "~/server/api/trpc";

export const schema = z.object({
  name: z.string().min(1),
});

export default async (
  ctx: TRPCContext,
  input: z.infer<typeof schema>,
): Promise<Post> => {
  const createdPost = await ctx.db.post.create({
    data: {
      name: input.name,
    },
  });

  return createdPost;
};
