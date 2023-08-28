interface PaginationProps {
    page: number;
    onPageChange: (page: number) => void;
    loading: boolean;
}

const Pagination = ({ page, onPageChange, loading }: PaginationProps) => {
    const handlePageChange = (newPage: number) => {
        if (!loading) {
            onPageChange(newPage);
        }
    };

    return (
        <div className="pagination">
            <button onClick={() => handlePageChange(page - 1)} disabled={loading || page === 1}>
                Previous
            </button>
            <span>Page {page}</span>
            <button onClick={() => handlePageChange(page + 1)} disabled={loading}>
                Next
            </button>
        </div>
    );
}

export default Pagination;
