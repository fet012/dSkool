import { useState, useEffect } from 'react';

const CustomTable = ({ headers, data, onPayment }) => (
  <div className="overflow-x-auto">
    <table className="min-w-full">
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index} className="px-4 py-2 text-left">{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index} className="hover:bg-gray-100">
            {Object.values(row).map((value, idx) => (
              <td key={idx} className="px-4 py-2">{value || 'N/A'}</td>
            ))}
            <td className="px-4 py-2">
              <button 
                onClick={() => onPayment(row.id)} 
                className="text-blue-500 hover:underline"
              >
                Pay
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const SchoolFeesManagement = () => {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch('/api/students');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setStudents(data);
      } catch (error) {
        console.error('Error fetching students:', error);
        // Optionally, you can set an error state to display a message to the user
      }
    };
    fetchStudents();
  }, []);

  const handleSearch = (e) => setSearch(e.target.value);
  const handleFilter = (e) => setFilter(e.target.value);
  const handlePayment = (id) => {
    console.log(`Initiating payment for student ID: ${id}`);
  };

  const filteredStudents = students.filter(student => 
    student.name.toLowerCase().includes(search.toLowerCase()) || 
    student.id.toString().includes(search)
  ).filter(student => 
    filter ? student.class === filter : true
  );

  return (
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">
        School Fees Management
      </h1>
      <div className="flex flex-col sm:flex-row justify-between mb-4">
        <input
          type="search"
          value={search}
          onChange={handleSearch}
          placeholder="Search by name or ID"
          className="w-full sm:w-1/2 py-2 pl-10 text-sm text-gray-700 mb-2 sm:mb-0"
        />
        <select
          value={filter}
          onChange={handleFilter}
          className="w-full sm:w-1/4 py-2 pl-10 text-sm text-gray-700"
        >
          <option value="">Filter by class</option>
          <option value="9th">Year 9</option>
          <option value="10th">Year 10</option>
          <option value="11th">Year 11</option>
        </select>
      </div>
      <CustomTable 
        headers={['Student Name', 'Student ID', 'Class', 'Term', 'Fee Status', 'Amount', 'Payment Date', 'Action']} 
        data={filteredStudents} 
        onPayment={handlePayment} 
      />
      <div className="mt-4">
        <h2 className="text-lg font-semibold">Total Fees Collected: {/* Total Fees Logic */}</h2>
        <h2 className="text-lg font-semibold">Total Pending Fees: {/* Total Pending Logic */}</h2>
      </div>
    </div>
  );
};

export default SchoolFeesManagement;
