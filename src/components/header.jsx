import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  UserPlusIcon,
  UserIcon,
  BookOpenIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

import { Link } from "react-router-dom";
import logo from '../assets/logo.jpg';


const services = [
  {
    name: "Staff management",
    description:
      "You can assign teachers to classes and monitor their work virtually.",
    href: "#",
    icon: UserIcon,
  },
  {
    name: "Classroom management",
    description:
      "Class Attendance, Continuous Assessment Management, Automatic computation of student scores.",
    href: "#",
    icon: UserIcon,
  },
  {
    name: "Students enrollment",
    description: "Schools can easily enroll returning student.",
    href: "#",
    icon: UserPlusIcon,
  },
  {
    name: "Report grading System",
    description:
      "Auto generated report system that collates results, generate reports.",
    href: "#",
    icon: BookOpenIcon,
  },
];

export default function Header({ setShowRoute }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
  };
  const handleButtonClick = () => {
    setShowRoute(true);
  };

  return (
    <header className="bg-white">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1 flex-col items-center">
          <a href="#" className="-m-1.5 p-1.5">
            <img
              alt=""
              src={logo}
              className="h-12 ml-12 w-auto"
            />
            <span
              className="
      text-blue-900 
      font-bold 
      text-2xl 
      gradient-text 
      bg-clip-text 
      bg-gradient-to-r 
      from-blue-400 
      to-purple-600 
      via-pink-500 
      hover:text-blue-700
      duration-300
    "
            >
              DSKOOL PORTAL
            </span>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 cursor-pointer text-md/6 font-semibold text-gray-900 hover:text-blue-900 duration-300">
              Features
              <ChevronDownIcon
                aria-hidden="true"
                className="h-5 w-5 flex-none text-gray-400"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4">
                {services.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon
                        aria-hidden="true"
                        className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                      />
                    </div>
                    <div className="flex-auto">
                      <a
                        href={item.href}
                        className="block font-semibold text-gray-900"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <a
            onClick={() => scrollToSection("home")}
            className="text-md/6 font-semibold text-gray-900 cursor-pointer hover:text-blue-900 duration-300"
          >
            Home
          </a>
          <a
            onClick={() => scrollToSection("faq")}
            className="text-md/6 font-semibold text-gray-900 cursor-pointer hover:text-blue-900 duration-300"
          >
            FAQ
          </a>
          <a
            onClick={() => scrollToSection("pricing")}
            className="text-md/6 font-semibold text-gray-900 cursor-pointer hover:text-blue-900 duration-300"
          >
            Pricing
          </a>
          <a
            onClick={() => scrollToSection("contact")}
            className="text-md/6 font-semibold text-gray-900 cursor-pointer hover:text-blue-900 duration-300"
          >
            Contact us
          </a>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-2">
          <Link to="/register">
            <button
              onClick={handleButtonClick}
              className="text-white bg-blue-900 p-1 px-2 hover:bg-blue-700 rounded-md"
            >
              Sign up
            </button>
          </Link>

          <Link to="/login">
            <button
              onClick={handleButtonClick}
              className="text-white bg-blue-900 p-1 px-2 hover:bg-blue-700 rounded-md"
            >
              Login
            </button>
          </Link>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <img alt="" src={logo} className="h-12 w-auto" />
              <span
                className="
      text-blue-900 
      font-bold 
      text-2xl 
      gradient-text 
      bg-clip-text 
      bg-gradient-to-r 
      from-blue-400 
      to-purple-600 
      via-pink-500 
      hover:text-blue-700
      duration-300
    "
              >
                DSKOOL PORTAL
              </span>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    Feautures
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...services].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <a
                  onClick={() => scrollToSection("home")}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Home
                </a>
                <a
                  onClick={() => scrollToSection("faq")}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  FAQ
                </a>
                <a
                  onClick={() => scrollToSection("pricing")}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Pricing
                </a>
                <a
                  onClick={() => scrollToSection("contact")}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Contact
                </a>
              </div>
              <div className="py-6">
                <Link to="/register">
                  <button
                    onClick={handleButtonClick}
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-blue-900 hover:text-white"
                  >
                    Sign up
                  </button>
                </Link>

                <Link to="/login">
                  <button
                    onClick={handleButtonClick}
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-blue-900 hover:text-white"
                  >
                    Login
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
