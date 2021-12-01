
import Link from 'next/link'


export default function Post() {
    return (
      <div className = {styles.container} > 
        Hello<br />
        <Link href="/post/index.js">
          click this~
        </Link>
      </div>
    )
  }