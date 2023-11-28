"use client"

import Google from "@/public/google.svg";
import { signIn } from "next-auth/react";
import Image from "next/image";
export default function GoogleSingInButton() {
    return (
        <button onClick={() => signIn('google')}>
            <Image alt="icon" onClick={() => signIn('google')} src={Google} className="w-10 hover:bg-slate-500  mx-2  rounded-full h-10"></Image>
        </button>
    )
}