import { Badge } from '@/components/badge'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex bg-background flex-col min-h-screen items-center">
      <section className="flex flex-1 flex-col gap-4 justify-start p-4 items-start w-full md:w-auto md:justify-center">
        <h1 className="text-foreground text-4xl font-mono font-bold">Krinesh Patel</h1>
        <p className="font-mono text-secondary-foreground text-xl font-medium">
          Full Stack Developer
        </p>
        <p className="max-w-xl text-pretty font-mono text-secondary-foreground/80">
          I have successfully completed all three{' '}
          <span className="text-foreground cursor-pointer underline transition-all hover:underline-offset-2">
            <Link href="https://inxtest.netlify.app/">assignments</Link>
          </span>{' '}
          with fully responsive design. I took the liberty to introduce a custom dark and light mode
          inspired by Daisy UI. Additionally, I added a floating navbar that hides on mouse leave
          and is initially hidden for the{' '}
          <span className="text-foreground cursor-pointer underline transition-all hover:underline-offset-2">
            <Link href="/center-div">Center the Div</Link>
          </span>{' '}
          assignment. The theme is entirely custom-made without using any component framework. I
          have utilized the react to make reusable components. You can find the code on{' '}
          <span>
            <a
              href="https://github.com/pkrinesh/inxtest-assignment"
              className="text-foreground cursor-pointer underline transition-all hover:underline-offset-2"
            >
              Github
            </a>
          </span>
          .
        </p>
        <div>
          <div className="flex gap-2 mt-2">
            {['React', 'Next.js', 'Typescript', 'Tailwindcss'].map((item) => {
              return <Badge key={item}>{item}</Badge>
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
