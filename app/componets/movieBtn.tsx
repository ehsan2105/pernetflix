"use client"

import { Button } from "@/components/ui/button"
import { InfoIcon, PlayCircle } from "lucide-react"
import { useState } from "react"
import PalyVideo from "./playVideo";

interface promss {
    overview: string;
    youtubeUrl: string;
    id: number;
    aga: number;
    title: string;
    releasData: number;
    duration: number;
}

export default function MovieBtn({ overview, youtubeUrl, id, aga, title, releasData, duration }: promss) {
    const [open, setOpen] = useState(false)
    return (
        <>
            <Button onClick={() => setOpen(true)} className=" text-lg font-medium" >

                پخش
                <PlayCircle className=" mr-2 h-6 w-6  " />

            </Button>
            <Button onClick={() => setOpen(true)} className="text-lg font-medium bg-inherit border-2 border-purple-900 hover:border-none">
                درباره فیلم
                <InfoIcon className="mr-2 h-6 w-6 " />
            </Button>

            <PalyVideo state={open} changeState={setOpen} age={aga} duration={duration} key={id} overview={overview} release={releasData} title={title} youtubeUrl={youtubeUrl} />
        </>
    )
}