"use client";

import Image from 'next/image'
import { useState } from "react"
import { Button } from '@/components/ui/button'

export default function ImageTab() {
    const [activeTab, setActiveTab] = useState("organize");

    return (
        <section className="border-t bg-white py-16">
          <div className='container mx-auto px-4'>
            <div className="mx-auto max-w-6xl">
              <div className='flex justify-center gap-2 mb-8'>
                <Button className={`rounded-lg bg-gray-200 text-primary font-medium ${activeTab === "organize" ? "bg-primary text-white" : "bg-white text-primary"}`} onClick={() => setActiveTab("organize")}>Organize Applications</Button>
                <Button className={`rounded-lg bg-gray-200 text-primary font-medium ${activeTab === "hired" ? "bg-primary text-white" : "bg-white text-primary"}`} onClick={() => setActiveTab("hired")}>Get Hired</Button>
                <Button className={`rounded-lg bg-gray-200 text-primary font-medium ${activeTab === "boards" ? "bg-primary text-white" : "bg-white text-primary"}`} onClick={() => setActiveTab("boards")}>Manage Boards</Button>
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
    );
}