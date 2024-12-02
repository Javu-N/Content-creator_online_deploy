"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { toast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    // FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { format } from "date-fns"
import { Calendar } from "@/components/ui/calendar"
import { CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"

const FormSchema = z.object({
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
        .regex(/[A-Z]/, { message: "Password must include at least one uppercase letter." }) // At least one uppercase letter
        .regex(/[a-z]/, { message: "Password must include at least one lowercase letter." }) // At least one lowercase letter
        .regex(/[0-9]/, { message: "Password must include at least one number." }) // At least one number
        .regex(/[@$!%*?&#]/, { message: "Password must include at least one special character (@, $, !, %, *, ?, &, #)." }),
    re_password: z.string(),
    gender: z.string(),
    language: z.string({
        required_error: "Please select a language.",
    }),
    birthday: z.date({
        required_error: "A date of birth is required.",
    }),
}).refine((data) => data.password === data.re_password, {
    message: "Passwords must match.",
    path: ["re_password"], // Highlight the re_password field in case of an error
});

const languages = [
    { label: "English", value: "en" },
    { label: "Vietnamese", value: "vn" },
] as const

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
        },
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        toast({
            title: "You submitted the following values:",
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">{JSON.stringify(data, null, 2)}</code>
                </pre>
            ),
        })
    }

    return (
        <main>
            <section className='min-h-screen flex items-center justify-center'>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="bg-card rounded-2xl p-10 gap-3 flex flex-col">
                        <div>
                            <h2 className='font-bold text-xl'>Create New Account</h2>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 w-full">
                            {/* First name & last name */}
                            <FormField
                                control={form.control}
                                name="first_name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>First name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter your first name" {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="last_name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Second name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter your last name" {...field} />
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
                                        <FormLabel>Gender</FormLabel>
                                        <FormControl>
                                            <Select>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select Your Gender" {...field} />
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
                                        <FormLabel>Language</FormLabel>
                                        <FormControl>
                                            <Select>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select Your Language" {...field} />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectGroup>
                                                        <SelectLabel>Language</SelectLabel>
                                                        {languages.map((Language) => {
                                                            return (
                                                                <SelectItem key={Language.value} value={Language.value}>
                                                                    {Language.label}
                                                                </SelectItem>
                                                            )
                                                        })}
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
                            name="birthday"
                            render={({ field }) => (
                                <FormItem className="flex flex-col w-full">
                                    <FormLabel>Date of birth</FormLabel>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <FormControl>
                                                <Button
                                                    variant={"outline"}
                                                    className={cn(
                                                        "font-normal",
                                                        !field.value && "text-muted-foreground"
                                                    )}
                                                >
                                                    {field.value ? (
                                                        format(field.value, "PPP")
                                                    ) : (
                                                        <span>Pick a date</span>
                                                    )}
                                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                </Button>
                                            </FormControl>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto" align="start">
                                            <Calendar
                                                mode="single"
                                                selected={field.value}
                                                onSelect={field.onChange}
                                                disabled={(date) =>
                                                    date > new Date() || date < new Date("1900-01-01")
                                                }
                                                initialFocus
                                            />
                                        </PopoverContent>
                                    </Popover>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input type="email" placeholder="Enter your email" {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input type="password" placeholder="Enter your password" {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="re_password"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Re-enter your Password</FormLabel>
                                    <FormControl>
                                        <Input type="password" placeholder="Re-enter your password" {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />


                        <Button type="submit">Submit</Button>
                    </form>
                </Form>
            </section>
        </main>
    )
}
