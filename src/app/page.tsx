import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
  <nav className="text-center">
    <div className="Home"> 
    
    <h1>< Link href="topnav"> to do now</Link></h1>          
    </div>
      <Image 
      
      alt='image'
      src="/clock.jpg"
      height={800}
      width={1000}
      
      style={{
        objectFit: 'cover',
        backgroundImage:'/back'
      }}
      ></Image>
  </nav>
  )
}
