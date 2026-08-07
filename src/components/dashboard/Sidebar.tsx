"use client";

import React from "react";
import {
  Search,
  Bell,
  LayoutDashboard,
  ChevronDown,
  X,
  User,
  PhoneCall,
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  activePath?: string;
}

interface NavItem {
  name: string;
  icon: React.ElementType;
  href: string;
  active?: boolean;
  badge?: string;
}

export function Sidebar({ isOpen, onClose, activePath = "#" }: SidebarProps) {
  const sidebarNavItems: NavItem[] = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      href: "#",
      active: activePath === "#",
    },
    {
      name: "Users",
      icon: User,
      href: "#users",
      active: activePath === "#users",
    },
    {
      name: "Contact",
      icon: PhoneCall,
      href: "#contact",
      active: activePath === "#contact",
    },
  ];

  return (
    <>
      {/* Mobile Backdrop Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-slate-900/50 z-40 lg:hidden backdrop-blur-sm"
          onClick={onClose}
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed lg:static top-0 left-0 bottom-0 z-50 w-64 bg-black text-white flex flex-col justify-between p-4 flex-shrink-0 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div>
          {/* Top Header Logo & Actions */}
          <div className="flex items-center justify-end pb-6">
            <div className="flex items-center gap-3 text-slate-300">
              <Search className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
              <Bell className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
              <button
                onClick={onClose}
                className="lg:hidden text-white ml-2 focus:outline-none"
                aria-label="Close sidebar"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1 overflow-y-auto max-h-[calc(100vh-160px)] lg:max-h-none">
            {sidebarNavItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  item.active
                    ? "bg-[#183278] text-white font-semibold"
                    : "text-slate-300 hover:bg-[#1b3783] hover:text-white"
                }`}
              >
                <div className="flex items-center gap-3">
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </div>
                {item.badge && (
                  <span className="text-[10px] font-bold bg-[#38bdf8] text-slate-900 px-1.5 py-0.5 rounded uppercase tracking-wider">
                    {item.badge}
                  </span>
                )}
              </a>
            ))}
          </nav>
        </div>

        {/* Sidebar Footer Section */}
        <div className="pt-4 border-t border-[#2b4fa8]/50 space-y-2">
          {/* User Profile */}
          <div className="flex items-center justify-between pt-2 px-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-slate-200 text-slate-800 flex items-center justify-center font-bold text-xs">
                JS
              </div>
              <span className="text-sm font-medium text-white">Jane Smith</span>
            </div>
            <ChevronDown className="w-4 h-4 text-slate-300 cursor-pointer hover:text-white transition-colors" />
          </div>
        </div>
      </aside>
    </>
  );
}
