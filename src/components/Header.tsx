import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link href="/">
          Your Logo
        </Link>
      </div>
      <nav className="navigation">
        <Link href="/">
          Home
        </Link>
        <Link href="/services">
          Services
        </Link>
        <Link href="/booking">
          Booking
        </Link>
        <Link href="/testimonials">
          Testimonials
        </Link>
        <Link href="/about">
          About
        </Link>
        <Link href="/contact">
          Contact
        </Link>
      </nav>
    </header>
  );
};
