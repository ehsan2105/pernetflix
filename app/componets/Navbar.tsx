"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Bell, Search } from 'lucide-react';
import UserNav from "./UserNav";
interface linkProps {
    name: string;
    href: string;
}
const links: linkProps[] = [
    { name: 'خانه ', href: '/home' },
    { name: 'تلوزیون', href: '/home/show' },
    { name: "فیلم ", href: '/home/movies' },
    { name: "جدید ترین ها ", href: '/home/recetly' },
    { name: "لیست شما", href: '/home/user/list' },
]

export default function Navbar() {

    const pathname = usePathname()
    return (
        <>

            <div className=" w-full max-w-7xl mx-auto items-center justify-between px-5 sm:px-6 py-5 lg:px-8 flex ">
                <div className=" flex items-center">
                    <Link href={'/home'} className="w-32">
                        <h1 className=" font-extrabold text-3xl  text-purple-900 ">
                            نتفلیکس
                        </h1>
                    </Link>
                    <ul className=" lg:flex gap-x-4 ml-14 hidden">
                        {links.map((link, idx) => (
                            <div key={idx} >
                                {pathname === link.href ? (
                                    <li>
                                        <Link href={link.href} className=" text-purple-600 font-semibold  text-sm">
                                            {link.name}
                                        </Link>
                                    </li>
                                ) : (
                                    <Link href={link.href} className=" hover:text-purple-300" >
                                        {link.name}
                                    </Link>
                                )}
                            </div>
                        ))}

                    </ul>

                </div>
                <div className="flex  items-center gap-x-8 ">
                    <Search className=" w-5 h-5 text-purple-300 cursor-pointer hover:text-purple-600"/>
                    <Bell className=" w-5 h-5  text-purple-300 cursor-pointer hover:text-purple-600"/>
                    <UserNav/>
                </div>

            </div>

        </>
    )
}