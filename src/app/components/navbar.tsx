import { navbarItems, NavbarItem } from "../data/navbarItem";

const Nav = () => {
  return (
    <>
      <nav className="bg-gray-800 sticky z-10 top-0">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 sticky top-0">
          <div className="flex h-16 items-center justify-between sticky top-0 align-middle">
            <h1 className="text-white font-bold justify-start">
              KIZZUATO <a className="text-green-500 font-bold">.</a>
            </h1>
            {/* desktop mode */}
            <div className="text-white lg:flex justify-center space-x-5 hidden">
              {/* item sect */}
              {navbarItems.map((item: NavbarItem) => (
                <div key={item.title} className="w-auto group">
                  <a
                    href={item.href}
                    className="hover:text-green-500 rounded-lg p-2"
                  >
                    {item.title}
                  </a>
                  <div className="w-full h-0.5 bg-green-500 scale-x-0 group-hover:scale-x-100 transition-transform"></div>
                </div>
              ))}
            </div>
            {/* mobile mode */}

            {/* Burger menu untuk mobile */}
            <div className="lg:hidden flex items-center">
              <button className="text-green-500 focus:outline-none">
                {/* Icon burger */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>

          </div>
        </div>
      </nav>
    </>
  );
};
export default Nav;
