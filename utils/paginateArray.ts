interface PaginateProps {
  array: any[];
  pageSize: number;
  pageNumber: number;
}

// Recovered from https://stackoverflow.com/questions/42761068/paginate-javascript-array
export const paginate = ({ array, pageSize, pageNumber }: PaginateProps) => {
  // Human-readable page numbers usually start with 1, so we reduce 1 in the first argument
  return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
};
