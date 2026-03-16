import React from 'react';
import { useForm } from 'react-hook-form';

const StudentForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    alert(`Form submitted with: ${JSON.stringify(data)}`);
  };

  return (
    <div className="container mt-4">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
      
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            {...register('name', { required: 'Name is required' })}
          />
          {errors.name && <div className="text-danger">{errors.name.message}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            {...register('email', { 
              required: 'Email is required',
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: 'Invalid email format'
              }
            })}
          />
          {errors.email && <div className="text-danger">{errors.email.message}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="course" className="form-label">Course</label>
          <input
            type="text"
            className="form-control"
            id="course"
            {...register('course', { required: 'Course is required' })}
          />
          {errors.course && <div className="text-danger">{errors.course.message}</div>}
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default StudentForm;