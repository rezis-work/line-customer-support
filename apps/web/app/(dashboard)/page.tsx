"use client";

import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { api } from "@workspace/backend/_generated/api";
import { Button } from "@workspace/ui/components/button";
import { useQuery, useMutation } from "convex/react";

export default function Page() {
  const users = useQuery(api.users.getMany);
  const addUser = useMutation(api.users.add);
  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <p>Web apps module</p>
      <UserButton />
      <OrganizationSwitcher hidePersonal={true} />
      <Button onClick={() => addUser()}>Add User</Button>
    </div>
  );
}
