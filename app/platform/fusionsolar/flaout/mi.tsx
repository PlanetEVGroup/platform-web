"use client";
import React, { ReactNode } from "react";
import Header from "./hd";
import Sidebar from "./sb";
import Content from "./ct";

const MainFus = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <>
      <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
        <Sidebar />
        <div className="flex-1 flex flex-col min-h-screen overflow-hidden">
          <Header />
          <Content> {children}</Content>
        </div>
      </div>
    </>
  );
};

export default MainFus;
