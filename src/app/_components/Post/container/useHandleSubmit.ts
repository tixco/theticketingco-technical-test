import { api } from "~/trpc/react";

type Props = {
  name: string;
  setName: (name: string) => void;
};

export default (props: Props) => {
  const { name, setName } = props;

  const utils = api.useUtils();

  const createPost = api.post.create.useMutation({
    onSuccess: async () => {
      await utils.post.invalidate();

      setName("");
    },
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    createPost.mutate({ name });
  };

  return {
    onSubmit,
    isLoading: createPost.isPending,
  };
};
