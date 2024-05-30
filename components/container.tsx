// DONE REVIEWING: GITHUB COMMIT 1️⃣

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

const Container = function Container() {
  return <div>Container</div>
}

export default Container
