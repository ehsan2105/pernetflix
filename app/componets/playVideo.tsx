import { Dialog, DialogContent, DialogDescription, DialogHeader } from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import { Clock } from "lucide-react";

interface appProps {
    title: string;
    overview: string;
    youtubeUrl: string;
    state: boolean;
    changeState: any;
    age: number;
    duration: number;
    release: number;
}

export default function PalyVideo({ title, age, duration, release, overview, youtubeUrl, state, changeState }: appProps) {
    return (<>

        <Dialog open={state} onOpenChange={() => changeState(!state)}>
            <DialogContent className=" sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>
                        {title}
                    </DialogTitle>
                    <DialogDescription className=" line-clamp-2">
                        {overview}
                    </DialogDescription>
                    <div className=" flex gap-x-2 items-center">
                        <p>{release}</p>
                        <p className="border p-1 py-0.5 border-gray-300 rounded ">{age}+</p>
                        <p className="flex  mx-2">  <Clock className="w-3 h-3 text-red-700 my-auto mx-1" />{duration}</p>

                    </div>
                </DialogHeader>
                <iframe src={youtubeUrl} height={250} className="w-full"></iframe>
            </DialogContent>
        </Dialog>

    </>)
}
