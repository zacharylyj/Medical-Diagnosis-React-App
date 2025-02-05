// InputForm.jsx

import { useState } from 'react';
import './css/InputForm.css';

function InputForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${formData.name}\nEmail: ${formData.email}`);
    // Reset form fields
    setFormData({ name: '', email: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="form-group">
        <label htmlFor="name" className="label">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="input"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email" className="label">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="input"
          required
        />
      </div>
      <button type="submit" className="button">
        Submit
      </button>
    </form>
  );
}

export default InputForm;
