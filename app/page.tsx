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

      <main className="flex-1 flex items-center justify-center p-4">
        
      </main>
    </div>
  );
}
