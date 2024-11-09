import React, { useState } from 'react';
import './styles.css';

const TeacherManagementDashboard = () => {
    const [teachers, setTeachers] = useState([
        {
            id: 1,
            name: 'firstName lastName',
            email: 'teacher@gmail.com',
            phone: '123-456-7890',
            profilePicture: 'https://via.placeholder.com/150',
            designation: 'Teacher',
            department: 'Mathematics',
            classes: [
                { name: 'Algebra', subject: 'Math', status: 'completed' },
                { name: 'Geometry', subject: 'Math', status: 'pending' }
            ],
            attendance: 95,
            feedback: 4.5,
            lessonCompletion: 80
        },
    ]);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Teacher Management Dashboard</h1>
            <input type="text" placeholder="Search Teachers..." className="mb-4 p-2 border rounded" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {teachers.map(teacher => (
                    <TeacherCard key={teacher.id} teacher={teacher} />
                ))}
            </div>
        </div>
    );
};

const TeacherCard = ({ teacher }) => (
    <div className="bg-white shadow-md rounded-lg p-4">
        <div className="flex items-center mb-4">
            <img src={teacher.profilePicture} alt={teacher.name} className="w-16 h-16 rounded-full mr-4" />
            <div>
                <h2 className="text-xl font-semibold">{teacher.name}</h2>
                <p>{teacher.designation} - {teacher.department}</p>
                <p>ID: {teacher.id}</p>
                <p>Email: {teacher.email}</p>
                <p>Phone: {teacher.phone}</p>
            </div>
        </div>
        <h3 className="font-bold">Classes</h3>
        <ul className="list-disc pl-5 mb-4">
            {teacher.classes.map((classItem, index) => (
                <li key={index}>
                    {classItem.name} ({classItem.subject}) - Status: {classItem.status}
                </li>
            ))}
        </ul>
        <h3 className="font-bold">Performance</h3>
        <p>Attendance: {teacher.attendance}%</p>
        <p>Feedback Rating: {teacher.feedback} / 5</p>
        <p>Lesson Plan Completion: {teacher.lessonCompletion}%</p>
        <div className="mt-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded mr-4">Edit Profile</button>
            <button className="bg-green-500 text-white px-4 py-2 rounded">Assign Classes</button>
        </div>
    </div>
);

export default TeacherManagementDashboard;
