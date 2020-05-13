import React from 'react';

const Pagination = (props) => {
    const {loadNext, loadPrevious, currentPage} = props;
    return (
        <div className="row">
            <div className="col-12 mb-3 text-right">
              <button disabled={currentPage === 1 ? true : false} className="btn btn-primary mr-5" onClick={loadPrevious}>Previous</button>
              <button className="btn btn-primary" onClick={loadNext}>Next</button>
            </div>
          </div>
    )
}

export default Pagination;