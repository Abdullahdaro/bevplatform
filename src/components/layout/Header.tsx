



function Header () {
  return (
    <header className="flex justify-between items-center w-full py-4 px-8">
      <div className="flex items-center gap-1">
        <span className="text-green-600 font-semibold">Bev</span>
      </div>
      <div className="flex items-center gap-4">
        <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Help</a>
        <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Sign in</a>
      </div>
    </header>
  );
};

export default Header