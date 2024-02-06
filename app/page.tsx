import { Badge } from '@/components/badge'
import Link from 'next/link'
import styles from './page-style.module.css'

export default function Home() {
  return (
    <div className={styles['page']}>
      <section className={styles['section']}>
        <h1 className={styles['title']}>Krinesh Patel</h1>
        <h3 className={styles['heading']}>Full Stack Developer</h3>
        <p className={styles['description']}>
          I have successfully completed all three{' '}
          <span>
            <Link
              className={styles['description__link']}
              href="https://inxtest.netlify.app/"
              target="_blank"
            >
              assignments
            </Link>
          </span>{' '}
          with fully responsive design. I took the liberty to introduce a custom dark and light mode
          inspired by Daisy UI. Additionally, I added a floating navbar that hides on mouse leave
          and is initially hidden for the{' '}
          <span>
            <Link className={styles['description__link']} href="/center-div">
              Center the Div
            </Link>
          </span>{' '}
          assignment. The theme is entirely custom-made without using any component framework. I
          have utilized the react to make reusable components. You can find the code on{' '}
          <span>
            <a
              href="https://github.com/pkrinesh/inxtest-assignment"
              target="_blank"
              className={styles['description__link']}
            >
              Github
            </a>
          </span>
          .
        </p>
        <div>
          <div className={styles['badge-container']}>
            {['React', 'Next.js', 'Typescript', 'Css'].map((item) => {
              return <Badge key={item}>{item}</Badge>
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
