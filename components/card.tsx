// DONE REVIEWING: GITHUB COMMIT
import Link from "next/link"
import {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  ElementType,
  Fragment,
  PropsWithChildren
} from "react"
import {cn} from "../lib/utils"

const ChevronRightIcon = function ChevronRightIcon(props: ComponentPropsWithoutRef<"svg">) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" fill="none" {...props}>
      <path
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 5.75 9.25 8l-2.5 2.25"
      />
    </svg>
  )
}

const Card = function Card<T extends ElementType = "div">({
  as,
  className,
  children
}: Omit<ComponentPropsWithoutRef<T>, "as" | "className"> & {
  as?: T
  className?: string
}) {
  let Component = as ?? "div"
  return (
    <Component className={cn("group relative flex flex-col items-start", className)}>
      {children}
    </Component>
  )
}

Card.Link = function CardLink({children, ...props}: ComponentPropsWithoutRef<typeof Link>) {
  return (
    <Fragment>
      <div className="shc-transition absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-muted opacity-0 group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-xl-2" />
      <Link {...props}>
        <div className="absolute -inset-x-4 -inset-y-6 sm:-inset-x-6 sm:rounded-xl-2" />
        <span className="relative z-20">{children}</span>
      </Link>
    </Fragment>
  )
}

Card.Title = function CardTitle<T extends ElementType = "h2">({
  as,
  href,
  children
}: Omit<ComponentPropsWithoutRef<T>, "as" | "href"> & {
  as?: T
  href?: string
}) {
  const Component = as ?? "h2"
  return (
    <Component className="text-base font-semi-bold tracking-tight text-foreground">
      {href ? <Card.Link href={href}>{children}</Card.Link> : children}
    </Component>
  )
}

Card.Description = function Description({children}: PropsWithChildren) {
  return <p className="relative z-10 mt-2 text-sm text-muted-foreground">{children}</p>
}

Card.CTA = function CardCTA({children}: PropsWithChildren) {
  return (
    <div
      aria-hidden="true"
      className="relative z-10 mt-4 flex items-center text-sm font-medium text-primary">
      {children}
      <ChevronRightIcon className="mt-1 h-4 w-4 stroke-current" />
    </div>
  )
}

Card.Eyebrow = function CardEyebrow<T extends ElementType = "p">({
  as,
  className,
  decorate = false,
  children,
  ...props
}: Omit<ComponentPropsWithRef<T>, "as" | "decorate"> & {as?: T; decorate?: boolean}) {
  const Component = as ?? "p"
  return (
    <Component
      className={cn(
        "relative z-10 order-first mb-3 flex items-center text-sm text-muted-foreground",
        decorate && "pl-3.5"
      )}
      {...props}>
      {decorate && (
        <span aria-hidden="true" className="absolute inset-y-0 left-0 flex items-center">
          <span className="h-4 w-0.5 rounded-full bg-muted" />
        </span>
      )}
      {children}
    </Component>
  )
}

export default Card
