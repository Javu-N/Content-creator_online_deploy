import Image from "next/image";
import sample_image from "$/public/sample-3.jpg";
import vn_sample_image from "$/public/sample-4.jpg";
import { Eye } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "../ui/button";
import { Link } from "@/i18n/routing";

const Login = () => {
  const randomQuote = {
    author: "Ho Chi Minh",
    quote: "Nothing is more important than independence and freedom",
    length: 100,
  };
  const t = useTranslations("Login");

  return (
    <main className="bg-background">
      <section className="min-h-screen flex items-center justify-center">
        <div className="bg-card flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
          <div className="md:w-1/2 px-8 md:px-16">
            <h2 className="font-bold text-2xl text-foreground">{t("title")}</h2>
            <p className="text-sm mt-4 text-foreground">{t("about")}</p>

            <form action="" className="flex flex-col gap-4">
              <input
                className="p-2 mt-8 rounded-xl border"
                type="email"
                name="email"
                placeholder={t("email")}
              />
              <div className="relative">
                <input
                  className="p-2 rounded-xl border w-full"
                  type="password"
                  name="password"
                  placeholder={t("password")}
                />
                <Eye className="absolute top-1/2 right-3 -translate-y-1/2" />
              </div>
              <Button>{t("loginButton")}</Button>
            </form>

            <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
              <hr className="border-gray-400" />
              <p className="text-center text-sm">{t("or")}</p>
              <hr className="border-gray-400" />
            </div>

            <Button className="w-full mt-5 flex justify-center items-center">
              <svg
                className="mr-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="25px"
              >
                <path
                  fill="#FFC107"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                />
                <path
                  fill="#FF3D00"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                />
                <path
                  fill="#4CAF50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                />
                <path
                  fill="#1976D2"
                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                />
              </svg>
              {t("loginButtonWithGoogle")}
            </Button>

            <div className="mt-5 text-sm border-b border-foreground py-4 text-foreground">
              <Link href="#" className="hover:underline">
                {t("forgotPassword")}
              </Link>
            </div>

            <div className="mt-3 gap-2 text-sm flex justify-between items-center text-foreground">
              <p>{t("notHaveAccount")}</p>
              <Button className="py-2 px-5 bg-rainbow hover:scale-110 duration-300">
                <Link href="/register">{t("registerButton")}</Link>
              </Button>
            </div>
          </div>

          <div className="md:block hidden w-1/2 relative">
            {randomQuote.length > 100 ? (
              <Image
                className="rounded-2xl h-[600px] opacity-60"
                src={vn_sample_image}
                alt="Login Image"
              />
            ) : (
              <Image
                className="rounded-2xl h-[600px] opacity-60"
                src={sample_image}
                alt="Login Image"
              />
            )}

            <div className="absolute top-2/3 text-foreground ml-[70px] mr-[30px] text-right">
              <p className="italic font-bold">
                &quot;
                {randomQuote.length > 100
                  ? "Nothing is more important than independence and freedom"
                  : randomQuote.quote}
                &quot;
              </p>
              <p className="mt-2">
                -{randomQuote.length > 100 ? "Ho Chi Minh" : randomQuote.author}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Login;
