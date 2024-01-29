'use client'

import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/table'
import { ArrowUpDown } from 'lucide-react'

const data = [
  {
    datasetid: 'euro-exchange-rates',
    recordid: '43f5940bfd6881b2f8e0c434a3a96f229a8a1054',
    fields: {
      date: '2022-03-06',
      currency: 'USD',
      rate: 1.0929,
    },
  },
  {
    datasetid: 'euro-exchange-rates',
    recordid: '1787f87bcf029a223e001d6f88750fe0ca6772d1',
    fields: {
      date: '2022-03-06',
      currency: 'AUD',
      rate: 1.4872,
    },
  },
  {
    datasetid: 'euro-exchange-rates',
    recordid: '756f0f685431156ad1d3bc24b91d574c5a6f00fa',
    fields: {
      date: '2022-03-06',
      currency: 'CAD',
      rate: 1.3937,
    },
  },
  {
    datasetid: 'euro-exchange-rates',
    recordid: '58e15a0abb6fc40d08a10ae0f58fc2c9525b267a',
    fields: {
      date: '2022-03-06',
      currency: 'GBP',
      rate: 0.8238800000000001,
    },
  },
  {
    datasetid: 'euro-exchange-rates',
    recordid: '4f7879e2c8e97bc11ae065f748a2e13f2cd73c71',
    fields: {
      date: '2022-03-06',
      currency: 'SEK',
      rate: 10.7935,
    },
  },
  {
    datasetid: 'euro-exchange-rates',
    recordid: 'e3f948548d1479dff8b10aeaaf0c247e17b70897',
    fields: {
      date: '2022-03-06',
      currency: 'MXN',
      rate: 22.7543,
    },
  },
]

export default function CurrencyDataTable({ className }: { className: string }) {
  const [isSorted, setIsSorted] = React.useState(false)
  const [_, setSearch] = React.useState('')
  const [filteredData, setFilteredData] = React.useState(data)
  const [sortedData, setSortedData] = React.useState(filteredData)

  const handleSorting = () => {
    if (!isSorted) {
      const newData = [...filteredData].sort((a, b) =>
        a.fields.currency.localeCompare(b.fields.currency)
      )
      setFilteredData([...newData])
      setIsSorted(true)
    } else {
      setFilteredData([...sortedData])
      setIsSorted(false)
    }
  }

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value.toLowerCase()
    setSearch(searchValue)

    const newData = data.filter((item) => item.fields.currency.toLowerCase().includes(searchValue))
    setFilteredData(newData)
    setSortedData(newData)
  }

  return (
    <div className={className}>
      <input
        className="bg-card/20 text-card-foreground border border-border px-4 py-2 w-full max-w-sm rounded-lg focus:border-border"
        placeholder="Filter Currency"
        onChange={handleSearch}
      />
      <Table className="mt-4">
        <TableCaption>{data[0].datasetid}</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>
              <button
                className="flex gap-1 justify-center items-center px-4 py-2 rounded hover:bg-muted -ml-6"
                onClick={handleSorting}
              >
                Currency
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </button>
            </TableHead>
            <TableHead className="text-right">Rate</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredData.map((item) => (
            <TableRow key={item.recordid}>
              <TableCell className="font-medium">{item.fields.date}</TableCell>
              <TableCell>{item.fields.currency}</TableCell>
              <TableCell className="text-right">{item.fields.rate.toFixed(3)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
