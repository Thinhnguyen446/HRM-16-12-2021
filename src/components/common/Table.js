import React, { useState } from "react";
import { Pagination } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import PropTypes from 'prop-types'
import styled from "styled-components";
import Modal from "./Modal";
import Search from "./Search";

function Table({ list }) {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [editingValue, setEditingValue] = useState(null);
  const handleOpenEdit = (item) => {
    setIsModalOpened(true);
    setEditingValue(item);
  }
  const handleCloseEdit = () => {
    setIsModalOpened(false);
  }
  const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage, setItemsPerPage] = useState(4)
    const indexOfLastItem = currentPage*itemsPerPage;
    const indexOfFirstItem = indexOfLastItem-itemsPerPage;
    const currentItems = list?.slice(indexOfFirstItem, indexOfLastItem);
    
    const handlePageNumbers = () => {
        const pageNumbers = [];
        for(let i = 1; i <= Math.ceil(list?.length/ itemsPerPage); i++) {
            pageNumbers.push(i)  
        }
        return pageNumbers;
    }

    const handleClickPage = (e) => {
      setCurrentPage(e.target.id);
    }

    const renderPageNumbers = handlePageNumbers().map(number => {
        return (
            <li 
            onClick={handleClickPage}
            className='="page-item page-link'
            id={number}
            >
                {number}
            </li>
        )
    });
  
  return (
    <>
      <Search />
      <Modal isModalOpened={isModalOpened} handleCloseModal={handleCloseEdit} title="sua nhan su" editingValue={editingValue} type="edit"/>
      <TableWrapper>
      <div
        className="table-responsive mb-0"
        data-list='{"valueNames": ["goal-project", "goal-status", "goal-progress", "goal-date"]}'
      >
        <table className="table table-sm table-nowrap card-table">
          <thead>
            <tr>
              <th>
                <a
                  href="#"
                  className="text-muted list-sort"
                  data-sort="goal-project"
                >
                  Ma nhan su
                </a>
              </th>
              <th>
                <a
                  href="#"
                  className="text-muted list-sort"
                  data-sort="goal-project"
                >
                  Ten nhan su
                </a>
              </th>
              <th>
                <a
                  href="#"
                  className="text-muted list-sort"
                  data-sort="goal-project"
                >
                  Avatar
                </a>
              </th>
              <th>
                <a
                  href="#"
                  className="text-muted list-sort"
                  data-sort="goal-project"
                >
                  Ngay sinh
                </a>
              </th>
              <th>
                <a
                  href="#"
                  className="text-muted list-sort"
                  data-sort="goal-project"
                >
                  Gioi tinh
                </a>
              </th>
              <th>
                <a
                  href="#"
                  className="text-muted list-sort"
                  data-sort="goal-project"
                >
                  Phong ban
                </a>
              </th>
              <th>
                <a
                  href="#"
                  className="text-muted list-sort"
                  data-sort="goal-project"
                >
                  So dien thoai
                </a>
              </th>
              <th>
                <a
                  href="#"
                  className="text-muted list-sort"
                  data-sort="goal-project"
                >
                  Status
                </a>
              </th>
            </tr>
          </thead>
          <tbody className="list">
            {currentItems && currentItems.map((item) => (
              <tr className="item-row" key={item.fields.id} onClick={() => {handleOpenEdit(item)}}>
                <td>
                  < span>{item.fields.Id}</span>
                </td>
                <td>
                  < span>{item.fields.Name}</span>
                </td>
                <td>
                  {item.fields.Avatar && (
                    <img
                    src={item.fields.Avatar[0].url}
                    alt={item.fields.fileName}
                    width="50"
                    height="50"
                    className="rounded float"
                    />
                  )}
                </td>
                <td>
                  < span>{item.fields.DOB}</span>
                </td>
                <td>
                  < span>{item.fields.Gender}</span>
                </td>
                <td>
                  < span>{item.fields.DepartmentName && item.fields.DepartmentName.map((item) => (
                    <span key={item}>{item}, </span>
                  ))}</span>
                </td>
                <td>
                  < span>{item.fields.Phone}</span>
                </td>
                <td>
                  < span>{item.fields.Status}</span>
                </td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>
      </TableWrapper>
      <PaginationWraper>
      <div className="card">
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item"><a class="page-link" href="#!">Previous</a></li>
            {renderPageNumbers}
          <li class="page-item"><a class="page-link" href="#!">Next</a></li>
        </ul>
      </nav>
      </div>
      </PaginationWraper>
    </>
  );
}
//Props mac dinh neu khong duoc truyen props
Table.defaultProps = {
  list: [],
}
//kieu du lieu cua props truyen vao
Table.protoTypes = {
  list: PropTypes.array,
}
export default Table;

export const PaginationWraper = styled.div`
  display: flex;
  justify-content: center;
`;

export const TableWrapper = styled.div`
  *:hover {
    cursor: pointer;
  }
`;
