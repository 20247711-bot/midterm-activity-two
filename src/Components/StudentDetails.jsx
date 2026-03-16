import React from 'react';
import { useParams } from 'react-router-dom';

const StudentDetails = () => {
  
  const { id } = useParams();

  const students = [
    { id: 1, name: 'John Doe', course: 'Math', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', course: 'Physics', email: 'jane.smith@example.com' },
    { id: 3, name: 'Alice Brown', course: 'Chemistry', email: 'alice.brown@example.com' }
  ];


  const student = students.find((student) => student.id === parseInt(id));

  if (!student) {
    return <div className="container mt-4">Student not found!</div>;
  }
  return (
    <div className="container mt-4">
      <h2>Student Details</h2>
      <p><strong>Name:</strong> {student.name}</p>
      <p><strong>Course:</strong> {student.course}</p>
      <p><strong>Email:</strong> {student.email}</p>
    </div>
  );
};

export default StudentDetails;