const Button = ({ children, isActive, onClick }: any) => (
  <button
    onClick={onClick}
    className={`border border-gray-600 capitalize p-2 text-xs ${
      isActive ? 'bg-gray-600 hover:unset text-white' : 'hover:bg-gray-400'
    }`}
  >
    {children}
  </button>
)

export default Button
