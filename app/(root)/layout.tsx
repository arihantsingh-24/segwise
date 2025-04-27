import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React, { ReactNode } from "react";

const Rootlayout = async ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col px-16 ">
      <Header />
      <div className="w-full">{children}</div>
      <Footer />
    </div>
  );
};

export default Rootlayout;
