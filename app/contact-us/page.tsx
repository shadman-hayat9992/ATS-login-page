"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Logo } from "@/components/logo";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
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
        <div className="container max-w-5xl mx-0 px-0 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Company Information Section */}
          <div className="space-y-6 text-gray-300">
            <h2 className="text-3xl font-bold text-gray-100">Get in Touch</h2>

            <div className="space-y-4">
              <div className="p-6 bg-navy-700/50 rounded-lg">
                <h3 className="text-sky-400 font-semibold mb-2">📍 Location</h3>
                <p className="text-sm">
                  Near Sardar Kirana Store
                  <br />
                  kolsatal, Kamptee
                  <br />
                  441002, Nagpur, India
                </p>
              </div>

              <div className="p-6 bg-navy-700/50 rounded-lg">
                <h3 className="text-sky-400 font-semibold mb-2">📞 Contact</h3>
                <p className="text-sm">
                  +91 8007839942
                  <br />
                  shadmanhayat9992@gmail.com
                </p>
              </div>

              <div className="p-6 bg-navy-700/50 rounded-lg">
                <h3 className="text-sky-400 font-semibold mb-2">⏰ Hours</h3>
                <p className="text-sm">
                  Mon-Fri: 9AM - 5PM
                  <br />
                  Sat-Sun: Closed
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <Card className="shadow-lg border-sky-700 bg-navy-700 h-fit">
            <CardHeader className="pb-2">
              <h2 className="text-2xl font-bold text-center text-gray-100">
                Send Us a Message
              </h2>
            </CardHeader>

            <CardContent className="space-y-4">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-gray-300"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Enter your name"
                    className="w-full bg-navy-800 border-2 border-navy-600 text-gray-300 
             file:hidden cursor-pointer
             hover:border-sky-400 focus:border-sky-400 focus:ring-2 focus:ring-sky-400 
             focus:ring-offset-2 focus:ring-offset-navy-800
             transition-all duration-300 rounded-md pr-10"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
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
             transition-all duration-300 rounded-md pr-10 pl-12"
                      pattern="[0-9]{10}"
                      inputMode="numeric"
                      onKeyDown={(e) => {
                        if (
                          !/[0-9]|Backspace|Delete|ArrowLeft|ArrowRight/.test(
                            e.key
                          )
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
                    htmlFor="email"
                    className="text-sm font-medium text-gray-300"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-navy-800 border-2 border-navy-600 text-gray-300 
             file:hidden cursor-pointer
             hover:border-sky-400 focus:border-sky-400 focus:ring-2 focus:ring-sky-400 
             focus:ring-offset-2 focus:ring-offset-navy-800
             transition-all duration-300 rounded-md pr-10"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-gray-300"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Enter your message"
                    className="w-full bg-navy-800 border-2 border-navy-600 text-gray-300 
             file:hidden cursor-pointer
             hover:border-sky-400 focus:border-sky-400 focus:ring-2 focus:ring-sky-400 
             focus:ring-offset-2 focus:ring-offset-navy-800
             transition-all duration-300 rounded-md pr-10 min-h-[120px]"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r border-2 border-white hover:border-sky-400 hover:text-sky-200 from-sky-600 to-green-600 hover:from-sky-700 duration-300 hover:to-green-700 text-white"
                  size="lg"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
