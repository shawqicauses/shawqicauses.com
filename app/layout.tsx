// DONE REVIEWING: GITHUB COMMIT 1️⃣
import type {Metadata} from "next"
import {Poppins} from "next/font/google"
import {PropsWithChildren} from "react"
import "../styles/global.css"
import Providers from "./providers"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

export const metadata: Metadata = {
  title: {
    template: "%s - Shawqi Hatem",
    default: "Shawqi Hatem - Experienced Front-End Developer"
  },
  description:
    "Shawqi Hatem is a skilled front-end developer with over six years of experience in web development. He is proficient in JavaScript, TypeScript, React, Vue, and Next and has successfully delivered numerous projects globally. Explore his portfolio for his expertise in creating stunning, responsive user interfaces and innovative solutions.",
  alternates: {
    types: {
      [`application/${["rss", "xml"].join("+")}`]: `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`
    }
  }
}

const Layout = function Layout({children}: PropsWithChildren) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className={`${poppins.className} flex h-full bg-zinc-50 dark:bg-black`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

export default Layout
