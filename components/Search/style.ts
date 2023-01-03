import tw, { styled } from 'twin.macro';

export const Input = tw.input`
  block w-full 
  px-4 py-2 mb-2 md:mb-0 md:mr-2 
  text-xl font-normal text-gray-700 
  bg-white bg-clip-padding border 
  border-solid border-gray-300 
  rounded transition ease-in-out 
  m-0 focus:text-gray-700 focus:bg-white 
  focus:border-blue-600 
  focus:outline-none
`;

export const FilterBtn = styled.button(({ selected = false }: {selected: boolean}) => [
  tw`text-blue-700 hover:text-white border 
  border-blue-700 hover:bg-blue-800 
  focus:ring-4 focus:outline-none 
  focus:ring-blue-300 font-medium 
  rounded-lg text-sm px-5 py-2.5 
  text-center mr-2 my-2 dark:border-blue-500 
  dark:hover:text-white 
  dark:hover:bg-blue-600 
  dark:focus:ring-blue-800`,
  selected ? tw`bg-blue-800 text-white` : tw`dark:bg-gray-800 dark:text-blue-500`
]);

export const SearchCancelContainer = tw.div`
  absolute inset-y-0 right-0 flex items-center px-3 mr-2
`;

export const SearchContainer = tw.div`
  relative
  rounded-md
  shadow-sm
  container
  flex
  justify-center
  items-center
  flex-grow
`;