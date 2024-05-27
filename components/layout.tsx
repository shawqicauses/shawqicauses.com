// DONE REVIEWING: GITHUB COMMIT 1️⃣
import {Fragment, PropsWithChildren} from "react"

const Layout = function Layout({children}: PropsWithChildren) {
  return (
    <Fragment>
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-xl-7 lg:px-8">
          <div className="ring-border-light w-full bg-background ring-1" />
        </div>
      </div>
      <div className="relative flex w-full flex-col">
        <header>Header</header>
        {children}
        <footer>Footer</footer>
      </div>
    </Fragment>
  )
}

export default Layout
