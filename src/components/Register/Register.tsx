"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  // FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const FormSchema = z
  .object({
    first_name: z.string().min(2, {
      message: "First name must be at least 2 characters.",
    }),
    last_name: z.string().min(2, {
      message: "Last name must be at least 2 characters.",
    }),
    email: z.string().email({
      message: "Invalid email",
    }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long." }) // Minimum length
      .max(20, { message: "Password must not exceed 20 characters." }) // Maximum length
      .regex(/[A-Z]/, {
        message: "Password must include at least one uppercase letter.",
      }) // At least one uppercase letter
      .regex(/[a-z]/, {
        message: "Password must include at least one lowercase letter.",
      }) // At least one lowercase letter
      .regex(/[0-9]/, { message: "Password must include at least one number." }) // At least one number
      .regex(/[@$!%*?&#]/, {
        message:
          "Password must include at least one special character (@, $, !, %, *, ?, &, #).",
      }),
    re_password: z.string(),
    gender: z.string(),
    language: z.string({
      required_error: "Please select a language.",
    }),
    birthday: z.date({
      required_error: "A date of birth is required.",
    }),
    day: z.string(),
    month: z.string(),
    year: z.string(),
  })
  .refine((data) => data.password === data.re_password, {
    message: "Passwords must match.",
    path: ["re_password"], // Highlight the re_password field in case of an error
  });

const languages = [
  { label: "English", value: "en" },
  { label: "Vietnamese", value: "vn" },
] as const;

export default function Register() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      re_password: "",
      gender: "",
      language: "",
      day: "",
      month: "",
      year: "",
    },
  });

  //   function onSubmit(data: z.infer<typeof FormSchema>) {
  //     toast({
  //       title: "You submitted the following values:",
  //       description: (
  //         <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
  //           <code className="text-white">{JSON.stringify(data, null, 2)}</code>
  //         </pre>
  //       ),
  //     });
  //   }

  return (
    <main>
      <section className="min-h-screen flex items-center justify-center">
        <Form {...form}>
          <form
            // onSubmit={}
            className="bg-card rounded-2xl p-5 md:p-10 gap-3 flex flex-col mx-[30px] sm:mx-0"
          >
            <div>
              <h2 className="font-bold text-xl">Create New Account</h2>
            </div>

            <div className="flex gap-3 w-full">
              {/* First name & last name */}
              <FormField
                control={form.control}
                name="first_name"
                render={({ field }) => (
                  <FormItem className="w-1/2">
                    <FormLabel className="hidden">First name</FormLabel>
                    <FormControl>
                      <Input placeholder="first name" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="last_name"
                render={({ field }) => (
                  <FormItem className="w-1/2">
                    <FormLabel className="hidden">Second name</FormLabel>
                    <FormControl>
                      <Input placeholder="last name" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full">
              {/* Gender & Nationality */}
              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem className="sm:w-1/2">
                    <FormLabel className="hidden">Gender</FormLabel>
                    <FormControl>
                      <Select>
                        <SelectTrigger>
                          <SelectValue
                            placeholder="Select Your Gender"
                            {...field}
                          />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Gender</SelectLabel>
                            <SelectItem value="Male">Male</SelectItem>
                            <SelectItem value="Female">Female</SelectItem>
                            <SelectItem value="Others">Others</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="language"
                render={({ field }) => (
                  <FormItem className="sm:w-1/2">
                    <FormLabel className="hidden">Language</FormLabel>
                    <FormControl>
                      <Select>
                        <SelectTrigger>
                          <SelectValue
                            placeholder="Select Your Language"
                            {...field}
                          />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Language</SelectLabel>
                            {languages.map((Language) => {
                              return (
                                <SelectItem
                                  key={Language.value}
                                  value={Language.value}
                                >
                                  {Language.label}
                                </SelectItem>
                              );
                            })}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <div className="flex gap-3 w-full">
              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem className="w-1/3">
                    <FormLabel className="hidden">Month</FormLabel>
                    <FormControl>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Month" {...field} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Month</SelectLabel>
                            {Array.from({ length: 12 }, (_, i) => (
                              <SelectItem
                                key={i + 1}
                                value={(i + 1).toString()}
                              >
                                {new Date(0, i).toLocaleString("default", {
                                  month: "short",
                                })}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem className="w-1/3">
                    <FormLabel className="hidden">Day</FormLabel>
                    <FormControl>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Day" {...field} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Day</SelectLabel>
                            {Array.from({ length: 31 }, (_, i) => (
                              <SelectItem
                                key={i + 1}
                                value={(i + 1).toString()}
                              >
                                {i + 1}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem className="w-1/3">
                    <FormLabel className="hidden">Year</FormLabel>
                    <FormControl>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Year" {...field} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Year</SelectLabel>
                            {Array.from({ length: 2050 - 1945 + 1 }, (_, i) => (
                              <SelectItem
                                key={1945 + i}
                                value={(1945 + i).toString()}
                              >
                                {1945 + i}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="hidden">Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="hidden">Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter your password"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <div className="max-w-[500px] mx-auto block text-xs">
              <p className="mb-5">
                People who use our service may have uploaded your contact
                information to StoriVerse. Learn more.
              </p>
              <p>
                By clicking Sign Up, you agree to our Terms, Privacy Policy and
                Cookies Policy. You may receive SMS notifications from us and
                can opt out at any time.
              </p>
            </div>
            <div className="flex flex-col m-auto w-1/2">
              <Button
                className="w-full hover:scale-110 duration-300"
                type="submit"
              >
                Submit
              </Button>
            </div>
          </form>
        </Form>
      </section>
    </main>
  );
}
