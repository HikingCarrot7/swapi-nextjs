import { useEffect, useState } from 'react';
import { PER_PAGE } from '../constants/pagination';

export interface PaginationParams {
  totalItems: number;
  currentPage: number;
  pageSize?: number;
  pagesToDisplay?: number;
}

interface PaginationResult {
  pagination: string[];
  totalPages: number;
}

export const usePagination = ({
  totalItems,
  currentPage,
  pageSize = PER_PAGE,
  pagesToDisplay = 3,
}: PaginationParams): PaginationResult => {
  const [pagination, setPagination] = useState([] as Array<string>);

  const calculateTotalPages = () => {
    return Math.ceil(totalItems / pageSize);
  };

  const getPagination = () => {
    const totalPages = calculateTotalPages();
    let newLimit = 1;
    if (totalPages > pagesToDisplay + 1) {
      newLimit = calculateLowerLimit(totalPages, pagesToDisplay, currentPage);
    }
    const newPagination = calculatePagination(
      pagesToDisplay,
      currentPage,
      newLimit,
      totalPages,
    );
    setPagination(newPagination);
  };

  useEffect(() => {
    getPagination();
  }, [currentPage, totalItems, pagesToDisplay, pageSize]);

  return {
    pagination,
    totalPages: calculateTotalPages(),
  };
};

const calculateLowerLimit = (
  totalPages: number,
  pagesToDisplay: number,
  currentPage: number,
) => {
  let lowerLimit = 1;
  const centralPage = Math.ceil(pagesToDisplay / 2);
  if (
    currentPage >= centralPage + 1 &&
    currentPage + centralPage < totalPages
  ) {
    lowerLimit = currentPage - Math.floor(pagesToDisplay / 2);
  } else if (currentPage + centralPage >= totalPages) {
    lowerLimit = totalPages - pagesToDisplay;
  }
  return lowerLimit;
};

const calculatePagination = (
  pagesToDisplay: number,
  currentPage: number,
  lowerLimit: number,
  totalPages: number,
) => {
  let pageLimit = pagesToDisplay;
  if (totalPages <= pagesToDisplay + 1) {
    pageLimit = totalPages;
  }
  const paginationNumbers = getPaginationNumbers(pageLimit, lowerLimit);
  if (totalPages > pagesToDisplay + 1) {
    addPaginationUpperLimit(
      currentPage,
      pagesToDisplay,
      totalPages,
      paginationNumbers,
    );
  }
  return paginationNumbers;
};

const getPaginationNumbers = (pageLimit: number, lowerLimit: number) => {
  const paginationNumbers = [];
  for (let i = 0; i < pageLimit; i++) {
    paginationNumbers.push(`${lowerLimit + i}`);
  }
  return paginationNumbers;
};

const addPaginationUpperLimit = (
  currentPage: number,
  pagesToDisplay: number,
  totalPages: number,
  pagination: Array<string>,
) => {
  if (!(currentPage + Math.ceil(pagesToDisplay / 2) >= totalPages)) {
    pagination.push('...');
  }
  pagination.push(`${totalPages}`);
  return pagination;
};
