"use client";
import React from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div className="flex flex-col md:flex-row md:justify-between mx-20 py-5">
      <div className="text-[#2F4AE3] text-4xl font-bold">
        <Link href={"/"}>Codefox</Link>
      </div>
      <div>
        <ul className="flex flex-col md:flex-row  text-[#616B6F] text-lg ">
          <li className="mx-5 py-2">
            <Link href={"/upcomingCompany"}>Upcoming Visits</Link>
          </li>
          <li className="mx-5 py-2">
            <Link href={"/pastVisit"}>Past Visits</Link>
          </li>
          <li className="mx-5 py-2">
            <Link href={"/leaderBoard"}>Leaderboard</Link>
          </li>
          <li className="mx-5 py-2">
            <Link href={"/about"}>About Us</Link>
          </li>
          <li className="mx-5 py-2">
            <Link href={"/company"}>Company</Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-row">
        <div
          className="mx-3 py-2 px-4 rounded-lg text-md font-semibold bg-[#3670FF] text-white "
          onClick={() => signIn()}
        >
          Join Codefox
        </div>

        <div className="text-[#00068E] py-2 px-4 rounded-lg text-md font-semibold mx-3 border-[1px] border-[#E4EAEB]">
          <Link href={"/auth"}>Sign in </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

{
  /**if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  ) */
}
