"use client"

// DONE REVIEWING: GITHUB COMMIT 5️⃣

import {
  Popover,
  PopoverButton,
  PopoverOverlay,
  PopoverPanel,
  Transition,
  TransitionChild
} from "@headlessui/react"
import Link from "next/link"
import {usePathname} from "next/navigation"
import {ComponentPropsWithoutRef, PropsWithChildren} from "react"
import {cn} from "../lib/utils"

interface NavigationItemProps extends PropsWithChildren {
  href: string
}

const navigations = [
  {name: "About", href: "/about"},
  {name: "Articles", href: "/articles"},
  {name: "Projects", href: "/projects"},
  {name: "Speakings", href: "/speakings"},
  {name: "Uses", href: "/uses"}
]

// MOBILE NAVIGATION
const ChevronDownIcon = function ChevronDownIcon(props: ComponentPropsWithoutRef<"svg">) {
  return (
    <svg viewBox="0 0 8 6" aria-hidden="true" {...props}>
      <path
        fill="none"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M1.75 1.75 4 4.25l2.25-2.5"
      />
    </svg>
  )
}

const CloseIcon = function CloseIcon(props: ComponentPropsWithoutRef<"svg">) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
      />
    </svg>
  )
}

const MobileNavigationItem = function MobileNavigationItem({href, children}: NavigationItemProps) {
  return (
    <li>
      <PopoverButton as={Link} href={href} className="block py-2">
        {children}
      </PopoverButton>
    </li>
  )
}

const MobileNavigation = function MobileNavigation(
  props: ComponentPropsWithoutRef<typeof Popover>
) {
  return (
    <Popover {...props}>
      <PopoverButton className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20">
        Menu
        <ChevronDownIcon className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400" />
      </PopoverButton>
      <Transition>
        <TransitionChild
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <PopoverOverlay className="fixed inset-0 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80" />
        </TransitionChild>
        <TransitionChild
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95">
          <PopoverPanel
            focus
            className="fixed inset-x-4 top-8 z-50 origin-top rounded-xl-3 bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800">
            <div className="flex flex-row-reverse items-center justify-between">
              <PopoverButton aria-label="Close Menu" className="-m-1 p-1">
                <CloseIcon className="h-6 w-6 text-zinc-500 dark:text-zinc-400" />
              </PopoverButton>
              <h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">Navigation</h2>
            </div>
            <nav className="mt-6">
              <ul className="-my-2 divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
                {navigations.map((element) => (
                  <MobileNavigationItem key={element.href} href={element.href}>
                    {element.name}
                  </MobileNavigationItem>
                ))}
              </ul>
            </nav>
          </PopoverPanel>
        </TransitionChild>
      </Transition>
    </Popover>
  )
}

// DESKTOP NAVIGATION

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
      <MobileNavigation />
    </header>
  )
}

export default Header
