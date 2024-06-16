const Loader = () => <div className="loader"></div>;

const Spinner = () => {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <Loader />
    </div>
  )
}

export default Spinner;