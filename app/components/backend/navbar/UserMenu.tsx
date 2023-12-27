import MenuItem from "@/components/MenuItem";
import { LogOut, User, LayoutDashboard, Settings } from "lucide-react";
import { SquareUser } from "lucide-react";

// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

type Props = {};

export default function UserMenu({}: Props) {
  return (
    <div className="">
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="">
          <button className="bg-slate-500 dark:bg-slate-900 p-1 rounded-full">
            <User size={34} />
          </button>
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content bg-slate-200 dark:bg-slate-800 mt-4 z-[1] menu p-2  rounded-box w-52 shadow-md shadow-slate-700"
        >
          <h4 className="p-3 font-bold text-sm">My Account</h4>
          <MenuItem
            label="Dashboard"
            link="/dashboard"
            icon={<LayoutDashboard />}
          />
          <MenuItem label="Edit Profile" link="/profile" icon={<Settings />} />
          <button className="btn btn-error mt-4">
            <LogOut /> Logout
          </button>
        </ul>
      </div>

      {/* <DropdownMenu>
        <DropdownMenuTrigger>
          <button className="bg-slate-400 dark:bg-slate-700 p-2 rounded-full">
            <User size={34} />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="">Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu> */}
    </div>
  );
}
