import { Header } from "@/components/Header/Header";

const UnauthorizedLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default UnauthorizedLayout;
