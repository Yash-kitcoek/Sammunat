const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow">
      <h1 className="text-xl font-bold text-blue-600">Sammunat</h1>
      <ul className="flex gap-6 text-gray-600">
        <li>Home</li>
        <li>About</li>
        <li>Features</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
