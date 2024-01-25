import React, { useState } from 'react';
import './form.module.css';

const ReusableForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    price: 0,
    describtion: '',
    categorie: 'hello',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

  };

  return (
    <form className="reusable-form" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Price:
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
        />
      </label>
      <label>
        Describtion:
        <input
          type="textaera"
          name="describtion"
          value={formData.describtion}
          onChange={handleChange}
        />
      </label>
      <label>
          Categories:
          <select
            name="categorie"
            onChange={handleChange}
          >
            <option value="hello">Hello</option>
            <option value="hi">hi</option>
            <option value="hey">hey</option>
          </select>
        </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ReusableForm;
