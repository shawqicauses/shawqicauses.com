// DONE REVIEWING: GITHUB COMMIT 3️⃣

import {ComponentPropsWithoutRef, ElementRef, forwardRef} from "react"
import {cn} from "../lib/utils"

export const ContainerOuter = forwardRef<ElementRef<"div">, ComponentPropsWithoutRef<"div">>(
  ({className, children, ...props}, ref) => {
    return (
      <div ref={ref} className={cn("sm:px-8", className)} {...props}>
        <div className="mx-auto w-full max-w-xl-7 lg:px-8">{children}</div>
      </div>
    )
  }
)

ContainerOuter.displayName = "ContainerOuter"

const ContainerInner = forwardRef<ElementRef<"div">, ComponentPropsWithoutRef<"div">>(
  ({className, children, ...props}, ref) => {
    return (
      <div ref={ref} className={cn("relative px-4 sm:px-8 lg:px-12", className)} {...props}>
        <div className="mx-auto max-w-xl-2 lg:max-w-xl-5">{children}</div>
      </div>
    )
  }
)

ContainerInner.displayName = "ContainerInner"

const Container = forwardRef<
  ElementRef<typeof ContainerOuter>,
  ComponentPropsWithoutRef<typeof ContainerOuter>
>(({children, ...props}, ref) => {
  return (
    <ContainerOuter ref={ref} {...props}>
      <ContainerInner>{children}</ContainerInner>
    </ContainerOuter>
  )
})

Container.displayName = "Container"

export default Container
