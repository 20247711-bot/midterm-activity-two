import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    course: ''
  });

  const validateName = (name) => {
    return name === '' ? 'Name is required' : '';
  };

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return email === '' ? 'Email is required' : !emailPattern.test(email) ? 'Invalid email format' : '';
  };

  const validateCourse = (course) => {
    return course === '' ? 'Course is required' : '';
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    
    setFormData({
      ...formData,
      [name]: value,
    });

    
    if (name === 'name') setErrors({ ...errors, name: validateName(value) });
    if (name === 'email') setErrors({ ...errors, email: validateEmail(value) });
    if (name === 'course') setErrors({ ...errors, course: validateCourse(value) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nameError = validateName(formData.name);
    const emailError = validateEmail(formData.email);
    const courseError = validateCourse(formData.course);

    if (nameError || emailError || courseError) {
      setErrors({ name: nameError, email: emailError, course: courseError });
    } else {
      alert('Form submitted successfully!');
    }
  };

  const isFormValid = !errors.name && !errors.email && !errors.course;

  return (
    <div className="container mt-4">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          {errors.name && <div className="text-danger">{errors.name}</div>}
        </div>

   
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          {errors.email && <div className="text-danger">{errors.email}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="course" className="form-label">Course</label>
          <input
            type="text"
            className="form-control"
            id="course"
            name="course"
            value={formData.course}
            onChange={handleInputChange}
          />
          {errors.course && <div className="text-danger">{errors.course}</div>}
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          disabled={!isFormValid} 
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;