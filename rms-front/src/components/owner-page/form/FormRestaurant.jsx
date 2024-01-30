import React, { useEffect, useState } from 'react';
import './form.module.css';
import image from '../../../assets/client-assets/restautant-images/rest-brand.jpg';
import axios from 'axios';

const ReusableForm = ({ restaurant }) => {

  const [formData, setFormData] = useState({
    nomRestaurant: '',
    description: '',
    brandImage:  image,
    rating:  0,
  });
  
  useEffect(() =>{
    setFormData({
        nomRestaurant: restaurant?.nomRestaurant || '' ,
        description: restaurant?.description || '',
        brandImage: restaurant?.brandImage || '',
        rating: restaurant?.rating || '',
    })
  },[restaurant])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const brandImageUrl = URL.createObjectURL(file);
      setFormData((prevData) => ({ ...prevData, brandImage: brandImageUrl }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(restaurant._links.self.href, formData)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <form className="reusable-form" onSubmit={handleSubmit}>
      <div className="profile">
        <img
          className="profileImage"
          src={formData.brandImage}
          width="80"
          alt="restaurant Image"
        />
        <label>
          <input type="file" name="brandImage" onChange={handleFileChange} />
        </label>
      </div>
      <label>
        Name:
        <input
          type="text"
          name="nomRestaurant"
          value={formData.nomRestaurant}
          onChange={handleChange}
        />
      </label>
      <label>
        Description:
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ReusableForm;
