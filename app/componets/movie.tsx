import { Button } from "@/components/ui/button"
import prisma from "@/lib/db"
import MovieBtn from "./movieBtn"


async function getData() {

    const data = await prisma.movie.findFirst({
        select: {
            title: true,
            overview: true,
            vidoeSource: true,
            imageString: true,
            release: true,
            duration: true,
            id: true,
            age: true,
            youtubeString : true
        }
    })
    return data

}


export default async function HomePage() {

    const data = await getData()
    return <div className="h-[55vh] lg:h[60vh] w-full flex justify-ثدی items-center">

        <video poster={data?.imageString}
            autoPlay
            muted
            loop
            className=" object-cover brightness-75 w-full absolute top-0 right-0 h-[60vh] -z-10"
            src={data?.vidoeSource}
        >




        </video>
        <div className=" absolute w-[90%] lg:w-[40%] mx-auto">
            <h1 className=" text-white text-4xl md:text-5xl lg:text-6xl font-bold">
                {data?.title}</h1>
            <p className=" text-white text-lg mt-5 "> {data?.overview}  </p>

            <div className=" flex gap-x-3 mt-4 ">
                
                <MovieBtn aga={data?.age as number} duration={data?.duration as number} id={data?.id as number} overview={data?.overview as string} title={data?.title as string} releasData={data?.release as number} youtubeUrl={data?.youtubeString as string} key={data?.id }/>

            </div>

        </div>
    </div>
}