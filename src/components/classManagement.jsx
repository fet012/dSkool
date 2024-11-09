import React, { useState } from 'react';

const ClassManagementSystem = () => {
    const [classInfo, setClassInfo] = useState({
        classId: '',
        className: '',
        teacher: '',
        session: '',
        schedule: ''
    });
    const [students, setStudents] = useState([]);
    const [assignments, setAssignments] = useState([]);
    const [grades, setGrades] = useState([]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setClassInfo(prev => ({ ...prev, [name]: value }));
    };

    const addStudent = (student) => {
        setStudents(prev => [...prev, student]);
    };

    const removeStudent = (studentId) => {
        setStudents(prev => prev.filter(student => student.id !== studentId));
    };

    const addAssignment = (assignment) => {
        setAssignments(prev => [...prev, assignment]);
    };

    const calculateAverageGrade = () => {
        const total = grades.reduce((acc, grade) => acc + grade, 0);
        return (total / grades.length) || 0;
    };

    return (
        <div className="max-w-2xl mx-auto p-5">
            <div className="mb-5 p-4 border border-gray-300 rounded">
                <h2 className="text-xl font-semibold">Class Information</h2>
                {['classId', 'className', 'teacher', 'session', 'schedule'].map(field => (
                    <input
                        key={field}
                        type="text"
                        name={field}
                        placeholder={field.replace(/([A-Z])/g, ' $1').trim()}
                        onChange={handleInputChange}
                        className="block mt-2 p-2 border border-gray-300 rounded w-full"
                    />
                ))}
            </div>

            <div className="mb-5 p-4 border border-gray-300 rounded">
                <h2 className="text-xl font-semibold">Student List</h2>
                {students.map(student => (
                    <div key={student.id} className="flex justify-between items-center">
                        <p>{student.name} - {student.id} - {student.email}</p>
                        <button onClick={() => removeStudent(student.id)} className="ml-4 bg-red-500 text-white p-2 rounded">Remove</button>
                    </div>
                ))}
                <button onClick={() => addStudent({ id: 'newId', name: 'New Student', email: 'new@student.com' })} className="mt-2 bg-blue-500 text-white p-2 rounded">Add Student</button>
            </div>

            <div className="mb-5 p-4 border border-gray-300 rounded">
                <h2 className="text-xl font-semibold">Assignments and Materials</h2>
                {assignments.map((assignment, index) => (
                    <div key={index}>
                        <p>{assignment.title}</p>
                    </div>
                ))}
                <button onClick={() => addAssignment({ title: 'New Assignment' })} className="mt-2 bg-blue-500 text-white p-2 rounded">Add Assignment</button>
            </div>

            <div className="mb-5 p-4 border border-gray-300 rounded">
                <h2 className="text-xl font-semibold">Grade and Performance</h2>
                <p>Class Average Grade: {calculateAverageGrade()}</p>
            </div>

            <div className="flex flex-wrap gap-2">
                {['Add/Remove Students', 'Assign/Unassign Teachers', 'Create/Edit Assignments', 'View Class Schedule'].map(action => (
                    <button key={action} className="bg-gray-800 text-white p-2 rounded flex-1 sm:flex-none">{action}</button>
                ))}
            </div>
        </div>
    );
};

export default ClassManagementSystem;
