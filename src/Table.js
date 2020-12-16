import React from "react";
import "./Table.css";

function Table({ countries }) {
  return (
    <div className="table">
      <tr>
        <td>
          <strong>Negara</strong>
        </td>
        <td>
          <strong>Kasus</strong>
        </td>
        <td>
          <strong>Kasus Aktif</strong>
        </td>
        <td>
          <strong>Pupulasi</strong>
        </td>
      </tr>
      {countries.map(({ country, cases, active, population }) => (
        <tr>
          <td>{country}</td>
          <td>
            <strong>{cases}</strong>
          </td>
          <td>
            <strong>{active}</strong>
          </td>
          <td>
            <strong>{population}</strong>
          </td>
        </tr>
      ))}
    </div>
  );
}

export default Table;