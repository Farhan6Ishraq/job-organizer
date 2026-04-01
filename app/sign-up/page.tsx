"use client";
import { Button } from "@/components/ui/button";
import { Card, CardTitle, CardDescription, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useState } from "react";

export default function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // checker for minimum password length
    const [isDirty, setIsDirty] = useState(false);
    const isMinPassCheck = isDirty && password.length > 0 && password.length <= 8;

    return (
        <div className="flex min-h-[calc(100vh-64px)] justify-center items-center p-4">
            <Card>
                <CardHeader>
                    <CardTitle>Sign Up</CardTitle>
                    <CardDescription>Make an Account to start Organizing!</CardDescription>
                </CardHeader>
                <form>
                    <CardContent>
                        <div>
                            <Label htmlFor="name">Name:</Label>
                            <Input id="name" value={name} type="text" placeholder="John Doe" onChange={(e) => {
                                setName(e.target.value)
                            }} required></Input>
                        </div>
                        <div>
                            <Label htmlFor="email">Email:</Label>
                            <Input id="email" value={email} type="email" placeholder="JohnDoe@example.com" onChange={(e) => {
                                setEmail(e.target.value)
                            }} required></Input>
                        </div>
                        <div>
                            <Label htmlFor="password">Password:</Label>
                            <Input id="password" value={password} type="password" placeholder="Enter at least 8 characters.." onChange={(e) => {
                                setPassword(e.target.value);
                                setIsDirty(true);
                            }}
                            className={`${isMinPassCheck ? "focus-visible:ring-red-500" : "border-gray-200"}`}
                            minLength={8} required></Input>
                        </div>
                    </CardContent>
                    <CardFooter className="flex flex-col">
                        <Button type="submit">Sign Up</Button>
                        <p>Already have an account? <Link href="/sign-in" className="text-primary hover:underline">Sign In</Link></p>
                    </CardFooter>
                </form>
            </Card>
        </div>
    );
}