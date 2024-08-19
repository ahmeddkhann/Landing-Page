import React, { useState } from "react";
import { Menu, X } from "lucide-react";
const Navbar = () => {
  const logo =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcxnKKQnKdsQeO9LBPq83bHZCeTw3w1d9AvExMaAhPSg&s";
  const navItems = [
    {
      label: "Features",
      href: "#",
    },
    {
      label: "Workflow",
      href: "#",
    },
    {
      label: "Pricing",
      href: "#",
    },
    {
      label: "Testimonials",
      href: "#",
    },
  ];
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleNavbar = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <div>
      <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80 cursor-pointer">
        <div className="container px-4 mx-auto relative text-sm">
          <div className="flex justify-between items-center">
            <div className="flex items-center flex-shrink-0">
              <img className="h-10 w-10 mr-2" src={logo} alt="" />
              <span className="text-xl tracking-tight">DENSIDE</span>
            </div>
            <ul className="hidden lg:flex ml-14 space-x-12">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    className="hover:text-orange-300 hover:scale-10 transition duration-300 ease-in-out"
                    href={item.href}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="hidden lg:flex justify-center space-x-12 items-center">
              <a
                href="#"
                className="py-2 px-3 border hover:bg-red-600 rounded-md"
              >
                sign in
              </a>
              <a
                href="#"
                className="bg-gradient-to-r from-orange-500 to-orange-800
                             py-2 px-3 rounded-md"
              >
                Create an account
              </a>
            </div>
            <div className="lg:hidden md:flex flex-col justify-end cursor-pointer">
              <button onClick={toggleNavbar}>
                {mobileOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
          {mobileOpen && (
            <div
              className="fixed right-0 z-20 bg-neutral-900 w-full
                                        p-12 flex flex-col justify-center items-center lg:hidden "
            >
              <ul>
                {navItems.map((item, index) => (
                  <li key={index} className="py-4">
                    <a className="hover:text-orange-300 hover:scale-10 transition duration-300 ease-in-out" href={item.href}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="flex space-x-6">
                <a
                  href="#"
                  className="py-2 px-3 border rounded-md
                                                      hover:bg-red-600" >
                  Sign In
                </a>
                <a
                  href="#"
                  className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800s"
                >
                  Create an account
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
