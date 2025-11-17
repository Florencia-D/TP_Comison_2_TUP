export default function Table({ columns = [], data = [] }) {
  if (!data || data.length === 0) return <p>No hay datos para mostrar.</p>;

  return (
    <table className="min-w-full text-sm border">
      <thead className="bg-gray-100">
        <tr>
          {columns.map((col) => (
            <th key={col.key} className="px-3 py-2 text-left">{col.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, idx) => (
          <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
            {columns.map((col) => (
              <td key={col.key} className="px-3 py-2">{row[col.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
