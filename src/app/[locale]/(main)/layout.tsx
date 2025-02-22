import { Header } from "@/components/Header";
import { get } from "http";
import { getLocale } from "next-intl/server";

const MainLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const locale = await getLocale();

  return (
    <>
      <Header locale={locale} />
      <main>{children}</main>
    </>
  );
};

export default MainLayout;
