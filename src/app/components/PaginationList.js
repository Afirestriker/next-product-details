const PaginationList = ({ totalPages, currentPage, setCurrentPage }) => {
    const pages = [...Array(totalPages)];

    const paginationClickHandler = ({pageNumber = 0, btnType = ''}) => {
        (btnType === 'prev' && currentPage > 1) && setCurrentPage(prevState => prevState - 1);
        (btnType === 'next' && currentPage < totalPages) && setCurrentPage(prevState => prevState + 1);
        (btnType === '') && setCurrentPage(pageNumber);
    }

    return (
        <div className="d-flex justify-content-center">
            <nav>
                <ul className="pagination justify-content-end">
                    <li className="page-item">
                        <div className={`page-link text-dark ${currentPage === 1  ? 'disabled' : ''}`} role="button" onClick={() => paginationClickHandler({btnType:'prev'})}>
                            Previous
                        </div>
                    </li>
                    {
                        pages.map((_, indx) => {
                            const pageNumber = indx + 1;

                            return (
                                <li key={indx} className="page-item">
                                    <div className={`page-link ${pageNumber !== currentPage ? "text-dark" : "active text-white"}`} role="button" onClick={() => paginationClickHandler({pageNumber})}>
                                        {pageNumber}
                                    </div>
                                </li>
                            )
                        })
                    }
                    <li className="page-item">
                        <div className={`page-link text-dark ${currentPage === totalPages ? 'disabled' : ''}`} role="button" onClick={() => paginationClickHandler({btnType: 'next'})}>
                            Next
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default PaginationList;
