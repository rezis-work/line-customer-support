"use client";

import { Authenticated, Unauthenticated } from "convex/react";
import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { api } from "@workspace/backend/_generated/api";
import { Button } from "@workspace/ui/components/button";
import { useQuery, useMutation } from "convex/react";

export default function Page() {
  const users = useQuery(api.users.getMany);
  const addUser = useMutation(api.users.add);
  return (
    <>
      <Authenticated>
        <div className="flex flex-col items-center justify-center min-h-svh">
          <p>Web apps module</p>
          <UserButton />
          <Button onClick={() => addUser()}>Add User</Button>
          <div className="max-w-sm w-full mx-auto gap-y-4">
            {JSON.stringify(users)}
          </div>
        </div>
      </Authenticated>
      <Unauthenticated>
        <div className="flex flex-col items-center justify-center min-h-svh">
          <p>Please sign in to continue</p>
          <SignInButton>
            <Button>Sign in</Button>
          </SignInButton>
          <SignUpButton>
            <Button>Sign up</Button>
          </SignUpButton>
        </div>
      </Unauthenticated>
    </>
  );
}
