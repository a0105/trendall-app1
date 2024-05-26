import React, { Fragment, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { buttonVariants } from "../ui/button";
import logo from "../../images/latrobe-logo.png";
import { motion, AnimatePresence } from "framer-motion";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "src/firebase";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign Out");
        // Refresh the page
        window.location.reload();
        // Or redirect to a different page
        // navigate("/"); // Redirect to the home page
        // navigate("/login"); // Redirect to the login page
      })
      .catch((error) => console.log(error));
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-b-zinc-300/50 bg-white bg-opacity-50 backdrop-blur-lg backdrop-filter">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="La Trobe Logo" className="h-9 w-auto" />
            <h1 className="text-sm font-semibold">
              <Link to="/Home">A.D TRENDALL RESEARCH CENTER</Link>
            </h1>
          </div>
          {/* Desktop navigation */}
          <div className="hidden items-center space-x-1 text-gray-900 md:flex">
            <Link
              className={buttonVariants({ variant: "link", size: "md" })}
              to="/Home"
            >
              Home
            </Link>
            <Link
              className={buttonVariants({ variant: "link", size: "md" })}
              to="/About"
            >
              About
            </Link>
            <Link
              className={buttonVariants({ variant: "link", size: "md" })}
              to="/News"
            >
              News
            </Link>
            <Link
              className={buttonVariants({ variant: "link", size: "md" })}
              to="/Contact"
            >
              Contact
            </Link>
            <Link
              className={buttonVariants({ variant: "link", size: "md" })}
              to="/Search"
            >
              Search
            </Link>
            <Link
              className={buttonVariants({ variant: "link", size: "md" })}
              to="/Gallery"
            >
              Gallery
            </Link>

            {user ? (
              <Menu as="div" className="relative inline-block pl-1.5 text-left">
                <div>
                  <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                    Account
                    <ChevronDownIcon
                      className="-mr-1 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </MenuButton>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <MenuItem>
                        {({ active }) => (
                          <Link
                            to="/private"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Private Page
                          </Link>
                        )}
                      </MenuItem>
                      <MenuItem>
                        {({ active }) => (
                          <button
                            onClick={handleSignOut}
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block w-full px-4 py-2 text-left text-sm"
                            )}
                          >
                            Sign Out
                          </button>
                        )}
                      </MenuItem>
                    </div>
                  </MenuItems>
                </Transition>
              </Menu>
            ) : (
              <Link className={buttonVariants({ variant: "link" })} to="/Login">
                Sign In
              </Link>
            )}
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={toggleNavbar}
              animate={isOpen ? "open" : "closed"}
              variants={{
                open: { rotate: 180 },
                closed: { rotate: 0 },
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <motion.path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></motion.path>
                ) : (
                  <motion.path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></motion.path>
                )}
              </motion.svg>
            </motion.button>
          </div>
        </div>
        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute left-0 top-full w-full border border-gray-500 bg-white md:hidden"
            >
              <motion.ul
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="flex flex-col space-y-6 px-4 py-2"
              >
                <li>
                  <Link to="/Home">Home</Link>
                </li>
                <li>
                  <Link to="/About">About</Link>
                </li>
                <li>
                  <Link to="/News">News</Link>
                </li>
                <li>
                  <Link to="/Contact">Contact</Link>
                </li>
                <li>
                  <Link to="/Search">Search</Link>
                </li>
                <li>
                  <Link to="/Gallery">Gallery</Link>
                </li>
                {user ? (
                  <>
                    <li>
                      <Link to="/private">Private Page</Link>
                    </li>
                    <li>
                      <button onClick={handleSignOut}>Sign Out</button>
                    </li>
                  </>
                ) : (
                  <li>
                    <Link to="/Login">Sign In</Link>
                  </li>
                )}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
