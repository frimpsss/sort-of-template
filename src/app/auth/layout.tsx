import React from "react";
import bg from "../../assets/images/pexels-photo-247851.webp";
import Image from "next/image";
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid px-4 md:px-8 lg:grid-cols-12 lg:px-0 h-screen overflow-y-hidden lg:overflow-y-scroll">
      <section className="lg:col-span-4">{children}</section>
      {/* <Image src={bg} alt="free"  className="col-span-6  object-cover"/> */}
      <section className="lg:col-span-8 hidden lg:block bg-[#F0F8FF]"></section>
    </div>
  );
}
