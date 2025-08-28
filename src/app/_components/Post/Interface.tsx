import type { Post } from "@prisma/client";

type Props = {
  latestPost: Post | null;
  name: string;
  setName: (name: string) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
};

export default (props: Props) => {
  const { latestPost, name, setName, onSubmit, isLoading } = props;

  return (
    <div className="w-full max-w-xs">
      <h2 className="mb-4 text-2xl font-extrabold tracking-tight">Posts</h2>

      {latestPost ? (
        <p className="truncate">Your most recent post: {latestPost.name}</p>
      ) : (
        <p>You have no posts yet.</p>
      )}

      <form onSubmit={onSubmit} className="mt-4 flex flex-col gap-2">
        <input
          type="text"
          placeholder="Title"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-full bg-white/10 px-4 py-2 text-white"
        />

        <button
          type="submit"
          className="rounded-full bg-white/10 px-10 py-3 font-semibold transition hover:bg-white/20"
          disabled={isLoading}
        >
          {isLoading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};
