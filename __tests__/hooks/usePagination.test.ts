import { PaginationParams, usePagination } from '@hooks/usePagination';
import { renderHook } from '@testing-library/react';

const build = ({
  totalItems,
  currentPage,
  pageSize,
  pagesToDisplay,
}: PaginationParams) => {
  const { result } = renderHook(() =>
    usePagination({ totalItems, currentPage, pageSize, pagesToDisplay }),
  );
  return { result };
};

it.each`
  totalItems | currentPage | pageSize | pagesToDisplay | expected
  ${15}      | ${2}        | ${10}    | ${3}           | ${['1', '2']}
  ${15}      | ${2}        | ${5}     | ${3}           | ${['1', '2', '3']}
  ${100}     | ${1}        | ${10}    | ${3}           | ${['1', '2', '3', '...', '10']}
  ${95}      | ${10}       | ${10}    | ${3}           | ${['7', '8', '9', '10']}
  ${100}     | ${8}        | ${10}    | ${3}           | ${['7', '8', '9', '10']}
  ${100}     | ${5}        | ${10}    | ${3}           | ${['4', '5', '6', '...', '10']}
`(
  'when total items $totalItems, current page $currentPage, page size $pageSize and pages to display $pagesToDisplay then returns $expected',
  ({ totalItems, currentPage, pageSize, pagesToDisplay, expected }) => {
    const { result } = build({
      totalItems,
      currentPage,
      pageSize,
      pagesToDisplay,
    });
    const pagination = result.current.pagination;

    expect(pagination).toEqual(expected);
  },
);

export {};
