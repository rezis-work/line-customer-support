"use client";

import { api } from "@workspace/backend/_generated/api";
import { Button } from "@workspace/ui/components/button";
import { useQuery, useMutation } from "convex/react";

export default function Page() {
  const users = useQuery(api.users.getMany);
  const addUser = useMutation(api.users.add);
  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <p>Widget module</p>
      <Button onClick={() => addUser()}>Add User</Button>
      <div className="max-w-sm w-full mx-auto gap-y-4">
        {JSON.stringify(users)}
      </div>
    </div>
  );
}
