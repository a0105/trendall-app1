import React from "react";
import Header from "../components/ui/Header";
import Footer from "../components/ui/footer";



export default function Contact() {
  return (
    <>
      <Header />
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 ">
          <div className="mb-4">
            <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto ">
              <p className="text-base font-semibold uppercase tracking-wide text-red-600 ">
                A.D. Trendall Research Centre
              </p>
              <h2 className="font-heading mb-4 text-2xl font-bold tracking-tight md:text-4xl">
                Contact details
              </h2>
            </div>
          </div>

          <div className="flex justify-center pb-8 lg:pt-9">
            <div className="flex flex-col lg:flex-row lg:space-x-9">
              <div className=" lg:w-1/2">
                <h2 className="mb-4 text-2xl font-bold lg:text-center">
                  Opening hours
                </h2>

                <p className="mb-12 mt-3 text-lg">
                  By appointment only. Please contact the Trendall Centre:{" "}
                  <a
                    className="underline duration-150 ease-in-out hover:text-red-400 hover:underline-offset-4"
                    href="mailto:trendall@latrobe.edu.au"
                  >
                    trendall@latrobe.edu.au
                  </a>
                </p>

                <ul className="mb-6 md:mb-0">
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-black text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                      >
                        <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                        <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                      </svg>
                    </div>

                    <div className="mb-4 ml-4">
                      <h3 className="mb-2 text-lg font-semibold leading-6 ">
                        Our Address
                      </h3>
                      <p className="">Menzies College, La Trobe University</p>
                      <p className="">Victoria 3086, Australia.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-black text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                      >
                        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                        <path d="M15 7a2 2 0 0 1 2 2"></path>
                        <path d="M15 3a6 6 0 0 1 6 6"></path>
                      </svg>
                    </div>
                    <div className="mb-4 ml-4">
                      <h3 className="mb-2 text-lg font-semibold leading-6">
                        Contact
                      </h3>

                      <div className="flex space-x-1">
                        <p className="font-medium">Telephone:</p>
                        <a
                          className="underline underline-offset-4"
                          href="tel:+61 3 9479 2845"
                        >
                          +61 3 9479 2845
                        </a>
                      </div>

                      <div className="flex space-x-1">
                        <p className="font-medium">Fax:</p>
                        <p className="">+61 3 9479 1827</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="max-w-6xl lg:w-1/2">
                <h2 className="mb-4 text-2xl font-bold lg:text-center">Map</h2>

                <iframe
                  title="Google Maps Embed"
                  className="h-full w-full rounded-md"
                  src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d24754.376366522643!2d145.051895!3d-37.72117!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzfCsDQzJzE4LjgiUyAxNDXCsDAzJzA0LjMiRQ!5e1!3m2!1sen!2sau!4v1714666585023!5m2!1sen!2sau"
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
