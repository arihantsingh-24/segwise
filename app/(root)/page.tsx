"use client";
import React, { useState } from "react";
import Image from "next/image";
import filter from "../../public/filter.svg";
import arrowdown from "../../public/arrow-down.svg";
import Table from "@/components/Table";
import { FaCaretDown, FaCaretRight } from "react-icons/fa";

const Page = () => {
  const [filtered, setFiltered] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState("Tags");
  const [selectedTags, setSelectedTags] = useState<null | string>(null);
  const [selectedMetrics, setSelectedMetrics] = useState<null | string>(null);
  const [selectedTagsOption, setSelectedTagsOption] = useState("is");
  const [SelectedMetricsOption, setSelectedMetricsOption] = useState(
    "lesser than"
  );
  const [isOr, setIsOr] = useState(false);

   const handleFilter = () => {
    setFiltered(!filtered);
  };

  const handleOrChange = () => {
    setIsOr(!isOr);
  };

  const handleFilterChange = (filter: string) => {
    setSelectedFilters(filter);
  };

  const addTag = (tag: string) => {
    setSelectedTags(tag);
  };

  const addMetric = (metric: string) => {
    setSelectedMetrics(metric);
  };

  const deleteTag = () => {
    setSelectedTags(null);
  };

  const deleteMetric = () => {
    setSelectedMetrics(null);
  };

  const TagOption = (metricoption: string) => {
    setSelectedTagsOption(metricoption);
  };

  const metricOption = (tagoption: string) => {
    setSelectedMetricsOption(tagoption);
  };

  const [isTagOpen, setIsTagOpen] = useState(false);
  const toggleTagDropdown = () => {
    setIsTagOpen(!isTagOpen);
  };

  const [isMatricsOpen, setIsMatricsOpen] = useState(false);
  const toggleMatricsDropdown = () => {
    setIsMatricsOpen(!isMatricsOpen);
  };

  // filter dropdown logic
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="flex flex-col items-center h-screen w-full mt-20 ">
      {/* Main Content Card */}
      <div className="flex flex-col items-center justify-center h-full w-full border-dashed border-2 border-[#000]/12">
        {/* Filter Header */}
        <div className="flex flex-col items-start justify-center w-[943px] h-[68px] bg-[#F5F8FA] rounded-[16px] border-gray-200 border-1 mt-8 mb-8" onClick={handleFilter}>
          <button
            className="flex ml-10 bg-white hover:bg-[#E4FE77]/50 items-center justify-evenly w-auto h-[36px] gap-1 p-2 rounded-md border-gray-200 border-1 shadow-gray-200 shadow-sm"
            onClick={toggleDropdown}
          >
            <Image src={filter} alt="filter" height={18} width={18} />
            <p className="text-[14px] font-[400] leading-[20x]">Filters</p>
            <Image src={arrowdown} alt="arrowdown" height={18} width={18} />
          </button>
          {isOpen && (
            <div className="absolute top-[280px] z-10 bg-white shadow-md border-1 border-gray-200 rounded-lg p-2 w-[300px]">
              <div className="flex flex-col">
                <div className="flex ">
                  <button className="text-[14px] text-gray-700 font-[600] pr-2 border-b border-gray-300 pb-1">
                    Dimensions
                  </button>
                  <button
                    className={`text-[14px] text-gray-700 font-[600] px-2 ${
                      selectedFilters === "Tags"
                        ? "border-b-2 border-black"
                        : "border-b border-gray-300 pb-1"
                    }`}
                    onClick={() => handleFilterChange("Tags")}
                  >
                    Tags
                  </button>
                  <button
                    className={`text-[14px] text-gray-700 font-[600] px-2 ${
                      selectedFilters === "Metrics"
                        ? "border-b-2 border-black"
                        : "border-b border-gray-300 pb-1"
                    }`}
                    onClick={() => handleFilterChange("Metrics")}
                  >
                    Metrics
                  </button>
                  <div className={`w-22 border-b border-gray-300 pb-1`}></div>
                </div>

                <div className="flex flex-col w-full items-center mt-2 space-y-6">
                  {/* tags*/}
                  {selectedTags !== null && (
                    <div className="border border-gray-300 rounded-lg p-4 bg-white flex flex-col gap-3 relative group">
                      {/* Top Row */}
                      <div className="flex items-center gap-2">
                        <p className="text-xs text-gray-500">Tags</p>
                        <FaCaretRight className="text-gray-400" />
                        <p className="text-xs text-gray-600">{selectedTags}</p>

                        <button
                          className="ml-auto text-gray-400 hover:text-red-500 transition-colors duration-200"
                          onClick={() => deleteTag()}
                        >
                          🗑️
                        </button>
                      </div>

                      {/* Middle Row */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => toggleTagDropdown()}
                          className="flex items-center space-x-2 bg-white border border-gray-300 rounded-md p-2 shadow-md text-[14px] "
                        >
                          <p className="text-xs text-gray-500">
                            {selectedTagsOption}
                          </p>
                          <FaCaretDown className="text-gray-400" />
                        </button>
                        {/* Value Input */}
                        <input
                          type="text"
                          placeholder="Enter Value"
                          className="text-[14px] text-gray-700 bg-gray-100 focus:ring-2 focus:ring-black focus:outline-none p-2 rounded-md w-full"
                        />
                      </div>

                      <div className="absolute top-1/4">
                        {isTagOpen && (
                          <div className="absolute bg-white border border-gray-300 rounded-md p-2 top-[70px] left-0 shadow-md w-[200px] z-20">
                            {[
                              "is",
                              "is not",
                              "contains",
                              "does not contain",
                            ].map((option) => (
                              <div
                                key={option}
                                onClick={() => TagOption(option)}
                                className="p-2 hover:bg-gray-100 cursor-pointer text-[14px]"
                              >
                                {option}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* AND / OR Buttons */}
                  {selectedMetrics !== null && selectedTags !== null && (
                    <div
                      className="flex items-center justify-center w-fit bg-gray-100 rounded-md p-2 gap-2"
                      onClick={handleOrChange}
                    >
                      <button
                        className={`rounded-md px-4 py-2 text-sm font-medium ${
                          !isOr ? "bg-white" : "bg-transparent"
                        }`}
                      >
                        AND
                      </button>
                      <button
                        className={` rounded-md px-4 py-2 text-sm font-medium ${
                          isOr ? "bg-white" : "bg-transparent"
                        }`}
                      >
                        OR
                      </button>
                    </div>
                  )}

                  {/* matrics*/}
                  {selectedMetrics !== null && (
                    <div className="border border-gray-300 rounded-lg p-4 bg-white flex flex-col gap-3 relative group">
                      {/* Top Row */}
                      <div className="flex items-center gap-2">
                        <p className="text-xs text-gray-500">metrics</p>
                        <FaCaretRight className="text-gray-400" />
                        <p className="text-xs text-gray-600">
                          {selectedMetrics}
                        </p>

                        <button
                          className="ml-auto text-gray-400 hover:text-red-500 transition-colors duration-200"
                          onClick={() => deleteMetric()}
                        >
                          🗑️
                        </button>
                      </div>

                      {/* Middle Row */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => toggleMatricsDropdown()}
                          className="flex items-center space-x-2 bg-white border border-gray-300 rounded-md p-2 shadow-md text-[14px] "
                        >
                          <p className="text-xs text-gray-500">
                            {SelectedMetricsOption}
                          </p>
                          <FaCaretDown className="text-gray-400" />
                        </button>
                        {/* Value Input */}
                        <input
                          type="text"
                          placeholder="Enter Value"
                          className="text-[14px] text-gray-700 bg-gray-100 focus:ring-2 focus:ring-black focus:outline-none p-2 rounded-md w-full"
                        />
                      </div>

                      <div className="absolute top-1/4">
                        {isMatricsOpen && (
                          <div className="absolute bg-white border border-gray-300 rounded-md p-2 top-[70px] left-0 shadow-md w-[200px] z-20">
                            {["less than", "greater than", "equals"].map(
                              (option) => (
                                <div
                                  key={option}
                                  onClick={() => metricOption(option)}
                                  className="p-2 hover:bg-gray-100 cursor-pointer text-[14px]"
                                >
                                  {option}
                                </div>
                              )
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* List of filters */}
                <div className="flex">
                  {selectedFilters === "Tags" && (
                    <ul className="flex flex-col space-y-1">
                      {[
                        "creative_name",
                        "country",
                        "Ad network",
                        "CTA Position",
                        "CTA Text",
                      ].map((tag) => (
                        <li
                          key={tag}
                          onClick={() => addTag(tag)}
                          className="text-[14px] text-gray-800 font-[400] hover:bg-gray-100 p-1 rounded-md cursor-pointer"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  )}
                  {selectedFilters === "Metrics" && (
                    <ul className="flex flex-col space-y-1">
                      {[
                        "spend",
                        "impressions",
                        "clicks",
                        "cost_per_click",
                        "cost_per_install",
                        "installs",
                      ].map((metric) => (
                        <li
                          key={metric}
                          onClick={() => addMetric(metric)}
                          className="text-[14px] text-gray-800 font-[400] hover:bg-gray-100 p-1 rounded-md cursor-pointer"
                        >
                          {metric}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        <Table />
      </div>

      {/* Instructions Section */}
      <div className="flex flex-col mt-12 mb-8 mr-[250px] ">
        <p className="text-lg font-semibold">Instructions</p>
        {filtered ? (
          <p className="text-sm text-gray-600 mt-2">
            Click ‘R’ to restart prototype
          </p>
        ) : (
          <ol className="mt-2 list-decimal space-y-2 pl-5">
            <li className="text-sm text-gray-600">
              User should be able to add multiple filters
            </li>
            <li className="text-sm text-gray-600">
              Various states including hover and focus provided to the right.
              Make sure to check them!
            </li>
            <li className="text-sm text-gray-600">
              Click on the link (button) placed above to play prototype
            </li>
          </ol>
        )}
      </div>
    </div>
  );
};

export default Page;
