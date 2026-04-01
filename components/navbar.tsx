import { Briefcase, Ghost } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button"

export default function Navbar() {
    return (
        <nav className="border-b border-gray-200 bg-white">
            <div className="flex container mx-auto h-16 items-center px-4 justify-between">
                <Link className="flex gap-2 font-semibold text-xl items-center text-primary" href="/   ">
                    <Briefcase />
                    Job Organizer
                </Link>
                <div className="flex items-center gap-4">
                    <Link href="/sign-up">
                        <Button className="bg-primary hover:bg-primary/90">Sign Up for free</Button>
                    </Link>
                    <Link href="/sign-in">
                        <Button variant="ghost" className="text-gray-700 hover:text-black">Log in</Button>
                    </Link>
                </div>
            </div>
        </nav>
    );
}