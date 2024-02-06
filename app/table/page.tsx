import { Metadata } from 'next'
import styles from './style.module.css'

export const metadata: Metadata = {
  title: 'Table',
  description: 'Creating Table layout',
}

export default function Table() {
  return (
    <div className={styles['page']}>
      <div>
        <div className={styles['table-grid']}>
          <div className={styles['table-grid__cell']}>
            <Tooltip>Tooltip 1</Tooltip>
            Header 1
          </div>
          <div className={styles['table-grid__cell']}>
            <Tooltip>Tooltip 2</Tooltip>
            Header 2
          </div>
          <div className={styles['table-grid__cell']}>
            <Tooltip>Tooltip 3</Tooltip>
            Header 3
          </div>
          <div className={styles['table-grid__cell']}>
            <Tooltip>Tooltip 4</Tooltip>
            Row 1
          </div>
          <div className={styles['table-grid__cell']}>
            <Tooltip>Tooltip 5</Tooltip>
            Row 1
          </div>
          <div className={styles['table-grid__cell']}>
            <Tooltip>Tooltip 6</Tooltip>
            Row 1
          </div>
          <div className={styles['table-grid__cell']}>
            <Tooltip>Tooltip 7</Tooltip>
            Row 2
          </div>
          <div className={styles['table-grid__cell']}>
            <Tooltip>Tooltip 8</Tooltip>
            Row 2
          </div>
          <div className={styles['table-grid__cell']}>
            <Tooltip>Tooltip 9</Tooltip>
            Row 2
          </div>
          <div className={styles['table-grid__cell']}>
            <Tooltip>Tooltip 10</Tooltip>
            Row 3
          </div>
          <div className={styles['table-grid__cell']}>
            <Tooltip>Tooltip 11</Tooltip>
            Row 3
          </div>
          <div className={styles['table-grid__cell']}>
            <Tooltip>Tooltip 12</Tooltip>
            Row 3
          </div>
        </div>
      </div>
    </div>
  )
}

function Tooltip(props: React.ComponentProps<'span'>) {
  return (
    <>
      <span className={styles['tooltip']}>{props.children}</span>
    </>
  )
}
