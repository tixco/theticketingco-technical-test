"use client";

import { useState } from "react";

import { api } from "~/trpc/react";
import Interface from "./Interface";
import useHandleSubmit from "./container/useHandleSubmit";

export default () => {
  const [name, setName] = useState("");

  const [latestPost] = api.post.getLatest.useSuspenseQuery();

  const { onSubmit, isLoading } = useHandleSubmit({ name, setName });

  return (
    <Interface
      onSubmit={onSubmit}
      setName={setName}
      name={name}
      latestPost={latestPost}
      isLoading={isLoading}
    />
  );
};
