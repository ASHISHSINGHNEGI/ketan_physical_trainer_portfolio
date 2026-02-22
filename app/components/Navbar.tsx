export default function NavBar() {
  return (
    <nav className="flex justify-between items-center px-8 py-6 uppercase tracking-widest text-xs font-medium">
      <div className="flex gap-6">
        <a href="#" className="hover:opacity-50 transition">
          Stories
        </a>
        <a href="#" className="hover:opacity-50 transition">
          Investment
        </a>
      </div>
      <span className="text-xl font-serif lowercase italic tracking-normal">
        Keten: The Beast
      </span>
      <div className="flex gap-6">
        <a href="#" className="hover:opacity-50 transition">
          Journal
        </a>
        <a href="#" className="hover:opacity-50 transition">
          Contact
        </a>
      </div>
    </nav>
  );
}
