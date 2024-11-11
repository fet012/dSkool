import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { BellIcon } from "@heroicons/react/24/outline";
// import StudentRegistrationForm from "./adminRegister";
// import SchoolFeesManagement from "./schoolFeesManagement";
// import TeacherManagementDashboard from "./teacherManagement";
// import ResultManagementSystem from "./resultManagement";
// import ClassManagementSystem from "./classManagement";
import {  Link } from "react-router-dom";

const user = {
  name: "admin",
  email: "admin@gmail.com",
  imageUrl: "src/assets/pexels-photo-614810.webp",
};

const navigation = [
  { name: "Student registration", href: "/adminRegister" },
  { name: "School fees management", href: "/feeManagement" },
  { name: "Teacher management", href: "/teacherManagement" },
  { name: "Results management", href: "/results" },
  { name: "Class management", href: "/classManagement" },
  
];
import logo from '../assets/logo.jpg';
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

const classNames = (...classes) => classes.filter(Boolean).join(" ");

const Dashboard = () => {
  return (
    <div className="min-h-full">
      <Disclosure as="nav" className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  alt="Your Company"
                  src={logo}
                  className="h-8 w-8 rounded-full"
                />
              </div>
              <div className="hidden md:flex ml-10 space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={classNames(
                      "rounded-md px-3 py-2 text-sm font-medium",
                      "text-gray-300 hover:bg-gray-700 hover:text-white"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className=" flex items-center">
              <button
                type="button"
                className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">View notifications</span>
                <BellIcon aria-hidden="true" className="h-6 w-6" />
              </button>

              <Menu as="div" className="relative ml-3">
                <div>
                  <MenuButton className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <img
                      alt=""
                      src={user.imageUrl}
                      className="h-8 w-8 rounded-full"
                    />
                  </MenuButton>
                </div>

                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none"
                >
                  {userNavigation.map((item) => (
                    <MenuItem key={item.name}>
                      <a
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {item.name}
                      </a>
                    </MenuItem>
                  ))}
                </MenuItems>
              </Menu>
            </div>
            <DisclosurePanel className="md:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                {navigation.map((item) => (
                  <DisclosureButton
                    key={item.name}
                    as={Link}
                    to={item.href}
                    className={classNames(
                      "block rounded-md px-3 py-2 text-base font-medium",
                      "text-gray-300 hover:bg-gray-700 hover:text-white"
                    )}
                  >
                    {item.name}
                  </DisclosureButton>
                ))}
              </div>
            </DisclosurePanel>
          </div>
        </div>
      </Disclosure>

      {/* Sidebar */}
      <aside className="md:block w-64 bg-gray-100 p-4 flex-shrink-0">
        <ul className="space-y-2">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                to={item.href}
                className={classNames(
                  "flex items-center px-3 py-2 text-sm font-medium rounded-md",
                  "text-gray-600 hover:bg-gray-200 hover:text-gray-900"
                )}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            {/* <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                Dashboard
              </h1> */}
          </div>
        </header>
        {/* <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <Routes>
              <Route
                path="/adminRegister"
                element={<StudentRegistrationForm />}
              />
              <Route path="/feeManagement" element={<SchoolFeesManagement />} />
              <Route
                path="/teacherManagement"
                element={<TeacherManagementDashboard />}
              />
              <Route path="/results" element={<ResultManagementSystem />} />
              <Route
                path="/classManagement"
                element={<ClassManagementSystem />}
              />
            </Routes>
          </div> */}
      </main>
    </div>
  );
};

export default Dashboard;
