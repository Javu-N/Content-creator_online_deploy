import React from "react";

import { Link } from "@/i18n/routing";
import { SearchIcon } from "lucide-react";
import { Input } from "../ui/input";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

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

const NavigateTools = () => {
  return (
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
  );
};

export default NavigateTools;
