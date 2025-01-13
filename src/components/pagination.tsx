import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

type PaginationProps = {
  currentPage: number; // Accept currentPage prop
  onPageChange: (page: number) => void; // Accept onPageChange prop
  totalPages: number; // Accept totalPages prop
};

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  onPageChange,
  totalPages,
}) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className={totalPages > 1 ? "pagination" : "hidden"}>
      <button
        className="w-[42px] h-[42px] bg-white rounded-[5px]"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ChevronLeft />
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`w-[42px] h-[42px] bg-white ${
            currentPage === page
              ? "border-[2px] border-primary rounded-[5px] text-primary font-[700]"
              : ""
          }`}
        >
          {page}
        </button>
      ))}

      <button
        className="w-[42px] h-[42px] bg-white rounded-[5px]"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <ChevronRight />
      </button>

      <style jsx>{`
        .pagination {
          display: flex;
          justify-content: center;
        }
        button {
          margin: 0 5px;
          padding: 5px 10px;
        }
      `}</style>
    </div>
  );
};

export default Pagination;
