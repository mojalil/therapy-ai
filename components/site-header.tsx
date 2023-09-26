"use client"
import Link from "next/link"
import { siteConfig } from "@/config/site"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import NavMenu from "./signup"
import { SessionProvider } from "next-auth/react"


export function SiteHeader() {
  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
            <SessionProvider><NavMenu/></SessionProvider>
            <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
