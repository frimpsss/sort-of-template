"use client";
import Link from "next/link";
import { SignInContainer } from "@/container";
export default function SignInPage() {
  return (
    <div className=" min-h-full flex flex-col justify-center lg:px-16 gap-6">
      <div>
        <h2 className="font-bold text-[2rem] leading-tight">
          Sign in as a user
        </h2>
        <p className="">
          not a user?{" "}
          <Link href={"/auth/signup"} className="text-[#00308F] font-medium">
            create an account.
          </Link>
        </p>
      </div>
      <SignInContainer />
    </div>
  );
}
