import { Link } from 'react-router-dom'

export default function Header(): JSX.Element {
  return (
    <header className="flex flex-row justify-between items-center p-4">
        <Link to="/">
            <h1 className="text-2xl text-white">MEMENT</h1>
        </Link>
      <nav className="flex gap-8">
        <Link to="/about" className="text-white font-bold">About</Link>
        <Link to="/brands" className="text-white font-bold">Brands</Link>
        <Link to="/community" className="text-white font-bold">Community</Link>
        <Link to="/contact" className="text-white font-bold">Contact Us</Link>
  </nav>
    </header>
  )
}
