import { Input } from "@/components/ui/input";
import { Button } from '@/components/ui/button';

import Link from "next/link";


import GithubSingInButton from "@/app/componets/GithubSinginButton";
import GoogleSingInButton from "@/app/componets/GoogleSinginButton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/ut/auth";
import { redirect } from "next/navigation";

export default async function Login (){
    const session = await getServerSession(authOptions)
    if (session){
        return redirect('/home')
    }
    return (

        <div className=" mt-24 rounded bg-black/80 py-10 px-6 md:mt-0 md:max-w-sm md:px-14 ">
                <form method="post" action='/api/auth/signin' >
                    <h1 className=" text-3xl font-semibold text-white ">ورود </h1>
                    <div className=" space-y-4 mt-5 ">
                        <Input name="email" type="email" placeholder="ایمیل" className="bg-[#41414133] placeholder:text-xs placeholder:text-gray-400 w-full inline-block" />
                        <Button className=" w-full " type="submit">واردشدن</Button>
                    </div>
                </form>
                <div>

                    <p className=" text-gray-400 text-sm mt-2 ">
                        اکانت نداری
                        ؟
                        <Link className=" text-white hover:underline" href='/sing-up'>ساختن </Link>
                    </p>
                </div>

                <div className=" flex mt-5">

                    
                    <GoogleSingInButton/>
                    
                    <GithubSingInButton/>

                </div>
            </div>
    )
}