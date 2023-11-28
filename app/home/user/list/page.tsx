import { authOptions } from "@/app/ut/auth"
import prisma from "@/lib/db"
import { getServerSession } from "next-auth"
import MovieCart from "@/app/componets/movieCart"


async function getData(userId: string) {

    const data = await prisma.watchList.findMany({
        where: {
            userId: userId
        }
        ,
        select: {
            Movie: {
                select: {
                    title: true,
                    age: true,
                    duration: true,
                    imageString: true,
                    overview: true,
                    release: true,
                    id: true,
                    WatchLists: true,
                    youtubeString: true

                }
            }
        }


    })
    return data
}

export default async function listUser() {
    const session = await getServerSession(authOptions)
    const data = await getData(session?.user?.email as string)
    return (
        <>
        <h1 className=" text-gray-300 text-4xl font-bold underline  mt-10 px-5  sm:p-0 ">
            منتخب شما 

        </h1>
            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-5 sm:px-0 mt-10 gap-6">
                {data.map((movie) => (
                    <div key={movie.Movie?.id} className=" relative h-60">
                        <img src={movie.Movie?.imageString} alt='movie' height={500} width={500} className=" rounded-sm absolute w-full h-full object-cover" />
                        <div className=" h-60  relative z-10 transform transition duration-500 hover:scale-125 opacity-0 hover:opacity-100  ">
                            <div className=" flex items-center justify-center bg-gradient-to-b from-transparent via-black/50 to-black z-10 w-full h-full">
                                <img src={movie.Movie?.imageString} alt="movie" width={800} height={800} className=" absolute w-full h-full -z-10  object-cover rounded-lg" />
                            <h1>{movie.Movie?.title}</h1>
                                <MovieCart key={movie.Movie?.id} age={movie.Movie?.age as number} movieId={movie.Movie?.id as number} overview={movie.Movie?.overview as string} time={movie.Movie?.duration as number} title={movie.Movie?.title as string} watchListId={movie.Movie?.WatchLists[0]?.id as string}
                                    watchList={movie.Movie?.WatchLists.length as number > 0 ? true : false} youtubeUrl={movie.Movie?.youtubeString as string} year={movie.Movie?.release as number} />
                            </div>
                        </div>



                    </div>
                ))}

            </div>

        </>
    )
}