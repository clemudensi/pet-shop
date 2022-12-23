import tw, { styled } from 'twin.macro';

export const TableContainer = styled.div`
  ${tw`
    overflow-x-auto relative shadow-md sm:rounded-lg
  `}
  max-height: 80vh;
  overflow-y: scroll;
`;

export const Table = tw.table`
  w-full text-sm text-left 
  text-gray-500 dark:text-gray-400
`;

export const Head = tw.thead`
  text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400
`;

export const HeadRow = tw.tr``;

export const HeadData = tw.th`py-6 px-6`;

export const RowData = styled.tr(({ isServiced }: {isServiced: boolean}) => [
  tw`bg-white border-b dark:border-gray-700 hover:bg-gray-50`,
  isServiced ? tw`bg-neutral-300 hover:border-blue-500 hover:bg-neutral-300` : tw`dark:bg-gray-800 dark:hover:bg-gray-600`
]);

export const TableBody = tw.tbody``;

export const RowHeadData = tw.th`py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white`;
export const TableData = tw.td`py-4 px-6`;
