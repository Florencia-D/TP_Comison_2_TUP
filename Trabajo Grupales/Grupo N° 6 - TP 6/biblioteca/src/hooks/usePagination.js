// src/hooks/usePagination.js
import { useState } from "react";

export const usePagination = (data, itemsPerPage = 5) => {
  const [currentPage, setCurrentPage] = useState(1);

  const maxPage = Math.ceil(data.length / itemsPerPage);

  const currentData = () => {
    const start = (currentPage - 1) * itemsPerPage;
    return data.slice(start, start + itemsPerPage);
  };

  const next = () => setCurrentPage((prev) => Math.min(prev + 1, maxPage));
  const prev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const jump = (page) => setCurrentPage(Math.max(1, Math.min(page, maxPage)));

  return { currentData, currentPage, maxPage, next, prev, jump };
};
