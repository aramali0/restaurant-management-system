import React, { useEffect, useState } from 'react';
import './form.module.css';
import { BASE_URL, CATEGORIES } from '../../../constants/index'
import axios from 'axios';

const ReusableForm = ({ article , setUpdateId, setShouldShow}) => {


  const [formData, setFormData] = useState({
    name: article.name,
    prix: article.prix,
    description: article.description,
    categorie: article.categorie,
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...article, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(article._links.self.href, formData)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    console.log(formData);
    setUpdateId(Math.random())
    setFormData({
      name: '',
      prix: 0,
      description: '',
      categorie: CATEGORIES[0],
      restaurant:{},
    })
    setShouldShow(false)
  };

  return (
    <form className="reusable-form" onSubmit={handleSubmit}>
        {/* <img src={formData.src} alt="article Image" />
      <label>
        <input
          type="file"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label> */}
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
          name="prix"
          value={formData.prix}
          onChange={handleChange}
        />
      </label>
      <label>
        Description:
        <input
          type="textaera"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </label>
      <label>
          Categories:
          <select
            name="categorie"
            onChange={handleChange}
          >
           {
            CATEGORIES.map((categorie,index) => (
              <option key={index} value={categorie}>{categorie}</option>
            ))
           }
          </select>
        </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ReusableForm;
