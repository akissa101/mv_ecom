import MenuItem from "@/components/MenuItem";
import {
  BellIcon,
  BellMinus,
  BellOff,
  BellRing,
  LayoutDashboard,
  LogOut,
  LucideBellRing,
  Settings,
} from "lucide-react";
import React from "react";
import NotifyItem from "./NotifyItem";

type Props = {};

export default function NotifcationMenu({}: Props) {
  return (
    <div className="">
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="">
          <button
            type="button"
            className="relative inline-flex items-center p-3 text-sm font-medium text-center   rounded-lg focus:outline-none"
          >
            <BellMinus size={36} className=" text-green-600" />
            <span className="sr-only">Notifications</span>
            <div className="absolute inline-flex items-center justify-center p-2 w-7 h-7 text-xs font-bold text-white bg-red-800 border-2 rounded-full -top-1 -right-1 dark:border-gray-900">
              20
            </div>
          </button>
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content bg-slate-200 dark:bg-slate-800 z-[1] menu p-2  rounded-box w-80 shadow-md shadow-slate-700"
        >
          <h4 className="p-3 font-bold text-sm">My Account</h4>
          <NotifyItem label="Dashboard" icon={<LucideBellRing />} />
          <NotifyItem label="Edit Profile" icon={<Settings />} />
          <NotifyItem label="Logout" icon={<LogOut />} />
        </ul>
      </div>
    </div>
  );
}
