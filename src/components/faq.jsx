import { useState } from "react";
export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(0);
  const accordionData = [
    {
      title: "What is DSKOOL PORTAL?",
      content:
        "DSKOOL PORTAL is a cloud-based school management system designed to streamline administrative tasks, enhance teaching and learning, and improve communication.",
    },
    {
      title: "Can I track student grades and attendance?",
      content:
        'Yes, use the "Gradebook" and "Attendance" features in your Teacher Dashboard.',
    },
    {
      title: "How do I log in to my account?",
      content:
        "Go to the top, click Login, and enter your username and password",
    },
    {
      title: "Does the DSKOOL portal support payment of school fees?",
      content:
        "NO, the DSKOOL PORTAL does noot support payment of school fees, you should pay to your school account and ask the admin to update your portal",
    },
    {
      title: "Can I register personally?",
      content:
        "NO, you cannot register directly/personally on the DSKOOL PORTAL, it's a school management system, so it's meant for schools purchase only, as you will need to purchase a key to create an account as an admin",
    },
    {
      title: "Who is an Admin?",
      content:
        "An admin is the user that represents a school and is going to be in charge of the school's students and teachers data,register new users and is going to be in charge of the key. THERE CAN ONLY BE ONE ADMIN ",
    },
  ];

  return (
    <div
      id="faq"
      className="max-w-3xl mx-auto p-4 md:p-6 lg:p-8 bg-white rounded-lg shadow-lg"
    >
      {accordionData.map((item, index) => (
        <div key={index} className="mb-4">
          <input
            type="radio"
            name="my-accordion-1"
            id={`accordion-${index}`}
            checked={activeIndex === index}
            onChange={() => setActiveIndex(index)}
            className="hidden"
          />
          <label
            htmlFor={`accordion-${index}`}
            className={`flex justify-between items-center cursor-pointer py-4 px-6 bg-gray-100 rounded-lg ${
              activeIndex === index ? "bg-gray-200" : ""
            }`}
          >
            <h3 className="text-lg font-medium">{item.title}</h3>
            <svg
              xmlns="(link unavailable)"
              className={`h-6 w-6 transition-transform duration-300 ${
                activeIndex === index ? "-rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </label>
          <div
            className={`collapse-content ${
              activeIndex === index ? "block" : "hidden"
            } p-6 bg-gray-50 rounded-lg`}
          >
            <p>{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
