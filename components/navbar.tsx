"use client";

import { Briefcase, Ghost } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel } from "./ui/dropdown-menu";
import { DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Avatar, AvatarFallback } from "./ui/avatar";
import SignOutButton from "./sign-out-btn";
import { useSession } from "@/lib/auth/auth-client";
import { useRouter } from "next/navigation";

export default function Navbar() {
    const { data:session } = useSession();
    const router = useRouter();
    return (
        <nav className="border-b border-gray-200 bg-white">
            <div className="flex container mx-auto h-16 items-center px-4 justify-between">
                <Link className="flex gap-2 font-semibold text-xl items-center text-primary" href="/   ">
                    <Briefcase />
                    Job Organizer
                </Link>
                <div className="flex items-center gap-4">
                    {session?.user ? (<>
                        <Link href="/dashboard">Dashboard</Link>
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <Button variant="ghost">
                                    <Avatar>
                                        <AvatarFallback className="bg-primary text-white">
                                            {session.user.name[0].toUpperCase()}
                                        </AvatarFallback>
                                    </Avatar>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuLabel>
                                    <div>
                                        <p>{session.user.name}</p>
                                        <p>{session.user.email}</p>
                                    </div>
                                </DropdownMenuLabel>
                                <SignOutButton />
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </>) : ( <>
                        <Link href="/sign-up">
                        <Button className="bg-primary hover:bg-primary/90">Sign Up for free</Button>
                    </Link>
                    <Link href="/sign-in">
                        <Button variant="ghost" className="text-gray-700 hover:text-black">Log in</Button>
                    </Link>
                    </>)}
                </div>
            </div>
        </nav>
    );
}