import { NavLink } from "react-router";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Error = () => {
  return (
    <div>
      <Navbar></Navbar>
      <section className="flex items-center min-h-screen  bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-blue-900 dark:via-purple-900 dark:to-pink-950">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            <h2 className="mb-8 font-extrabold text-9xl text-gray-400 dark:text-gray-200">
              <span className="sr-only">Error</span>404
            </h2>
            <p className="text-2xl font-semibold md:text-3xl">
              Sorry, we couldn't find this page.
            </p>
            <p className="mt-4 mb-8 text-gray-600 dark:text-gray-400">
              But dont worry, you can find plenty of other things on our
              homepage.
            </p>
            <NavLink
              to="/"
              className="px-8 bg-gradient-to-r from-[var(--color-rhprimary)] to-[var(--color-rhsecondary)] text-white py-3 rounded-xl shadow-lg hover:opacity-90 transition"
            >
              Go to Home
            </NavLink>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Error;
