
function Spinner() {
  return (
    <div className="">
      <div className="inline-block border-gray-800 border-r-slate-300 dark:border-slate-200 dark:border-r-slate-800 h-8 w-8 absolute top-76  right-1/2 animate-spin rounded-full border-4 border-solid " role="status">
        <span  className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
      </div>
    </div>
  )
}

export default Spinner