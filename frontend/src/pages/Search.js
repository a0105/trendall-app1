import React from "react";
import Header from "../components/ui/Header";
import images from "../images/images.jpeg";
import AdvancedSearchImage from "../images/advancedsearch.png";
import { Button } from "../components/ui/button";

const Search = () => {
  return (
    <>
    <Header />
     
      <div className="flex min-h-screen  flex-col items-center justify-center py-5 lg:flex-row lg:space-x-8 lg:-mt-14">
        <div className="mb-9 max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800 md:max-w-md lg:mb-0">
          <img className="h-52 w-full object-cover" src={images} alt="" />

          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Basic Search
            </h5>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Filter results based on attributes by utilising buttons, enhancing
              navigation and display results.
            </p>
            <Button onClick={() => (window.location.href = "/basic")}>
              Basic Search
              <svg
                className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Button>
          </div>
        </div>

        <div className=" max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800 md:max-w-md">
          <img
            className="h-52 w-full object-cover"
            src={AdvancedSearchImage}
            alt=""
          />

          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Advanced Search
            </h5>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Search and refine results using filters and parameters, ensuring
              more precise and search outcomes.
            </p>
            <Button
              onClick={() => (window.location.href = "/advanced")} // Navigate to Advanced Search page
            >
              Advanced Search
              <svg
                className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>

      
    </>
  );
};

export default Search;
