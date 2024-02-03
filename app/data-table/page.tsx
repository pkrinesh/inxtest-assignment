import { Metadata } from 'next'
import CurrencyDataTable from './data-table'

export const metadata: Metadata = {
  title: 'Data table',
  description: 'Populating table with data',
}

export default function DataTable() {
  return (
    <main className="h-full bg-background p-2 flex flex-col justify-start md:justify-center items-center">
      <div className="w-full max-w-lg mt-2 md:mt-0">
        <h1 className="text-2xl font-medium text-foreground self-start">Euro Exchange Rates</h1>
        <CurrencyDataTable className="mt-6" />
      </div>
    </main>
  )
}
