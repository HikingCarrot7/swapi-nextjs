import { usePagination } from '@hooks/usePagination';

interface PaginationProps {
  totalCharacters: number;
  currentPage: number;
  onPageItemClicked: (page: number) => void;
}

export const Pagination = ({
  totalCharacters,
  currentPage,
  onPageItemClicked,
}: PaginationProps) => {
  const { pagination, totalPages } = usePagination({
    totalItems: totalCharacters,
    currentPage,
  });

  const handleOnPageItemClicked = (page: string) => {
    if (page !== '...') {
      onPageItemClicked(Number(page));
    }
  };

  return (
    <nav aria-label="Page navigation" className="mx-auto text-center my-5">
      <ul className="inline-flex -space-x-px">
        <PaginationItem
          label="First"
          additionalClasses="rounded-l-lg"
          onPageItemClicked={() => handleOnPageItemClicked('1')}
        />
        <PaginationItem
          label="<"
          onPageItemClicked={() =>
            handleOnPageItemClicked(`${Math.max(1, currentPage - 1)}`)
          }
        />
        {pagination.map((item, index) => (
          <PaginationItem
            key={index}
            label={item}
            selected={item === currentPage.toString()}
            onPageItemClicked={handleOnPageItemClicked}
          />
        ))}
        <PaginationItem
          label=">"
          onPageItemClicked={() =>
            handleOnPageItemClicked(`${Math.min(currentPage + 1, totalPages)}`)
          }
        />
        <PaginationItem
          label="Last"
          additionalClasses="rounded-r-lg"
          onPageItemClicked={() => handleOnPageItemClicked(`${totalPages}`)}
        />
      </ul>
    </nav>
  );
};

interface PaginationItemProps {
  label: string;
  selected?: boolean;
  additionalClasses?: string;
  onPageItemClicked: (page: string) => void;
}

const PaginationItem = ({
  label,
  selected = false,
  additionalClasses = '',
  onPageItemClicked,
}: PaginationItemProps) => {
  const noSelectedItemClasses =
    'leading-tight text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700';
  const selectedItemClasses =
    'text-blue-600 bg-blue-50 hover:bg-blue-100 hover:text-blue-700';

  return (
    <li>
      <a
        onClick={() => onPageItemClicked(label)}
        className={`px-3 py-2 border border-gray-300 cursor-pointer ${
          selected ? selectedItemClasses : noSelectedItemClasses
        } ${additionalClasses}`}>
        {label}
      </a>
    </li>
  );
};
