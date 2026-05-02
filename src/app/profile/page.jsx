"use client";
import { UpdateUserModal } from "@/components/UpdateUserModal";
import { authClient } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";
import React from "react";

const ProfilePage = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;
  console.log(user);
  return (
    <div>
      <Card className="max-w-96 mx-auto flex flex-col border-2 items-center mt-5 bg-gray-100">
        <Avatar className="h-20 w-20">
          <Avatar.Image
            alt={user?.name}
            src={user?.image}
            referrerPolicy="no-referrer"
          />
          <Avatar.Fallback>{user?.name}</Avatar.Fallback>
        </Avatar>

        <h1 className="text-xl font-bold">{user?.name}</h1>
        <p className="text-muted">{user?.email}</p>

        <UpdateUserModal />
      </Card>
    </div>
  );
};

export default ProfilePage;
