"use client";

import { Button } from "@/components/ui/button";
import { Card, CardTitle, CardDescription, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signIn } from "@/lib/auth/auth-client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignIn() {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        setError("");
        setLoading(true);

        try {
            const result = await signIn.email({
                email,
                password
            })

            if(result.error) {
                setError(result.error.message ?? "Something went wrong.");
            } else {
                router.push("./dashboard");
            }
        } catch(err) {
            setError("An unexpected error occured.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="flex min-h-[calc(100vh-64px)] justify-center items-center p-4">
            <Card>
                <CardHeader>
                    <CardTitle>Sign In</CardTitle>
                    <CardDescription>Welcome Back!</CardDescription>
                </CardHeader>
                <form onSubmit={handleSubmit}>
                    <CardContent>
                        {
                        error && (<div className="mb-4 border rounded-sm p-2 text-center bg-destructive opacity-75 text-white font-medium">{error}</div>)
                        }
                        <div>
                            <Label htmlFor="email">Email:</Label>
                            <Input id="email" type="email" placeholder="JohnDoe@example.com" value={email} required
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}></Input>
                        </div>
                        <div>
                            <Label htmlFor="password">Password:</Label>
                            <Input id="password" type="password" placeholder="********" minLength={8} value={password} required
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}></Input>
                        </div>
                    </CardContent>
                    <CardFooter className="flex flex-col">
                        <Button type="submit" disabled={loading}>{loading ? "Logging In" : "Sign In"}</Button>
                        <p>Don't have an account? <Link href="/sign-up" className="text-primary hover:underline">Sign Up</Link></p>
                    </CardFooter>
                </form>
            </Card>
        </div>
    );
}