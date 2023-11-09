"use client";
import { SignUpContainer } from "@/container";
import Link from "next/link";

function handleSubmit() {}
export default function SignUpPage() {
  return (
    <div className=" min-h-full flex flex-col justify-center lg:px-16 gap-6">
      <div>
        <h2 className="font-bold text-[2rem] leading-tight">
          Register as a user
        </h2>
        <p className="">
          already a user?{" "}
          <Link href={"/auth/signin"} className="text-[#00308F] font-medium">
            sign in to your account.
          </Link>
        </p>
      </div>
      <SignUpContainer />
    </div>
  );
}
