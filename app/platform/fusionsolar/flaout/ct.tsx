"use client";
import React, { ReactNode } from "react";

const Content = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <>
      <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
        <div className="">{children}</div>
      </main>
    </>
  );
};

export default Content;
