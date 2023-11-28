import prisma from "@/lib/db"
import MovieCart from "./movieCart"
import { getServerSession } from "next-auth"
import { authOptions } from "../ut/auth"


async function getData(userId : string) {
    const data = await prisma.movie.findMany({
        select: {
            imageString: true,
            id: true,
            title: true,
            overview: true,
            WatchLists: {
                where:{
                    userId
                }
            },
            age : true
            ,
            release: true ,
            duration : true,
            youtubeString: true,
        },
        orderBy: {
            createdAt: "desc"
        },
        take: 4
    })
    return data
}


export default async function RecentlyAdded() {
    const session = await getServerSession(authOptions)
    const data = await getData(session?.user?.email as string)

    return (
        <>


            <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 ">
                {data.map((movie) => (

                    <div key={movie.id} className=" relative h-48 ">


                        <img src={movie.imageString} alt="movie" className="rounded-sm absolute w-full h-full object-cover" width={500} height={400} />

                        <div className=" h-60 relative z-10 w-full transform transition duration-500 hover:scale-125 opacity-0 hover:opacity-100">
                            <div className=" bg-gradient-to-b  from-transparent  via-black/50 to-black z-10  w-full h-full rounded-lg flex items-center  justify-center border">
                              
                                <img src={movie.imageString} alt="movie" width={800} height={800} className="absolute w-full h-full -z-10 rounded-lg object-cover" />

                              
                                <MovieCart movieId={movie.id} overview={movie.overview} title={movie.title } watchListId={movie.WatchLists[0]?.id} youtubeUrl={movie.youtubeString} watchList={movie.WatchLists.length >0 ? true : false} key={movie.id} age={movie.age} time={movie.duration} year={movie.release} />
                            
                            </div>
                        </div>

                    </div>
                ))}

            </div>
        </>
    )
}