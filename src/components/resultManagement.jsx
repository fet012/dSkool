import { useState, useEffect } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import 'tailwindcss/tailwind.css';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const ResultManagementSystem = () => {
    const [studentInfo, setStudentInfo] = useState({
        id: '',
        name: '',
        class: '',
        session: ''
    });
    const [results, setResults] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [year, setYear] = useState('6'); // Default year set to 6

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setStudentInfo(prevInfo => ({ ...prevInfo, [name]: value }));
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleYearChange = (e) => {
        setYear(e.target.value);
    };

    const totalScore = results.reduce((acc, curr) => acc + curr.score, 0);
    const percentage = results.length ? (totalScore / (results.length * 100)) * 100 : 0;
    const grade = percentage >= 90 ? 'A' : percentage >= 80 ? 'B' : percentage >= 70 ? 'C' : 'D';

    const data = {
        labels: results.map(result => result.subject),
        datasets: [
            {
                label: 'Scores',
                data: results.map(result => result.score),
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
        ],
    };

    const pieData = {
        labels: ['Passed', 'Failed'],
        datasets: [
            {
                data: [percentage, 100 - percentage],
                backgroundColor: ['#36A2EB', '#FF6384'],
            },
        ],
    };

    useEffect(() => {
        // Cleanup function to reset chart instances if necessary
        return () => {
            // Any necessary cleanup can be performed here
        };
    }, [results]);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Result Management System</h1>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Search Student"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="border p-2 rounded w-full"
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded shadow">
                    <h2 className="font-semibold">Student Information</h2>
                    {['id', 'name', 'class', 'session'].map((field, index) => (
                        <input
                            key={index}
                            name={field}
                            placeholder={capitalizeFirstLetter(field)}
                            onChange={handleInputChange}
                            className="border p-2 rounded w-full mb-2"
                        />
                    ))}
                    <select
                        name="year"
                        value={year}
                        onChange={handleYearChange}
                        className="border p-2 rounded w-full mb-2"
                    >
                        {[...Array(7).keys()].map(i => (
                            <option key={i} value={i + 6}>{i + 6}</option>
                        ))}
                    </select>
                </div>
                <div className="bg-white p-4 rounded shadow">
                    <h2 className="font-semibold">Result Summary</h2>
                    <p>Total Score: {totalScore}</p>
                    <p>Percentage: {percentage.toFixed(2)}%</p>
                    <p>Grade: {grade}</p>
                </div>
            </div>
            <div className="bg-white p-4 rounded shadow mt-4">
                <h2 className="font-semibold">Subject-wise Results</h2>
                {results.map((result, index) => (
                    <div key={index}>
                        <p>{result.subject}: {result.score} / 100</p>
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="bg-white p-4 rounded shadow">
                    <h2 className="font-semibold">Bar Chart</h2>
                    <Bar data={data} />
                </div>
                <div className="bg-white p-4 rounded shadow">
                    <h2 className="font-semibold">Pie Chart</h2>
                    <Pie data={pieData} />
                </div>
            </div>
            <div className="mt-4">
                <button className="bg-blue-500 text-white p-2 rounded mr-2">View Detailed Report</button>
                <button className="bg-green-500 text-white p-2 rounded mr-2">Print Result</button>
                <button className="bg-yellow-500 text-white p-2 rounded">Export to PDF/CSV</button>
            </div>
        </div>
    );
};

const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

export default ResultManagementSystem;
