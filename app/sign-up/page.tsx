"use client";
import { Button } from "@/components/ui/button";
import { Card, CardTitle, CardDescription, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useState } from "react";
import { signUp } from "@/lib/auth/auth-client"
import { useRouter } from "next/navigation";

export default function SignUp() {
    const router = useRouter();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    // checker for minimum password length
    const [isDirty, setIsDirty] = useState(false);
    const isMinPassCheck = isDirty && password.length > 0 && password.length <= 8;

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        setError("");
        setLoading(true);

        try {
            const result = await signUp.email({
                name,
                email,
                password,
            });

            if(result.error) {
                setError(result.error.message ?? "Error");
            } else {
                router.push("/dashboard");
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
                    <CardTitle>Sign Up</CardTitle>
                    <CardDescription>Make an Account to start Organizing!</CardDescription>
                </CardHeader>
                <form onSubmit={handleSubmit}>
                    <CardContent>
                        { error && (
                            <div className="mb-4 border rounded-sm p-2 text-center bg-destructive opacity-75 text-white font-medium">{error}</div>
                        )}
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
                        <Button type="submit" disabled={loading}>{loading ? "Creating an Account" : "Sign Up"}</Button>
                        <p>Already have an account? <Link href="/sign-in" className="text-primary hover:underline">Sign In</Link></p>
                    </CardFooter>
                </form>
            </Card>
        </div>
    );
}