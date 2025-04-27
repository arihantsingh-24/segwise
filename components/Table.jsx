import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import mockData from "@/mockData";

const Table = () => {
  // pagination logic
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(mockData.length / 5);
  const indexOfLastRow = currentPage * 5;
  const indexOfFirstRow = indexOfLastRow - 5;
  const currentRows = mockData.slice(indexOfFirstRow, indexOfLastRow);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="overflow-x-auto min-w-[943px] border-1 border-[#000]/12 rounded-md  mb-8">
        <table className="min-w-full table-auto border-collapse text-sm text-gray-700">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 text-left">Creative Name</th>
              <th className="py-3 px-4 text-left">Country</th>
              <th className="py-3 px-4 text-left">Ad Network</th>
              <th className="py-3 px-4 text-left">Campaign</th>
              <th className="py-3 px-4 text-left">IPM</th>
              <th className="py-3 px-4 text-left">CTR</th>
              <th className="py-3 px-4 text-left">Spend</th>
              <th className="py-3 px-4 text-left">Installs</th>
            </tr>
          </thead>
          <tbody>
            {currentRows.map((item) => (
              <tr
                key={item.creative_id}
                className="hover:bg-gray-50 transition-colors"
              >
                <td className="py-2 px-4">{item.creative_name}</td>
                <td className="py-2 px-4">{item.country}</td>
                <td className="py-2 px-4">{item.ad_network}</td>
                <td className="py-2 px-4">{item.campaign}</td>
                <td className="py-2 px-4">{item.ipm.toFixed(2)}</td>
                <td className="py-2 px-4">{item.ctr.toFixed(2)}</td>
                <td className="py-2 px-4">${item.spend.toFixed(2)}</td>
                <td className="py-2 px-4">{item.installs}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex mb-8">
        <div className="flex items-center gap-2">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className="px-2 py-2 text-black rounded-md hover:text-[#E4FE77] flex items-center justify-center"
          >
            <FaArrowLeft size={16} />
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className="px-2 py-2 text-black rounded-md hover:text-[#E4FE77] flex items-center justify-center"
          >
            <FaArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Table;
