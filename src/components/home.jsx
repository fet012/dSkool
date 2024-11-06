 function Home() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="h-screen bg-gray-800 flex text-white lg:p-20 p-5 ">
      <div className="mt-10">
        {" "}
        <h1 className="text-3xl mb-4">
          <b>Welcome to DSKOOL PORTAL!</b>
        </h1>
        <p className="text-xl text-gray-400 mt-5 mb-8">
          Introducing our school management system, a comprehensive and robust{" "}
          <br />
          platform designed to empower school managers, teachers, and students{" "}
          <br />
          alike. With DSKOOL PORTAL, school administrators can effortlessly
          manage <br />
          their institution remotely, from anywhere in the world, and at any
          time.
        </p>
        <button
          onClick={() => scrollToSection("pricing")}
          className="bg-blue-900 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded"
        >
          Get Started
        </button>
      </div>
      <div className="hidden lg:block ">
        <img
          src="src/assets/download.jpeg"
          className="  mt-10 rounded-full"
          style={{ width: 400, marginLeft: 50 }}
          alt=""
        />
      </div>
    </div>
  );
}

export default Home;
