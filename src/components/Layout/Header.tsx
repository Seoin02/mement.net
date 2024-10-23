export default function Header() {

  return (
    <header className="flex flex-row justify-between items-center mr-[160px] ml-[160px]">
        <a href="/">
            <h1 className="text-2xl text-white">MEMENT</h1>
        </a>
      <nav className="flex gap-8">
        <a href="/about" className="text-white font-bold hover:text-gray-400">About</a>
        <a href="/brands" className="text-white font-bold hover:text-gray-400">Brands</a>
        <a href="/community" className="text-white font-bold hover:text-gray-400">Community</a>
        <a href="/contact" className="text-white font-bold hover:text-gray-400">Contact Us</a>
      </nav>
    </header>
  )
}
