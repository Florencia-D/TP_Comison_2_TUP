// src/components/Table.jsx
const Table = ({ columns, data, actions }) => (
  <table className="min-w-full border border-gray-300">
    <thead className="bg-gray-100">
      <tr>
        {columns.map((col) => (
          <th key={col} className="p-2 border">{col}</th>
        ))}
        {actions && <th className="p-2 border">Acciones</th>}
      </tr>
    </thead>
    <tbody>
      {data.map((row, idx) => (
        <tr key={idx} className="even:bg-gray-50">
          {columns.map((col) => (
            <td key={col} className="p-2 border">{row[col]}</td>
          ))}
          {actions && <td className="p-2 border flex gap-2">{actions(row)}</td>}
        </tr>
      ))}
    </tbody>
  </table>
);

export default Table;
