import React from 'react'
import { Input } from "@/components/ui/input"
import { Search } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

import Image from 'next/image';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import sample_image from '$/public/sample-2.jpg';
import sample_image_2 from '$/public/sample-5.jpg'
import sample_image_3 from '$/public/sample-6.jpg'
import { Checkbox } from "@/components/ui/checkbox"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { get_books } from '@/api/api'
import { BookCarousel } from '@/components/Explore/BookCarousel';

const genre = "Horror";


const page = () => {

    const get_all_books = () => {
        return get_books();
    }

    const books_list = get_all_books();

    return (
        <div className=' w-full pt-[70px] block'>
            {/* Intro text */}
            <div className='text-center mt-3'>
                <span className='font-bold bg-rainbow text-transparent bg-clip-text text-2xl'>Top {genre} Stories</span>
            </div>
            {/* Carousel */}
            <BookCarousel />

            {/* Search bar */}
            <div className="mx-auto max-w-[450px] md:max-w-[700px] flex flex-col md:flex-row py-auto gap-3 px-3 justify-center">
                <div className='flex gap-3'>
                    <Search className='my-auto' />
                    <Input className="border-foreground md:min-w-[300px]" type="text" placeholder="Hmmm...What to read" />
                </div>
                <div className='flex gap-3 justify-center'>
                    <div className='min-w-[150px]'>
                        <Select>
                            <SelectTrigger >
                                <SelectValue placeholder="Search by" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Search by</SelectLabel>
                                    <SelectItem value="Genre">Genre</SelectItem>
                                    <SelectItem value="Author">Author</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <Button className='font-bold bg-rainbow text-foreground hover:scale-110 duration-300'>Search</Button>
                </div>
            </div>

            {/* Filter */}
            <div className='flex justify-center items-center mt-3 gap-3 mx-auto max-w-[450px] md:max-w-[700px] px-3'>
                <Select>
                    <SelectTrigger >
                        <SelectValue placeholder="Select a genre" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Genre</SelectLabel>
                            <SelectItem value="Horror">Horror</SelectItem>
                            <SelectItem value="Funny">Funny</SelectItem>
                            <SelectItem value="Comic">Comic</SelectItem>
                            <SelectItem value="History">History</SelectItem>
                            <SelectItem value="General">General</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>

                <Select>
                    <SelectTrigger >
                        <SelectValue placeholder="Sort by stars" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Sort by stars</SelectLabel>
                            <SelectItem value="asc">Ascending</SelectItem>
                            <SelectItem value="desc">Descending</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>

                <div className="flex items-center space-x-2">
                    <Checkbox id="terms" className='rounded-full' />
                    <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        Premium
                    </label>
                </div>
            </div>

            {/* Card list */}
            <Dialog>
                <div className="grid gap-5 justify-center mt-6 
                grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 px-[20px] xl:px-[50px] 2xl:px-[100px]">
                    {books_list.map((book) => (
                        <DialogTrigger className='text-left' key={book.id}>
                            <Card className="flex pl-3 h-min-[400px] items-center">

                                <img src={book.cover} alt="book cover" className="w-1/2 h-[100px] object-contain" />

                                <div className='flex flex-col gap-0'>
                                    <CardHeader className='mb-0 pb-2'>
                                        <CardTitle className="text-xl md:text-2xl">{book.title}</CardTitle>
                                        <CardDescription>by Author</CardDescription>
                                    </CardHeader>
                                    <CardContent className='py-0 text-sm'>
                                        <p>"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "</p>
                                    </CardContent>
                                    <CardFooter className='flex justify-start gap-1 mt-3'>
                                        <span className="text-sm bg-secondary-foreground rounded-sm text-background px-2 m-auto">Horror</span>
                                        <span className="text-sm bg-secondary-foreground rounded-sm text-background px-2 m-auto">Family</span>
                                        <span className="hidden md:block text-sm bg-secondary-foreground rounded-sm text-background px-2 m-auto">Adventure</span>
                                    </CardFooter>
                                </div>
                            </Card>
                        </DialogTrigger>
                    ))}

                </div>

                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Edit profile</DialogTitle>
                        <DialogDescription>
                            Make changes to your profile here. Click save when you're done.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Name
                            </Label>
                            <Input id="name" value="Pedro Duarte" className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="username" className="text-right">
                                Username
                            </Label>
                            <Input id="username" value="@peduarte" className="col-span-3" />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit">Save changes</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

        </div>
    )
}

export default page