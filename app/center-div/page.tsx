import { Metadata } from 'next'
import styles from './style.module.css'

export const metadata: Metadata = {
  title: 'Center the Div',
  description: 'Centring the div using tailwind and next.js',
}

export default function Center() {
  return (
    <div className={styles['page']}>
      <h1 className={styles['center']}>The Div is Centered.</h1>
    </div>
  )
}
