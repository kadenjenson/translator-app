import Link from 'next/link'

export default function Header()
{
  return (
    <header className="z-10 w-full flex items-center font-mono text-sm p-4 lg:justify-around sm:justify-between">
      <div className="logo">
        <Link href="/">
          Your Logo
        </Link>
      </div>
      <nav className="max-w-2xl w-full flex items-center justify-around">
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
