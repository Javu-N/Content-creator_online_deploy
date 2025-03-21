"use client";

import React, { useState } from "react";
import vietnam_flag from "$/public/vietnam.png";
import american_flag from "$/public/usa.png";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";

interface LanguageSelectorProps {
  router: ReturnType<typeof useRouter>;
  pathname: ReturnType<typeof usePathname>;
}

const LanguageSelector = ({ router, pathname }: LanguageSelectorProps) => {
  const locale = useLocale();

  const [selectedLocale, setSelectedLocale] = useState(locale);

  const handleSaveChangeLanguage = () => {
    router.replace(pathname, { locale: selectedLocale });
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex items-center bg-secondary  gap-3 px-3 py-2 rounded-md hover:bg-accent hover:cursor-pointer">
          {locale === "vi" ? (
            <Image src={vietnam_flag} alt="vietnam_flag" className="w-[24px]" />
          ) : (
            <Image
              src={american_flag}
              alt="american_flag"
              className="w-[24px]"
            />
          )}

          <span className="font-semibold text-sm">Language</span>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-[95%] sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Language Settings</DialogTitle>
          <DialogDescription>
            This changes only affects the language of the interface.
          </DialogDescription>
        </DialogHeader>
        <div className="flex space-x-2 items-center justify-center sm:justify-start">
          <label htmlFor="dropdown" className=" font-semibold">
            Choose an option:
          </label>
          <div className="relative">
            <select
              id="dropdown"
              name="dropdown"
              className="py-1 pl-3 rounded-xl focus:outline-none hover:cursor-pointer appearance-none w-[130px]"
              value={selectedLocale}
              onChange={(e) => setSelectedLocale(e.target.value)}
            >
              <option value="vi">Vietnamese</option>
              <option value="en">English</option>
            </select>
            <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
              ▼
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleSaveChangeLanguage}>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default LanguageSelector;
