import { Fragment } from "react";

const Table = ({ data, config, keyFn }) => {
  const renderHeaders = config.map((cloumn) => {
    if (cloumn.header) {
      return <Fragment key={cloumn.label}>{cloumn.header()}</Fragment>;
    }
    return <th key={cloumn.label}>{cloumn.label}</th>;
  });

  const renderedRows = data.map((rowData) => {
    const renderedCells = config.map((column) => {
      return (
        <td key={column.label} className="p-3">
          {column.render(rowData)}
        </td>
      );
    });
    return (
      <tr className="border-b" key={keyFn(rowData)}>
        {renderedCells}
      </tr>
    );
  });

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{renderHeaders}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
};

export default Table;
