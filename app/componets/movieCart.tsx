"use client"
import { Button } from "@/components/ui/button";
import { Heart, PlayCircle, Clock } from "lucide-react";
import PalyVideo from "./playVideo";
import { useState } from "react";
import { addToLove, delLove } from "./action";
import { usePathname } from "next/navigation";


interface AppProps {
    title: string;
    overview: string;
    movieId: number;
    watchListId: string;
    watchList: boolean;
    youtubeUrl: string
    year: number;
    age: number;
    time: number;

}



export default function MovieCart({ age, time, year, title, overview, movieId, watchListId, watchList, youtubeUrl }: AppProps) {
    const [open, setopen] = useState(false)
    const pathname = usePathname()
    return (
        <>
            <button onClick={() => setopen(true)} className=" -mt-14">
                <PlayCircle className=" h-10 w-10 " />
            </button>
            <div className=" left-5 top-5 absolute z-10">
                {watchList ? (
                    <form action={delLove}>
                        <input type="hidden" name="pathname" value={pathname} />

                        <input type="hidden" name="watchListId" value={watchListId} />
                        <Button>

                            <Heart className=" w-4 h-4  text-white" />
                        </Button>
                    </form>
                ) : (
                    <form action={addToLove}>
                        <input type="hidden" name="movieId" value={movieId} />
                        <input type="hidden" name="pathname" value={pathname} />
                        <Button className=" outline  bg-gray-800" size='icon'>

                            <Heart className=" w-4 h-4 " />
                        </Button>
                    </form>
                )}
            </div>
            <div className="p-5 absolute bottom-0 right-0">
                <h1 className=" font-bold text-lg line-clamp-1">{title}</h1>
                <div className=" flex gap-x-2  items-center">
                    <p className="font-normal text-sm">{year}</p>
                    <p className=" flex font-normal border rounded-xl py-0.5 px-1 border-gray-200 txet-sm "> {age}+</p>
                    <p className="flex font-normal border rounded-xl py-0.5 px-1 border-gray-200 txet-sm"><Clock className="w-3 h-3 my-auto m-1 text-red-800" />{time}</p>

                </div>
                <p className=" line-clamp-1 text-sm text-gray-300   font-light">
                    {overview}
                </p>

            </div>
            <PalyVideo title={title} youtubeUrl={youtubeUrl} key={movieId} overview={overview} state={open} changeState={setopen} age={age} duration={time} release={year} />
        </>
    )
}