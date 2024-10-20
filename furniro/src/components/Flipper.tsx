import React, { useState } from "react";
import './styles.css'; 

interface FlipperProps {
  onPageChange?: (page: number) => void;
}

const Flipper: React.FC<FlipperProps> = ({ onPageChange }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handlePrevClick = () => {
    setCurrentPage((prev) => {
      const newPage = Math.max(prev - 1, 1);
      if (onPageChange) {
        onPageChange(newPage);
      }
      return newPage;
    });
  };

  const handleNextClick = () => {
    setCurrentPage((prev) => {
      const newPage = prev + 1;
      if (onPageChange) {
        onPageChange(newPage);
      }
      return newPage;
    });
  };

  return (
    <div>
      <div className="flipper-container">
        {currentPage === 1 ? null : (
          <button className="flipper-button" onClick={handlePrevClick}>
            Prev
          </button>
        )}
        <div className="flipper-page flipper-current">{currentPage}</div>
        <div className="flipper-page">{currentPage + 1}</div>
        <div className="flipper-page">{currentPage + 2}</div>
        <button className="flipper-button" onClick={handleNextClick}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Flipper;
