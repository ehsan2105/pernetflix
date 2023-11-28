import MovieCart from "@/app/componets/movieCart"
import { authOptions } from "@/app/ut/auth"
import prisma from "@/lib/db"
import { getServerSession } from "next-auth"

import { mock } from "node:test"


async function getData(category: string, userId: string) {
    switch (category) {
        case "show": {
            const data = await prisma.movie.findMany({
                where: {
                    category: 'show'
                },
                select: {
                    title: true,
                    age: true,
                    duration: true,
                    id: true,
                    release: true,
                    imageString: true,
                    overview: true,
                    youtubeString: true,
                    WatchLists: {
                        where: {
                            userId: userId
                        }
                    }
                }
            })
            return data
        }
        case "movies": {
            const data = await prisma.movie.findMany({
                where: {
                    category: "movie",
                }
                ,
                select: {
                    title: true,
                    age: true,
                    duration: true,
                    id: true,
                    release: true,
                    imageString: true,
                    overview: true,
                    youtubeString: true,
                    WatchLists: {
                        where: {
                            userId: userId
                        }
                    }


                }
            })
            return data
        }
        case "recetly": {
            const data = await prisma.movie.findMany({
                where: {
                    category: 'recent',
                },
                select: {
                    title: true,
                    age: true,
                    duration: true,
                    id: true,
                    release: true,
                    imageString: true,
                    overview: true,
                    youtubeString: true,
                    WatchLists: {
                        where: {
                            userId: userId
                        }
                    }


                }
            })
            return data
        }
        default: {

            throw new Error()
        }
    }

}

export default async function CategoryPages({ params }: { params: { genre: string } }) {
    const session = await getServerSession(authOptions)

    const data = await getData(params.genre, session?.user?.email as string)


    return (<>


        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-5 sm:px-0 mt-10 gap-6">
            {data.map((movie) => (
                <div key={movie.id} className=" relative h-60">
                    <img src={movie.imageString} alt='movie' height={500} width={500} className=" rounded-sm absolute w-full h-full object-cover" />
                    <div className=" h-60  relative z-10 transform transition duration-500 hover:scale-125 opacity-0 hover:opacity-100  ">
                        <div className=" flex items-center justify-center bg-gradient-to-b from-transparent via-black/50 to-black z-10 w-full h-full">
                            <img src={movie.imageString} alt="movie" width={800} height={800} className=" absolute w-full h-full -z-10  object-cover rounded-lg" />
                    
                            <MovieCart key={movie.id} age={movie.age} movieId={movie.id} overview={movie.overview} time={movie.duration} title={movie.title} watchListId={movie.WatchLists[0]?.id}
                                watchList={movie.WatchLists.length > 0 ? true : false} youtubeUrl={movie.youtubeString} year={movie.release} />
                        </div>
                    </div>



                </div>
            ))}

        </div>


    </>)
}