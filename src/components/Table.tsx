import React, { useState } from "react";

type TableColumn = {
  key: string;
  label: string;
};

type TableProps = {
  data: any[];
  columns: TableColumn[];
  rowsPerPageOptions?: number[];
};

const Table: React.FC<TableProps> = ({
  data,
  columns,
  rowsPerPageOptions = [10, 20, 50, 100],
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageOptions[0]);

  const totalPages = Math.ceil(data?.length / rowsPerPage);
  const paginatedData = data?.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const handleRowsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRowsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  return (
    <div className="w-full text-sm">
      {/* Rounded Wrapper */}
      <div className="overflow-hidden rounded-lg shadow">
        <table className="w-full border-separate border-spacing-0">
          <thead className="bg-[#131210] text-white">
            <tr>
              {columns.map((col) => (
                <th key={col.key} className="text-left px-4 py-2">
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-white bg-[#1E1E1E]">
            {paginatedData?.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="rounded-b-lg border border-[#4C4C4C]"
              >
                {columns.map((col) => (
                  <td
                    key={col.key}
                    className="px-4 py-2 border-b border-[#4C4C4C]"
                  >
                    {row[col.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center mt-4 text-sm">
        {/* Rows per page */}
        <div className="flex items-center gap-2">
          <span>Rows per page:</span>
          <select
            value={rowsPerPage}
            onChange={handleRowsPerPageChange}
            className=" rounded px-2 py-1 bg-[#374151]"
          >
            {rowsPerPageOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        {/* Pagination */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 border rounded disabled:opacity-30"
          >
            Prev
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-3 py-1 border rounded disabled:opacity-30"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Table;
