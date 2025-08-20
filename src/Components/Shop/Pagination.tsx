interface PaginationProps {
  handlePageChange: (para: number) => void;
  totalPages: number;
  currentPage: number;
}

const Pagination: React.FC<PaginationProps> = ({
  handlePageChange,
  totalPages,
  currentPage,
}) => {
  const getPaginationButtons = () => {
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, currentPage + 2);
    const buttons: number[] = [];
    if (currentPage - 2 < 1) {
      endPage = Math.min(totalPages, endPage + (2 - currentPage));
    }
    if (currentPage + 2 >= totalPages) {
      startPage = Math.min(startPage, totalPages - (totalPages - currentPage));
      console.log(startPage);
    }

    for (let page = startPage; page <= endPage; page++) {
      buttons.push(page);
    }
    return buttons;
  };

  return (
    <section
      className={`  flex  sm:flex-row justify-between items-center mt-5 w-fit mx-auto text-white`}
    >
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="border px-4 py-2 mx-2 rounded-full"
      >
        Previous
      </button>

      <section className="flex flex-wrap justify-center mx-10 gap-5">
        {getPaginationButtons().map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`border px-4 py-2 mx-1 rounded-full ${
              page === currentPage
                ? "bg-white text-black"
                : "bg-black text-white"
            }`}
          >
            {page}
          </button>
        ))}
      </section>

      <button
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
        className="border px-4 py-2 mx-2 rounded-full cursor-pointer"
      >
        Next
      </button>
    </section>
  );
};

export default Pagination;
