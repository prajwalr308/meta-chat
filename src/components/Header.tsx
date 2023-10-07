import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logout from "./LogoutButton";
import AuthButton from "./LogoutButton";
import SigninButton from "./SigninButton";
import LogoutButton from "./LogoutButton";

function Header() {
  const session = true;

  if (session)
    return (
      <header className="sticky top-0 z-50 bg-white flex justify-between items-center p-10 shadow-sm">
        <div className="flex space-x-2  justify-between">
          <Image
            className="rounded-full mx-2 object-contain"
            src="/logo.png"
            alt="Meta logo"
            width={72}
            height={12}
          />
          <div className="my-2">
            <p className="text-blue-400 font-bold">logged in as</p>
            <p>Prajwal</p>
          </div>
        </div>

        <LogoutButton />
      </header>
    );

  return (
    <header className="sticky top-0 z-50 bg-white flex justify-center items-center p-10 shadow-sm">
      <div className="flex flex-col items-center space-y-5">
        <div className="flex space-x-2 items-center">
          <Image src="/logo.png" alt="Meta logo" width={72} height={12} />
          <p className="text-blue-400 font-bold">Welcome to meta messenger</p>
        </div>
        <SigninButton />
      </div>
    </header>
  );
}

export default Header;
