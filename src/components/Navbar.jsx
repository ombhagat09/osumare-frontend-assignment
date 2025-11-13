export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center px-6 py-4 bg-white/80 backdrop-blur-md shadow-sm fixed top-0 z-50">
      <h1 className="text-xl font-bold text-blue-700 tracking-wide">
        Osumare<span className="text-gray-800">Form</span>
      </h1>
      <a
        href="https://www.osumare.com"
        target="_blank"
        className="text-sm font-medium text-gray-700 hover:text-blue-700 transition"
      >
        Visit Website →
      </a>
    </nav>
  );
}
