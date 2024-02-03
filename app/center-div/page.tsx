import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Center the Div',
  description: 'Centring the div using tailwind and next.js',
}

export default function Center() {
  return (
    <main className="flex bg-secondary flex-col h-full justify-center items-center">
      <h1 className="text-center text-secondary-foreground text-2xl sm:text-4xl font-mono font-bold">
        The Div is Centered.
      </h1>
    </main>
  )
}
