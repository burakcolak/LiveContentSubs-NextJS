import React from "react";

type PaginationProps = {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
};

const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
}: PaginationProps) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  const isPreviousDisabled = currentPage === 1;
  const isNextDisabled = currentPage === totalPages;

  const getPrevPage = () =>
    isPreviousDisabled ? currentPage : currentPage - 1;
  const getNextPage = () => (isNextDisabled ? currentPage : currentPage + 1);

  return (
    <div className="flex justify-center space-x-1 text-gray-800">
      <a
        title="previous"
        className={`inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md bg-gray-50 border-gray-100 ${
          isPreviousDisabled ? "cursor-not-allowed" : "cursor-pointer"
        }`}
        href={`?page=${getPrevPage()}`}
      >
        &lt;
      </a>
      {pages.map((page) => (
        <a
          key={page}
          className={`inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border rounded shadow-md bg-gray-50 border-gray-100 ${
            currentPage === page
              ? "text-teal-600 border-teal-600"
              : "cursor-pointer"
          }`}
          title={`Page ${page}`}
          href={`?page=${page}`}
        >
          {page}
        </a>
      ))}
      <a
        title="next"
        className={`inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md bg-gray-50 border-gray-100 ${
          isNextDisabled ? "cursor-not-allowed" : "cursor-pointer"
        }`}
        href={`?page=${getNextPage()}`}
      >
        &gt;
      </a>
    </div>
  );
};

export default Pagination;
