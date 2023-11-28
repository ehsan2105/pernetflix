import Image from "next/image";
import { ReactNode } from "react";
import backSRC from '@/public/backAuth.jpg'


export default function AuthLayout({children}:{children:ReactNode}){
   return (
    <>
    <div className=" relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
        <Image src={backSRC}  alt="back Image"  className=" hidden sm:flex  sm:object-cover -z-10 brightness-50"  priority fill />
        
        {children}
        <h1 className=" absolute left-4 top-4 object-contain md:left-10 md:top-10 text-purple-400  font-black text-4xl " >پرشین فیلم</h1>
    </div>
    </>
   ) 
}