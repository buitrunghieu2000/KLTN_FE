import React from "react";
import "./style.css";
type Props = {
  currentPage: number;
  totalPost: number;
  limit: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

const Pagination = (props: Props) => {
  // state currentPage bat dau tu 0
  const { currentPage, totalPost, limit, setCurrentPage } = props;

  const totalPage = Math.ceil(totalPost / limit);

  return (
    <div className="pagination">
      {/* cap nhat state cua page - 1 */}
      <button
        className="pagBtn"
        // Disable khi tang hien tai la trang dau tien
        disabled={currentPage <= 0}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        <i className="fa-solid fa-angle-left"></i>
      </button>
      {/* hien thi so page va cap nhat state cua page */}
      {[...Array(totalPage)].map((_, index) => (
        <button
          key={index}
          className={`pagination-item ${currentPage === index ? "active" : ""}`}
          onClick={() => setCurrentPage(index)}
        >
          {index + 1}
        </button>
      ))}
      {/* cap nhat state cua page + 1 */}
      <button
        className="pagBtn"
        onClick={() => setCurrentPage(currentPage + 1)}
        // Disable khi trang hien tai la trang cuoi cung
        disabled={currentPage >= totalPage - 1}
      >
        <i className="fa-solid fa-angle-right"></i>
      </button>
    </div>
  );
};

export default Pagination;
