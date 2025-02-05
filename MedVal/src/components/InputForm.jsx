import { useState } from 'react';

function UserForm() {
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
    <form onSubmit={handleSubmit} style={formStyles.form}>
      <div style={formStyles.formGroup}>
        <label htmlFor="name" style={formStyles.label}>
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          style={formStyles.input}
          required
        />
      </div>
      <div style={formStyles.formGroup}>
        <label htmlFor="email" style={formStyles.label}>
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={formStyles.input}
          required
        />
      </div>
      <button type="submit" style={formStyles.button}>
        Submit
      </button>
    </form>
  );
}

const formStyles = {
  form: {
    maxWidth: '400px',
    margin: '2rem auto',
    padding: '1rem',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  formGroup: {
    marginBottom: '1rem',
  },
  label: {
    display: 'block',
    marginBottom: '.5rem',
  },
  input: {
    width: '100%',
    padding: '.5rem',
    fontSize: '1rem',
  },
  button: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '.5rem 1rem',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default UserForm;
