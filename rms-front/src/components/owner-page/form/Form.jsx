import React, { useEffect, useState } from 'react';
import './form.module.css';
import { BASE_URL, CATEGORIES } from '../../../constants/index'
import axios from 'axios';

const ReusableForm = () => {


  const [formData, setFormData] = useState({
    name: '',
    prix: 0,
    description: '',
    categorie: CATEGORIES[0],
    imageUrl:'',
    restaurant:{},
  });

 useEffect(() =>{
  axios.get(`${BASE_URL}restaurants/2`)
      .then(response1 => {
        axios.get(response1.data._links.proprietaires.href)
      .then(response2 => {
        const resturant = {
          idRestaurant: 2,
          nomRestaurant : response1.data.nomRestaurant,
          description :  response1.data.description,
          brandImage : response1.data.brandImage,
          rating : response1.data.rating,
          proprietaires: response2.data._embedded.proprietaireRestus,
        }
        setFormData((prevData) => ({ ...prevData, restaurant: resturant }));
      });
      });
 })

 const handleFileChange = (e) => {
  const file = e.target.files[0];
  if (file) {
    const image = URL.createObjectURL(file);
    setFormData((prevData) => ({ ...prevData, imageUrl: image }));
  }
};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:8080/api/v2/article`, formData)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    console.log(formData);
    setFormData({
      name: '',
      prix: 0,
      description: '',
      categorie: CATEGORIES[0],
      restaurant:{},
    })
  };

  return (
    <form className="reusable-form" onSubmit={handleSubmit}>
        <div className="profile">
        <img
          className="profileImage"
          src={formData.imageUrl}
          width="80"
          alt="restaurant Image"
        />
        <label>
          <input type="file" name="imageUrl" onChange={handleFileChange} />
        </label>
      </div>
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
