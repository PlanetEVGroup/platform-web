"use cllient";

import {
  BarChart3,
  CreditCard,
  Home,
  LayoutDashboard,
  Users,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import path from "path";
import React from "react";
import { PiSolarPanelFill } from "react-icons/pi";

const Sidebar = () => {
 const pathname = usePathname();
  const sidebar = [
    {
      id: 1,
      icon: <Home className="w-5 h-5 mr-3" />,
      lable: "หน้าหลัก",
    },
    {
      id: 2,
      icon: <LayoutDashboard className="w-5 h-5 mr-3" />,
      lable: "แดชบอร์ด",
      path: "/platform/fusionsolar",
    },
    {
      id: 3,
      icon: <PiSolarPanelFill className="size-6 w-5 h-5 mr-3" />,
      lable: "Plant",
      path: "/platform/fusionsolar/plant",
    },

    {
      id: 5,
      icon: <BarChart3 className="w-5 h-5 mr-3" />,
      lable: "รายงาน",
      path: "/platform/fusionsolar/report",
    },
  ];

  return (
    <>
      <aside className="hidden w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 lg:block">
        <div className="flex items-center justify-center h-16 border-b border-gray-200 dark:border-gray-700">
          <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            แดชบอร์ด
          </span>
        </div>
        <nav className="mt-6 px-4">
          {sidebar.map((item) => (
            <Link
              key={item.id}
              className={`flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 rounded-lg
               hover:bg-gray-100 dark:hover:bg-gray-700 ${
                pathname === item.path
                   ? "bg-gray-200 dark:bg-gray-800"
                   : ""
               }`}
              href={item.path || "#"}
            >
              {item.icon}
              <span>{item.lable}</span>
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
