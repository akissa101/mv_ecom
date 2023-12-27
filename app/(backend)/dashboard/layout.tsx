"use client";

import Navbar from "@/components/backend/navbar/Navbar";
import Sidebar from "@/components/backend/sidebar/Sidebar";
import React, { useState } from "react";

type Props = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: Props) {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="flex bg-blue-100 dark:bg-slate-900 text-slate-950 dark:text-slate-100  ">
      {/* Sidebar */}
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

      {/* main dashboard */}
      <div className={` flex-grow min-h-screen  `}>
        {/* Header inside dashboard */}
        <Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        {/* body dashboard */}
        <main className="py-8 px-4 min-h-screen ml-0 sm:ml-60">{children}</main>
      </div>
    </div>
  );
}
