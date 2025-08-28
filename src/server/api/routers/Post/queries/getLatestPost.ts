import type { Post } from "@prisma/client";
import type { TRPCContext } from "~/server/api/trpc";

export default async (ctx: TRPCContext): Promise<Post | null> => {
  const post = await ctx.db.post.findFirst({
    orderBy: { createdAt: "desc" },
  });

  return post ?? null;
};
