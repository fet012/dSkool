import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import fetchApi from "../../fetchApi";
import logo from '../assets/logo.jpg';
import { useState } from "react";
export default function Register() {
  const navigate = useNavigate();
  

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const userData = {
      name: formData.get("name"),
      schoolName: formData.get("schoolName"),
      username: formData.get("username"),
      email: formData.get("email"),
      password: formData.get("password"),
      orderId: formData.get("orderId"),
    };

    // FORM VALIDATION
    if (
      !userData.name ||
      !userData.email ||
      !userData.schoolName ||
      !userData.username ||
      !userData.password ||
      !userData.orderId
    ) {
      setError("Please fill all fields");
      return;
    }

    try {
      const response = await fetchApi("/admin/register", "POST", userData);
      if (response.status === 201) {
        setSuccess(true);
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else {
        setError(response.message);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      {success ? (
        <p>Registration successful! Redirecting to login...</p>
      ) : (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <img
              className="mx-auto h-10 w-auto"
              src={logo}
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
              Create a new account <br /> (School)
            </h2>
            <p className="mt-2 text-center text-sm leading-5 text-gray-500 max-w">
              Or
              <Link to="/login">
                <button style={{backgroundColor:"#F3F4F6"}} className=" bg-none text-blue-600 cursor:pointer hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                  login to your account
                </button>
              </Link>
            </p>
          </div>

          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <form onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-5  text-gray-700"
                  >
                    School name
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <input
                      id="name"
                      name="schoolName"
                      type="text"
                      required=""
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    />
                    <div className="hidden absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <svg
                        className="h-5 w-5 text-red-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-5  text-gray-700"
                  >
                    Name
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <input
                      id="name"
                      name="name"
                      placeholder="Firstname Lastname"
                      type="text"
                      required=""
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    />
                    <div className="hidden absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <svg
                        className="h-5 w-5 text-red-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-5 text-gray-700"
                  >
                    Username
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <span className="inline-flex h-10 items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                      dskool_portal
                    </span>
                    <input
                      id="username"
                      name="username"
                      placeholder="john"
                      type="text"
                      required=""
                      className="flex-1  border border-gray-300 form-input pl-3 block w-full rounded-none rounded-r-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-5 text-gray-700"
                  >
                    Email address
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <input
                      id="email"
                      name="email"
                      placeholder="user@example.com"
                      type="email"
                      required=""
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    />
                    <div className="hidden absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <svg
                        className="h-5 w-5 text-red-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-5 text-gray-700"
                  >
                    Password
                  </label>
                  <div className="mt-1 rounded-md shadow-sm">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      required=""
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <label
                    htmlFor="coupon-code"
                    className="block text-sm font-medium leading-5 text-gray-700"
                  >
                    orderId
                  </label>
                  <div className="mt-1 rounded-md shadow-sm">
                    <input
                      id="coupon-code"
                      name="orderId"
                      type="text"
                      required=""
                      maxLength={12}
                      autoComplete="off"
                      pattern="[A-Za-z0-9]+"
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    />
                  </div>
                </div>
                {error && (
                  <div
                    className="bg-red-100 border mt-2 border-red-400 text-red-700 px-4 py-3 rounded relative"
                    role="alert"
                  >
                    <span className="block sm:inline">{error}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="absolute top-1 right-1 h-6 w-6 text-red-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                )}
                <div className="mt-6">
                  <span className="block flex gap-2 w-full rounded-md shadow-sm">
                    <button
                      type="submit"
                      className="w-30 flex justify-center py-2 px-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                    >
                      Create account
                    </button>

                    <Link to="/login">
                      <button
                        className="w-full flex justify-center py-2 px-2 border
                  border-transparent text-sm font-medium rounded-md text-white
                  bg-blue-600 hover:bg-blue-500 focus:outline-none
                  focus:border-indigo-700 focus:shadow-outline-indigo
                  active:bg-indigo-700 transition duration-150 ease-in-out"
                      >
                        Already have an account? Login
                      </button>
                    </Link>
                  </span>
                  <Link to="/">
                    <button
                      className="w-full flex justify-center py-2 px-2 mt-2 border
                  border-transparent text-sm font-medium rounded-md text-white
                  bg-blue-600 hover:bg-blue-500 focus:outline-none
                  focus:border-indigo-700 focus:shadow-outline-indigo
                  active:bg-indigo-700 transition duration-150 ease-in-out"
                    >
                      Go back
                    </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
