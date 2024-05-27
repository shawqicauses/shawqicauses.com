// DONE REVIEWING: GITHUB COMMIT 1️⃣

import {ComponentPropsWithoutRef} from "react"

const DesktopNavigation = function DesktopNavigation(props: ComponentPropsWithoutRef<"nav">) {
  return (
    <nav {...props}>
      <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
        Desktop Navigation
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
