export default function DataTable({ tableData }) {
  return (
    <div className="mt-10 w-full max-w-4xl bg-white shadow-md rounded-2xl p-4 sm:p-6 border border-gray-100">
    <h2 className="text-lg font-semibold mb-3 text-gray-700">User Submissions</h2>


      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-200 rounded-lg text-sm sm:text-base">
         <thead className="bg-indigo-100 text-gray-800">

            <tr>
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Email</th>
              <th className="p-2 border">Phone</th>
              <th className="p-2 border">Timestamp</th>
            </tr>
          </thead>

          <tbody>
            {tableData.map((row, i) => (
              <tr
                key={i}
                className="odd:bg-white even:bg-gray-50 hover:bg-blue-50 transition"
              >
                <td className="border p-2">{row.name}</td>
                <td className="border p-2">{row.email}</td>
                <td className="border p-2">{row.phone}</td>
                <td className="border p-2">{row.timestamp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
