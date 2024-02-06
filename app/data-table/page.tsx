import { Metadata } from 'next'
import CurrencyDataTable from './data-table'
import styles from './style.module.css'

export const metadata: Metadata = {
  title: 'Data table',
  description: 'Populating table with data',
}

export default function DataTable() {
  return (
    <div className={styles['page']}>
      <div className={styles['container']}>
        <h1 className={styles['title']}>Euro Exchange Rates</h1>
        <CurrencyDataTable style={{ marginTop: 'var(--6)' }} />
      </div>
    </div>
  )
}
