import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "../Pagination/Pagination.scss";
import { useState } from "react";
function Pagination({ totalPages, setCurrentPage, currentPage }) {
  let pages = [];

  for (let i = 2; i <= totalPages - 1; i++) {
    pages.push(i);
  }
  const handlePrev = () => {
    setCurrentPage(currentPage - 1);
  };
  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };
  let pageDot1 = null;
  if (currentPage > 4) {
    pageDot1 = <li className="page-dot">. . .</li>;
  }
  let pageDot2 = null;
  if (currentPage < totalPages - 3) {
    pageDot2 = <li className="page-dot">. . .</li>;
  }
  console.log(pageDot1);
  const renderPages = pages.map((page) => {
    if (page < currentPage + 3 && page > currentPage - 3) {
      return (
        <button
          key={page}
          onClick={() => {
            setCurrentPage(page);
          }}
          className={page === currentPage ? "active" : ""}
        >
          {page}
        </button>
      );
    } else {
      return null;
    }
  });
  return (
    <div className="pagination">
      <button onClick={handlePrev} disabled={currentPage === 1 ? true : false}>
        {" "}
        <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
      </button>
      <button
        onClick={() => setCurrentPage(1)}
        className={currentPage === 1 ? "active" : ""}
      >
        1
      </button>
      {pageDot1}
      {renderPages}
      {pageDot2}
      <button
        onClick={() => setCurrentPage(totalPages)}
        className={currentPage === totalPages ? "active" : ""}
      >
        {totalPages}
      </button>
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages ? true : false}
      >
        {" "}
        <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
      </button>
    </div>
  );
}

export default Pagination;
