import { Metadata } from "next"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Login | BeliBeli.com",
  description: "Login to your BeliBeli.com account",
}

export default function LoginPage() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-screen py-12">
      {/* <h1 className="font-bold text-xl mb-4">
         JUFUREH
        </h1> */}
        <img src="./Jufureh/logo-jfr.png" alt="Jufureh Logo" />
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Login</CardTitle>
          <CardDescription>Enter your email and password to login to your account</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Email</label>
            <Input id="email" type="email" placeholder="m@example.com" />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Password</label>
            <Input id="password" type="password" />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button className="w-full">Login</Button>
          <div className="text-sm text-center text-muted-foreground">
            Don't have an account? <Link href="/signup" className="underline">Sign up</Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

