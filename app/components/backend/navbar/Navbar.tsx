import { AlignJustify, BellMinus } from "lucide-react";
import React from "react";
import UserMenu from "./UserMenu";
import ThemeToggle from "./ThemeToggle";
import NotifcationMenu from "./notifications/NotifcationMenu";

type Props = {
  showSidebar: boolean;
  setShowSidebar: Function;
};

export default function Navbar({ showSidebar, setShowSidebar }: Props) {
  return (
    <div
      className={`${
        showSidebar ? "sm:ml-0 " : "sm:ml-60"
      }  flex justify-between items-center sticky top-0 bg-slate-100 dark:bg-gradient-to-r dark:from-slate-800 dark:via-purple-950 dark:to-slate-800 px-8 py-4 h-20 shadow-md shadow-slate-400 dark:shadow-slate-700 `}
    >
      <button
        onClick={() => setShowSidebar(!showSidebar)}
        className="btn p-2 rounded-xl"
      >
        <AlignJustify />
      </button>

      <div className="flex items-center gap-5">
        {/* Theme controller */}
        <ThemeToggle />
        {/* Notification bell */}
        <NotifcationMenu />
        {/* User control menu */}
        <UserMenu />
      </div>
    </div>
  );
}
