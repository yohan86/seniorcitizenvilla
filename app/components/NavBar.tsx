import Link from 'next/link'

const NavBar = () => {
  return (
    <>
            <Link href="/">Home</Link>
            <Link href="/about/">About</Link>
            <Link href="/services/">Services</Link>
            <Link href="/gallery/">Gallery</Link>
            <Link href="/contact/">Contact</Link>
    
    </>
  )
}

export default NavBar