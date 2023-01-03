import 'twin.macro'

export const Plus = () => (
  <a
    // Use the tw prop to add tailwind styles directly on jsx elements
    className="w-32 mb-10 p-5 block opacity-50 hover:bg-sky-700"
    href="https://github.com/ben-rogerson/twin.macro"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Icon />
  </a>
)

const Icon = () => (
  <svg className="w-6 h-6 hover:bg-sky-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
  </svg>
)