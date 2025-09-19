"use client";
import { Bell, History, LogOut, Search, Settings, User } from "lucide-react";
import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ModeToggle } from "./ModeToggle";
import { SidebarTrigger } from "./ui/sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";

const Navbar = () => {
  return (
    <nav className="p-4 w-full flex justify-between items-center sticky top-0 z-10 bg-background">
      <div className="flex items-center gap-8">
        <SidebarTrigger />
        <Breadcrumb className="hidden lg:flex">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink
                href="/"
                className="text-muted-foreground text-sm"
              >
                Dashboard
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>/</BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink
                href="/components"
                className="text-primary text-sm"
              >
                Default
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 w-[200px] rounded-lg bg-[#1C1C1C0D] px-3 py-2">
          <Search size={16} className="text-gray-500" />
          <input
            type="search"
            placeholder="Search"
            className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
          />
        </div>
        <ModeToggle />
        <History size={20} className="text-muted-foreground cursor-pointer" />
        <Bell size={20} className="text-muted-foreground cursor-pointer" />
        <SidebarTrigger />

        <DropdownMenu>
          <DropdownMenuTrigger className="cursor-pointer">
            <Avatar>
              <AvatarImage src="/avatar.png" />
              <AvatarFallback>
                <div className="animate-pulse bg-gray-300 size-8 rounded-full"></div>
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>

          <DropdownMenuContent>
            <DropdownMenuItem asChild>
              <Link href="/" className="cursor-pointer">
                <User />
                Profile
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings />
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem variant="destructive">
              <LogOut />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;
