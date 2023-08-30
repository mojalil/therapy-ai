import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Therapy AI
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
        Therapy AI is a mental health and well-being app designed to provide users with a simulated therapy experience. Through our platform, users can book and take appointments with AI-driven therapy agents that replicate the experience of a real therapist.
        </p>
      </div>
    </section>
  )
}
