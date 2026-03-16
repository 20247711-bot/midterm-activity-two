import React from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import Navigation from './Components/NavBar';
import Form from './Components/StudentForm';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => <div className="container mt-4">Home Page</div>;

const Register = () => (
  <div className="container mt-4">
    <h2>Register Page</h2>
    <Form />
  </div>
);

const Student = () => {
  const { id } = useParams(); 
  return <div className="container mt-4">Student Profile for ID: {id}</div>;
};

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/student/:id" element={<Student />} />
      </Routes>
    </Router>
  );
};

export default App;