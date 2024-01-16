import Link from 'next/link'

export default function Header()
{
  return (
    <header className="z-10 w-full items-center justify-between font-mono text-sm lg:flex">
      <div className="logo">
        <Link href="/">
          Your Logo
        </Link>
      </div>
      <nav className="navigation">
        <Link href="/">
          Home
        </Link>
        <Link href="/about">
          About
        </Link>
        <Link href="/blog">
          Blog
        </Link>
        <Link href="/contact">
          Contact
        </Link>
      </nav>
    </header>
  )
}
