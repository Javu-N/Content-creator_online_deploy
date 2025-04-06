import { AuthorizedHeader } from "@/components/Header/AuthorizedHeader";
import { Toaster } from "@/components/ui/toaster";

const AuthorizedLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <AuthorizedHeader />
      <main>{children}</main>
      <Toaster />
    </>
  );
};

export default AuthorizedLayout;
