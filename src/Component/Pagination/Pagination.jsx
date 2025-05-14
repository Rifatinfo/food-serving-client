
const Pagination = ({ handlePrevious, handleNext,  setCurrentPage,  currentPage, pages, itemPerPage,setItemPerPage}) => {
    return (
        <div>
            <div className="flex gap-1 mt-10 mb-10 ">
                <div className="flex justify-center space-x-1 item-center ">
                    {/* Previous Button */}
                    <button
                        onClick={handlePrevious}
                        title="Previous"
                        type="button"
                        className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white transition-all"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-4"
                        >
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                    </button>

                    {/* Page Numbers */}

                    <div className="flex item-center gap-1">
                        {pages.map((page, idx) => (
                            <div key={idx}>
                                <button
                                    onClick={() => setCurrentPage(page)}
                                    type="button"
                                    className={`${currentPage === page ? "inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border rounded shadow-md bg-yellow-600 text-white border-yellow-600" : "bg-white text-yellow-600 border-1 border-yellow-600 w-8 h-8 rounded shadow-md"}`}
                                >
                                    {page + 1}
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Next Button */}
                    <button
                        onClick={handleNext}
                        title="Next"
                        type="button"
                        className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white transition-all"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-4"
                        >
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </button>
                </div>
                <div>
                    <select
                        className="inline-flex items-center justify-center text-sm font-semibold 
                      border border-yellow-600 rounded-md shadow-md bg-yellow-600 
                      text-white px-1 py-1 focus:outline-none focus:ring-2 
                      "
                        value={itemPerPage}
                        onChange={(e) => {
                            setItemPerPage(Number(e.target.value));
                            setCurrentPage(0);
                        }}
                    >
                        <option value="42">24</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Pagination;