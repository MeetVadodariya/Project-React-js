import React, { useState } from "react";
import { CSmartTable } from "@coreui/react-pro";
import "../styles.css";
import "../tableStyles.css";

const ViewBooks = ({ books = [] }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 5;

  const items = books.map((book, index) => ({
    id: index + 1,
    image: book.image,
    title: book.title,
    author: book.author,
    genre: book.genre,
    price: `$${book.price}`,
  }));

  const columns = [
    { key: "image", label: "Cover", filter: false, sorter: false },
    { key: "title", label: "Title" },
    { key: "author", label: "Author" },
    { key: "genre", label: "Genre" },
    { key: "price", label: "Price" },
  ];

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = items.slice(indexOfFirstBook, indexOfLastBook);
  const totalPages = Math.ceil(items.length / booksPerPage);

  return (
    <div className="view-books-container">
      <h2 className="table-title">View Books</h2>
      {books.length === 0 ? (
        <p className="no-books">No books available.</p>
      ) : (
        <>
          <CSmartTable
            items={currentBooks}
            columns={columns}
            columnFilter
            columnSorter
            tableProps={{ hover: true, className: "custom-table" }}
            scopedColumns={{
              image: (item) => (
                <td>
                  <img src={item.image} alt={item.title} className="book-image" />
                </td>
              ),
            }}
          />
          <div className="pagination">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="pagination-button"
            >
              Prev
            </button>
            <span className="page-number"> Page {currentPage} of {totalPages} </span>
            <button
              onClick={() => setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev))}
              disabled={currentPage >= totalPages}
              className="pagination-button"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ViewBooks;