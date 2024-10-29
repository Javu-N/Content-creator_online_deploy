import Image from "next/image"
import heroImage from '../../public/heroImage.png'


const Main = () => {
    return (
        <section className="flex-col  h-[1000px] w-full">

            {/* hero section */}
            <div className="bg-zinc-700 pt-[100px] pb-20">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 lg:w-2/3">
                            <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-bold mb-6">
                                Welcome to our <br className="hidden md:block" />
                                <span className="text-indigo-500">Awesome</span> Website
                            </h1>
                            <p className="text-lg md:text-xl lg:text-2xl text-gray-400 mb-8">
                                We create beautiful and functional websites for businesses of all sizes.
                            </p>
                            <div className="flex gap-2">
                                <a href="#" className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded-md">Get
                                    Started
                                </a>
                                <a href="#" className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-md">Learn
                                    More
                                </a>
                            </div>
                        </div>
                        <div className="md:w-1/2 lg:w-1/3 mt-8 md:mt-0">
                            {/* <img src="https://via.placeholder.com/500x500" alt="Hero Image" className="rounded-lg shadow-lg" /> */}
                            <Image src={heroImage} alt="Hero Image" className="bg-[var(--foreground)] rounded-full" />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Main