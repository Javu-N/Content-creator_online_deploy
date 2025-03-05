"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link } from "@/i18n/routing";
import { Input } from "@/components/ui/input";
import {
  Bell,
  ChevronDown,
  MenuIcon,
  MoonIcon,
  SearchIcon,
  SunIcon,
} from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import defaultAvatar from "$/public/default-avatar.jpeg";

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // const [isExploreMenuOpen, setIsExploreMenuOpen] = useState(false);

  const handleThemeChange = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  // const toggleExploreMenu = () => {
  //   setIsExploreMenuOpen(!isExploreMenuOpen);
  // };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="fixed w-full bg-card z-50">
      <nav className="relative">
        <div className="flex justify-between items-center py-3 px-2 lg:px-5">
          <div className="flex">
            <span className="bg-rainbow text-transparent bg-clip-text text-[1.5rem] font-bold">
              StoriVerse
            </span>
          </div>
          <div className="hidden lg:flex gap-5">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="/"
                    className={`${navigationMenuTriggerStyle()}`}
                  >
                    <span className="text-[1rem]">Home</span>
                  </NavigationMenuLink>
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
          <div className="flex gap-3 items-center">
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

            <button className="relative hover:opacity-80 hover:cursor-pointer mr-5">
              <Bell />
              <div className="w-6 h-6 flex items-center justify-center rounded-full bg-red-500 absolute bottom-3 left-3">
                <span className="text-[10px] font-serif font-semibold">
                  122
                </span>
              </div>
            </button>

            <button className="relative hover:opacity-80 hover:cursor-pointer">
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

            <div className=" lg:hidden">
              <MenuIcon
                className="hover:cursor-pointer"
                onClick={toggleMobileMenu}
              />
            </div>
          </div>
        </div>

        <div className="absolute top-15 md:right-3 md:translate-x-0 md:left-auto left-1/2 -translate-x-1/2 bg-blue-500 w-[90%] md:w-56">
          xxxx
        </div>
      </nav>
    </header>
  );
};
