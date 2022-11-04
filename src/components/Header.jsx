function Header() {
  return (
    <div className="relative z-50" id="Header" aria-labelledby="Header">
      <div className="container w-full">
        <div className="py-7 flex flex-row justify-between items-center">
          {/* logo */}
          <div className="relative">
            <img
              src={process.env.PUBLIC_URL + "assets/02.png"}
              alt="logo"
              className="w-24"
            />
          </div>
          {/* Nav links */}
          <div className="relative hidden md:block">
            <ul
              className="flex flex-row space-x-8 text-sm navlink"
              aria-labelledby="Menu"
            >
              <a href="/">
                <li>Home</li>
              </a>
              <a href="/">
                <li>Whitepaper</li>
              </a>
              <a href="/">
                <li>About Wasset</li>
              </a>
            </ul>
          </div>
          {/* Button */}
          <div className="relative">
            <button
              aria-label="Join waitlist"
              className="px-6 py-3 bg-black text-white text-sm rounded-full"
            >
              Join waitlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
