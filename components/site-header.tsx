"use client"
import Link from "next/link"
import { signIn, signOut, useSession } from "next-auth/react";
import { siteConfig } from "@/config/site"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { SignUp } from "@/components/signup"

function AuthButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        {session?.user?.name} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}

export default function NavMenu() {
  return (
    <div>
      <AuthButton />
    </div>);
}

// export function SiteHeader() {
//   return (
//     <header className="bg-background sticky top-0 z-40 w-full border-b">
//       <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
//         <MainNav items={siteConfig.mainNav} />
//         <div className="flex flex-1 items-center justify-end space-x-4">
//             <SignUp />
//             <ThemeToggle />
//         </div>
//       </div>
//     </header>
//   )
// }
