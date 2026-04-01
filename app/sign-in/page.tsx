import { Button } from "@/components/ui/button";
import { Card, CardTitle, CardDescription, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function SignIn() {
    return (
        <div className="flex min-h-[calc(100vh-64px)] justify-center items-center p-4">
            <Card>
                <CardHeader>
                    <CardTitle>Sign In</CardTitle>
                    <CardDescription>Welcome Back!</CardDescription>
                </CardHeader>
                <form>
                    <CardContent>
                        <div>
                            <Label htmlFor="email">Email:</Label>
                            <Input id="email" type="email" placeholder="JohnDoe@example.com" required></Input>
                        </div>
                        <div>
                            <Label htmlFor="password">Password:</Label>
                            <Input id="password" type="password" placeholder="********" minLength={8} required></Input>
                        </div>
                    </CardContent>
                    <CardFooter className="flex flex-col">
                        <Button type="submit">Sign In</Button>
                        <p>Don't have an account? <Link href="/sign-in" className="text-primary hover:underline">Sign Up</Link></p>
                    </CardFooter>
                </form>
            </Card>
        </div>
    );
}