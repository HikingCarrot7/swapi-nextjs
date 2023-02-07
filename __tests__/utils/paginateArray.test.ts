import { paginate } from '../../utils/paginateArray';

it.each`
  array                          | pageNumber | pageSize | expected
  ${[1, 2, 3, 4, 5, 6, 7, 8, 9]} | ${1}       | ${5}     | ${[1, 2, 3, 4, 5]}
  ${[1, 2, 3, 4, 5, 6, 7, 8, 9]} | ${2}       | ${5}     | ${[6, 7, 8, 9]}
  ${[1, 2, 3, 4, 5, 6, 7, 8, 9]} | ${1}       | ${10}    | ${[1, 2, 3, 4, 5, 6, 7, 8, 9]}
  ${[1, 2, 3, 4, 5, 6, 7, 8, 9]} | ${1}       | ${1}     | ${[1]}
`(
  'when $array with page number $pageNumber and page size $pageSize then returns $expected',
  ({ array, pageNumber, pageSize, expected }) => {
    const result = paginate({ array, pageNumber, pageSize });
    expect(result).toEqual(expected);
  },
);

it('should return empty array when page not found', () => {
  const array = [1, 2, 3, 4, 5];
  const result = paginate({ array, pageNumber: 2, pageSize: 5 });
  expect(result).toEqual([]);
});

export {};
