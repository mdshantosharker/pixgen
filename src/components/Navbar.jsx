"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  return (
    <div className="border-b px-2">
      <nav className=" flex justify-between items-center  py-3 max-w-7xl mx-auto w-full">
        <div className="flex gap-2 items-center">
          <Image
            src={"/logo.png"}
            alt="logo"
            loading="eager"
            width={30}
            height={30}
            className="object-cover h-auto w-auto"
          />
          <h3 className="font-black text-lg">pixgen.</h3>
        </div>

        <ul className="flex items-center gap-5 text-sm">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/all-photos"}>All Photos</Link>
          </li>
          <li>
            <Link href={"/pricing"}>Pricing</Link>
          </li>
          <li>
            <Link href={"/profile"}>Profile</Link>
          </li>
        </ul>

        <div className="flex gap-4">
          {user ? (
            <>
              <Avatar>
                <Avatar.Image
                  alt={user.name}
                  src={user?.image}
                  referrerPolicy="no-referrer"
                />
                <Avatar.Fallback>{user.name}</Avatar.Fallback>
              </Avatar>
              <Button onClick={handleSignOut} variant="danger">
                LogOut
              </Button>
            </>
          ) : (
            <>
              <ul className="flex items-center gap-5  text-sm">
                <li>
                  <Link href={"/signup"}>
                    <Button variant="outline">SignUp</Button>
                  </Link>
                </li>
                <li>
                  <Link href={"/signin"}>
                    <Button variant="outline">SignIn</Button>
                  </Link>
                </li>
              </ul>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
