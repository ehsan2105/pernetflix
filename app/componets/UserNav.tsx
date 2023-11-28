"use client "
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Avatars from '@/public/avatar.jpg'
import { LoaderIcon } from "lucide-react";
import { signOut } from "next-auth/react";


export default function UserNav() {
    return (<>



  <DropdownMenu>
            <DropdownMenuTrigger asChild>

             <Button variant="ghost" className=" relative h-10 w-10 rounded-sm">
                <Avatar className=" text-white h-10 w-10 rounded-sm">
                    <AvatarImage src={Avatars?.src} className=" rounded-full" />
                    <AvatarFallback className=" rounded-sm">جیمی</AvatarFallback>

                </Avatar>

            </Button> 
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 " align="start" forceMount>
                <DropdownMenuLabel>
                    <div className="flex flex-col space-y-1 ">
                        <p className="text-sm font-medium leading-none"> سام </p>
                        <p className="text-sx leading-none text-muted"> سامی </p>

                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator/>
                <DropdownMenuItem onClick={()=> signOut()}>
                    خروج
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
        
    
    

    </>

    )
}