import { AuthorizedHeader } from "@/components/Header/AuthorizedHeader";

const AuthorizedLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <AuthorizedHeader />
      <main>{children}</main>
    </>
  );
};

export default AuthorizedLayout;
