import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

export const InvestmentInfo = ({ items, handleDelete }) => {
  return (
    <div id="wholeBody">
      <h3>Investment List</h3>
      <p id="clientInfoPara">Client Details</p>
      <Table responsive striped bordered hover >
        <thead>
          <tr>
            <th>Investment ID</th>
            <th>Investment Type</th>
            <th>Money Invested</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>
                <label>{item.id}</label>
              </td>
              <td>
                <label>{item.InvestmentType}</label>
              </td>
              <td>
                <label>{item.MoneyInvested}</label>
              </td>
              <td>
                <Button variant="link">Edit</Button>
              </td>
              <td>
                <Button variant="link" onClick={() => handleDelete(item)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      
    </div>
  );
};