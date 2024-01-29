import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Table',
  description: 'Creating Table layout',
}

export default function Table() {
  return (
    <main className="flex bg-background flex-col min-h-screen p-4 pt-8 md:p-[50px]">
      <div className="grid grid-cols-3 h-full gap-x-4 gap-y-8 md:gap-[50px]">
        <div className="relative border border-foreground/15 h-20 p-2 rounded bg-card/20 text-card-foreground">
          <Tooltip>Tooltip 1</Tooltip>
          Header 1
        </div>
        <div className="relative border border-foreground/15 h-20 p-2 rounded bg-card/20 text-card-foreground">
          <Tooltip>Tooltip 2</Tooltip>
          Header 2
        </div>
        <div className="relative border border-foreground/15 h-20 p-2 rounded bg-card/20 text-card-foreground">
          <Tooltip>Tooltip 3</Tooltip>
          Header 3
        </div>
        <div className="relative border border-foreground/15 h-20 p-2 rounded bg-card/20 text-card-foreground">
          <Tooltip>Tooltip 4</Tooltip>
          Row 1
        </div>
        <div className="relative border border-foreground/15 h-20 p-2 rounded bg-card/20 text-card-foreground">
          <Tooltip>Tooltip 5</Tooltip>
          Row 1
        </div>
        <div className="relative border border-foreground/15 h-20 p-2 rounded bg-card/20 text-card-foreground">
          <Tooltip>Tooltip 6</Tooltip>
          Row 1
        </div>
        <div className="relative border border-foreground/15 h-20 p-2 rounded bg-card/20 text-card-foreground">
          <Tooltip>Tooltip 7</Tooltip>
          Row 2
        </div>
        <div className="relative border border-foreground/15 h-20 p-2 rounded bg-card/20 text-card-foreground">
          <Tooltip>Tooltip 8</Tooltip>
          Row 2
        </div>
        <div className="relative border border-foreground/15 h-20 p-2 rounded bg-card/20 text-card-foreground">
          <Tooltip>Tooltip 9</Tooltip>
          Row 2
        </div>
        <div className="relative border border-foreground/15 h-20 p-2 rounded bg-card/20 text-card-foreground">
          <Tooltip>Tooltip 10</Tooltip>
          Row 3
        </div>
        <div className="relative border border-foreground/15 h-20 p-2 rounded bg-card/20 text-card-foreground">
          <Tooltip>Tooltip 11</Tooltip>
          Row 3
        </div>
        <div className="relative border border-foreground/15 h-20 p-2 rounded bg-card/20 text-card-foreground">
          <Tooltip>Tooltip 12</Tooltip>
          Row 3
        </div>
      </div>
    </main>
  )
}

function Tooltip(props: React.ComponentProps<'span'>) {
  return (
    <>
      <span className="absolute bg-accent text-accent-foreground p-1 rounded opacity-80 top-0 right-0 -translate-y-[50%] translate-x-0 md:translate-x-[50%] ">
        {props.children}
      </span>
    </>
  )
}
