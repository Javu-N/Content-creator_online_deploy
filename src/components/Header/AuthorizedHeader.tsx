"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link, useRouter } from "@/i18n/routing";
import { Input } from "@/components/ui/input";
import {
  Bell,
  BookHeart,
  ChevronDown,
  LogOut,
  MoonIcon,
  SearchIcon,
  ShoppingCart,
  SquarePen,
  SunIcon,
} from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import defaultAvatar from "$/public/default-avatar.jpeg";
import axios from "axios";

const components: { title: string }[] = [
  {
    title: "Romance",
  },
  {
    title: "Fantasy",
  },
  {
    title: "Historical Fiction",
  },
  {
    title: "Humor",
  },
  {
    title: "Science Fiction",
  },
  {
    title: "Non-Fiction",
  },
  {
    title: "Mystery",
  },
  {
    title: "Thriller",
  },
  {
    title: "Horror",
  },
  {
    title: "Adventure",
  },
  {
    title: "Dystopian",
  },
  {
    title: "Drama",
  },
  {
    title: "Young Adult",
  },
  {
    title: "Children's Fiction",
  },
  {
    title: "Magical Realism",
  },
  {
    title: "Steampunk",
  },
  {
    title: "Cyberpunk",
  },
  {
    title: "Gothic Fiction",
  },
  {
    title: "Psychological Fiction",
  },
  {
    title: "Literary Fiction",
  },
];

export const AuthorizedHeader = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const router = useRouter();

  const handleThemeChange = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  const toggleProfileMenu = () => {
    setIsNotificationOpen(false);
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  const toggleNotification = () => {
    setIsProfileMenuOpen(false);
    setIsNotificationOpen(!isNotificationOpen);
  };

  const handleLogout = async () => {
    try {
      const logoutResult = await axios.post("/api/auth/logout");

      if (logoutResult.data["success"]) {
        router.push("/");
      }
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="fixed w-full bg-card z-50">
      <nav className="relative">
        <div className="flex justify-between items-center py-3 px-2 lg:px-5">
          <div className="flex">
            <span className="bg-rainbow text-transparent bg-clip-text text-[1.25rem] sm:text-[1.5rem] font-bold">
              StoriVerse
            </span>
          </div>
          <div className="hidden lg:flex gap-5">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link
                    href="/home"
                    className={`${navigationMenuTriggerStyle()}`}
                  >
                    <span className="text-[1rem]">Home</span>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    <span className="text-[1rem]">Explore</span>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-3 lg:w-[600px] ">
                      {components.map((component) => (
                        <Link
                          key={component.title}
                          href="/"
                          className="text-[1rem] font-semibold hover:bg-accent py-1 px-2 rounded-sm"
                        >
                          {component.title}
                        </Link>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <div className="flex items-center gap-2">
              <SearchIcon />
              <Input
                className="md:w-[200px] lg:w-[400px] xl:w-[600px] rounded-xl"
                type="email"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <button className="flex gap-2 items-center">
              <span>Write</span>
              <SquarePen size={18} className="block sm:hidden" />
              <SquarePen className="hidden sm:block" />
            </button>
            {mounted && (
              <button
                onClick={handleThemeChange}
                className="hover:cursor-pointer hover:opacity-80"
              >
                {theme === "dark" ? (
                  <MoonIcon className="text-yellow-300" />
                ) : (
                  <SunIcon className="text-red-500" />
                )}
              </button>
            )}

            <button
              className="relative hover:opacity-80 hover:cursor-pointer"
              onClick={toggleNotification}
            >
              <Bell />
              <div className="w-5 h-5 flex items-center justify-center rounded-full bg-red-500 absolute bottom-3 left-3">
                <span className="text-[9px] font-serif font-semibold">122</span>
              </div>
            </button>

            <button
              className="relative hover:opacity-80 hover:cursor-pointer"
              onClick={toggleProfileMenu}
            >
              <Avatar>
                <AvatarImage src={defaultAvatar.src} alt="default-avatar" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="rounded-full bg-foreground absolute top-6 left-6">
                <ChevronDown
                  className="text-background"
                  strokeWidth={1}
                  size={18}
                />
              </div>
            </button>
          </div>
        </div>

        {isProfileMenuOpen && (
          <div className="absolute top-14 md:right-3 md:translate-x-0 md:left-auto left-1/2 -translate-x-1/2 bg-card w-[90%] md:w-80 rounded-md flex-col px-5 pt-2 pb-4 space-y-3">
            <h2 className="font-bold text-md">Account</h2>
            <div className="flex items-center bg-secondary gap-3 px-3 py-1 rounded-md hover:bg-accent hover:cursor-pointer">
              <Avatar>
                <AvatarImage src={defaultAvatar.src} alt="default-avatar" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <span className="font-semibold">Name of the User</span>
            </div>
            <hr className="border-b-[0.5px] border-[#65686C]" />
            <div className="flex items-center bg-secondary  gap-3 px-3 py-2 rounded-md hover:bg-accent hover:cursor-pointer">
              <BookHeart />
              <span className="font-semibold text-sm">My Read Lists</span>
            </div>
            <div className="flex items-center bg-secondary  gap-3 px-3 py-2 rounded-md hover:bg-accent hover:cursor-pointer">
              <ShoppingCart />
              <span className="font-semibold text-sm">Cart</span>
            </div>
            <button
              className="flex items-center bg-red-500  gap-3 px-3 py-2 rounded-md hover:bg-red-400 hover:cursor-pointer w-full"
              onClick={handleLogout}
            >
              <LogOut />
              <span className="font-semibold text-sm">Logout</span>
            </button>
          </div>
        )}

        {isNotificationOpen && (
          <div className="absolute top-14 md:right-3 md:translate-x-0 md:left-auto left-1/2 -translate-x-1/2 bg-card w-[90%] md:w-80 rounded-md flex-col px-5 pt-2 pb-4 space-y-3">
            <h2 className="font-bold text-md">Notifications</h2>
          </div>
        )}
      </nav>
    </header>
  );
};
