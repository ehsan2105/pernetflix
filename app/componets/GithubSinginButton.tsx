"use client"
import Git from "@/public/github.svg";
import { signIn } from "next-auth/react";
import Image from "next/image";
export default function GithubSingInButton() {
    return (
        <button onClick={() => signIn('github')}>
            <Image alt="icon" src={Git} className="w-10 hover:bg-slate-500 bg-slate-400 mx-2  rounded-full h-10"></Image>
        </button>
    )
}