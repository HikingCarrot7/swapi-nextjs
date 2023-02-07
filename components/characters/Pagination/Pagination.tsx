import { usePagination } from '@hooks/usePagination';

interface PaginationProps {
  totalCharacters: number;
  currentPage: number;
  onPageItemClicked: (page: string) => void;
}

const Pagination = ({
  totalCharacters,
  currentPage,
  onPageItemClicked,
}: PaginationProps) => {
  const { pagination } = usePagination({
    totalItems: totalCharacters,
    currentPage,
  });

  const handleOnPageItemClicked = (page: string) => {
    if (page !== '...') {
      onPageItemClicked(page);
    }
  };

  return (
    <>
      {pagination.map((item, index) => (
        <a key={index} onClick={() => handleOnPageItemClicked(item)}>
          {item}
        </a>
      ))}
    </>
  );
};

export default Pagination;
