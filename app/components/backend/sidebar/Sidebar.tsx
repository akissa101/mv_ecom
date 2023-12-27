import Link from "next/link";
import React, { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  Contact2,
  ExternalLink,
  Globe,
  LayoutDashboard,
  LayoutList,
  MonitorPlay,
  ScanBarcode,
  ScanSearch,
  SendToBack,
  Settings,
  Slack,
  Tractor,
  Truck,
  UserIcon,
  UserSquare,
  Users2,
  Warehouse,
  Waypoints,
} from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const sidebarItems = [
  {
    title: "Customers",
    icon: <Users2 />,
    href: "/dashboard/customers",
  },
  {
    title: "Orders",
    icon: <Truck />,
    href: "/dashboard/orders",
  },
  {
    title: "Markets",
    icon: <Warehouse />,
    href: "/dashboard/markets",
  },
  {
    title: "Farmers",
    icon: <Tractor />,
    href: "/dashboard/farmers",
  },
  {
    title: "Staff",
    icon: <UserIcon />,
    href: "/dashboard/staff",
  },
  {
    title: "Communities",
    icon: <Contact2 />,
    href: "/dashboard/communities",
  },
  {
    title: "Settings",
    icon: <Settings />,
    href: "/dashboard/settings",
  },

  {
    title: "Online Store",
    icon: <ExternalLink />,
    href: "/dashboard/onlineStores",
  },
];

const subItems = [
  {
    title: "Products",
    icon: <LayoutList />,
    href: "/dashboard/products",
  },
  {
    title: "Categories",
    icon: <ScanBarcode />,
    href: "/dashboard/categories",
  },
  {
    title: "Coupons",
    icon: <ScanSearch />,
    href: "/dashboard/coupons",
  },
  {
    title: "More Banner",
    icon: <ScanSearch />,
    href: "/dashboard/banners",
  },
];

type Props = {
  showSidebar: boolean;
  setShowSidebar: Function;
};

export default function Sidebar({ showSidebar, setShowSidebar }: Props) {
  const path = usePathname();
  const [openSubMenu, setOpenSubMenu] = useState(false);

  return (
    <div
      className={`${
        showSidebar ? "sm:block mt-20 " : "mt-20 sm:mt-0 hidden sm:block"
      } z-20 fixed top-0 left-0 w-60 overflow-y-scroll bg-slate-50 dark:bg-gradient-to-t  dark:from-slate-800 dark:via-purple-950 dark:to-slate-800  space-y-6 min-h-screen`}
    >
      {/* Sidebar Logo */}
      <Link href="/">
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={100}
          height={100}
          className=" h-20 mt-3 mb-12 w-28 ml-4  "
        />
      </Link>

      {/* Sidebar menus */}
      <ul tabIndex={0} className="dropdown-content menu">
        {/* Dashboard MenuItem*/}
        <Link
          href="/dashboard"
          onClick={() => setShowSidebar(false)}
          className={`flex p-3 gap-4 w-full ${
            path === "/dashboard"
              ? "text-violet-500 border-l-4 border-violet-700 cursor-default"
              : "hover:border-l-2 hover:border-violet-600 hover:bg-violet-300 hover:dark:bg-slate-700"
          }`}
        >
          <LayoutDashboard />
          Dashboard
          {/* <div> </div> */}
        </Link>
        {/* Catelog sub menu */}
        <button
          onClick={() => setOpenSubMenu(!openSubMenu)}
          className="flex justify-between w-full hover:bg-sky-200 hover:dark:bg-slate-800 hover:darK:bg-slate-800 hover:border-l-2 hover:border-violet-600 "
        >
          <div className="w-full ">
            <div className="flex gap-4 p-3 w-full ">
              <Slack />
              <span className="text-start flex-grow">Catelog</span>
              {openSubMenu ? (
                <span className="">
                  <ChevronDown />
                </span>
              ) : (
                <span className="">
                  <ChevronRight />
                </span>
              )}
            </div>
            {openSubMenu && (
              <div className="dropdown-content z-[1] menu shadow-md ml-2 pb-4 dark:bg-slate-800 bg-violet-100  w-52">
                {subItems.map((item, i) => (
                  <Link
                    key={i}
                    href={item.href}
                    onClick={() => setShowSidebar(false)}
                    className={`flex p-3 gap-4 w-full  ${
                      path === item.href
                        ? "text-violet-700 border-l-4 border-violet-500 cursor-default"
                        : " hover:bg-violet-300 hover:dark:bg-slate-700 "
                    }`}
                  >
                    {item.icon}
                    {item.title}
                    {/* <div> </div> */}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </button>
        {/* Menu Items */}
        {sidebarItems.map((item, i) => (
          <Link
            key={i}
            href={item.href}
            onClick={() => setShowSidebar(false)}
            className=" "
          >
            <div
              className={`flex p-3 gap-4 w-full ${
                path === item.href
                  ? "text-violet-500 border-l-4 border-violet-700 cursor-default"
                  : "hover:border-l-2 hover:border-violet-600 hover:bg-violet-300 hover:dark:bg-slate-700"
              }`}
            >
              {item.icon}
              <span className="flex-1 text-start ">{item.title}</span>
            </div>
          </Link>
        ))}
      </ul>

      {/* Logout button */}
      <button className="btn btn-error w-56 ml-1 fixed bottom-2  hover:bg-rose-600  transition-colors duration-300">
        Logout
      </button>
    </div>
  );
}
