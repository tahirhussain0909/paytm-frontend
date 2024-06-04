export default function Bottom({ label, onClick }) {
  return (
    <div>
      <button
        onClick={onClick}
        className='w-full px-5 py-2.5 me-2 mb-2 rounded-lg text-sm font-medium text-white bg-gray-800 hover:bg-gray-900 focus:outline-none foucs:ring-4 foucs:ring-gray-300'
      >
        {label}
      </button>
    </div>
  )
}
