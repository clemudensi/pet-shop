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
  tw`px-48 py-12`
]);

export const Anchor = tw.a`
  font-medium text-blue-600 
  dark:text-blue-500 hover:underline
`;

export const CenterItems = styled.span<{
  padding?: string;
}>`
  ${tw`
    flex justify-center
    w-full
  `}
  padding: ${props => (props.padding ? `${props.padding}` : 0 )};
`;

export const Overlay = styled.div`
  justify-content: center;
  align-items: center;
  position: fixed;
	color: gray;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
  pointer-events: none;
  opacity: 0;
	z-index: 200;
	padding: 0;
	background: rgba(0, 0, 0, 0.5);
	transition: 0.3s opacity cubic-bezier(0, 0.75, 0, 1);
`;

export const SvgContainer = styled.div<{
  color?: string,
  height?: number,
  width?: number,
  hoverColor?: string,
  transform: number,
}>`
  height: auto;
  width: auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${props => (props.color ? `${props.color}` : 'inherit')};
  cursor: pointer;
  & svg {
    height: ${props => (props.height ? `calc(${props.height}px + 0.5rem)` : null)};
    width: ${props => (props.width ? `calc(.2vw + ${props.width}px)` : `.5rem`)};
  }
  &:hover {
    color: ${props => (props.hoverColor ? `${props.hoverColor}` : 'blue')};
    transform: scale(${props => (props.transform ? props.transform : 1)});
  }
`;
export const ContainerSpaceEvenly = tw.div`flex justify-between`;

export const GridCol2 = tw.div`grid md:grid-cols-2 md:gap-6`;

export const GridSectionWrapper = tw.div`relative z-0 mb-6 w-full`;

export const DropdownSelect = tw.select`
  block py-2.5 px-0 w-full text-sm 
  text-gray-500 bg-transparent 
  border-0 border-b-2 border-gray-200 
  appearance-none dark:text-gray-400 
  dark:border-gray-700 focus:outline-none 
  focus:ring-0 focus:border-gray-200
`;

export const ContainerFlex = tw.div`flex my-6`;