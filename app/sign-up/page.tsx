"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [activeTab, setActiveTab] = useState<"student" | "recruiter">(
    "student"
  );
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
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

          <Link href="/login">
            <div className="group">
              <Button
                variant="ghost"
                className="font-medium text-sky-400 hover:text-sky-200  hover:border-white hover:bg-transparent relative overflow-hidden"
              >
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                Login
              </Button>
            </div>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-md shadow-lg border-sky-700 bg-navy-700">
          {/* User Type Toggle */}
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
                  Student Sign Up
                </h2>
                <p className="text-center text-gray-400 mt-1">
                  create your student account
                </p>
              </TabsContent>
              <TabsContent value="recruiter">
                <h2 className="text-2xl font-bold text-center text-gray-100">
                  Recruiter Sign Up
                </h2>
                <p className="text-center text-gray-400 mt-1">
                  create your recruiter account
                </p>
              </TabsContent>
            </Tabs>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-sm font-medium text-gray-300"
              >
                Full Name
              </label>
              <Input
                id="name"
                placeholder="Enter your full name"
                className="w-full bg-navy-800 border-2 border-navy-600 text-gray-300 
             file:hidden cursor-pointer
             hover:border-sky-400 focus:border-sky-400 focus:ring-2 focus:ring-sky-400 
             focus:ring-offset-2 focus:ring-offset-navy-800
             transition-all duration-300 rounded-md"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-300"
              >
                Email
              </label>
              <Input
                id="email"
                placeholder="Enter your email"
                className="w-full bg-navy-800 border-2 border-navy-600 text-gray-300 
             file:hidden cursor-pointer
             hover:border-sky-400 focus:border-sky-400 focus:ring-2 focus:ring-sky-400 
             focus:ring-offset-2 focus:ring-offset-navy-800
             transition-all duration-300 rounded-md"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="phoneNumber"
                className="text-sm font-medium text-gray-300"
              >
                Phone Number
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  +91
                </span>
                <Input
                  id="phoneNumber"
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full bg-navy-800 border-2 border-navy-600 text-gray-300 
             file:hidden cursor-pointer
             hover:border-sky-400 focus:border-sky-400 focus:ring-2 focus:ring-sky-400 
             focus:ring-offset-2 focus:ring-offset-navy-800
             transition-all duration-300 rounded-md placeholder:text-gray-500 pl-12"
                  pattern="[0-9]{10}"
                  inputMode="numeric"
                  onKeyDown={(e) => {
                    if (
                      !/[0-9]|Backspace|Delete|ArrowLeft|ArrowRight/.test(e.key)
                    ) {
                      e.preventDefault();
                    }
                  }}
                  maxLength={10}
                />
              </div>
            </div>
            <div className="space-y-2">
              <label
                htmlFor="resume"
                className="text-sm font-medium text-gray-300"
              >
                Upload Resume (PDF/DOC)
              </label>
              <div className="relative group">
                <Input
                  id="resume"
                  type="file"
                  className="w-full bg-navy-800 border-2 border-navy-600 text-gray-300 
             file:hidden cursor-pointer
             hover:border-sky-400 focus:border-sky-400 focus:ring-2 focus:ring-sky-400 
             focus:ring-offset-2 focus:ring-offset-navy-800
             transition-all duration-300 rounded-md"
                  accept=".pdf,.doc"
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Supported formats: PDF, DOC (Max 5MB)
              </p>
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
             transition-all duration-300 rounded-md"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-sky-400"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
            <div className="space-y-2 ">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-gray-300"
                >
                  Confirm Password
                </label>
              </div>
              <div className="relative">
                <Input
                  id="confPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Enter your confirm password"
                  className="w-full bg-navy-800 border-2 border-navy-600 text-gray-300 
             file:hidden cursor-pointer
             hover:border-sky-400 focus:border-sky-400 focus:ring-2 focus:ring-sky-400 
             focus:ring-offset-2 focus:ring-offset-navy-800
             transition-all duration-300 rounded-md"
                />
                <button
                  type="button"
                  onClick={toggleConfirmPasswordVisibility}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-sky-400"
                  aria-label={
                    showConfirmPassword ? "Hide password" : "Show password"
                  }
                >
                  {showConfirmPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>
            </div>
            <Button
              className="w-full bg-gradient-to-r border-2 border-white hover:border-sky-400 hover:text-sky-200 from-sky-600 to-green-600 hover:from-sky-700 duration-300 hover:to-green-700 text-white"
              size="lg"
            >
              Sign Up
            </Button>
            {activeTab === "student" && (
              <Button
                className="w-full bg-transparent border-2 border-white hover:border-sky-400 hover:text-sky-200 text-white transition-all duration-300 hover:bg-white/10"
                size="lg"
              >
                Sign Up With Google
              </Button>
            )}
          </CardContent>
          <CardFooter className="flex justify-center">
            <p className="text-gray-400">
              Already have an account?{" "}
              <Link href="../" className="text-cyan-400 hover:underline">
                Login
              </Link>
            </p>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}
