// DONE REVIEWING: GITHUB COMMIT - 01

import Image from "next/image"
import Link from "next/link"
import {ComponentPropsWithoutRef, ComponentType, Fragment} from "react"
import photo from "../public/assets/images/thamanyah-avatar.webp"
import Container from "../components/container"
import Card from "../components/card"
import {GitHubIcon, InstagramIcon, XIcon} from "../components/social-icons"
import {cn} from "../lib/utils"

const socials = [
  {
    id: 0,
    href: "https://github.com/shawqicauses",
    label: "Follow on GitHub",
    icon: GitHubIcon
  },
  {
    id: 1,
    href: "https://x.com/shawqicauses",
    label: "Follow on X",
    icon: XIcon
  },
  {
    id: 2,
    href: "https://instagram.com/shawqicauses",
    label: "Follow on Instagram",
    icon: InstagramIcon
  }
]

const Social = function Social({
  icon: Icon,
  ...props
}: ComponentPropsWithoutRef<typeof Link> & {
  icon: ComponentType<{className?: string}>
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="shc-transition h-6 w-6 fill-muted-foreground group-hover:fill-primary" />
    </Link>
  )
}

const Photos = function Photos() {
  const rotations = ["rotate-2", "-rotate-2", "rotate-2", "rotate-2", "-rotate-2"]
  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[photo, photo, photo, photo, photo].map((element, index) => (
          <div
            key={index}
            className={cn(
              "relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-muted sm:w-72 sm:rounded-xl-2",
              rotations[index % rotations.length]
            )}>
            <Image
              src={element}
              alt="Shawqi AI Character"
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

const articles = [
  {
    id: 0,
    slug: "my-article",
    title: "Introducing Some-thing: High performance web animations",
    description:
      "When you are building a website for a company as ambitious as mine, you need to make an impression. I wanted people to visit our website and see animations that looked more realistic than reality itself."
  }
]

const Article = function Article({
  article
}: {
  article: {
    slug: string
    title: string
    description: string
  }
}) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>{article.title}</Card.Title>
      <Card.Eyebrow as="time" decorate>
        September 17, 2024
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.CTA>Read article</Card.CTA>
    </Card>
  )
}

const Page = async function Page() {
  return (
    <Fragment>
      <Container className="mt-9">
        <div className="max-w-xl-2">
          <h1 className="text-xl-4 font-bold tracking-tight text-foreground sm:text-xl-5">
            Front-End Web Developer, Instructor, and Live Streamer.
          </h1>
          <p className="mt-6 text-base text-muted-foreground">
            I am Shawqi, a front-end web developer, instructor, and live streamer based in Cape Town
            city. I develop solutions and technologies that empower regular people to explore space
            on their own terms.
          </p>
          <div className="mt-6 flex gap-6">
            {socials.map((social) => (
              <Social
                key={social.id}
                href={social.href}
                aria-label={social.label}
                icon={social.icon}
              />
            ))}
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="my-24 md:my-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.id} article={article} />
            ))}
          </div>
        </div>
      </Container>
    </Fragment>
  )
}

export default Page
