import tw, { styled } from 'twin.macro';

type divWidth = {
  width?: string;
}

export const DefaultButton = tw.button`
    text-white bg-blue-700 
    hover:bg-blue-800 focus:ring-4 
    focus:ring-blue-300 font-medium 
    rounded-lg text-sm px-5 
    py-2.5 mr-2 mb-2 dark:bg-blue-600 
    dark:hover:bg-blue-700 
    focus:outline-none 
    dark:focus:ring-blue-800
`;

export const Container = styled.div(({ width }: divWidth) => [
  tw`${width ? width : 'w-full'}`,
  tw`px-36 py-12`
]);

export const Anchor = tw.a`
  font-medium text-blue-600 
  dark:text-blue-500 hover:underline
`;