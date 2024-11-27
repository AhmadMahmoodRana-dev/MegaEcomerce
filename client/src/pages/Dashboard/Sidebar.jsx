import { Sidebar, SidebarItem } from "@/components/Dashboard/Sidebar/SidebarMainComponents";
import React from "react";
import {
  LuBarChart3,
  LuBoxes,
  LuLayoutDashboard,
  LuLifeBuoy,
  LuPackage,
  LuReceipt,
  LuSettings,
  LuUserCircle,
} from "react-icons/lu";
import { Outlet } from "react-router-dom";

const Sidebar1 = () => {
  return (
    <div className="flex">
      {/* Static Sidebar */}
      <Sidebar>
        <SidebarItem
          href="/dashboard"
          icon={<LuLayoutDashboard size={20} />}
          text="Dashboard"
        />
        <SidebarItem
          href="/dashboard/statistics"
          icon={<LuBarChart3 size={20} />}
          text="Statistics"
        />
        <SidebarItem
          href="/dashboard/students"
          icon={<LuUserCircle size={20} />}
          text="Students"
        />
        <SidebarItem
          href="/dashboard/courses"
          icon={<LuBoxes size={20} />}
          text="Courses"
        />
        <SidebarItem
          href="/dashboard/orders"
          icon={<LuPackage size={20} />}
          text="Orders"
        />
        <SidebarItem
          href="/dashboard/billings"
          icon={<LuReceipt size={20} />}
          text="Billings"
        />
        <hr className="my-3" />
        <SidebarItem
          href="/dashboard/settings"
          icon={<LuSettings size={20} />}
          text="Settings"
        />
        <SidebarItem
          href="/dashboard/help"
          icon={<LuLifeBuoy size={20} />}
          text="Help"
        />
      </Sidebar>

      {/* Dynamic Content Area */}
      <main className="w-full p-4">
        {/* Render nested routes */}
        <section>
          <Outlet />
        </section>
      </main>
    </div>
  );
};

export default Sidebar1;
