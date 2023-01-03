import tw from 'twin.macro';

export const Form = tw.form``;

export const FormInputContainer = tw.div`relative z-0 mb-6 w-full`;

export const FormInput = tw.input`
  block py-2.5 px-0 w-full text-sm 
  text-gray-900 bg-transparent border-0 
  border-b-2 border-gray-300 appearance-none 
  dark:text-white dark:border-gray-600 
  dark:focus:border-blue-500 
  focus:outline-none focus:ring-0 
  focus:border-blue-600
`;

export const FormInputLabel = tw.label`
  peer-focus:font-medium absolute text-sm 
  text-gray-500 dark:text-gray-400 duration-300 
  transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
  peer-focus:left-0 peer-focus:text-blue-600 
  peer-focus:dark:text-blue-500 
  peer-placeholder-shown:scale-100 
  peer-placeholder-shown:translate-y-0 
  peer-focus:scale-75 peer-focus:-translate-y-6
`;

export const DialogIconBtn = tw.button`
  absolute top-3 right-2.5 text-gray-400 
  bg-transparent hover:bg-gray-200 
  hover:text-gray-900 rounded-lg text-sm 
  p-1.5 ml-auto inline-flex items-center 
  dark:hover:bg-gray-800 dark:hover:text-white
`;

export const DialogDeleteBtn = tw.button`
  text-white bg-red-600 hover:bg-red-800 
  focus:ring-4 focus:outline-none 
  focus:ring-red-300 dark:focus:ring-red-800 
  font-medium rounded-lg text-sm inline-flex 
  items-center px-5 py-2.5 text-center mr-2
`;

export const DialogCancelBtn = tw.button`
  text-gray-500 bg-white hover:bg-gray-100 
  focus:ring-4 focus:outline-none 
  focus:ring-gray-200 rounded-lg border 
  border-gray-200 text-sm font-medium 
  px-5 py-2.5 hover:text-gray-900 focus:z-10 
  dark:bg-gray-700 dark:text-gray-300 
  dark:border-gray-500 dark:hover:text-white 
  dark:hover:bg-gray-600 
  dark:focus:ring-gray-600
`;

export const DialogTitle = tw.h3`
  mb-5 text-lg font-normal text-gray-500 dark:text-gray-400
`;

export const DialogContentSection = tw.div`
  p-6 text-center
`;

export const DialogInnerContainer = tw.div`
  relative bg-white rounded-lg shadow dark:bg-gray-700
`;

export const DialogOuterContainer = tw.div`
  relative w-full h-full max-w-md md:h-auto
`;