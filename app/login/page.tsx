"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Logo } from "@/components/logo";
import { Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState<"student" | "recruiter">(
    "student"
  );
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-sky-900 to-navy-800">
      <header className="container mx-auto p-4 flex justify-between items-center">
        <Logo />
        <div className="flex gap-[10px]">
          <Link href="../">
            <div className="group">
              <Button
                variant="ghost"
                className="font-medium text-sky-400 hover:text-sky-200  hover:border-white hover:bg-transparent relative overflow-hidden"
              >
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                Home
              </Button>
            </div>
          </Link>

          <Link href="/contact-us">
            <div className="group">
              <Button
                variant="ghost"
                className="font-medium text-sky-400 hover:text-sky-200  hover:border-white hover:bg-transparent relative overflow-hidden"
              >
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                Contact Us
              </Button>
            </div>
          </Link>

          <Link href="/sign-up">
            <div className="group">
              <Button
                variant="ghost"
                className="font-medium text-sky-400 hover:text-sky-200  hover:border-white hover:bg-transparent relative overflow-hidden"
              >
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                Sign Up
              </Button>
            </div>
          </Link>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-md shadow-lg border-sky-700 bg-navy-700">
          <CardHeader className="pb-2">
            <Tabs
              defaultValue="student"
              className="w-full"
              onValueChange={(value) =>
                setActiveTab(value as "student" | "recruiter")
              }
            >
              <TabsList className="grid w-full grid-cols-2 mb-4 bg-navy-800">
                <TabsTrigger
                  value="student"
                  className="data-[state=active]:bg-sky-600 data-[state=active]:text-white hover:text-white"
                >
                  Student
                </TabsTrigger>
                <TabsTrigger
                  value="recruiter"
                  className="data-[state=active]:bg-sky-600 data-[state=active]:text-white hover:text-white"
                >
                  Recruiter
                </TabsTrigger>
              </TabsList>
              <TabsContent value="student">
                <h2 className="text-2xl font-bold text-center text-gray-100">
                  Student Login
                </h2>
                <p className="text-center text-gray-400 mt-1">
                  Access your student account
                </p>
              </TabsContent>
              <TabsContent value="recruiter">
                <h2 className="text-2xl font-bold text-center text-gray-100">
                  Recruiter Login
                </h2>
                <p className="text-center text-gray-400 mt-1">
                  Access your recruiter dashboard
                </p>
              </TabsContent>
            </Tabs>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label
                htmlFor="username"
                className="text-sm font-medium text-gray-300"
              >
                Username
              </label>
              <Input
                id="username"
                placeholder="Enter your username"
                className="w-full bg-navy-800 border-2 border-navy-600 text-gray-300 
             file:hidden cursor-pointer
             hover:border-sky-400 focus:border-sky-400 focus:ring-2 focus:ring-sky-400 
             focus:ring-offset-2 focus:ring-offset-navy-800
             transition-all duration-300 rounded-md"
              />
            </div>
            <div className="space-y-2 ">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-gray-300"
                >
                  Password
                </label>
              </div>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full bg-navy-800 border-2 border-navy-600 text-gray-300 
             file:hidden cursor-pointer
             hover:border-sky-400 focus:border-sky-400 focus:ring-2 focus:ring-sky-400 
             focus:ring-offset-2 focus:ring-offset-navy-800
             transition-all duration-300 rounded-md pr-10"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-sky-400 "
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
            <div className="flex ">
              <div className="ml-auto">
                <Link
                  href="/forgot-password"
                  className="text-xs text-sky-400 hover:text-sky-300"
                >
                  Forgot password?
                </Link>
              </div>
            </div>
            <Button
              className="w-full bg-gradient-to-r border-2 border-white hover:border-sky-400 hover:text-sky-200 from-sky-600 to-green-600 hover:from-sky-700 duration-300 hover:to-green-700 text-white"
              size="lg"
            >
              Login
            </Button>

            {activeTab === "student" && (
              <Button
                className="w-full bg-transparent border-2 border-white hover:border-sky-400 hover:text-sky-200 text-white transition-all duration-300 hover:bg-white/10"
                size="lg"
              >
                Login With Google
              </Button>
            )}
          </CardContent>
          <CardFooter className="flex justify-center">
            <Link href="/guest" className="text-gray-400 hover:text-gray-300">
              Continue as guest
            </Link>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}
