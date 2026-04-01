"use client";
import { useState } from "react"
import { Button } from '@/components/ui/button'
import { ArrowRight } from "lucide-react"
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  const [activeTab, setActiveTab] = useState("organize");
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-1">
        <section className="container px-4 py-32 mx-auto">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-black text-6xl mb-4 font-bold">A better way to track your job application.</h1>
            <p className="text-muted-foreground mb-10 text-xl">Capture, organize, and manage your job search in one place.</p>
            <div className="flex flex-col gap-4 items-center">
              <Link href="/sign-up">
                <Button size="lg" className="text-lg h-12 px-8 font-medium">Sign Up for free <ArrowRight className="ml-2" />
                </Button>
              </Link>              
              <p className="text-sm text-muted-foreground">Free forever</p>
            </div>
          </div>
        </section>
        <section className="border-t bg-white py-16">
          <div className='container mx-auto px-4'>
            <div className="mx-auto max-w-6xl">
              <div className='flex justify-center gap-2 mb-8'>
                <Button onClick={() => setActiveTab("organize")}>Organize Applications</Button>
                <Button onClick={() => setActiveTab("hired")}>Get Hired</Button>
                <Button onClick={() => setActiveTab("boards")}>Manage Boards</Button>
              </div>
              <div className='relative mx-auto max-w-5xl overflow-hidden rounded-lg border border-gray-200 shadow-lg'>
                {activeTab === "organize" && (
                  <Image src="/hero-images/hero1.png" alt="Organize Applications" width={1200} height={800}/>
                )}

                {activeTab == "hired" && (
                  <Image src="/hero-images/hero2.png" alt="Get Hired" width={1200} height={800}/>
                )}

                {(activeTab == "boards" && <Image src="/hero-images/hero3.png" alt="Manage Boards" width={1200} height={800}/>)}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
