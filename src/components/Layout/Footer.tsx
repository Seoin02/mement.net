import { Link } from 'react-router-dom'

export default function Footer(): JSX.Element {
  return <footer className="flex flex-row justify-between items-center p-4">
    <nav className="flex gap-8">
        <Link to="/" className="text-white font-bold">About</Link>
        <Link to="/brands" className="text-white font-bold">Brands</Link>
        <Link to="/community" className="text-white font-bold">Community</Link>
    </nav>
    <p className="text-white font-bold">support@mement.net</p>
  </footer>;
}
