"use client"

// DONE REVIEWING: GITHUB COMMIT 3️⃣

import Link from "next/link"
import {usePathname} from "next/navigation"
import {ComponentPropsWithoutRef, PropsWithChildren} from "react"
import {cn} from "../lib/utils"

interface NavigationItemProps extends PropsWithChildren {
  href: string
}

const NavigationItem = function NavigationItem({href, children}: NavigationItemProps) {
  const isActive = usePathname() === href
  return (
    <li>
      <Link
        href={href}
        className={cn(
          "relative block px-3 py-2 transition",
          isActive ? "text-primary" : "hover:text-primary-hover"
        )}>
        {children}
        {isActive && (
          <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-red-500/0 via-red-500/40 to-red-500/0 dark:from-red-400/0 dark:via-red-400/40 dark:to-red-400/0" />
        )}
      </Link>
    </li>
  )
}

const navigations = [
  {name: "About", href: "/about"},
  {name: "Articles", href: "/articles"},
  {name: "Projects", href: "/projects"},
  {name: "Speakings", href: "/speakings"},
  {name: "Uses", href: "/uses"}
]

const DesktopNavigation = function DesktopNavigation(props: ComponentPropsWithoutRef<"nav">) {
  return (
    <nav {...props}>
      <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
        {navigations.map((element) => (
          <NavigationItem key={element.href} href={element.href}>
            {element.name}
          </NavigationItem>
        ))}
      </ul>
    </nav>
  )
}

const Header = function Header() {
  return (
    <header>
      <DesktopNavigation />
    </header>
  )
}

export default Header
